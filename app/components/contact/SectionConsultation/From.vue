<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import Input from "~/components/ui/Input.vue";
import Button from "~/components/ui/Button.vue";
import Textarea from "~/components/ui/Textarea.vue";
import Radio from "~/components/ui/Radio.vue";

const schema = toTypedSchema(
    z.object({
      business: z.string({ error: 'Choose a type business.' }),
      name: z.string({ error: 'This field is required.' }).min(1, 'This field is required.'),
      company: z.string().optional(),
      email: z.string({ error: 'This field is required.' }).email('Invalid email format'),
      phone: z.string({ error: 'This field is required.' }).min(1, 'This field is required.'),
      message: z.string().optional(),
    })
)

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [phone, phoneAttrs] = defineField('phone')
const [company, companyAttrs] = defineField('company')
const [message, messageAttrs] = defineField('message')
const [business, businessAttrs] = defineField('business')

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values)
})
</script>
<template>
  <div>
    <form @submit="onSubmit" class="form">
      <div class="form-group">
        <p class="radio-label">Are you a private individual or a business?</p>
        <div class="radio-group">
          <Radio
              v-model="business"
              v-bind="businessAttrs"
              value="Private"
              label="Private"
          />
          <Radio
              v-model="business"
              v-bind="businessAttrs"
              value="Business"
              label="Business"
          />
        </div>
        <span v-if="errors.business" class="error">{{ errors.business }}</span>
      </div>

      <div class="form-group">
        <Input
            v-model="name"
            v-bind="nameAttrs"
            :error="errors.name"
            type="text"
            placeholder="Name*"
        />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <Input
            v-model="company"
            v-bind="companyAttrs"
            :error="errors.company"
            type="text"
            placeholder="Company name"
        />
        <span v-if="errors.company" class="error">{{ errors.company }}</span>
      </div>

      <div class="form-group">
        <Input
            v-model="phone"
            v-bind="phoneAttrs"
            :error="errors.phone"
            type="text"
            placeholder="Phone number *"
        />
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>

      <div class="form-group">
        <Input
            v-model="email"
            v-bind="emailAttrs"
            :error="errors.email"
            type="email"
            placeholder="Email address *"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <Textarea
            v-model="message"
            v-bind="messageAttrs"
            :error="errors.message"
            type="text"
            placeholder="Description of your request"
        />
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </div>
      <div class="form-policy">
        By submitting this form you agree to the <a href="#" target="_blank">privacy policy.</a>
      </div>
      <Button type="submit" class="btn btn-secondary">
        Request Consultation
      </Button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .form-policy{
    margin: 16px 0;
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    a{
      color: #01AAD5;
      text-decoration: underline;
    }
  }
  .radio-group{
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .error {
    color: red;
    font-size: 14px;
  }
  .btn{
    @media (max-width: 767px) {
      width: 100%;
    }
  }
}

</style>