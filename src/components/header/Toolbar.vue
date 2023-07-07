<template>
  <div class="toolbar">
    <div class="title">
      {{ title }}
      <div class="subtitle">
        {{ subtitle }}
      </div>
    </div>
    <div class="secondary">
      <ion-button v-if="mode" class="mode" size="small" fill="clear">
        <ion-icon slot="icon-only" :icon="moon"></ion-icon>
      </ion-button>
      <img v-else src="/thecodemaker-avatar.jpeg" alt="Profile" />
    </div>
  </div>
</template>

<script lang="ts">
import { IonIcon, IonButton } from "@ionic/vue";
import { moon } from "ionicons/icons";

export default {
  name: "Toolbar",
  props: ["title", "subtitle", "mode"],

  components: {
    IonIcon,
    IonButton,
  },

  setup() {
    return {
      moon,
    };
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
  justify-content: space-between;
  display: flex;
  padding: 16px;
  margin: 12px 0;
  .title {
    font-size: 24px;
    font-weight: bold;

    .subtitle {
      letter-spacing: 0.5px;
      font-weight: normal;
      color: #818492;
      font-size: 16px;
      margin-top: 8px;
    }
  }

  .secondary {
    img {
      box-shadow: 0px 0px 9px #dfdfdf;
      border-radius: 50px;
      filter: grayscale(1);
      width: 45px;
    }

    .mode {
      background: #3f65ff25;
      border-radius: 50px;
      width: 45px;
      height: 45px;
    }
  }
}
@media (prefers-color-scheme: dark) {
  .toolbar {
    .secondary {
      img {
        box-shadow: 0px 0px 9px #120d3d;
      }
    }
  }
}
</style>