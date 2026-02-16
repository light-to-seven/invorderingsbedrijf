<script setup lang="ts">
interface Props {
  modelValue?: string | number | boolean
  value: string | number | boolean
  label?: string
  name?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', props.value)
}

const isChecked = computed(() => {
  return props.modelValue === props.value
})
</script>

<template>
  <label :class="['form-radio', { 'disabled': disabled, 'checked': isChecked }]">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      @change="handleChange"
      v-bind="$attrs"
      class="radio-input"
    />
    <span class="radio-label" v-if="label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
.form-radio{
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  height: 20px;
  display: flex;
  align-items: center;
  &:before{
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 1px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
  }
  &:after{
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background-color: #fff;
    position: absolute;
    left: 4px;
    top: 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
    box-sizing: border-box;
  }
  &.checked{
    &:after{
      opacity: 1;
    }
  }
  input{
    display: none;
  }
  .radio-label {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1;
    margin-left: 12px;
    margin-top: 1px;
  }
}
</style>