<template>
  <ion-page>
    <div class="container">
      <Toolbar title="Social Hub" />
      <Search placeholder="Search feed" />

      <div class="discoveries">
        <div class="section">
          <div class="title">Discoveries</div>
          <div class="more">
            See All <ion-icon :icon="arrowForward"></ion-icon>
          </div>
        </div>

        <swiper
          :modules="modules"
          :keyboard="true"
          :pagination="false"
          :slides-per-view="2.5"
        >
          <swiper-slide v-for="(traveler, i) in Travelers" :key="i">
            <TravelerCard :traveler="traveler" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="hubs">
        <HubCard v-for="(post, i) in Posts" :key="i" :post="post" />
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonIcon } from "@ionic/vue";
import Toolbar from "@/components/header/Toolbar.vue";
import Search from "@/components/header/Search.vue";
import TravelerCard from "@/components/SimpleTraveler.vue";
import HubCard from "@/components/HubCard.vue";

import { arrowForward } from "ionicons/icons";

import Travelers from "@/services/api/traveler.json";
import Posts from "@/services/api/post.json";

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
    Swiper,
    HubCard,
    SwiperSlide,
    TravelerCard,
  },

  setup() {
    return {
      arrowForward,
      modules: [Keyboard, Pagination, Scrollbar, Zoom],
      Travelers,
      Posts,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .discoveries {
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

  .hubs {
    padding: 16px;
  }
}
.swiper .swiper-slide {
  display: block;
}
</style>