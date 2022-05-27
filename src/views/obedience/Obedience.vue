<template>
  <div class="q-pa-xs user-profile-wrapper">
    <!-- Main content -->
    <div class="row">
      <div class="col-12 col-md-12 col-xs-12">
        <div class="user-profile-wrapper__content">
          <div class="row">
            <div class="col-12">
              <div class="user-profile-wrapper__content__card-purple"></div>
            </div>
            <div class="col-12">
              <div class="user-profile-wrapper__content__card-white">
                <div class="user-profile-wrapper__content__card-white__header pl-4 pt-5 flex">
                  <div class="user-profile-wrapper__content__card-white__header__avatar">
                    <q-avatar
                      size="60px"
                      icon="emoji_emotions"
                      color="main-secondary"
                      text-color="white"
                    />
                  </div>
                  <div class="user-profile-wrapper__content__card-white__header__info">
                    <p class="text-utilities-alternate mb-0">Pai de pet</p>
                    <h4 class="text-main-alternate m-0 text-h4">{{ userName }}</h4>
                  </div>
                  <div
                    class="
                      user-profile-wrapper__content__card-white__header__premium-box
                      flex flex-center
                      mt-3
                    "
                    :style="getCardStyle"
                    v-if="false"
                  >
                    <router-link :to="{ name: 'Membership' }" class="router-link-style">
                      <div
                        class="
                          user-profile-wrapper__content__card-white__header__premium-box__info
                          text-center
                        "
                      >
                        <h5 class="text-main-background">Seja Premium</h5>
                        <p class="text-main-alternate mb-0">Diversos mimos para os seus pets</p>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="user-profile-wrapper__content__card-white__body mt-2">
                  <div class="row">
                    <div
                      v-for="(item, index) in info"
                      :key="index"
                      class="
                        col-12 col-md-12 col-xs-12
                        mt-1
                        user-profile-wrapper__content__card-white__body__info
                        user-profile-wrapper__content__card-white__body__info__divider
                      "
                      @click="clickHandler(index)"
                    >
                      <div class="row">
                        <div class="col-10 col-md-10 col-xs-10">
                          <h4 class="text-main-alternate text-h4 pl-4">{{ item.label }}</h4>
                        </div>
                        <div class="col-2 col-md-2 col-xs-2 flex flex-center">
                          <q-icon
                            :name="item.icon"
                            class="user-profile-wrapper__content__card-white__body__info__icon"
                            color="utilities-border"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-12 col-xs-12" @click="showLogoutModal">
                      <h4 class="text-utilities-alternate text-h4 text-center">Sair do app</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-xs-12">
        <div class="user-profile-wrapper__dialog">
          <ActionModal :content="logoutModal" :onHide="hideLogoutModal" :onSubmit="logout" />
          <SupportModal
            :active="supportModalStatus"
            @hide="hideSupportModal"
            :action="hideSupportModal"
          ></SupportModal>
          <FeedbackModal
            :active="feedbackModalStatus"
            :icon="feedbackIcon"
            :title="feedbackModalTitle"
            :subtitle="feedbackModalSubtitle"
            :buttonText="feedbackModalButtonText"
            :action="closeFeedbackModal"
          ></FeedbackModal>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-12 col-xs-12 user-profile-wrapper__content__footer flex flex-center"
      >
        <p class="text-main-background mb-0">Versão 1.0 lançado em Outubro de 2021</p>
      </div>
    </div>
    <!-- Loading content -->
    <div v-if="false" class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./Obedience.js"></script>
<style src="./Obedience.scss" lang="scss" scoped></style>
