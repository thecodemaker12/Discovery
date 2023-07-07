<template>
  <div class="slider-content">
    <swiper
      :modules="modules"
      :autoplay="true"
      :keyboard="true"
      :pagination="true"
      :slides-per-view="1"
    >
      <swiper-slide v-for="(img, i) in images" :key="i">
        <div class="image" :style="`background-image: url(${img})`"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Pagination, Scrollbar, Zoom } from "swiper";

export default {
  name: "ImagesSlider",
  props: ["images"],
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Keyboard, Pagination, Scrollbar, Zoom],
    };
  },
};
</script>


<style lang="scss" scoped>
.slider-content {
  .image {
    background-position: center;
    filter: brightness(0.9);
    background-size: cover;
    border-radius: 8px;
    min-height: 150px;
    width: 100%;
  }
}
</style>