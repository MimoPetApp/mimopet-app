<template>
  <q-card
    class="module-card-wrapper p-2 pt-2 mt-1 mb-2"
    :style="`background: ${backgroundColor}; border-color: ${backgroundColor}`"
  >
    <div v-if="locked" class="module-card-wrapper__lock bg-main-background">
      <img :src="getLockIcon" />
    </div>
    <div class="row module-card-wrapper__content">
      <div class="col-12 col-md-12 col-xs-12">
        <div class="module-card-wrapper__header flex flex-center">
          <img :src="getModuleIcon" />
        </div>
      </div>
      <div class="col-12 col-md-12 col-xs-12">
        <div class="module-card-wrapper__footer">
          <h4 class="module-card-wrapper__footer__title p-0 m-0 text-main-background">
            Equipamento de passeio
          </h4>
          <p class="module-card-wrapper__footer__description p-0 m-0 mb-2 text-main-background">
            Aprender quais os tipos de guia e coleira são mais adequados ao seu pet
          </p>
          <span class="module-card-wrapper__footer__badge text-main-background">
            3 sessões
          </span>
        </div>
      </div>
    </div>
    <div class="module-card-wrapper__shadow">
      <img :src="getModuleShadowIcon" style="width: 100%;" />
    </div>
  </q-card>
</template>

<script>
const lockIcon = require('../../../assets/images/lock.svg')
const moduleShadowIcon = require('../../../assets/images/module-shadow.svg')
const moduleIcon = require('../../../assets/images/happy.svg')

export default {
  name: 'ModuleCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String
    },
    sessions: {
      type: String,
      default: ''
    },
    locked: { type: Boolean, default: true },
    backgroundColor: {
      type: String,
      default: '#67D0E8'
    }
  },
  data () {
    return {}
  },
  computed: {
    getLockIcon () {
      return lockIcon
    },
    getModuleShadowIcon () {
      return moduleShadowIcon
    },
    getModuleIcon () {
      return moduleIcon
    }
  }
}
</script>

<style lang="scss" scoped>
.module-card-wrapper {
  border-radius: 22px;
  border-style: solid;
  border-width: 1px;
  min-width: 318px;
  min-height: 324px;
  position: relative;
  display: flex;
  &__lock {
    border-radius: 12px !important;
    width: 36px;
    height: 36px;
    position: absolute;
    right: 7.28%;
    top: 7.92%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__shadow {
    position: absolute;
    left: 0%;
    bottom: -3%;
    width: 100%;
  }
  &__content {
    align-content: space-between;
    padding-bottom: 10px;
  }
  &__footer {
    &__title {
      font-family: 'customfont700';
      font-style: normal;
      font-weight: bold;
      font-size: var(--font-size-5);
      line-height: 22px;
      letter-spacing: -0.014em;
    }
    &__description {
      font-family: 'customfont620';
      font-style: normal;
      font-weight: 500;
      font-size: var(--font-size-3);
      line-height: 17px;
      letter-spacing: -0.018em;
    }
    &__badge {
      font-family: 'customfont620';
      background: rgba(42, 29, 70, 0.75);
      width: 130px;
      height: 24px;
      border-radius: 100px;
      padding: 5px 15px;
      font-style: normal;
      font-weight: 500;
      font-size: var(--font-size-2);
      line-height: 15px;
      text-align: center;
    }
  }
}
</style>
