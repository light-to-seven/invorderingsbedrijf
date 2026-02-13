<script setup lang="ts">
const shareUrl = computed(() => (typeof window !== 'undefined' ? window.location.href : ''))
interface ISocialItem {
  icon: string
  to: string
}

const social:ISocialItem[] = [
  {
    icon: 'custom-icon:link',
    to:`https://twitter.com/intent/tweet?url=${shareUrl.value}`,
  },
  {
    icon: 'custom-icon:x',
    to: `https://twitter.com/intent/tweet?url=${shareUrl.value}`,
  },
  {
    icon: 'custom-icon:facebook',
    to: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl.value}`,
  },
  {
    icon: 'custom-icon:linkedin',
    to: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl.value}`,
  },
]
</script>
<template>
  <div class="section-share">
    <div class="section-share__title">Share</div>
    <ul>
      <li v-for="socialItem in social">
        <a target="_blank" :href="socialItem.to">
          <Icon :name="socialItem.icon"></Icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.section-share{
  margin: 96px 0  ;
  &__title{
    margin-bottom: 16px;
    color: #062740;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  ul{
    display: flex;
    gap: 16px;
    align-items: center;
    li{
      border-radius: 50%;
      border: 1px solid #7E90A6;
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      svg{
        display: block;
      }
    }
  }
}
</style>