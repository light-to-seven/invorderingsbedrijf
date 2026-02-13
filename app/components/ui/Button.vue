<script setup lang="ts">
import { defineProps } from 'vue'
interface IProps  {
  class?: string
}

const props = defineProps<IProps>()
</script>

<template>
  <button :class="props.class">
    <slot />
  </button>
</template>