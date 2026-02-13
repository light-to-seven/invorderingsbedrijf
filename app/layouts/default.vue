<script setup lang="ts">
import AppFooter from "~/components/shared/AppFooter.vue";
import AppHeader from "~/components/shared/AppHeader.vue";
</script>
<template>
  <div>
    <AppHeader />
    <slot></slot>
    <AppFooter />
  </div>
</template>