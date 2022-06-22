<template>
  <div class="pet-profile">
    <div class="row justify-center">
      <q-avatar size="100px" class="mt-2">
        <img :src="parseProfileThumbnail(data.image[0])" />
      </q-avatar>
    </div>
    <div class="col-12">
      <h2 class="pet-profile__text">{{ data.name }}</h2>
    </div>
    <div class="col-12">
      <p class="pet-profile__text mt-1">{{ parseBreed(data.breed) }}, {{ getAge(data.age) }}</p>
    </div>
    <div class="row justify-center mt-1 mb-3">
      <span
        v-for="(detail, index) in petDetails"
        :key="index"
        class="pet-profile__text pet-profile__badge"
      >
        {{ detail }}
      </span>
    </div>
    <q-card class="pet-profile__card pt-4">
      <q-card-section class="column justify-center mb-3">
        <h3 class="pet-profile__card-title">
          {{ $t('petProfile.extra.journey') }}
        </h3>
        <h4 class="pet-profile__card-subtitle">
          {{ $t('petProfile.extra.since') }}
          {{ $filters.getDateYear(petTimeline.created_at) }} &#128525;
        </h4>
      </q-card-section>
      <!--
      <q-card-section class="row justify-center items-center pet-profile__card-header q-py-lg">
        <div class="column justify-center items-center">
          <span>{{ 2 }}</span>
          <span>{{ $t('petProfile.header.vaccines') }}</span>
        </div>
        <div class="column justify-center items-center q-mx-lg">
          <span>{{ 21 }}</span>
          <span>{{ $t('petProfile.header.trainings') }}</span>
        </div>
        <div class="column justify-center items-center">
          <span>{{ 350 }}</span>
          <span>{{ $t('petProfile.header.tours') }}</span>
        </div>
      </q-card-section>
      -->
      <q-card-section>
        <q-timeline color="utilities-border" layout="dense" class="pet-profile__timeline">
          <q-timeline-entry
            v-for="(item, index) in petTimeline.items"
            :key="index"
            color="utilities-border"
          >
            <div class="pet-profile__timeline-entry" :class="setBgColor(item)">
              <p>{{ $filters.formattedDate(item.data) }}</p>
              <p>{{ showEntryLabel(item) }}</p>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="col-12 mt-3 mb-3 column justify-center items-center">
          <Button
            color="danger-bordless"
            class="no-shadow text-weight-bold"
            size="md"
            icon="delete_outline"
            no-caps
            :label="$t('petProfile.button.delete')"
            @click="showDeletePetModal()"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import parser from '../helpers/PetProfileParser'
import Button from './Button/Button'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'PetProfileComponent',
  components: {
    Button
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      petDetails: [],
      petID: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters('pets', { petTimeline: 'getPetTimeline' })
  },
  async created() {
    this.getPetDetails()
    await this.ActionGetPetTimeline(this.petID)
  },
  methods: {
    ...parser,
    ...mapActions('pets', ['ActionDeletePetModal', 'ActionGetPetTimeline']),
    ...mapMutations('pets', { SET_DELETEPETMODAL: 'PETS/SET_DELETEPETMODAL' }),
    getPetDetails() {
      const aux = []
      if (this.data) {
        if (this.data.is_adopted) {
          aux.push(this.parseDetails('adopted'))
        }
        if (this.data.is_deficiency) {
          aux.push(this.parseDetails('deficiency'))
        }
        if (this.data.is_neutered) {
          aux.push(this.parseDetails('neutered'))
        }
        if (this.data.is_service) {
          aux.push(this.parseDetails('service'))
        }
        if (this.data.is_none) {
          aux.push(this.parseDetails('none'))
        }
        this.petDetails = aux
      }
    },
    showDeletePetModal() {
      const modal = {
        model: true,
        data: {
          title: 'Deseja excluir o pet?',
          message: 'Você não terá mais informações deste animal vinculadas a sua conta',
          btnLabel: 'Continuar',
          backLabel: 'Voltar'
        }
      }
      this.SET_DELETEPETMODAL(modal)
    },
    isBgOrange(item) {
      if (item.type === 'training' && item.details === 'subscribe') return true
      else return false
    },
    isBgTransparent(item) {
      // pet registered and training removed
      if ((item.type === 'training' && item.details === 'unsubscribe') || item.type === 'other') {
        return true
      } else return false
    },
    isBgCyan(item) {
      if (item.type === 'module' && item.status === 'done') return true
      else return false
    },
    isBgGrey(item) {
      return item.type === 'obedience'
    },
    setBgColor(item) {
      let classColor
      if (this.isBgGrey(item)) {
        classColor = 'bg-color-grey'
      } else if (this.isBgOrange(item)) {
        classColor = 'bg-color-orange'
      } else if (this.isBgTransparent(item)) {
        classColor = ''
      } else if (this.isBgCyan(item)) {
        classColor = 'bg-color-cyan'
      }
      return classColor
    },
    isSubscribed(entry) {
      return entry.details === 'subscribe' || false
    },
    isDoing(entry) {
      return entry.status === 'doing' || false
    },
    isUnsubscribe(entry) {
      return entry.details === 'unsubscribe' || false
    },
    isBadge(entry) {
      return entry.details === 'badge' || false
    },
    showEntryLabel(entry) {
      let label
      if (this.isBadge(entry)) {
        label = `Medalha conquistada no comando de obediência: ${entry.label}`
      } else if (this.isSubscribed(entry)) {
        label = this.isDoing(entry) ? `Inscrito: ${entry.label}` : `Finalizado: ${entry.label}`
      } else {
        label = this.isUnsubscribe(entry) ? `Removido: ${entry.label}` : entry.label
      }
      return label
    }
  }
}
</script>

<style lang="scss" scoped>
.pet-profile {
  &__text {
    font-family: 'customfont';
    font-weight: 500;
    font-size: var(--font-size-3);
    line-height: calc(var(--font-size-3) + 3);
    color: var(--main-background);
    text-align: center;
    margin: 0;
  }

  &__badge {
    background: rgba(255, 255, 255, 0.25);
    padding: 5px 15px;
    border-radius: 25px;
    margin: 0 5px 10px 5px;
  }

  &__card {
    position: absolute;
    border-radius: var(--font-size-8);
    width: 100%;
    left: 0;
  }

  &__card-title {
    font-family: 'customfont700';
    font-weight: 500;
    color: var(--utilities-alternate);
    margin: 0 auto;
    font-size: var(--font-size-6);
    line-height: var(--font-size-6) + 5;
    letter-spacing: 0.00735em;
  }

  &__card-subtitle {
    font-family: 'customfont600';
    font-weight: 500;
    color: var(--utilities-alternate);
    margin: 0 auto;
    font-size: var(--font-size-3);
    line-height: var(--font-size-3) + 5;
    letter-spacing: 0.00735em;
  }

  &__card-header {
    background: var(--utilities-clean);
    width: 85%;
    margin: 0 auto;
    border-radius: 15px !important;
  }
}

h2.pet-profile__text {
  font-family: 'customfont700';
  font-weight: 600;
  font-size: var(--font-size-7);
  line-height: calc(var(--font-size-7) + 3px);
  letter-spacing: 2px;
}

.pet-profile__timeline {
  width: 85%;
  margin: 0 auto;
}

.pet-profile__timeline-entry {
  padding: 1.2rem 1rem;
  border-radius: 0 var(--font-size-3) var(--font-size-3) var(--font-size-3) !important;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.pet-profile__timeline-entry p {
  padding: 0;
  margin: 0;
}

.pet-profile__timeline-entry p:first-child {
  max-width: 40%;
  font-size: var(--font-size-1);
}

.pet-profile__timeline-entry p:last-child {
  font-size: var(--font-size-2);
  line-height: calc(var(--font-size-2) + 3px);
  max-width: 60%;
  font-weight: 800;
}

.bg-color-pink {
  background: #ecbefe;
}

.bg-color-yellow {
  background: #fbd570;
}

.bg-color-ice {
  background: #e8edf1;
}

.bg-color-orange {
  background: var(--main-secondary);
}

.bg-color-cyan {
  background: var(--support-ciano);
}

.bg-color-grey {
  background: var(--utilities-border);
}

.q-timeline {
  &__subtitle {
    opacity: 1;
  }

  &__subtitle span {
    font-family: 'customfont600';
    font-weight: 600;
    color: var(--main-alternate) !important;
    margin: 0 auto 0 auto;
    font-size: var(--font-size-2);
    line-height: var(--font-size-2) + 5;
    letter-spacing: 0.00735em;
    text-transform: initial;
  }

  &__content {
    padding-bottom: var(--spacing-2);
  }
}
</style>
