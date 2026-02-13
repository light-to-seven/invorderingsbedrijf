<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
</script>
<template>
  <div class="info-box">
    <div class="info-box__description">
      Do you want good results, but in a way that suits you? Call us directly at <a href="tel:070 - 762 0330">070 - 762 0330</a> or fill in the contact form.
    </div>
    <Button class="btn">Request Advice</Button>
  </div>
</template>
<style lang="scss" scoped>
.info-box{
  border-radius: 8px;
  background: var(--Primary-100, #C3E0FD);
  padding: 48px;
  margin: 48px 0;
  display: flex;
  align-items: center;
  gap: 48px;
  &__description{
    color: #062740;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
    a{
      color: #01AAD5;
      text-decoration: none;
    }
  }
}
</style>