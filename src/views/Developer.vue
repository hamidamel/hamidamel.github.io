<template>
  <Expriences :experiences="experiences" :theme="'dark'" />
</template>
<style scoped>
body {
  background: black;
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
      title: "Admin Panel",
      description:
        "is a 3D human body scanner android application by order of Payafanavaran Co. I was designed fully custom widgets to use in Flutter which is mentions in the developer part of my website.",
    },
    {
      year: 2020,
      duration: "January, 30 - June 30",
      title: "Dashboard Panel",
      description:
        "A Ui/Ux design for one of OcularAI Inc. projects. I designed a users panel Dashboard in four pages with adhere to Google Material Design System.",
    },
  ];
}
</script>
