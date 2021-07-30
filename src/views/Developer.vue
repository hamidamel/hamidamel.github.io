<template>
  <Expriences :experiences="experiences" :theme="'dark'" />
</template>
<style scoped>
body {
  background: rgb(37, 37, 38);
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Expriences from "../components/Expriences.vue";
@Component({
  components: {
    Expriences,
  },
})
export default class Home extends Vue {
  experiences = [
    {
      year: 2021,
      duration: "January, 30 - June 30",
      title: "Tapsell Admin Panel",
      description:
        "Redesign and rewrite admin panel of one main products of company i've worked in as a team leader and senior angular developer at Tapsell Co.",
    },
    {
      year: 2020,
      duration: "January, 30 - June 30",
      title: "Design new UI Kit",
      description:
        "During the year I was responsible for design a new UI Kit for all Tapsell Co. products.",
    },
  ];
}
</script>
