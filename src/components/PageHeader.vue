<template>
  <div class="header-buttons" :class="theme">
    <button @click="showMenu">
      <menu-icon size="1.5x"> </menu-icon>
    </button>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <MenuModal v-show="openMenu" @close="closeMenu">
      <template v-slot:body> </template>
    </MenuModal>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import { MenuIcon } from "vue-feather-icons";
import MenuModal from "./MenuModal.vue";
@Component({
  components: {
    MenuIcon,
    MenuModal,
  },
  props: ["theme"],
})
export default class PageHeader extends Vue {
  openMenu = false;
  showMenu() {
    this.openMenu = true;
  }
  closeMenu() {
    this.openMenu = false;
  }
}
</script>

<style scoped lang="scss">
.header-buttons {
  display: flex;
  position: relative;
  justify-items: center;
  align-items: center;
  flex: 1;
  top: 0px;
  line-height: 2rem;
  text-align: center;
  // width: 100%;
  padding-left: 35px;
  padding-top: 40px;
  padding-bottom: 40px;
  z-index: 100;
  background-color: transparent;
  &.dark {
    background-color: rgb(37, 37, 38);
    color: white;
    > button {
      color: white;
    }
  }
  .title {
    font-weight: 800;
    height: 24px;
    line-height: 28px;
  }
  > button {
    background-color: transparent;
    color: rgb(37, 37, 38);
    border: none;
    display: flex;
    margin-right: 10px;
    align-items: center;
    line-height: 1rem;
    &:disabled {
      color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
