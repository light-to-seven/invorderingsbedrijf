<script setup lang="ts">
import { defineProps } from 'vue'
import TheBreadcrumbs from '~/components/shared/TheBreadcrumbs.vue'
interface IProps {
  breadcrumbs?: boolean,
  title?: string,
  subTitle?: string,
  description?: string,
}
const props = defineProps<IProps>()
</script>
<template>
  <div class="promo-section">
    <div class="container">
      <div class="promo-section__content">
        <TheBreadcrumbs v-if="props.breadcrumbs"/>
        <div class="promo-section__description">
          <h2 class="sub-title" v-if="props.subTitle">{{ props.subTitle }}</h2>
          <h1 class="title" v-if="props.title">{{ props.title }}</h1>
          <p v-if="props.description">{{ props.description }}</p>
        </div>
        <div class="promo-section__image">
          <img src="~/assets/image/promo-img.png" alt="Promo Background">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .promo-section{
    background: #062740;
    background-image: url(~/assets/image/promo-bg.png);
    &__content{
      position: relative;
      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
      }
    }
    &__image{
      position: absolute;
      right: 0;
      bottom: 0;
      @media (max-width: 1450px) {
        max-width: 570px;
      }
      @media (max-width: 1100px) {
        max-width: 60%;
      }
      @media (max-width: 767px) {
        position: relative;
        max-width: none;
        margin: 0 -16px;
      }
      img{
        display: block;
        @media (max-width: 1450px) {
          width: 100%;
        }
      }
    }
    &__description{
      height: 470px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 584px;
      flex: 1 0;
      color: #FFF;
      @media (max-width: 1450px) {
        height: 370px;
      }
      @media (max-width: 1100px) {
        max-width: 40%;
      }
      @media (max-width: 767px) {
        padding: 48px 0;
        height: auto;
        max-width: 100%;
      }
      .title{
        color: #FFF;
        @media (max-width: 767px) {
          font-size: 32px;
          line-height: 120%;
          margin: 12px 0 32px;
        }
      }
      .sub-title{
        color: #01AAD5;
        font-size: 14px;
        font-style: normal;
        font-weight: 800;
        line-height: 150%;
        margin: 0;
        padding-left: 12px;
        position: relative;
        &:before{
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          border-radius: 0 111px 111px 0;
          background: #01AAD5;
        }
      }
      p{
        margin: 0;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }
</style>