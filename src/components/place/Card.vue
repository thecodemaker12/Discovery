<template>
  <div class="card-content">
    <div class="images">
      <Slider :images="place?.images" />
    </div>

    <div class="tags">
      <span class="tag" v-for="(tag, i) in place?.tags" :key="i">{{
        tag
      }}</span>
    </div>

    <div class="title">{{ place?.name }}</div>
    <div class="location">
      <ion-icon :icon="location"></ion-icon> {{ place?.town?.name }},
      {{ place?.town?.country }}
    </div>

    <div class="footer">
      <div class="stars">
        <ion-icon :icon="star"></ion-icon>
        <ion-icon :icon="star"></ion-icon>
        <ion-icon :icon="star"></ion-icon>
        <ion-icon :icon="star"></ion-icon>
        <ion-icon :icon="starHalf"></ion-icon>
        <span class="mark">{{ place?.rates }}</span>
      </div>
      <div class="distance">{{ place?.distance }} km</div>
    </div>
  </div>
</template>

<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { location, star, starHalf } from "ionicons/icons";
import Slider from "./Slider.vue";

export default {
  name: "PlaceCard",
  props: ["place"],

  components: {
    IonIcon,
    Slider,
  },

  setup() {
    return {
      location,
      starHalf,
      star,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-content {
  box-shadow: 0px 0px 16px #dfdfdf50;
  background: #ffffff;
  margin-bottom: 16px;
  border-radius: 12px;
  padding: 16px;

  .images {
    background-color: #e7effe;
    border-radius: 8px;
    height: 150px;
  }

  .tags {
    text-transform: uppercase;
    color: #3f67ff;
    font-weight: bold;
    font-size: 12px;
    margin: 8px 0px;

    .tag {
      margin-right: 8px;
    }
  }

  .title {
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 20px;
  }

  .location {
    color: #818492;
    font-weight: 600;
    font-size: 14px;

    ion-icon {
      color: #3f67ff;
    }
  }

  .footer {
    justify-content: space-between;
    display: flex;
    margin-top: 8px;

    .stars {
      .mark {
        font-weight: bold;
        font-size: 14px;
        margin-left: 8px;
      }

      ion-icon {
        color: #ffbc00;
        margin-right: 2px;
        position: relative;
        top: 2px;
      }
    }

    .distance {
      color: #818492;
      font-weight: bold;
      font-size: 14px;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .card-content {
    box-shadow: 0px 0px 16px #1f1a4550;
    background: #10285e;
  }
}
</style>