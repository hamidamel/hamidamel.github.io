<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header" id="modalTitle">
          <slot name="header"></slot>
        </header>
        <slot name="body"></slot>
        <slot name="footer"> </slot>
      </div>
      <div class="arrow-buttons">
        <button class="justify-content-start" v-on:click="changeCurrentExp(-1)">
          <chevron-left-icon size="1.5x"></chevron-left-icon>
        </button>
        <button class="justify-content-center hide-in-desktop" @click="close">
          <x-circle-icon size="1.5x"></x-circle-icon>
        </button>
        <button class="justify-content-end">
          <chevron-right-icon size="1.5x"></chevron-right-icon>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { XCircleIcon } from "vue-feather-icons";
import { ChevronRightIcon } from "vue-feather-icons";
import { ChevronLeftIcon } from "vue-feather-icons";
export default {
  components: {
    XCircleIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
  },
  name: "PreviewModal",
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
  align-items: center;
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
.arrow-buttons {
  display: flex;
  align-content: space-around;
  justify-content: space-between;
  position: fixed;
  flex: 1;
  bottom: 0px;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;

  > button {
    margin-left: 20px;
    margin-right: 20px;
    background-color: transparent;
    color: black;
    border: none;
    padding: 0.4rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    display: flex;
    align-items: center;
    line-height: 1rem;
    flex: 2;

    &:disabled {
      color: rgba(0, 0, 0, 0.2);
    }
  }
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
