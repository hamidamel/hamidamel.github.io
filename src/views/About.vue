<template>
  <div>
    <div class="container">
      <img src="../assets/me.jpeg" width="100px" />
      <h1>A little about me</h1>
      <p>
        Experienced Front-End developer who is passionate about UI/UX design.<br />
        I've started development since I was 16 with trying to make a Game using
        'Basic' and 'Pascal' language then went to university and study Computer
        engineering.
        <br />
        After I graduated, I'd established a small business in my hometown and
        had held it for 8 years. I learned a lot from those hard-working days,
        such as team leading or dealing with customers as well as using many
        developing techniques and design patterns.
        <br />
        In 2016, something prompted me for a new challenging product, an
        exciting application with the purpose of broadcasting women's football
        news and information. For 2 years I've worked on the project and I think
        it was the most interesting project I've ever done.
        <br />
        at last I've moved to Tehran and started working as a Front-End
        developer at Tapsell Co.
      </p>
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
          v-on:click="$router.push('/')"
        >
          <home-icon size="1.5x"></home-icon>
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
export default class About extends Vue {}
</script>

<style></style>
