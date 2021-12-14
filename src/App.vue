<template>
  <div>
    <Snow />
    <img :src="require('@/assets/chyron.svg')" class="chyron--bg" />
    <div class="game">
        <Intro /> 
    </div>
  </div>
</template>

<script>
import Intro from "@/views/Intro.vue";
import Snow from "@/components/Snowflakes.vue"

export default {
  components: {
    Intro,
    Snow
  }
}
</script>

<style lang="scss">
@import "@/styles/app.scss";
@import "@/styles/hexagon.scss";
@import "@/styles/users.scss";
</style>
