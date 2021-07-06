<template>
  <div class="q-animate--scale">
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
      <span class="pet-profile__text pet-profile__badge">
        {{ parseGender(data.gender) }}
      </span>
    </div>
    <q-card class="pet-profile__card pt-4">
      <q-card-section class="column justify-center mb-3">
        <h3 class="pet-profile__card-title">
          {{ $t('petProfile.extra.journey') }}
        </h3>
        <h4 class="pet-profile__card-subtitle">
          {{ $t('petProfile.extra.since') }} {{ 2009 }} &#128525;
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
          <q-timeline-entry subtitle="Teste de comportamento" color="utilities-border">
          </q-timeline-entry>
          <q-timeline-entry color="utilities-border">
            <div class="pet-profile__timeline-entry bg-color-pink">
              <p>Recebendo parentes e amigos em casa</p>
              <p>15 Fev 2020</p>
            </div>
          </q-timeline-entry>
          <q-timeline-entry color="utilities-border">
            <div class="pet-profile__timeline-entry bg-color-yellow">
              <p>Recebendo parentes e amigos em casa</p>
              <p>14 Fev 2020</p>
            </div>
          </q-timeline-entry>
          <q-timeline-entry subtitle="Teste de comportamento" color="utilities-border">
          </q-timeline-entry>
          <q-timeline-entry color="utilities-border">
            <div class="pet-profile__timeline-entry bg-color-ice">
              <p>Recebendo parentes e amigos em casa</p>
              <p>13 Fev 2020</p>
            </div>
          </q-timeline-entry>
          <q-timeline-entry color="utilities-border">
            <div class="pet-profile__timeline-entry bg-color-orange">
              <p>Recebendo parentes e amigos em casa</p>
              <p>12 Fev 2020</p>
            </div>
          </q-timeline-entry>
          <q-timeline-entry subtitle="Teste de comportamento" color="utilities-border">
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="col-12 mt-3 mb-3 column justify-center items-center">
          <Button
            flat
            color="red-7"
            class="text-weight-bold"
            size="md"
            icon="delete_outline"
            no-caps
            :label="$t('petProfile.button.delete')"
            @click="deletePet"
          />
          <ConfirmDeletePet />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import ConfirmDeletePet from './confirmDeletePet'
import parser from './../helpers/petProfileParser'
import Button from './Button'
import { mapActions } from 'vuex'

export default {
  name: 'PetProfile',
  components: {
    Button,
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
    ...parser,
    ...mapActions('pets', ['ActionmodalDeletePet']),
    deletePet() {
      this.ActionmodalDeletePet({
        modal: true,
        data: {
          id: this.$route.params.id,
          name: this.data.name
        }
      })
    }
  }
}
</script>

<style lang="scss">
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
}

.pet-profile__timeline-entry p {
  padding: 0;
  margin: 0;
}

.pet-profile__timeline-entry p:first-child {
  font-size: var(--font-size-2);
  line-height: calc(var(--font-size-2) + 3px);
  max-width: 60%;
  font-weight: 800;
}

.pet-profile__timeline-entry p:last-child {
  max-width: 40%;
  font-size: var(--font-size-1);
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
