<script setup lang="ts">
import {computed, defineProps} from 'vue'

interface IProps {
  title?: string,
  address?: string,
  img?: string,
  phone?: string,
  mail?: string,
  maps?: string,
}
const props = defineProps<IProps>()
const cleanPhone = computed(() => {
  return props.phone?.replace(/[^\d+]/g, '')
})
</script>

<template>
  <div class="item-office">
    <div class="item-office__image">
      <img src="~/assets/image/office-1.png" :alt="props.title">
    </div>
    <div class="item-office__content">
      <div class="item-office__title" v-if="props.title">{{ props.title }}</div>
      <div class="item-office__address" v-if="props.address">{{ props.address }}</div>
      <div class="item-office__phone" v-if="props.phone">
        <a :href="`tel:${cleanPhone}`">
          <Icon name="custom-icon:phone-mini"/>
          {{ props.phone }}
        </a>
      </div>
      <div class="item-office__mail" v-if="props.mail">
        <a :href="`mailto:${props.mail}`">
          <Icon name="custom-icon:main-mini"/>
          {{ props.mail }}
        </a></div>
      <div class="item-office__mapLink" v-if="props.maps">
        <a :href="maps" target="_blank">
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
      @media (max-width: 767px) {
        padding: 24px;
      }
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
    &__phone{
      margin-bottom: 12px;
      a{
        display: flex;
        align-items: center;
        color: #062740;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        text-decoration: none;
        gap: 8px;
        transition: all .3s ease;
        &:hover{
          color: #01AAD5;
        }
        svg{
          font-size: 16px;
          display: block;
        }
      }
    }
    &__mail{
      margin-bottom: 12px;
      a{
        display: flex;
        align-items: center;
        color: #062740;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        gap: 8px;
        transition: all .3s ease;
        &:hover{
          color: #01AAD5;
        }
        svg{
          font-size: 16px;
          display: block;
        }
      }
    }
    &__mapLink{
      a{
        display: flex;
        align-items: center;
        gap: 8px;
        color: #2977C9;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: 150%;
        text-decoration: none;
        svg{
          font-size: 20px;
          transition: transform .3s ease;
        }
        &:hover{
          svg{
            transform: rotate(45deg);
          }
        }
      }
    }
  }
</style>