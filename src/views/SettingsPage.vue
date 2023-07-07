<template>
  <ion-page>
    <div class="container">
      <Toolbar
        title="Settings"
        subtitle="View and edit your settings."
        :mode="true"
      />
      <div class="content">
        <div class="group">
          <ion-item lines="none" mode="ios" button>
            <ion-icon
              :icon="notifications"
              color="primary"
              slot="start"
            ></ion-icon>
            <ion-label>Notifications</ion-label>
          </ion-item>

          <div class="trait"></div>

          <ion-item lines="none" mode="ios" button>
            <ion-icon :icon="language" color="primary" slot="start"></ion-icon>
            <ion-label>Language</ion-label>
          </ion-item>

          <div class="trait"></div>

          <ion-item lines="none" mode="ios" button>
            <ion-icon :icon="at" color="primary" slot="start"></ion-icon>
            <ion-label>Email</ion-label>
          </ion-item>
        </div>

        <div class="group">
          <ion-item lines="none" mode="ios" button>
            <ion-icon :icon="stopwatch" color="primary" slot="start"></ion-icon>
            <ion-label>Travel History</ion-label>
          </ion-item>

          <div class="trait"></div>

          <ion-item lines="none" mode="ios" button>
            <ion-icon
              :icon="informationCircle"
              color="primary"
              slot="start"
            ></ion-icon>
            <ion-label>About</ion-label>
          </ion-item>
        </div>

        <div class="group">
          <ion-item lines="none" mode="ios" button>
            <ion-icon :icon="logOut" color="primary" slot="start"></ion-icon>
            <ion-label>Log Out</ion-label>
          </ion-item>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonItem, IonLabel, IonIcon } from "@ionic/vue";
import Toolbar from "@/components/header/Toolbar.vue";
import {
  informationCircle,
  notifications,
  stopwatch,
  language,
  logOut,
  at,
} from "ionicons/icons";

export default {
  components: { IonPage, Toolbar, IonItem, IonLabel, IonIcon },

  setup() {
    return {
      informationCircle,
      notifications,
      stopwatch,
      language,
      logOut,
      at,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    margin-top: 45px;
    .group {
      box-shadow: 0px 0px 16px #dfdfdf90;
      margin-bottom: 16px;
      background: #ffffff;

      ion-item {
        padding: 8px;

        ion-label {
          font-weight: bold;
        }

        ion-icon {
          background: #3f65ff25;
          border-radius: 50px;
          padding: 4px;
        }
      }

      .trait {
        border: 1px solid #f2f6fc;
        margin: auto;
        width: 90%;
      }
    }

    @media (prefers-color-scheme: dark) {
      .group {
        box-shadow: 0px 0px 16px #1f1a4550;
        background: #10285e;

        ion-item {
          --background: #10285e;
        }

        .trait {
          border-color: #173176;
        }
      }
    }
  }
}
</style>