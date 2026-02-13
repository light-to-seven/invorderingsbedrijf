<script setup lang="ts">
import { defineProps } from 'vue'

interface IProps {
  title?: string,
  address?: string,
  img?: string,
}
const props = defineProps<IProps>()
</script>

<template>
  <div class="item-office">
    <div class="item-office__image">
      <img src="~/assets/image/office-1.png" :alt="props.title">
    </div>
    <div class="item-office__content">
      <div class="item-office__title">{{ props.title }}</div>
      <div class="item-office__address">{{ props.address }}</div>
      <div class="item-office__phone">
        <a href="tel:070 - 762 0330">
          <Icon name="custom-icon:link-arrow"/>
          070 - 762 0330
        </a>
      </div>
      <div class="item-office__mail">
        <a href="mailto:info@invorderingsbedrijf.nl">
          <Icon name="custom-icon:link-arrow"/>
          info@invorderingsbedrijf.nl
        </a></div>
      <div class="item-office__mapLink">
        <a href="#" target="_blank">
          Google Maps
          <Icon name="custom-icon:link-arrow"/>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .item-office{
    border-radius: 8px;
    border: 1px solid #E8EBEE;
    background: #FFF;
    overflow: hidden;
    &__image{
      height: 248px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__content{
      padding: 32px;
    }
    &__title{
      color: #062740;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: 150%;
      margin-bottom: 12px;
    }
    &__address{
      color: #586374;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      margin-bottom: 12px;
    }
  }
</style>