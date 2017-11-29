import constants from '../constants';
import findWinningLine from '../utils/find_winning_line';

export default {
  marks(state) {
    return state.marks;
  },
  findMark(state) {
    return index => state.marks[index];
  },
  currentMark(state) {
    return constants.MARK_TYPES[state.currentTurn];
  },
  winningLine(_, getters) {
    return findWinningLine(getters.marks);
  },
  winner(_, getters) {
    if (getters.winningLine === null) return false;

    const index = getters.winningLine[0];
    return getters.marks[index];
  },
  isPlaying(_, getters) {
    return getters.winner === null;
  }
};
