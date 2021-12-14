<template lang="html">
    <div class="winner--overlay">
        <div class="winner--box">
            <a href="/">
                <img :src="require('@/assets/trophy.svg')" />
            </a>
            <h1>{{players.winner}}</h1>
        </div>
        <div class="pyro">
            <div class="before"></div>
            <div class="after"></div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(['players'])
    },
    setup() {
        
        var audioWinner = new Audio(require('@/assets/audio/winner.wav'))
        audioWinner.play()
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/winner.scss";
    .winner {
        &--overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: grid;
            place-items: center;
            background-color: var(--color-background);
        }

        &--box {
            position: relative;
            width: 500px;
        }
    }

    img {
        width: 100%;
    }

    h1 {
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>