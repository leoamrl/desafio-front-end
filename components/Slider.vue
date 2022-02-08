<template>
  <div class="slider">
    <vue-glide
      type="slider"
      :bullet="true"
      :options="options"
      class="slider-inner"
    >
      <vue-glide-slide
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
      </vue-glide-slide>
    </vue-glide>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
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
      options: {
        perView: 1,
      },
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
  &-item {
    width: 100%;
    height: 440px !important;
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
  .glide {
    &__bullets {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }
    &__bullet {
      position: relative;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: transparent;
      border: 2px solid $secondary-color;
      @include transition;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: transparent;
        @include transition;
      }

      &:hover {
        &::after {
          background-color: $secondary-color;
        }
      }

      &--active {
        border-color: $primary-color;

        &::after {
          background-color: $primary-color;
        }

        &:hover {
          border-color: darken($primary-color, 10%);
          &::after {
            background-color: darken($primary-color, 10%);
          }
        }
      }
    }
  }
}
</style>