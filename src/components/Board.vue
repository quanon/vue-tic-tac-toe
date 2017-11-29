<template>
  <div class="board">
    <div v-if="isPlaying">
      <span>現在のプレイヤー: </span><i class="fa" :class="faClassName"></i>
    </div>
    <div v-else>
      <i class="fa" :class="faClassName"></i><span> の勝利です 🎉</span>
    </div>
    <div class="columns is-gapless is-mobile is-multiline">
      <Square v-for="(mark, index) in marks" :key="index" :mark="mark" :index="index" @clickSquare="onClickSquare"></Square>
    </div>
    <ResetButton>リセット</ResetButton>
  </div>
</template>

<script>
import actionTypes from '../vuex/action_types';
import ResetButton from './ResetButton';
import Square from './Square';

export default {
  components: {
    Square, ResetButton
  },
  methods: {
    onClickSquare() {
      if (this.isPlaying) this.$store.dispatch(actionTypes.CHANGE_TURN);
    }
  },
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    faClassName() {
      const mark = this.$store.getters.currentMark;
      return `fa-${mark}`;
    },
    marks() {
      return this.$store.getters.marks;
    }
  }
};
</script>

<style lang="scss" scoped>
.board {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.columns {
  margin-top: 1.5rem;
  width: 30vh !important;
  height: 30vh !important;
}
</style>
