<template>
  <div class="header-buttons">
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
  position: fixed;
  justify-items: center;
  align-items: center;
  flex: 1;
  top: 0px;
  line-height: 2rem;
  text-align: center;
  width: 100%;
  padding-left: 35px;
  padding-top: 40px;
  padding-bottom: 40px;
  z-index: 100;
  background-color: white;
  .title {
    font-weight: 800;
    height: 24px;
    line-height: 28px;
  }
  > button {
    background-color: transparent;
    color: black;
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
