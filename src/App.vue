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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.menu-exact-active {
  font-weight: 600 !important;
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

</style>
