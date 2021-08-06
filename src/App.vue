<template>
  <div id="app" :class="$route.meta.theme" @touchstart="screenTouched">
    <transition name="slide">
      <page-header :theme="$route.meta.theme" v-show="header">
        <template v-slot:title>{{ $route.name }}</template>
      </page-header>
    </transition>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
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
export default class App extends Vue {
  header = true;
  hideMenuInterval;
  created() {
    // this.hideMenuInterval = setInterval(() => {
    //   this.header = false;
    //   this.hideMenuInterval = null;
    // }, 3000);
  }
  screenTouched() {
    // this.header = true;
    // this.hideMenuInterval = setInterval(() => {
    //   this.header = false;
    // }, 3000);
  }
}
</script>
<style lang="scss">
@import "assets/style.css";
@import "assets/hamid-v1.0/style.css";

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
  transition: opacity 200ms;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.menu-exact-active {
  font-weight: 600 !important;
}
body {
  height: 100vh;
  padding: 0;
  margin: 0;
  // overflow: hidden;
}

.container {
  padding-left: 40px;
  padding-right: 40px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
}
#app {
  font-family: "Dana", Helvetica, Arial, sans-serif;
  text-align: left;
  direction: ltr;
  // height: calc(100vh - 80px);
  // padding-bottom: 60px;
  height: 100vh;
  &.dark {
    background: rgb(37, 37, 38);
  }
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
}
</style>
