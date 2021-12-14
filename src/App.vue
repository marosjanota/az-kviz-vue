<template>
  <div>
    <Snow />
      
    <img :src="`${bgPath}`" class="app--bg" />
    <img :src="`${logoPath}`" class="app--logo" />

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
  },
  setup() {
    const company = "chyron"
    //const company = "riganti"

    const logoPath = '/logo-' + company +  '.svg'
    const bgPath = '/bg-' + company +  '.svg'

    return {
      logoPath,
      bgPath
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/app.scss";
@import "@/styles/hexagon.scss";
@import "@/styles/users.scss";
</style>
