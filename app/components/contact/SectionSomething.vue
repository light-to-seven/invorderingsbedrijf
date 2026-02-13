<script setup lang="ts">
import { defineProps } from 'vue'
interface ILink {
  label: string,
  to: string
}
interface IData {
  title: string,
  description: string,
  icon: string,
  link: ILink
}

const props = defineProps<{
  title: string,
  data?: IData[]
}>()
</script>
<template>
  <div class="section-something">
    <h2 class="custom-headline">{{props.title}}</h2>
    <div class="section-something__list">
      <div class="item" v-for="item in props.data">
        <Icon class="icon" :name="item.icon"/>
        <h5>{{item.title}}</h5>
        <p>{{item.description}}</p>
        <NuxtLink :to="item.link.to">
          {{item.link.label}}
          <Icon name="custom-icon:link-arrow"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .section-something {
    margin: 96px 0;
    &__list{
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr 1fr 1fr;
      .item{
        padding: 32px;
        border-radius: 8px;
        border: 1px solid #E8EBEE;
        display: flex;
        flex-direction: column;
        height: 295px;
        .icon{
          margin-bottom: 25px;
          font-size: 48px;
        }
        h5{
          margin: 0 0 15px 0;
          color: #062740;
          font-size: 18px;
          font-style: normal;
          font-weight: 800;
          line-height: 150%;
        }
        p{
          color: #586374;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          margin: 0;
        }
        a{
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: auto;
          color: #2977C9;
          font-size: 16px;
          font-style: normal;
          font-weight: 800;
          line-height: 150%;
          text-decoration: none;
        }
      }
    }
  }
</style>