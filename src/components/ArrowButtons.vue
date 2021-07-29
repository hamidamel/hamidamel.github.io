<template>
  <div class="arrow-buttons" :class="theme">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  name: "ArrowButtons",
  components: {},
  props: ["theme"],
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 768px) {
  .arrow-buttons {
    bottom: 50% !important;
    background-color: transparent !important;
  }
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
  padding-bottom: 20px;
  padding-top: 20px;
  width: 100%;
  background-color: white;
  &.dark {
    background-color: rgb(37, 37, 38);
    > button {
      color: white;
    }
  }
  > button {
    margin-left: 20px;
    margin-right: 20px;
    background-color: transparent;
    color: rgb(37, 37, 38);
    border: none;
    padding: 0.4rem;
    &:first-child {
      padding-left: 0.8rem;
    }
    &:last-child {
      padding-right: 0.8rem;
    }
    display: flex;
    align-items: center;
    line-height: 1rem;
    flex: 1 1 0px;
    &:disabled {
      color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
