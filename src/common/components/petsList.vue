<template>
  <q-card class="home-card q-animate--scale q-mt-xl" style="background: #7166f1">
    <q-card-section class="q-pa-xl">
      <h3 class="home-card__text mb-2">Acompanhe o mural de atividades do pet</h3>
      <router-link :to="`/pet/${pet.id}`" class="router-link-style">
        <q-avatar size="60px">
          <img :src="parseProfileThumbnail(pet.image[0])" />
        </q-avatar>
        <q-btn class="home-card__button no-shadow q-ml-md" no-caps flat>
          <span class="home-card__text home-card__text--pet-name">{{ pet.name }}</span>
        </q-btn>
      </router-link>
    </q-card-section>
    <q-card class="home-card q-animate--scale q-pa-lg" style="background: #ffffff">
      <HomeCard
        label="Jornadas de treino"
        description="Descubra e se inscreva em novos programas de treino"
        color="#FF8E4A"
        colorAlt="#f66917"
        to="/comportamentos"
      />

      <q-card
        class="p-3 mt-1 mb-2"
        :style="{ background: '#4ad5da', borderRadius: '25px !important' }"
        @click="$router.push('/treinamentos')"
      >
        <div class="row justify-between items-center">
          <div style="max-width: 45%">
            <h4 class="text-weight-bold m-0 p-0">Meus treinamentos</h4>
            <p class="text-weight-medium m-0 p-0">Programas de socialização</p>
          </div>
          <q-btn
            rounded
            flat
            no-caps
            text-color="main-background"
            style="background: rgba(255, 255, 255, 0.2)"
            to="/treinamentos"
          >
            Detalhar
          </q-btn>
        </div>
      </q-card>
    </q-card>
  </q-card>
</template>

<script>
import parser from './../helpers/PetProfileParser'
import HomeCard from './HomeCard/HomeCard'
export default {
  name: 'PetsList',
  components: {
    HomeCard
  },
  props: {
    pet: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...parser
  }
}
</script>

<style lang="scss" scoped>
$text-main-button-size: 1.16rem;

.home-card {
  border-radius: 35px 35px 0 0 !important;
  width: 100%;

  &__button {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 12px 12px 12px 0;
    padding: 5px 15px;
  }

  &__text {
    color: var(--main-background);
    font-family: 'customfont700';
    font-size: var(--font-size-6);
    line-height: 29px;
    font-weight: 500;
    letter-spacing: 0.5px;

    &--pet-name {
      font-size: var(--font-size-5);
    }
  }
}
</style>
