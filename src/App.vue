<template>
  <div id="app" class="container">
    <Board/>
  </div>
</template>

<script>
import Board from './components/Board';

export default {
  components: {
    Board
  }
};
</script>

<style lang="scss">
@import './assets/stylesheets/main.scss';

#app {
  font-family: 'Mplus 1p';
  height: 100%;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
