<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar v-if="false" class="text-primary">
      <q-btn flat round dense icon="keyboard_backspace" @click="$router.push('/login')" />
    </q-toolbar>
    <q-page-container>
      <ResponseUser />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ResponseUser from '../common/components/Modal/ResponseUser/ResponseUser'
export default {
  name: 'LoginLayout',
  components: {
    ResponseUser
  },
  data() {
    return {
      tab: 'mails'
    }
  }
}
</script>
