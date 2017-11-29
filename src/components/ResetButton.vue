<template>
  <a class="button is-primary" @click="onClick">リセット</a>
</template>

<script>
import actionTypes from '../vuex/action_types';

export default {
  methods: {
    onClick() {
      this.$store.dispatch(actionTypes.RESET);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
