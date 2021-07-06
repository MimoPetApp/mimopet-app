<template>
  <div style="width: 300px">
    <q-card>
      <q-card-section>
        <q-img src="icons/passearp.png" />
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
              <q-badge color="purple" label="Adultos" />
              <q-item-label style="font-size: 1.8vh"
                >Passear.</q-item-label
              >
              <q-item-label caption lines="4" style="font-size: 2.3vh">
                Liberdade para você e seu pet caminharem por locais
                abertos como parque e praças. Tenha seu cão de volta ao seu lado
                com um som de apito.
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-tabs narrow-indicator dense align="justify" class="text-primary">
      <q-tab
        :ripple="false"
        name="mails"
        icon="card_giftcard"
        label="1"
        @click="$router.push({ name: 'videos' })"
      />
      <q-tab :ripple="false" name="alarms" icon="card_giftcard" label="2" />
      <q-tab :ripple="false" name="movies" icon="card_giftcard" label="3" />
      <q-tab :ripple="false" name="movies" icon="card_giftcard" label="4" />
    </q-tabs>

    <q-card align="center">
      <q-btn
        color="white"
        text-color="deep-orange"
        align="center"
        glossy
        label="Cancelar inscrição"
      />
    </q-card>
  </div>
</template>

<style scoped>
</style>
