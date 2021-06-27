<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="text-primary">
      <q-btn
        v-if="$route.name != 'hub'"
        flat
        round
        dense
        icon="s_keyboard_backspace"
        @click="$router.push('/login')"
      />
    </q-toolbar>
    <q-page-container>
      <ModalResponseUser />
      <ModalErrorServer />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ModalResponseUser from '../common/components/modalResponseUser'
import ModalErrorServer from '../common/components/modalErrorServer'
export default {
  name: 'LoginLayout',
  components: {
    ModalResponseUser,
    ModalErrorServer
  },
  data() {
    return {
      tab: 'mails'
    }
  }
}
</script>
