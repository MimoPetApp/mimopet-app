<template>
  <q-layout view="lHh Lpr lFf">
    <div class="main-container">
      <!-- Top header -->
      <q-header v-if="hasHeader" reveal class="bg-main-alternate main-container__header">
        <q-toolbar :class="setToolbarClass" style="width: 100%">
          <q-btn
            flat
            round
            dense
            icon="arrow_back"
            @click="back()"
            text-color="main-background"
            class="main-container__back-btn"
            v-if="hasInnerHeader"
          />
          <q-toolbar-title v-if="hasInnerHeader" class="toolbar__title">
            {{ innerHeader.title }}</q-toolbar-title
          >
          <q-img v-else src="~assets/images/mimoicon-white.svg" style="width: 80px" />
          <router-link :to="{ name: 'Notifications' }" class="router-link-style" v-if="false">
            <q-btn class="main-container__badge" outline color="white q-mr-md">
              <q-icon name="notifications" class="cursor-pointer"></q-icon>
            </q-btn>
          </router-link>
          <q-btn
            v-if="!hasInnerHeader"
            class="main-container__badge"
            outline
            color="white"
            no-caps
            @click="showPetList"
          >
            <q-badge color="main-highlight" text-color="main-background" rounded>
              {{ petsList.length }}
            </q-badge>
            <span class="ml-1"> Pets </span>
          </q-btn>
          <q-btn
            v-if="false"
            color="white"
            no-caps
            @click="showModal()"
            icon="add_comment"
            class="toolbar__modal"
            unelevated
          >
          </q-btn>
        </q-toolbar>
      </q-header>
      <!-- Main container -->
      <!-- <q-page-container>
        <q-tab-panels v-model="tab" animated class="panels">
          <q-tab-panel name="home" class="panels__panel">
            <router-view :key="$route.path" />
          </q-tab-panel>

          <q-tab-panel name="obedience" class="panels__panel">
            <router-view :key="$route.path" />
          </q-tab-panel>

          <q-tab-panel name="userProfile" class="panels__panel">
            <router-view :key="$route.path" />
          </q-tab-panel>
        </q-tab-panels>
      </q-page-container> -->
      <q-page-container>
        <router-view :key="$route.path" />
      </q-page-container>
      <SelectPetModal />
      <q-footer v-if="hasFooter" class="bg-white flex flex-center">
        <q-tabs v-model="tab" class="text-blue-grey-2" active-color="main-alternate">
          <q-route-tab name="home" icon="dashboard" :to="'/'" />
          <q-route-tab name="obedience" icon="group_work" :to="{ name: 'ObedienceList' }" />
          <q-route-tab name="userProfile" icon="drag_handle" :to="'/meu-perfil'" />
        </q-tabs>
      </q-footer>
    </div>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SelectPetModal from '../common/components/Modal/SelectPetModal/SelectPetModal'

export default {
  name: 'MainLayout',
  components: {
    SelectPetModal
  },
  data() {
    return {
      tab: ''
    }
  },
  computed: {
    ...mapState('pets', ['petsList', 'hasHeader', 'hasFooter', 'innerHeader']),
    hasInnerHeader() {
      return this.innerHeader.status
    },
    setToolbarClass() {
      let classes = 'main-container__toolbar'
      if (this.hasInnerHeader) {
        classes += ' main-container__innerHeader'
      } else {
        classes += ' justify-between'
      }
      return classes
    }
  },
  async mounted() {
    // await this.ActionGetUser()
  },
  methods: {
    ...mapActions('auth', ['ActionGetUser']),
    ...mapActions('pets', ['ActionPetModalList']),
    showPetList() {
      this.ActionPetModalList({ modal: true, data: {} })
    },
    isFirstLevelPath() {
      const path = this.$route.path
      return path.length - path.replaceAll('/', '').length === 1
    },
    back() {
      this.isFirstLevelPath() ? this.$router.push('/') : this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  background: var(--main-alternate);
  min-height: 100vh;
  &__header {
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__toolbar {
    padding-left: 30px;
    padding-right: 20px;
    display: flex;
    align-items: center;
  }
  &__innerHeader {
    padding-left: 22px;
    padding-right: 20px;
  }
  &__back-btn {
    width: 40px;
    height: 40px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 22px;
    ::v-deep i {
      width: 16px;
      height: 15.58px;
    }
  }
}

.main-container__badge {
  border-radius: 15px;
}

.panels {
  background: transparent;
  &__panel {
    padding: 0;
  }
}

.toolbar {
  &__title {
    font-family: 'customfont650';
    color: var(--main-background);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.014em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__modal {
    background-color: transparent !important;
    box-shadow: none;
  }
}
</style>
