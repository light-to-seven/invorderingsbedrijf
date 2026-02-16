<script setup lang="ts">
import { defineProps } from 'vue'
import InfoBox from './InfoBox.vue'
import ItemOffice from './ItemOffice.vue'

interface IProps {
  title?: string,
  description?: string,
}
const props = defineProps<IProps>()

const offices = [
  {
    title: 'The Hague (Den Haag)',
    address: 'Kruisstraat 123, 2511 AB The Hague',
    img: '~/assets/image/office-1.png',
    phone: '070 - 762 0330',
    mail: 'info@invorderingsbedrijf.nl',
    maps: '/',
  },
  {
    title: 'Amsterdam',
    address: 'Keizersgracht 241, 1016 EA Amsterdam',
    img: '~/assets/image/office-2.png',
    phone: '070 - 762 0330',
    mail: 'info@invorderingsbedrijf.nl',
    maps: '/',
  }
]
</script>
<template>
  <div class="section-offices">
    <h2 class="custom-headline">{{props.title}}</h2>
    <p class="section-offices__descrioption">{{props.description}}</p>
    <InfoBox />
    <div class="section-offices__list">
      <ItemOffice
          v-for="office in offices"
          :key="office.title"
          :title="office.title"
          :address="office.address"
          :phone="office.phone"
          :mail="office.mail"
          :maps="office.maps"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-offices{
  margin: 96px 0;
  @media (max-width: 1100px) {
    margin: 48px 0;
  }
  &__descrioption{
    color: #586374;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin: 48px 0;
  }
  &__list{
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
}
</style>