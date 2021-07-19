<template>
 <input
  type="email"
  class="form-control"
  placeholder="E-mail"
  :value="email"
  @input="update($event)"
  :class="{
    'is-valid': ValidateEmail(email),
    'is-invalid': !ValidateEmail(email),
  }"
/>
</template>

<script>
import ValidateEmail from '../validate-email';

export default {
  name: 'EmailInput',
  props: ['email'],
  methods: {
    update($event) {
      this.$emit('update:email', $event.target.value);
    },
    ValidateEmail,
  },
};
</script>
