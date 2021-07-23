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
  margin-bottom: 20px;
  width: 100%;
  background-color: white;
  &.dark {
    background-color: black;
    > button {
      color: white;
    }
  }
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
</style>
