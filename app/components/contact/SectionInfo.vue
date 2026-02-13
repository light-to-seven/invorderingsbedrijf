<script setup lang="ts">
import { defineProps } from 'vue'
interface IData {
  title: string,
  description: string
}
interface IProps {
  title: string,
  data: IData[]
}
const props = defineProps<IProps>()
</script>
<template>
  <div class="section-info">
    <h2 class="custom-headline">{{props.title}}</h2>
    <div class="section-info__list">
      <div class="item" v-for="item in props.data">
        <h3>{{ item.title }}</h3>
        <div class="description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .section-info {
    margin: 96px 0;
    &__list{
      display: flex;
      flex-direction: column;
      gap: 48px;
      .item{
        .description {
          color: #586374;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }
      }
    }
  }
</style>