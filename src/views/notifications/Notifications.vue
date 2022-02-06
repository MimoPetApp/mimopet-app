<template>
  <div class="notifications-wrapper">
    <!-- Header -->
    <div class="row">
      <div class="col-12">
        <q-toolbar class="text-primary text-main-primary ml-2">
          <q-btn
            flat
            round
            dense
            icon="arrow_back"
            text-color="utilities-alternate"
            @click="$router.go(-1)"
          />
        </q-toolbar>
      </div>
    </div>
    <!-- Main content -->
    <div class="row">
      <div class="col-12">
        <div class="notifications-wrapper__content">
          <div class="notifications-wrapper__content__header">
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <h2 class="text-main-alternate mt-2 pl-4 mb-1">Notificações</h2>
              </div>
            </div>
          </div>
          <div class="notifications-wrapper__content__info">
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
                <div class="row pl-4">
                  <div class="col-1 col-md-1 col-xs-1">
                    <q-icon size="24px" name="error" :color="item.color" />
                  </div>
                  <div class="col-11 col-md-11 col-xs-11 pl-1">
                    <h4 class="text-main-alternate">
                      {{ item.label }}
                    </h4>
                    <p class="text-utilities-alternate">
                      {{ item.description }}
                    </p>
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
