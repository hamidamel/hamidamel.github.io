<template>
  <Expriences />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Expriences from "../components/Expriences.vue";
@Component({
  components: {
    Expriences,
  },
})
export default class Home extends Vue {}
</script>
