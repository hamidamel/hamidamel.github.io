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
      year: 2019,
      duration: "January, 30 - June 30",
      title: "Tapsell Admin Panel",
      images: [
        "https://play-lh.googleusercontent.com/KEhXi4CQDzgxjRhllRuXDp5pzv2M6fwc0PN2n0Wp_XUIwfJf1y--gSMig6Vk3Ho27Ce1=w720-h310-rw",
      ],
      description:
        "Redesign and rewrite admin panel of one main products of company i've worked in as a team leader and senior angular developer at Tapsell Co.",
    },
  ];
}
</script>
