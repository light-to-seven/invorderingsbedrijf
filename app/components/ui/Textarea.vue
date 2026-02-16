<script setup lang="ts">
interface Props {
  modelValue?: string | number
  placeholder?: string
  error?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="form-group">
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="['form-textarea', { 'has-error': error }]"
      @input="handleInput"
      v-bind="$attrs"
    />
  </div>
</template>

<style lang="scss" scoped>
.form-textarea {
  border-radius: 4px;
  background: #FFF;
  transition: all 0.3s ease;
  border: 1px solid #fff;
  width: 100%;
  color: #062740;
  padding: 16px;
  height: 122px;
  resize: vertical;

  &::placeholder {
    color: #586374;
  }

  &:focus {
    outline: none;
    border-color: #062740;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.has-error {
    border-color: red;
  }
}
</style>