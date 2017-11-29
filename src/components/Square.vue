<template>
  <button class="column is-one-third" @click="onClick">
    <i class="fa" :class="faClassName"></i>
  </button>
</template>

<script>
import actionTypes from '../vuex/action_types';

export default {
  props: ['index', 'mark'],
  methods: {
    onClick() {
      if (this.mark) return;
      if (!this.isPlaying) return;

      const mark = this.$store.getters.currentMark;

      this.$store.dispatch(actionTypes.SET_MARK, { index: this.index, mark });
      this.$emit('clickSquare');
    }
  },
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    faClassName() {
      const mark = this.$store.getters.findMark(this.index);

      if (!mark) return null;

      return `fa-${mark}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/initial-variables';

.column {
  border: solid 1px #999;
  font-size: $size-1;
  width: 10vh !important;
  height: 10vh !important;

  &:focus {
    outline: none;
  }
}
</style>
