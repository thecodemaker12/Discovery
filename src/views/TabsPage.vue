<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" class="tab-menu" mode="ios">
        <ion-tab-button tab="home" href="/home" @click="principal = 'home'">
          <ion-icon aria-hidden="true" :icon="home" />
        </ion-tab-button>

        <ion-tab-button
          tab="discover"
          href="/discover"
          @click="principal = 'discover'"
        >
          <ion-icon aria-hidden="true" :icon="earth" />
        </ion-tab-button>

        <div class="principal">
          <ion-tab-button tab="#" href="#">
            <ion-icon
              v-if="principal === 'home'"
              aria-hidden="true"
              :icon="navigate"
            />
            <ion-icon
              v-else-if="principal === 'discover'"
              aria-hidden="true"
              :icon="map"
            />
            <ion-icon
              v-else-if="principal === 'social-hub'"
              aria-hidden="true"
              :icon="add"
            />
            <ion-icon
              v-else-if="principal === 'settings'"
              aria-hidden="true"
              :icon="person"
            />
          </ion-tab-button>
        </div>

        <ion-tab-button
          tab="social-hub"
          href="/social-hub"
          @click="principal = 'social-hub'"
        >
          <ion-icon aria-hidden="true" :icon="people" />
        </ion-tab-button>

        <ion-tab-button
          tab="settings"
          href="/settings"
          @click="principal = 'settings'"
        >
          <ion-icon aria-hidden="true" :icon="settings" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  earth,
  people,
  home,
  settings,
  navigate,
  map,
  add,
  person,
} from "ionicons/icons";

export default {
  components: {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },

  setup() {
    return {
      earth,
      people,
      home,
      settings,
      navigate,
      map,
      add,
      person,
    };
  },

  data() {
    return {
      principal: "home",
    };
  },
};
</script>


<style lang="scss" scoped>
.tab-menu {
  box-shadow: 0px -3px 30px #dfdfdf;
  contain: size style !important;
  background-color: #f1f6ff;
  position: unset !important;
  padding: 16px 0px;
  border: none;

  ion-tab-button {
    background-color: #f1f6ff;
  }

  .principal {
    border: 12px solid rgb(233 241 254);
    box-shadow: 0px 0px 3px #d2d2d2;
    background-color: #3f67ff;
    border-radius: 50px;
    color: #ffffff;
    margin-top: -80px;
    padding: 8px;

    ion-tab-button {
      color: #ffffff;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .tab-menu {
    box-shadow: 0px -3px 30px #120d3d;
    background-color: #1a163e;

    ion-tab-button {
      background-color: #1a163e;
    }

    .principal {
      box-shadow: 0px 0px 3px #120d3d;
      border: 12px solid #221e40;
    }
  }
}
</style>