<template>
  <div>
    <span></span>
    <arrow-buttons :theme="theme">
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
      <div class="container" :class="theme" v-if="!startWeel">
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

        <div
          class="experince-preview"
          v-if="experiences[currentExpIndex].images"
        >
          <div class="frame">
            <img
              width="100%"
              :src="getImgUrl(experiences[currentExpIndex].images[0])"
            />
          </div>
          <!-- <img src="../assets/phone-mockup.svg" width="240px" /> -->
        </div>
      </div>
    </transition>

    <PreviewModal v-show="openPreview" @close="closeModal" :theme="theme">
      <template v-slot:header></template>
      <template v-slot:body>
        <div class="frame" v-if="experiences[currentExpIndex].images">
          <img
            width="100%"
            :src="getImgUrl(experiences[currentExpIndex].images[0])"
          />
        </div>
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
  props: ["experiences", "theme"],
})
export default class Expriences extends Vue {
  currentExpIndex = 0;
  lastWDelta = "";
  startWeel = false;
  openPreview = false;
  baseAssetPath = "./assets/exp/";
  doTap() {
    alert("s");
  }
  getImgUrl(img) {
    var images = require.context("../assets/exp/", false, /\.png$/);
    if (img) {
      return images("./" + img + ".png");
    } else {
      return "https://via.placeholder.com/200x200";
    }
  }
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
.frame {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-size: contain;
  width: 240px;
  margin: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 25px;
  overflow: hidden;
}
@media only screen and (min-width: 320px) {
  .container {
    max-width: 100vw;
    padding-left: 40px;
    padding-right: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    max-height: calc(100vh - 80px);
    &.dark {
      background-color: rgb(37, 37, 38);
      color: white;
      .exprience-date {
        .month-duration-label {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
    .exprience-date {
      grid-area: 2 / 1 / 2 / 1;
      display: flex;
      flex-direction: column;
      align-content: stretch;
      align-items: flex-start;

      padding-right: 10px;

      .year-label {
        font-size: 64px;
        font-weight: 800;
        line-height: 64px;
      }
      .month-duration-label {
        font-size: 16px;
        line-height: 18px;
        font-weight: 200;
        color: rgba(3, 3, 3, 0.8);
      }
    }
    .hide-in-mobile {
      display: none;
    }
    .experince-preview {
      display: none;
    }

    .exprience-description {
      grid-area: 3 / 1 / 3 / 3;
      display: flex;
      flex-direction: column;
      align-content: stretch;
      align-items: flex-start;

      .description {
        margin-bottom: 40px;
      }
      h2 {
        margin: 0;
      }
      p {
        margin: 0;
        margin-top: 2px;
        line-height: 1.34rem;
      }

      .description-items {
        display: flex;
        flex-direction: column;
        .item {
          .title {
            font-weight: 600;
          }
          .information {
            font-weight: 200;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .container {
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    max-height: calc(100vh - 80px);
    margin-top: -80px;
    &.dark {
      background-color: rgb(37, 37, 38);
      color: white;
      .exprience-date {
        .month-duration-label {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
    .exprience-date {
      grid-area: 2 / 1 / 3 / 2;
      display: flex;
      flex-direction: column;
      align-content: stretch;
      align-items: flex-end;
      border-right: 1px solid rgba(3, 3, 3, 0.2);
      padding-right: 10px;

      .year-label {
        font-size: 64px;
        font-weight: 800;
        line-height: 64px;
      }
      .month-duration-label {
        font-size: 18px;
        line-height: 18px;
        font-weight: 200;
        color: rgba(3, 3, 3, 0.8);
      }
    }
    .experince-preview {
      grid-area: 1 / 3 / 5 / 5;
      display: flex;
      flex-direction: column;
      align-content: stretch;
      align-items: center;
      justify-content: center;
    }
    .exprience-description {
      grid-area: 2 / 2 / 4 / 3;
      display: flex;
      flex-direction: column;
      align-content: stretch;
      align-items: flex-start;

      .description {
        margin-bottom: 40px;
      }
      h2 {
        margin: 0;
      }
      p {
        margin: 0;
        margin-top: 2px;
      }

      .description-items {
        display: flex;
        flex-direction: column;
        .item {
          .title {
            font-weight: 600;
          }
          .information {
            font-weight: 200;
            display: flex;
            align-content: flex-start;
            vertical-align: middle;
            flex-direction: row;
            justify-content: flex-start;
          }
        }
      }
    }
  }
}
</style>
