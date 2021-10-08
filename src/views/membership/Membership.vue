<template>
  <div class="membership-wrapper">
    <!-- Main content -->
    <div class="row">
      <div class="col-12 col-md-12 col-xs-12">
        <div class="membership-wrapper__card">
          <div class="row">
            <div class="col-12 col-md-12 col-xs-12 pl-3 pt-3">
              <router-link :to="{ name: 'UserProfile' }" class="router-link-style">
                <div class="membership-wrapper__card__btn flex flex-center">
                  <q-icon name="close" color="white" class="membership-wrapper__card__btn__icon" />
                </div>
              </router-link>
            </div>
            <div class="col-12 col-md-12 col-xs-12">
              <div class="membership-wrapper__card__header mt-4 pl-4 pr-3">
                <h2 class="m-0 text-h2 text-main-alternate">{{ getMembershipTitle }}</h2>
                <h2
                  v-if="!isMembership"
                  class="m-0 text-h2 text-main-alternate"
                  style="font-size: 22px"
                >
                  {{ getMembershipSubTitle }}
                </h2>
                <h3 class="text-h3 text-main-background">{{ getMembershipDescription }}</h3>
              </div>
            </div>
            <div
              v-for="(item, index) in benefitsList"
              :key="index"
              class="col-12 col-md-12 col-xs-12"
            >
              <div class="membership-wrapper__card__body pl-4 flex">
                <div class="checked-green-wrapper flex flex-center">
                  <q-icon name="check" color="white" class="checked-green-wrapper__icon" />
                </div>
                <p class="m-0 text-main-alternate">{{ item.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-xs-12">
        <div class="membership-wrapper__actions flex mt-6 text-center">
          <div class="membership-wrapper__actions__group-btn">
            <Button
              :label="getMembershipFirstBtnLabel"
              noCaps
              color="primary-flat"
              class=""
              :disabled="false"
              @click="goToUserProfile"
            ></Button>
            <Button
              :label="getMembershipSecondBtnLabel"
              noCaps
              color="primary-filled"
              class="mt-3"
              :disabled="false"
              @click="paymentModalStatus = true"
            ></Button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-xs-12">
        <div class="membership-wrapper__dialog">
          <PaymentModal
            :active="paymentModalStatus"
            :title="paymentModalTitle"
            :subtitle="paymentModalSubtitle"
            :description="paymentModalDescription"
            :buttonText="paymentModalButtonText"
            :subButtonText="paymentModalSubButtonText"
            :action="copyPixCode"
            :subAction="confirmPayment"
            @hide="hideHandler"
          />
          <FeedbackModal
            :active="feedbackModalStatus"
            :icon="feedbackIcon"
            :title="feedbackModalTitle"
            :subtitle="feedbackModalSubtitle"
            :buttonText="feedbackModalButtonText"
            :action="goToUserProfile"
          ></FeedbackModal>
        </div>
      </div>
    </div>
    <!-- Loading content -->
    <div v-if="false" class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./Membership.js"></script>
<style src="./Membership.scss" lang="scss" scoped></style>
