<template>
  <transition name="fade">
    <div class="container" v-if="!startWeel">
      <div class="exprience-date">
        <span class="year-label">{{ experiences[currentExpIndex].year }}</span>
        <span class="month-duration-label"
          >{{ experiences[currentExpIndex].duration }}
        </span>
      </div>
      <div class="exprience-description">
        <h2>{{ experiences[currentExpIndex].title }}</h2>
        <p class="description">
          {{ experiences[currentExpIndex].description }}
        </p>

        <div class="description-items">
          <div class="item">
            <span class="title">Exprience</span>
            <p class="information">
              Freelance project
              <br />
              ≈ 250 Hours
            </p>
          </div>

          <div class="item">
            <span class="title">Skills</span>
            <p class="information">Sketch App</p>
          </div>

          <div class="item">
            <span class="title">Demo</span>
            <p class="information">Take a look at the design</p>
          </div>
        </div>
      </div>

      <div class="experince-preview">
        <img src="../assets/phone-mockup.svg" width="240px" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  currentExpIndex = 0;
  lastWDelta: any;
  startWeel = false;
  experiences = [
    {
      year: 2021,
      duration: "January, 30 - June 30",
      title: "FutureU",
      description:
        "is a 3D human body scanner android application by order of Payafanavaran Co. I was designed fully custom widgets to use in Flutter which is mentions in the developer part of my website.",
    },
    {
      year: 2020,
      duration: "January, 30 - June 30",
      title: "OcularAI",
      description:
        "A Ui/Ux design for one of OcularAI Inc. projects. I designed a users panel Dashboard in four pages with adhere to Google Material Design System.",
    },
    { year: 2019, duration: "January, 30 - June 30", title: "OcularAI" },
  ];

  created() {
    window.addEventListener("wheel", this.handleScroll, { passive: false });
  }
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event: any) {
    event.preventDefault();
    this.startWeel = true;
    let wDelta = event.wheelDelta < 0 ? "down" : "up";
    if (!this.lastWDelta) {
      //start
    }
    clearTimeout(this.lastWDelta);
    this.lastWDelta = setTimeout(() => {
      this.startWeel = false;
      if (
        wDelta == "down" &&
        this.currentExpIndex < this.experiences.length - 1
      ) {
        this.currentExpIndex += 1;
      }
      if (wDelta == "up" && this.currentExpIndex > 0) {
        this.currentExpIndex -= 1;
      }
    }, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
