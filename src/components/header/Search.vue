<template>
  <div class="search-content">
    <ion-searchbar mode="ios" :placeholder="placeholder"></ion-searchbar>
  </div>
</template>

<script lang="ts">
import { IonSearchbar } from "@ionic/vue";
import { defineComponent } from "vue";
import { searchCircle } from "ionicons/icons";

export default defineComponent({
  name: "Search",
  props: ["placeholder"],
  components: { IonSearchbar },
  setup() {
    return { searchCircle };
  },
});
</script>

<style lang="scss" scoped>
.search-content {
  box-shadow: 0px 0px 16px #dfdfdf50;
  background: #ffffff;
  border-radius: 8px;
  margin: auto 16px;

  ion-searchbar {
    --background: #ffffff;
    --icon-color: #3f67ff;
  }
}
@media (prefers-color-scheme: dark) {
  .search-content {
    box-shadow: 0px 0px 16px #041b4a50;
    background: #03276b;
    ion-searchbar {
      --background: #03276b;
    }
  }
}
</style>