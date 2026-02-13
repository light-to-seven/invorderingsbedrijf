<script setup>

const breadcrumbs = [
  {
    id: 2,
    label: 'Contact',
    to: '/contact'
  },
]
</script>

<template>
  <div class="breadcrumbs">
    <nav aria-label="Breadcrumb">
      <ol>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li v-for="crumb in breadcrumbs" :key="crumb.to">
          <NuxtLink :to="crumb.to" active-class="active">{{ crumb.label }}</NuxtLink>
        </li>
      </ol>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
  .breadcrumbs{
    padding: 24px 0;
    nav{
      ol{
        display: flex;
        list-style: none;
        align-items: center;
        margin: 0;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          a {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            text-transform: uppercase;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.6);
            &.active{
              color: #01AAD5;
              text-decoration: underline;
            }
          }
          &:not(&:last-child):after{
            content: url(~/assets/icons/arrow-narrow-right.svg);
            margin: 0 8px;
          }
        }
      }
    }
  }
</style>