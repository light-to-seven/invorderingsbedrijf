<script setup lang="ts">
import AppPromoSection from "~/components/shared/AppPromoSection.vue";
import SectionOffices from "~/components/contact/SectionOffices/index.vue";
import SectionConsultation from "~/components/contact/SectionConsultation/index.vue";
import SectionInfo from "~/components/contact/SectionInfo.vue";
import SectionSomething from "~/components/contact/SectionSomething.vue";
import WidgetInfo from "~/components/contact/WidgetInfo/WidgetInfo.vue";
import AppShare from "~/components/shared/AppShare.vue";
import type { IWidgetInfo } from "~/components/contact/WidgetInfo/types.ts";

const dataPromo = {
  title: 'Contact',
  subTitle: 'Invorderingsbedrijf',
  description: 'We are happy to help you. Reach out to us for immediate assistance or advice.',
}
const dataOffices = {
  title: 'Our Offices',
  description: 'Invorderingsbedrijf is located in The Hague and Amsterdam and offers you the best service to achieve the result you have in mind: getting your money back whilst maintaining the relationship with your client.',
}

const titleSomething = 'Looking for something else?'
const listSomething = [
  {
    title: 'Received a letter?',
    description: 'Log in to view your file or make a payment securely.',
    icon: 'custom-icon:user-square',
    link: {
      label: 'Debtor Login',
      to: '/'
    }
  },
  {
    title: 'Careers',
    description: 'We are looking for driven top talent. Join us!',
    icon: 'custom-icon:bisnes',
    link: {
      label: 'View Vacancies',
      to: '/'
    }
  },
  {
    title: 'Partnerships',
    description: 'Let’s discuss how we can grow together.',
    icon: 'custom-icon:part',
    link: {
      label: 'Become a Partner',
      to: '/'
    }
  },
]

const titleInfo = 'Legal Information'
const listInfo = [
  {
    title:'For Clients (Principals)',
    description:'Our website is managed by Legal.nl B.V. (KvK number...) and INC. Zeist B.V. A contract is formed immediately after the acceptance of the agreement between the client and us. Legal.nl B.V. and INC. Zeist B.V. represent legally independent companies that are jointly responsible for the execution of the assignment.'
  },
  {
    title:'For Counterparties (Debtors)',
    description:'The name Invorderingsbedrijf implies use by multiple companies, including Legal.nl B.V. In correspondence you have received from us, explicit mention is made of the account number and the entity to which payments must be made. Please refer to your specific documentation.'
  }
]

const widgetData:IWidgetInfo = {
  title: 'Contact Us',
  list: [
    'Maximum result for debtors and creditors',
    'No Cure No Pay based',
    'More than 10+ years of experience',
    '24/7 Online Portal access',
    'National & International coverage'
  ],
  phone: '070 - 762 0330',
  description: 'Do you want good results, but in a way that suits you? Call us directly at',
  button: {
    text: 'Fill in Contact Form',
  }
}

</script>

<template>
  <div>
    <AppPromoSection
        :title="dataPromo.title"
        :subTitle="dataPromo.subTitle"
        :description="dataPromo.description"
        :breadcrumbs="true"
    />
    <div class="container">
      <div class="column-row">
        <div class="column">
          <div class="section-textContent">
            <p><b>At Invorderingsbedrijf, your question is central.</b> You can reach us by phone, email, or via our chat. We are available on working days from <b>08:30 to 17:00</b> (with the exception of public holidays). We are happy to help you.</p>
          </div>
          <SectionOffices :title="dataOffices.title" :description="dataOffices.description"/>
          <SectionConsultation/>
          <SectionSomething :title="titleSomething" :data="listSomething"/>
          <SectionInfo :title="titleInfo" :data="listInfo"/>
          <AppShare />
        </div>
        <div class="column">
          <WidgetInfo :data="widgetData"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .section-textContent{
    color: #586374;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin: 96px 0;
    @media (max-width: 1100px) {
      margin: 48px 0;
    }
  }
  .column-row{
    display: grid;
    gap: 48px;
    grid-template-columns: 4fr 1.5fr;
    @media (max-width: 1450px) {
      gap: 24px;
      grid-template-columns: 3fr 1.2fr;
    }
    @media (max-width: 1100px) {
      gap: 24px;
      grid-template-columns: 1fr;
    }
  }
</style>