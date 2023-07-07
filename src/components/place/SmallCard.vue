<template>
  <div class="card-content">
    <div
      class="image"
      :style="`background-image: url(${place?.images[0]})`"
    ></div>

    <div class="title">{{ place?.name }}</div>

    <div class="tags">
      <span class="tag" v-for="(tag, i) in place?.tags" :key="i">{{ tag }}</span>
    </div>

    <div class="location">
      <ion-icon :icon="location"></ion-icon> {{ place?.town?.name }},
      {{ place?.town?.country }}
    </div>

    <div class="footer">
      <div class="stars">
        <ion-icon :icon="star"></ion-icon>
        <span class="mark">{{ place?.rates }}</span>
      </div>
      <div class="distance">{{ place?.distance }} km</div>
    </div>
  </div>
</template>

<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { location, star, starHalf } from "ionicons/icons";

export default {
  name: "PlaceSmallCard",
  props: ["place"],

  components: {
    IonIcon,
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
  text-align: initial;
  margin-bottom: 16px;
  border-radius: 8px;
  margin: 1px 6px;
  padding: 16px;

  .image {
    background-color: #e7effe;
    background-position: center;
    filter: brightness(0.9);
    background-size: cover;
    border-radius: 8px;
    min-height: 94px;
  }

  .title {
    font-weight: 500;
    margin: 8px 0px;
    font-size: 16px;
  }

  .tags {
    text-transform: lowercase;
    color: #818492;
    font-weight: 400;
    font-size: 12px;
    margin: 8px 0px;

    .tag::after {
      content: ", ";
    }

    .tag:last-child::after {
      content: "";
    }
  }

  .location {
    color: #818492;
    font-weight: 400;
    font-size: 14px;

    ion-icon {
      color: #3f67ff;
    }
  }

  .footer {
    justify-content: space-between;
    display: flex;
    margin-top: 8px;
    font-weight: 500;

    .stars {
      .mark {
        font-size: 14px;
        margin-left: 8px;
      }

      ion-icon {
        color: #ffbc00;
        position: relative;
        top: 3px;
      }
    }

    .distance {
      color: #818492;

      font-size: 14px;
      position: relative;
      top: 3px;
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