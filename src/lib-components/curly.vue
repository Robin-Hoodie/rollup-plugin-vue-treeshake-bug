<script>
import { hello } from './helpers';
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Curly extends Vue {
  name = 'Curly, REALLY the best of the three stooges';

  get greeting() {
    return hello(this.name);
  }
};
</script>

<template>
  <div class="curly">
    <p>{{ greeting }}</p>
  </div>
</template>

<style scoped>
.curly {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.curly p {
  margin: 0 0 1em;
}
</style>
