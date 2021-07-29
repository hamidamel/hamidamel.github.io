<template>
  <div>
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

<style>
#home {
  background-color: white;
  width: calc(100vw - 80px);
  height: calc(100vh - 80px);
  padding-left: 40px;
  padding-right: 40px;
}
</style>
