<template>
  <q-layout view="lHh Lpr lFf">
    <div class="home__container">
      <!-- Top header -->
      <q-header v-if="hasHeader" reveal class="bg-transparent">
        <q-toolbar>
          <div class="row justify-between items-center q-px-lg" style="width: 100%">
            <q-toolbar-title>
              <q-img src="~assets/images/mimoicon-white.svg" style="width: 80px" />
            </q-toolbar-title>

            <q-btn class="home__badge" outline color="white q-mr-md">
              <q-icon name="notifications" class="cursor-pointer"></q-icon>
            </q-btn>
            <q-btn class="home__badge" outline color="white" no-caps @click="showPetList">
              <q-badge color="main-highlight" text-color="main-background" rounded>
                {{ petsList.length }}
              </q-badge>
              <span class="ml-1"> Pets </span>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>
      <!-- Main container -->
      <q-page-container>
        <router-view />
      </q-page-container>
      <ModalAuth />
      <PetListModal />
      <q-footer v-if="hasFooter" class="bg-white flex flex-center">
        <q-tabs v-model="tab" class="text-blue-grey-2" active-color="main-alternate">
          <q-route-tab default name="home" icon="dashboard" :to="'/'" />
          <q-route-tab name="userProfile" icon="drag_handle" :to="'/userProfile'" />
        </q-tabs>
      </q-footer>
    </div>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ModalAuth from '../common/components/modalNotLogged'
import PetListModal from '../common/components/petListModal'

export default {
  name: 'MainLayout',
  components: {
    ModalAuth,
    PetListModal
  },
  data () {
    return {
      tab: 'mails'
    }
  },
  computed: {
    ...mapState('pets', ['petsList', 'hasHeader', 'hasFooter'])
  },
  async mounted () {
    await this.ActionGetUser()
  },
  methods: {
    ...mapActions('auth', ['ActionGetUser']),
    ...mapActions('pets', ['ActionPetModalList']),
    showPetList () {
      this.ActionPetModalList({ modal: true, data: {} })
    }
  }
}
</script>

<style lang="scss" scoped>
.home__container {
  background: var(--main-alternate);
  min-height: 100vh;
}

.home__badge {
  border-radius: 15px;
}
</style>
