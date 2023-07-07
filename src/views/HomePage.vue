<template>
  <ion-page>
    <div class="container">
      <Toolbar title="Travel Camp" />
      <Search placeholder="Where should we go?" />

      <div class="nearby-travelers">
        <div class="section">
          <div class="title">Nearby Travelers</div>
          <div class="more">
            See All <ion-icon :icon="arrowForward"></ion-icon>
          </div>
        </div>

        <swiper
          :modules="modules"
          :keyboard="true"
          :pagination="false"
          :slides-per-view="2.1"
        >
          <swiper-slide v-for="(traveler, i) in Travelers" :key="i">
            <TravelerCard :traveler="traveler" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="popular-places">
        <div class="section">
          <div class="title">Popular Places</div>
          <div class="more">
            See All <ion-icon :icon="arrowForward"></ion-icon>
          </div>
        </div>

        <PlaceCard v-for="(place, i) in Waterfalls" :place="place" :key="i" />
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonIcon } from "@ionic/vue";
import Toolbar from "@/components/header/Toolbar.vue";
import Search from "@/components/header/Search.vue";
import PlaceCard from "@/components/place/Card.vue";
import TravelerCard from "@/components/Traveler.vue";
import { arrowForward } from "ionicons/icons";

import Waterfalls from "@/services/api/waterfall.json";
import Travelers from "@/services/api/traveler.json";

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
  components: {
    IonPage,
    IonIcon,
    Toolbar,
    Search,
    PlaceCard,
    Swiper,
    SwiperSlide,
    TravelerCard,
  },

  setup() {
    return {
      arrowForward,
      modules: [Keyboard, Pagination, Scrollbar, Zoom],
      Waterfalls,
      Travelers,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .popular-places,
  .nearby-travelers {
    padding: 16px;

    .section {
      justify-content: space-between;
      font-weight: bold;
      margin: 16px 0px;
      font-size: 18px;
      display: flex;

      .title {
        margin-left: 4px;
      }

      .more {
        margin-right: 4px;
        color: #3f67ff;

        ion-icon {
          position: relative;
          margin-left: 4px;
          top: 2px;
        }
      }
    }
  }
}

.swiper .swiper-slide {
  display: block;
}
</style>