<script setup lang="ts">
import From from "~/components/contact/SectionConsultation/From.vue";
</script>
<template>
  <div class="section-form">
    <div class="section-form__content">
      <h2 class="custom-headline">Free consultation?</h2>
      <p class="subtitle">Any unsettled invoices? Let us know.</p>
      <From/>
    </div>
    <div class="section-form__image">
      <img src="~/assets/image/image-form.png">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-form{
  border-radius: 8px;
  background: #2977C9;
  padding: 48px 0 48px 48px;
  color: #fff;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    margin: 48px -16px;
    padding: 48px 16px 0;
    border-radius: 0;
  }
  h2{
    color: #fff;
    margin: 0 0 16px;
  }
  .subtitle{
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
    margin-bottom: 48px;
  }
  &__content{
    max-width: 410px;
    min-width: 410px;
    width: 100%;
    @media (max-width: 1450px) {
      max-width: 350px;
      min-width: 350px;
    }
    @media (max-width: 767px) {
      max-width: 100%;
      min-width: 100%;
    }
  }
  &__image{
    width: 100%;
    @media (max-width: 1450px) {
      gap: 24px;
      grid-template-columns: 3fr 1.2fr;
    }
    img{
      width: 100%;
    }
  }
}
</style>