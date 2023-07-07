<template>
  <div class="traveler-content">
    <img :src="traveler?.avatar" />
    <div class="name">{{ traveler?.name }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SimpleTraveler",
  props: ["traveler"],
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
  text-align: center;

  img {
    border: 3px solid #efefef;
    border-radius: 50px;
    max-width: 90px !important;
  }

  .name {
    font-weight: 300;
    margin-bottom: 4px;
    font-size: 14px;
    letter-spacing: 0.5px;
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