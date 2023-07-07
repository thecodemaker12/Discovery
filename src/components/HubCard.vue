<template>
  <div class="post-card">
    <div class="post-info">
      <img :src="post?.poster?.avatar" width="50" />
      <div class="post-posted">
        <div class="name">{{ post?.poster?.name }}</div>
        <div class="date">{{ post?.date }}</div>
      </div>
    </div>
    <div class="post-message">
      {{ post?.description }}
    </div>
    <div class="post-images">
      <div class="image-grid principal"></div>
      <div class="secondary">
        <div class="image-grid"></div>
        <div class="image-grid"></div>
      </div>
    </div>
    <div class="interactions">
      <div class="likes">
        <ion-icon :icon="heart" slot="start"></ion-icon>
        {{ post?.reactions?.likes }} likes
      </div>
      <div class="comments">
        <ion-icon :icon="chatbubbles"></ion-icon>
        {{ post?.reactions?.comments }} comments
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { heart, chatbubbles } from "ionicons/icons";

export default {
  name: "HubCard",
  props: ["post"],

  components: { IonIcon },

  setup() {
    return {
      chatbubbles,
      heart,
    };
  },
};
</script>


<style lang="scss" scoped>
.post-card {
  box-shadow: 0px 0px 16px #dfdfdf50;
  background: #ffffff;
  margin-bottom: 16px;
  border-radius: 12px;
  padding: 16px;

  .post-info {
    display: flex;
    img {
      border: 3px solid #efefef;
      border-radius: 50px;
      margin-right: 16px;
    }

    .post-posted {
      padding-top: 8px;
      .name {
        font-weight: bold;
      }
      .date {
        font-weight: 300;
        font-size: 12px;
        opacity: 0.6;
      }
    }
  }
  .post-message {
    margin-top: 8px;
    opacity: 0.6;
  }

  .post-images {
    margin-top: 16px;
    display: flex;
    > div {
      border-radius: 8px;
      margin-right: 4px;
    }
    :first-child {
      width: 60%;
    }
    :last-child {
      width: 40%;
    }

    .principal {
      background-color: #e8f0ff;
      height: 180px;
    }
    .secondary {
      > div {
        background-color: #e8f0ff;
        border-radius: 8px;
        height: 88px;
        width: 100%;
      }
      :first-child {
        margin-bottom: 4px;
      }
    }
  }

  .interactions {
    border-top: 0.5px solid #cdcdcd;

    margin-top: 16px;
    display: flex;
    padding: 4px;
    padding-top: 12px;
    > div {
      font-weight: 600;
      font-size: 14px;
      width: 50%;

      ion-icon {
        background: #e8f0ff;
        border-radius: 50px;
        position: relative;
        padding: 4px;
        right: 4px;
        top: 6px;
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  .post-card {
    box-shadow: 0px 0px 1px #1f1a45;
    background: #03276b;

    img {
      border-color: #163878;
    }

    .interactions {
      > div {
        ion-icon {
          background: #1a163e;
        }
      }
    }
  }
}
</style>