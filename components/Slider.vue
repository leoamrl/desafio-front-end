<template>
  <div class="slider">
    <div class="slider-inner">
      <div
        v-for="slide in slides"
        :key="slide.index"
        :class="{ 'text-right': slide.isRightAligned }"
        class="slider-item"
        :style="slide.backgroundImage"
      >
        <div class="container">
          <h1 class="slider-item-title">{{ slide.title }}</h1>
          <h2 class="slider-item-subtitle">{{ slide.subtitle }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Notebook",
          subtitle: "As melhores ofertas",
          colorStart: "#8d35b7",
          colorEnd: "#d693f6",
          backgroundImage: `background-image: linear-gradient(62deg, #8d35b7 0%, #d693f6 100%);`,
          isRightAligned: true,
        },
        {
          title: "Smartphone",
          subtitle: "Confira as últimas novidades",
          colorStart: "#368eb7",
          colorEnd: "#93f4f5",
          backgroundImage: `background-image: linear-gradient(62deg, #368eb7 0%, #93f4f5 100%);`,
          isRightAligned: false,
        },
      ],
    };
  },
  computed: {
    createBackgroundString(index) {
      return console.log(index);
    },
  },
};
</script>

<style lang="scss">
.slider {
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style: none;
  &-inner {
    display: flex;
  }
  &-item {
    width: 100%;
    height: 440px;
    width: 100vw;
    flex-shrink: 0;
    display: inline-flex;

    .container {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
    }

    &-title {
      font-weight: 900;
      font-size: 48px;
      color: #fff;
    }
    &-subtitle {
      font-weight: 700;
      font-size: 24px;
      color: #fff;
    }
  }
}
</style>