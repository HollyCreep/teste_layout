<template>
  <validation-provider
    :name="$attrs.label"
    :rules="rules"
    :vid="vid"
  >
    <v-text-field
      v-model="innerValue"
      slot-scope="{ errors, valid }"
      :error-messages="errors"
      :success="valid"
      v-bind="$attrs"
      outlined
      dense
      hide-details
      height="10px"
      v-on="$listeners"
    />
  </validation-provider>
</template>

<script>
  import { ValidationProvider } from 'vee-validate'

  export default {
    components: {
      ValidationProvider,
    },
    props: {
      rules: {
        type: [Object, String],
        default: '',
      },
      vid: {
        type: [Object, String],
        default: '',
      },
      // must be included in props
      value: {
        type: null,
      },
    },
    data: () => ({
      innerValue: '',
    }),
    watch: {
      // Handles internal model changes.
      innerValue (newVal) {
        this.$emit('input', newVal)
      },
      // Handles external model changes.
      value (newVal) {
        this.innerValue = newVal
      },
    },
    created () {
      if (this.value) {
        this.innerValue = this.value
      }
    },
  }
</script>
