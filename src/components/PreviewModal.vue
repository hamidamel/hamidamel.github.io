<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" :class="theme">
      <div class="modal">
        <header class="modal-header" id="modalTitle">
          <slot name="header"></slot>
        </header>
        <slot name="body"></slot>
        <slot name="footer"> </slot>
      </div>
      <arrow-buttons :theme="theme">
        <template v-slot:left>
          <button class="justify-content-start">
            <chevron-left-icon size="1.5x"></chevron-left-icon>
          </button>
        </template>
        <template v-slot:center>
          <button class="justify-content-center hide-in-desktop" @click="close">
            <x-circle-icon size="1.5x"></x-circle-icon>
          </button>
        </template>
        <template v-slot:right>
          <button class="justify-content-end">
            <chevron-right-icon size="1.5x"></chevron-right-icon>
          </button>
        </template>
      </arrow-buttons>
    </div>
  </transition>
</template>

<script>
import { XCircleIcon } from "vue-feather-icons";
import { ChevronRightIcon } from "vue-feather-icons";
import { ChevronLeftIcon } from "vue-feather-icons";
import ArrowButtons from "./ArrowButtons.vue";
export default {
  components: {
    XCircleIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    ArrowButtons,
  },
  name: "PreviewModal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: ["theme"],
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
  align-items: center;
  &.dark {
    background-color: rgba(37, 37, 38, 0.98);
  }
}

.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
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

.modal-body {
  position: relative;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: rgb(37, 37, 38);
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
