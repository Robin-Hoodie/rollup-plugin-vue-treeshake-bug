<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { hello } from './helpers';

@Component
export default class Moe extends Vue {
      name = 'Moe, also the best of the three stooges';

    get greeting() {
      return hello(this.name);
    }
};
</script>

<template>
  <div class="moe">
    <p>{{ greeting }}</p>
  </div>
</template>

<style scoped>
.moe {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.moe p {
  margin: 0 0 1em;
}
</style>
