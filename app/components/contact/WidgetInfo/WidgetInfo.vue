<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { IWidgetInfo } from './types.ts'
import Button from "~/components/ui/Button.vue"

const props = defineProps<{
  data: IWidgetInfo
}>()
const cleanPhone = computed(() => {
  return props.data.phone.replace(/[^\d+]/g, '')
})
</script>

<template>
  <div class="widget-info">
    <h4>{{ props.data.title }}</h4>
    <ul>
      <li v-for="item in props.data.list">{{ item }}</li>
    </ul>
    <p>{{props.data.description}}</p>
    <a class="phone" :href="`tel:${cleanPhone}`">
      <Icon name="custom-icon:phone" class=""/>
      {{ props.data.phone }}
    </a>
    <Button class="btn" v-if="props.data.button">
      {{ props.data.button.text }}
    </Button>
  </div>
</template>
<style lang="scss" scoped>
.widget-info{
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 8px;
  border: 1px solid #E8EBEE;
  background: #FFF;
  box-shadow: 0 8px 24px 0 rgba(149, 157, 165, 0.20);
  margin: 96px 0;
  position: sticky;
  top: 130px;
  @media (max-width: 1100px) {
    margin: 0 0 48px;
  }
  ul{
    gap: 15px;
    display: flex;
    flex-direction: column;
    margin: 0;
    li{
      color: #062740;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      padding-left: 32px;
      position: relative;
      &:before{
        content: '';
        //content: url('/assets/icons/check.svg');
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: #F0F4F8;
        background-image: url(~/assets/icons/list-check.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 20px;
        width: 24px;
        height: 24px;
      }
    }
  }
  p{
    color: #586374;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin: 16px 0;
  }
  .phone{
    margin: 0 0 24px;
    gap: 8px;
    display: flex;
    align-items: center;
    color: #01AAD5;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
    text-decoration: none;
    transition: all .3s ease;
  }
}
</style>