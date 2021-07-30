<template>
  <div id="skills">
    <div class="container">
      <div class="skill-category">
        <h4>Front-end frameworks</h4>
        <p><span class="icon-logo-angular"></span>Angular.js</p>
        <p><span class="icon-logo-react"></span>React.js</p>
        <p><span class="icon-logo-vue"></span>Vue.js</p>
      </div>
      <div class="skill-category">
        <h4>CSS frameworks</h4>
        <p><span class="icon-materialui"></span>Material UI</p>
        <p><span class="icon-logo-sass"></span>SASS</p>
        <p><span class="icon-bootstrap"></span>bootstrap</p>
      </div>
      <div class="skill-category">
        <h4>Back-end skills</h4>
        <p><span class="icon-logo-nodejs"></span>NodeJS</p>
        <p><span class="icon-symfony"></span>Symfony</p>
        <p><span class="icon-php"></span>PHP</p>
      </div>
      <div class="skill-category">
        <h4>Designing Tools</h4>
        <p><span class="icon-sketch"></span>Sketch App</p>
        <p><span class="icon-figma"></span>Figma</p>
        <p><span class="icon-adobe-photoshop"></span>Adobe Photoshop</p>
        <p><span class="icon-adobe-illustrator"></span>Adobe Illustrator</p>
        <p><span class="icon-invision"></span>Invision App</p>
      </div>
      <div class="skill-category">
        <h4>Other Tools</h4>
        <p><span class="icon-jira"></span>Jira</p>
        <p><span class="icon-android-studio"></span>Android Studio</p>
        <p><span class="icon-git"></span>Git</p>
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
export default class Skills extends Vue {}
</script>

<style scoped lang="scss">
@media only screen and (min-width: 768px) {
  .container {
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 20px;
    // height: 200px;
  }
  #skills {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: calc(100vh - 160px);
  }
}

@media only screen and (max-width: 768px) {
  #skills {
    justify-content: flex-start;
    justify-items: flex-start;
    align-items: flex-start;
  }
}

.skill-category {
  p {
    display: flex;
    align-items: center;
    line-height: 2rem;
    span {
      margin-right: 5px;
    }
    // justify-content: center;
  }
}
</style>
