<template>
  <ion-page>
    <div class="container">
      <Toolbar title="Discover" />
      <Search placeholder='Try "Waterfalls"' />

      <div class="discoveries-town">
        <swiper
          :modules="modules"
          :autoplay="false"
          :keyboard="true"
          :pagination="false"
          :slides-per-view="3.6"
        >
          <swiper-slide @click="getPlaceByCountry('all')">
            <div :class="`town ${active == 'all' ? 'active' : ''}`">All</div>
          </swiper-slide>
          <swiper-slide
            v-for="(country, i) in countries"
            :key="i"
            @click="getPlaceByCountry(country)"
          >
            <div :class="`town ${active == country ? 'active' : ''}`">
              {{ country }}
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="map-zone">
        <div class="mapbox" id="mapbox"></div>
      </div>

      <div class="nearby-places">
        <div class="section">
          <div class="title">
            Places near by <ion-icon :icon="chevronDown"></ion-icon>
          </div>
        </div>

        <swiper
          :modules="modules"
          :autoplay="true"
          :keyboard="true"
          :pagination="true"
          :slides-per-view="1.8"
          class="slide-discoveries"
        >
          <swiper-slide v-for="(place, i) in waterfalls" :key="i">
            <SmallCard :place="place" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </ion-page>
</template>

<!-- eslint-disable no-import-assign -->
<script lang="ts">
import { IonPage, IonIcon } from "@ionic/vue";
import Toolbar from "@/components/header/Toolbar.vue";
import Search from "@/components/header/Search.vue";
import { chevronDown } from "ionicons/icons";

import Waterfalls from "@/services/api/waterfall.json";
import Towns from "@/services/api/town.json";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from "swiper";
import SmallCard from "@/components/place/SmallCard.vue";
import { ref } from "vue";

import * as mapboxgl from "mapbox-gl";

export default {
  components: {
    IonPage,
    IonIcon,
    Toolbar,
    Search,
    Swiper,
    SwiperSlide,
    SmallCard,
  },

  setup() {
    return {
      chevronDown,
      modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
      Waterfalls,
      Towns,
    };
  },

  data() {
    return {
      active: "Senegal",
      waterfalls: Waterfalls,
      countries: ref<string[]>([]),
      mapbox: mapboxgl.Map,
    };
  },

  mounted() {
    const countries: string[] = [];
    Towns.forEach((town) => {
      if (!countries.includes(town?.country)) {
        countries.push(town?.country);
      }
    });
    this.countries = countries;
    this.getPlaceByCountry(this.active);

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    this.mapbox = new mapboxgl.Map({
      container: "mapbox",
      style: `mapbox://styles/mapbox/streets-v12`,
      zoom: 8,
      center: [-12.397, 12.363],
    });

    Waterfalls.forEach((w) => {
      if (w?.geolocation)
        new mapboxgl.Marker().setLngLat(w?.geolocation).addTo(this.mapbox);
    });
  },

  methods: {
    getPlaceByCountry(country: string) {
      if (country === "all") {
        this.waterfalls = Waterfalls;
      } else {
        this.waterfalls = Waterfalls.filter(
          (waterfall) => waterfall?.town?.country === country
        );
      }
      this.active = country;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .discoveries-town {
    margin: 16px 0px;
    .town {
      border-radius: 50px;
      color: #818492;
      padding: 8px 0px;
      font-weight: 500;
      font-size: 14px;
      margin: 4px;
    }
    .active {
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;
      background: #3f67ff;
      color: #ffffff;
    }
  }

  .map-zone {
    margin-top: 32px;
    margin-left: 16px;
    margin-right: 16px;
    .mapbox {
      height: 200px;
      width: 100%;
    }
  }

  .nearby-places {
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

      ion-icon {
        color: #3f67ff;
        position: relative;
        margin-left: 4px;
        top: 2px;
      }
    }
  }
}
.swiper .swiper-slide {
  display: block;
}
</style>