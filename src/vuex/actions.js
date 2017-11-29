import actionTypes from './action_types';
import mutationTypes from './mutation_types';

export default {
  [actionTypes.SET_MARK]({ commit }, payload) {
    commit(mutationTypes.SET_MARK, payload);
  },
  [actionTypes.CHANGE_TURN]({ commit }) {
    commit(mutationTypes.CHANGE_TURN);
  },
  [actionTypes.RESET]({ commit }) {
    commit(mutationTypes.RESET);
  }
};
