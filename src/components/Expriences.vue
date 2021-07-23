<template>
  <div>
    <arrow-buttons>
      <template v-slot:left>
        <button
          class="justify-content-start"
          v-on:click="
            !experiences[currentExpIndex - 1]
              ? $router.push('/')
              : changeCurrentExp(-1)
          "
        >
          <chevron-left-icon size="1.5x"></chevron-left-icon>
          <span>
            {{
              experiences[currentExpIndex - 1]
                ? experiences[currentExpIndex - 1].year
                : "Home"
            }}</span
          >
        </button>
      </template>
      <template v-slot:center>
        <button
          class="justify-content-center hide-in-desktop"
          @click="showModal"
        >
          <box-icon size="1.5x"></box-icon>
        </button>
      </template>
      <template v-slot:right>
        <button
          class="justify-content-end"
          v-on:click="changeCurrentExp(1)"
          :disabled="!experiences[currentExpIndex + 1]"
        >
          {{
            experiences[currentExpIndex + 1]
              ? experiences[currentExpIndex + 1].year
              : "I have ..."
          }}
          <chevron-right-icon size="1.5x"></chevron-right-icon>
        </button>
      </template>
    </arrow-buttons>
    <transition name="fade">
      <div class="container" v-if="!startWeel">
        <div class="exprience-date">
          <span class="year-label">{{
            experiences[currentExpIndex].year
          }}</span>
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
              <p class="information">
                <external-link-icon size="1x"></external-link-icon>
                Take a look at the design
              </p>
            </div>
          </div>
        </div>

        <div class="experince-preview">
          <img src="../assets/phone-mockup.svg" width="240px" />
        </div>
      </div>
    </transition>

    <PreviewModal v-show="openPreview" @close="closeModal">
      <template v-slot:header></template>
      <template v-slot:body>
        <img src="../assets/phone-mockup.svg" width="240px" />
      </template>
      <template v-slot:footer></template>
    </PreviewModal>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { ChevronRightIcon } from "vue-feather-icons";
import { ChevronLeftIcon } from "vue-feather-icons";
import { ExternalLinkIcon } from "vue-feather-icons";
import { BoxIcon } from "vue-feather-icons";
import PreviewModal from "./PreviewModal.vue";
import ArrowButtons from "./ArrowButtons.vue";
import PageHeader from "./PageHeader.vue";

@Component({
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    BoxIcon,
    ExternalLinkIcon,
    PreviewModal,
    ArrowButtons,
    PageHeader,
  },
  props: ["experiences"],
})
export default class Expriences extends Vue {
  currentExpIndex = 0;
  lastWDelta = "";
  startWeel = false;
  openPreview = false;

  showModal() {
    this.openPreview = true;
  }
  closeModal() {
    this.openPreview = false;
  }
  created() {
    // window.addEventListener("wheel", this.handleScroll, { passive: false });
  }
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll);
  }
  changeCurrentExp(newValue) {
    this.startWeel = true;
    setTimeout(() => {
      this.currentExpIndex += newValue;
      this.startWeel = false;
    }, 200);
  }
  handleScroll(event) {
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
        this.changeCurrentExp(1);
      }
      if (wDelta == "up" && this.currentExpIndex > 0) {
        this.changeCurrentExp(-1);
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
