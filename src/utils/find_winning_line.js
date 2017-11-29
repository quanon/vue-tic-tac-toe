import constants from '../constants';

export default marks =>
  constants.LINES.find((line) => {
    const marksInLine =
      line
        .map(index => marks[index])
        .filter((mark, i, me) => me.indexOf(mark) === i);

    return marksInLine.length === 1;
  }) || null;
