<template>
  <div class="q-animate--scale">
    <div class="row justify-center">
      <q-avatar size="100px" class="q-mt-md">
        <img :src="parseProfileThumbnail(data.image[0])" />
      </q-avatar>
    </div>
    <div class="col-12">
      <h2 class="pet-profile-text">{{ data.name }}</h2>
    </div>
    <div class="col-12">
      <p class="pet-profile-text">{{ parseBreed(data.breed) }}, {{ getAge(data.age) }}</p>
    </div>
    <div class="row justify-center q-my-lg">
      <span class="pet-profile-text pet-profile-badge">
        {{ parseGender(data.gender) }}
      </span>
    </div>
    <q-card class="pet-profile-card q-pt-xl">
      <q-card-section class="column justify-center">
        <h3 class="pet-profile-card-title">
          {{ $t('petProfile.extra.journey') }}
        </h3>
        <h4 class="pet-profile-card-subtitle">
          {{ $t('petProfile.extra.since') }} {{ 2009 }} &#128525;
        </h4>
      </q-card-section>
      <q-card-section class="row justify-center items-center pet-profile-card-header q-py-lg">
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
      <q-card-section>
        <q-timeline color="grey" layout="dense" class="pet-profile-timeline">
          <q-timeline-entry subtitle="Cadastrado em 09 de Fevereiro de 2020" color="grey">
          </q-timeline-entry>
          <q-timeline-entry>
            <div class="pet-profile-timeline-entry bg-color-pink">
              <span>Aplicou Vacina</span>
              <span>12 FEV 2020</span>
              <p>Aplicou Vacina V7</p>
            </div>
          </q-timeline-entry>
          <q-timeline-entry>
            <div class="pet-profile-timeline-entry bg-color-yellow">
              <span>Aplicou Vacina</span>
              <span>12 FEV 2020</span>
              <p>Aplicou Vacina V7</p>
            </div>
          </q-timeline-entry>
          <q-timeline-entry subtitle="Cadastrado em 09 de Fevereiro de 2020" color="grey">
          </q-timeline-entry>
          <q-timeline-entry>
            <div class="pet-profile-timeline-entry bg-color-ice">
              <span>Aplicou Vacina</span>
              <span>12 FEV 2020</span>
              <p>Aplicou Vacina V7</p>
            </div>
          </q-timeline-entry>
          <q-timeline-entry>
            <div class="pet-profile-timeline-entry bg-color-orange">
              <span>Aplicou Vacina</span>
              <span>12 FEV 2020</span>
              <p>Aplicou Vacina V7</p>
            </div>
          </q-timeline-entry>
          <q-timeline-entry subtitle="Cadastrado em 09 de Fevereiro de 2020" color="grey">
          </q-timeline-entry>
          <q-timeline-entry subtitle="Nasceu em 1 de Dezembro de 2001" color="secondary">
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="col-12 q-my-lg column justify-center items-center">
          <TextButton
            :label="$t('petProfile.button.delete')"
            icon="delete_outline"
            :click="deletePet"
          />
          <ConfirmDeletePet />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import TextButton from './textButton'
import ConfirmDeletePet from './confirmDeletePet'
import { mapActions } from 'vuex'

export default {
  name: 'PetProfile',
  components: {
    TextButton,
    ConfirmDeletePet
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions('pets', ['ActionmodalDeletePet']),
    deletePet() {
      this.ActionmodalDeletePet({
        modal: true,
        data: {
          id: this.$route.params.id,
          name: this.data.name
        }
      })
    },
    parseBreed(breed) {
      return breed === 'unknown' ? this.$t('petProfile.extra.unknownBreed') : breed
    },
    parseProfilePet(profile) {
      switch (profile) {
        case 'feline':
          return this.$t('petProfile.profile.feline')
        case 'canine':
          return this.$t('petProfile.profile.canine')
        default:
          return ''
      }
    },
    parseDetails(details) {
      switch (details) {
        case 'adopted':
          return this.$t('petProfile.details.adopted')
        case 'castrated':
          return this.$t('petProfile.details.castrated')
        case 'withSomeDisability':
          return this.$t('petProfile.details.withSomeDisability')
        default:
          return ''
      }
    },
    parseGender(gender) {
      switch (gender) {
        case 'male':
          return this.$t('petProfile.gender.male')
        case 'female':
          return this.$t('petProfile.gender.female')
        default:
          return ''
      }
    },
    parseProfileThumbnail(image) {
      return `${process.env.API.slice(0, -1)}${image.formats.thumbnail.url}`
    },
    getAge(age) {
      switch (age) {
        case 'SENIOR':
          return 'Adulto'
        default:
          return 'Filhote'
      }
    }
  }
}
</script>

<style>
.pet-profile-text {
  font-family: 'customfont';
  font-weight: 500;
  font-size: calc(20px + (32 - 20) * (100vw - 500px) / (800-500));
  color: var(--colorWhite);
  text-align: center;
  margin: 0;
}

h2.pet-profile-text {
  font-family: 'customfont700';
  font-weight: 600;
  font-size: calc(34px + (36 - 34) * (100vw - 500px) / (800-500));
  letter-spacing: 2px;
}

.pet-profile-badge {
  background: #948bf4;
  padding: 5px 15px;
  border-radius: 25px;
  margin: 0 5px 10px 5px;
}

.pet-profile-card {
  position: absolute;
  border-radius: 35px;
  width: 100%;
  left: 0;
}

.pet-profile-card-title {
  font-family: 'customfont700';
  font-weight: 500;
  color: var(--colorLight);
  margin: 0 auto;
  font-size: clamp(1.3rem, 2.6vh, 1.45rem);
  line-height: 1rem;
  letter-spacing: 0.00735em;
}

.pet-profile-card-subtitle {
  font-family: 'customfont600';
  font-weight: 500;
  color: var(--colorLight);
  margin: 0 auto;
  font-size: clamp(1rem, 1.7vh, 1.15rem);
  line-height: 2.5rem;
  letter-spacing: 0.00735em;
}

.pet-profile-card-header {
  background: #f9f9f9;
  width: 85%;
  margin: 0 auto;
  border-radius: 15px !important;
}

.pet-profile-card-header div span:first-child {
  font-family: 'customfont700';
  font-weight: 500;
  color: var(--colorPrimary);
  margin: 0 auto 0.7rem auto;
  font-size: clamp(1.25rem, 2.7vh, 1.55rem);
  line-height: 1.2rem;
  letter-spacing: 0.00735em;
}

.pet-profile-card-header div span:last-child {
  font-family: 'customfont600';
  font-weight: 500;
  color: var(--colorPrimary);
  margin: 0 auto 0 auto;
  font-size: clamp(0.8rem, 1.8vh, 1rem);
  line-height: 1.2rem;
  letter-spacing: 0.00735em;
}

.pet-profile-timeline {
  width: 85%;
  margin: 0 auto;
}

.pet-profile-timeline-entry {
  padding: 1.2rem 1rem;
  border-radius: 0 20px 20px 20px !important;
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
  background: #f3a978;
}

.q-timeline__subtitle {
  opacity: 1;
}

.q-timeline__subtitle span {
  font-family: 'customfont600';
  font-weight: 500;
  color: var(--colorPrimary) !important;
  margin: 0 auto 0 auto;
  font-size: clamp(0.8rem, 1.8vh, 1rem);
  line-height: 1.2rem;
  letter-spacing: 0.00735em;
  text-transform: initial;
}
</style>
