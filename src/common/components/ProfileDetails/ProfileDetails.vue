<template>
  <div class="profile-details-wrapper">
    <div class="profile-details-wrapper__header">
      <div class="row">
        <div class="col-12 col-md-12 col-xs-12">
          <h2 class="text-main-alternate">Informações do pet</h2>
        </div>
        <div
          class="col-12 col-md-12 col-xs-12 flex flex-center"
          :class="{ 'profile-details-wrapper__header__avatar': avatar }"
        >
          <div>
            <div class="flex flex-center">
              <q-avatar size="84px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
                <!--<img :src="parseProfileThumbnail(pet.image[0])" />-->
              </q-avatar>
            </div>
            <div class="mt-2">
              <Button
                label="Remover imagem"
                noCaps
                color="utilities-disabled"
                class="pl-2 pr-2 profile-details-wrapper__header__btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-details-wrapper__content mt-5">
      <div class="row">
        <div class="col-12 col-md-12 col-xs-12 profile-details-wrapper__content__subtitle">
          <h3 class="text-utilities-alternate">
            Perfil do animal
          </h3>
          <!--<slot name="content"></slot>-->
        </div>
        <div
          class="col-12 col-md-12 col-xs-12 mt-3 profile-details-wrapper__content__info profile-details-wrapper__content__info__divider"
        >
          <div class="row">
            <div class="col-10 col-md-10 col-xs-10">
              <p class="text-main-alternate">
                Sebastian
              </p>
              <h4 class="text-utilities-alternate">
                Nome do pet
              </h4>
            </div>
            <div class="col-2 col-md-2 col-xs-2 profile-details-wrapper__content__btn">
              <p class="text-utilities-alternate">
                Editar
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-md-12 col-xs-12 mt-3 profile-details-wrapper__content__info profile-details-wrapper__content__info__divider"
        >
          <div class="row">
            <div class="col-10 col-md-10 col-xs-10">
              <p class="text-main-alternate">
                Castrado
              </p>
              <h4 class="text-utilities-alternate">
                Detalhes
              </h4>
            </div>
            <div class="col-2 col-md-2 col-xs-2 profile-details-wrapper__content__btn">
              <p class="text-utilities-alternate">
                Editar
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-md-12 col-xs-12 mt-3 profile-details-wrapper__content__info profile-details-wrapper__content__info__divider"
        >
          <div class="row">
            <div class="col-10 col-md-10 col-xs-10">
              <p class="text-main-alternate">
                Adulto
              </p>
              <h4 class="text-utilities-alternate">
                Idade
              </h4>
            </div>
            <div class="col-2 col-md-2 col-xs-2 profile-details-wrapper__content__btn">
              <p class="text-utilities-alternate">
                Editar
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-md-12 col-xs-12 mt-3 profile-details-wrapper__content__info profile-details-wrapper__content__info__divider"
        >
          <div class="row">
            <div class="col-10 col-md-10 col-xs-10">
              <p class="text-main-alternate">
                Yorkshire
              </p>
              <h4 class="text-utilities-alternate">
                Raça
              </h4>
            </div>
            <div class="col-2 col-md-2 col-xs-2 profile-details-wrapper__content__btn">
              <p class="text-utilities-alternate">
                Editar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-details-wrapper__footer">
      <div class="row">
        <div class="col-12 col-md-12 col-xs-12 flex items-center justify-center">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import parser from './../../helpers/PetProfileParser'
import Button from '../../../common/components/Button/Button.vue'
export default {
  name: 'ProfileDetails',
  components: {
    Button
  },
  data () {
    return {
      avatar: true,
      data: [
        {
          label: 'Nome do pet',
          value: 'Sebastian'
        },
        { label: 'Detalhes', value: 'Castrado' },
        { label: 'Idade', value: 'Adulto' },
        { label: 'Raça', value: 'Yorkshire' }
      ]
    }
  },
  props: {
    color: {
      type: String,
      default: 'main-primary',
      validate: val => ['main-primary'].indexOf(val) !== -1
    },
    type: {
      type: String,
      default: 'squared',
      validate: val => ['rounded', 'squared'].indexOf(val) !== -1
    },
    title: {
      type: String,
      default: 'Insert your title'
    },
    subtitle: {
      type: String,
      default: 'Insert your subTitle'
    }
  },
  computed: {},
  methods: { ...parser }
}
</script>

<style lang="scss" scoped>
.profile-details-wrapper {
  min-height: calc(100vh - 115px);
  justify-content: space-between;
  align-content: space-between;
  flex-direction: column;
  display: flex;
  &__header {
    padding-right: var(--font-size-7);
    padding-left: var(--font-size-7);

    &__avatar {
      margin-top: var(--font-size-7);
    }
    &__btn {
      width: 168px;
      color: var(--main-primary) !important;
    }
    h2 {
      font-size: var(--font-size-7);
      line-height: 29.05px;
      letter-spacing: -0.224px;

      margin-bottom: var(--font-size-2);
    }
    p {
      font-family: 'customfont';
      font-weight: 500;
      font-size: var(--font-size-4);
      line-height: 19.36px;
      letter-spacing: -0.224px;
      padding-right: var(--font-size-10);
      padding-left: var(--font-size-8);
    }
  }
  &__content {
    min-height: calc(100vh - 295px);
    &__subtitle {
      padding-right: var(--font-size-7);
      padding-left: var(--font-size-7);

      h3 {
        font-family: 'customfont650';
        font-style: normal;
        font-weight: 600;
        font-size: var(--font-size-2);
        line-height: 15px;
        letter-spacing: -0.014em;
      }
    }
    &__btn {
      p {
        font-family: 'customfont650';
        font-style: normal;
        font-weight: 600;
        font-size: var(--font-size-4);
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.014em;
      }
    }
    &__info {
      height: 67px;
      padding-right: var(--font-size-7);
      padding-left: var(--font-size-7);
      &__divider:not(:last-child) {
        border-width: 1px;
        border-bottom-style: solid;
        border-color: var(--utilities-border);
      }
      p {
        font-family: 'customfont650';
        font-style: normal;
        font-weight: 600;
        font-size: var(--font-size-4);
        line-height: 19px;
        letter-spacing: -0.014em;
        margin: 0;
      }
      h4 {
        margin-bottom: 0;
        margin-top: 3px;
        font-family: 'customfont620';
        font-style: normal;
        font-weight: 500;
        font-size: var(--font-size-3);
        line-height: 17px;
        letter-spacing: -0.018em;
      }
    }
  }
}
</style>
