<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/style.css";
@media only screen and (min-width: 340px) {
  .container {
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    max-height: 100vh;
    .exprience-date {
      grid-area: 2 / 2 / 3 / 1;
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
      display: none;
    }

    .exprience-description {
      grid-area: 2 / 2 / 3 / 3;
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
            font-weight: 100;
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
@media only screen and (min-width: 768px) {
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
      align-items: flex-start;
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
            font-weight: 100;
          }
        }
      }
    }
  }
}
</style>
