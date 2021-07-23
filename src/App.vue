<template>
  <div id="app">
    <page-header>
      <template v-slot:title>{{ $route.name }}</template>
    </page-header>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeader from "./components/PageHeader.vue";

@Component({
  components: {
    PageHeader,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "assets/style.css";
.menu-exact-active {
  color: indianred;
  cursor: pointer;
}
.menu-active {
  color: red;
}
@media only screen and (min-width: 320px) {
  .container {
    max-width: 100vw;
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    max-height: 100vh;
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
#app {
  font-family: "Dana", Helvetica, Arial, sans-serif;
  text-align: left;
  direction: ltr;
}
.justify-content-end {
  justify-content: flex-end;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-start {
  justify-content: flex-start;
}

@media only screen and (min-width: 768px) {
  .hide-in-desktop {
    display: none !important;
  }
  .container {
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    min-height: 100vh;

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
