<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <slot name="body">
          <router-link to="/" v-on:click.native="close">Home</router-link>
          <router-link to="/developer" v-on:click.native="close"
            >Developing Exp</router-link
          >
          <router-link to="/designer" v-on:click.native="close"
            >Designing Exp</router-link
          >
          <router-link to="/designer" v-on:click.native="close"
            >Skills</router-link
          >
          <router-link to="/designer" v-on:click.native="close"
            >Personal Info</router-link
          >
        </slot>
      </div>
      <arrow-buttons>
        <template v-slot:left> </template>
        <template v-slot:center>
          <button class="justify-content-center hide-in-desktop" @click="close">
            <x-circle-icon size="1.5x"></x-circle-icon>
          </button>
        </template>
        <template v-slot:right> </template>
      </arrow-buttons>
    </div>
  </transition>
</template>

<script>
import ArrowButtons from "./ArrowButtons.vue";
import { XCircleIcon } from "vue-feather-icons";
export default {
  components: {
    XCircleIcon,
    ArrowButtons,
  },
  name: "MenuModal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.98);
  display: flex;
  justify-content: center;
}

.modal {
  background: white;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  height: 100%;
  text-align: left;
  justify-content: center;
  padding: 40px;
  a {
    color: black;
    text-decoration: none;
    font-size: 24px;
    line-height: 60px;
    font-weight: 200;
  }
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  justify-content: space-between;
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: black;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
