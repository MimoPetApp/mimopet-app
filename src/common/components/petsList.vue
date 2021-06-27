<template>
  <q-card
    class="home-card q-animate--scale q-mt-xl"
    style="background: #7166f1"
  >
    <q-card-section class="q-pa-xl">
      <h3
        class="mimo-text mimo-text__h3 mimo-text--white"
        style="line-height: 2rem"
      >
        Acompanhe o mural de atividades do pet
      </h3>
      <q-avatar size="60px">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <q-btn
        class="home-card__button no-shadow q-ml-md"
        :to="`/pet/${pet.id}`"
        no-caps
        flat
      >
        <span class="mimo-text mimo-text--white">{{ pet.name }}</span>
      </q-btn>
    </q-card-section>
    <q-card
      class="home-card q-animate--scale q-pa-lg"
      style="background: #ffffff"
    >
      <HomeItem label="Treinamentos" color="#f2a16a" :notification="2" />
      <HomeItem label="Saúde" color="#9ce2e4" />
      <HomeItem label="Acasalamento" color="#ecbefe" />
      <HomeItem label="Serviços" color="#eddc50" />
    </q-card>
  </q-card>
</template>

<script>
import HomeItem from "./homeItem";
export default {
  name: "PetsList",
  components: {
    HomeItem,
  },
  props: {
    pet: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
$text-main-button-size: 1.16rem;

.home-card {
  border-radius: 35px 35px 0 0 !important;
  width: 100%;
}

.home-card__button {
  background: #948bf4;
  border-radius: 12px 12px 12px 0;
  padding: 5px 15px;
}
</style>
