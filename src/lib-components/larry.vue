<script>
import { hello } from './helpers';
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Larry extends Vue {
    name ='Larry, the best of the three stooges';
    get greeting() {
      return hello(this.name);
    }
};
</script>

<template>
  <div class="larry">
    <p>{{ greeting }}</p>
  </div>
</template>

<style scoped>
  .larry {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .larry p {
    margin: 0 0 1em;
  }
</style>
