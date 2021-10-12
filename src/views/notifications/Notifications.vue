<template>
  <div class="q-pa-xs notifications-wrapper">
    <!-- Header -->
    <div class="row">
      <div class="col-12">
        <q-toolbar class="text-primary text-main-primary">
          <router-link :to="{ name: 'UserProfile' }" class="router-link-style">
            <q-btn flat round dense icon="arrow_back" text-color="utilities-alternate" />
          </router-link>
        </q-toolbar>
      </div>
    </div>
    <!-- Main content -->
    <div class="row">
      <div class="col-12">
        <div class="notifications-wrapper__conzdsstent">
          <div class="notifications-wrapper__header">
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <h2 class="text-main-alternate">Notificações</h2>
              </div>
            </div>
          </div>
          <div class="notifications-wrapper__content">
            <div class="row">
              <div
                v-for="(item, index) in notificationsList"
                :key="index"
                class="
                  col-12 col-md-12 col-xs-12
                  mt-3
                  notifications-wrapper__content__info notifications-wrapper__content__info__divider
                "
              >
                <div class="row">
                  <div class="col-10 col-md-10 col-xs-10">
                    <p class="text-main-alternate">
                      {{ item.value }}
                    </p>
                    <h4 class="text-utilities-alternate">
                      {{ item.label }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Loading content -->
    <div v-if="false" class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./Notifications.js"></script>
<style src="./Notifications.scss" lang="scss" scoped></style>
