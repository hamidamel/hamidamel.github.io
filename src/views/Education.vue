<template>
  <div id="education">
    <div class="container">
      <div>
        <img src="../assets/montazeri.png" height="80px" />
        <h4>Montazeri Technical College of Mashhad</h4>
        <p>January 2008 - January 2010, MASHHAD</p>
      </div>

      <div>
        <img src="../assets/sadjad.png" height="80px" />
        <h4>Sadjad University Of Technology, Mashhad</h4>
        <p>January 2010 - January 2012, MASHHAD</p>
      </div>
    </div>
    <arrow-buttons>
      <template v-slot:left>
        <button
          class="justify-content-start"
          v-on:click="$router.push('/education')"
        >
          <chevron-left-icon size="1.5x"></chevron-left-icon>
          Education
        </button>
      </template>
      <template v-slot:center>
        <button
          class="justify-content-center hide-in-desktop"
          v-on:click="$router.push('/about')"
        >
          <user-icon size="1.5x"></user-icon>
        </button>
      </template>
      <template v-slot:right>
        <button
          class="justify-content-end"
          v-on:click="$router.push('/skills')"
        >
          Skills
          <chevron-right-icon size="1.5x"></chevron-right-icon>
        </button>
      </template>
    </arrow-buttons>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ArrowButtons from "../components/ArrowButtons.vue";
import { ChevronRightIcon } from "vue-feather-icons";
import { ChevronLeftIcon } from "vue-feather-icons";
import { UserIcon } from "vue-feather-icons";
import { HomeIcon } from "vue-feather-icons";

@Component({
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    ArrowButtons,
    UserIcon,
    HomeIcon,
  },
})
export default class Education extends Vue {}
</script>

<style scoped lang="scss">
@media only screen and (min-width: 768px) {
  .container {
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 20px;
    // height: 200px;
  }
  #education {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: calc(100vh - 160px);
  }
}
</style>
