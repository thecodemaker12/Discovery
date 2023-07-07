<template>
  <div class="traveler-content">
    <img :src="traveler?.avatar" />
    <div class="name">{{ traveler?.name }}</div>
    <div class="discoveries">{{ traveler?.discoveries }} Discoveries</div>
    <div class="likes">
      <ion-icon :icon="heart"></ion-icon>
      <span class="count">{{ traveler?.likes }} likes</span>
    </div>
  </div>
</template>

<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { heart } from "ionicons/icons";

export default {
  name: "TravelerCard",
  props: ["traveler"],
  components: { IonIcon },

  setup() {
    return {
      heart,
    };
  },
};
</script>

<style lang="scss" scoped>
.traveler-content {
  box-shadow: 0px 0px 1px #dfdfdf;
  background: #ffffff;
  text-align: initial;
  border-radius: 8px;
  margin: 1px 6px;
  font-size: 16px;
  padding: 16px;

  img {
    border: 3px solid #efefef;
    border-radius: 50px;
    width: 45px;
  }

  .name {
    font-weight: 500;
    margin-bottom: 4px;
  }

  .discoveries {
    font-weight: 500;
    color: #818492;
    font-size: 14px;
  }

  .likes {
    margin-top: 16px;

    ion-icon {
      position: relative;
      color: red;
      top: 2px;
    }
    .count {
      font-weight: 400;
      margin-left: 4px;
      font-size: 14px;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .traveler-content {
    box-shadow: 0px 0px 1px #1f1a45;
    background: #03276b;

    img {
      border-color: #163878;
    }
  }
}
</style>