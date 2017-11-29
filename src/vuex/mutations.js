/* eslint-disable no-param-reassign */
import Vue from 'vue';
import types from './mutation_types';

export default {
  [types.SET_MARK](state, { index, mark }) {
    Vue.set(state.marks, index, mark);
  },
  [types.CHANGE_TURN](state) {
    state.currentTurn = 1 - state.currentTurn;
  },
  [types.RESET](state) {
    state.winner = null;
    state.currentTurn = 0;
    state.marks = Array(9).fill(null);
  }
};
