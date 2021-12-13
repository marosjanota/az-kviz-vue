<template lang="html">
    <div>
        <div class="users-top">
            <div @click="setWinner(players.player1name)">
                <div class="hexagon user-1"></div>
                <span>{{players.player1name}}</span>
            </div>
            <div @click="setWinner(players.player2name)">
                <div class="hexagon user-2"></div>
                <span>{{players.player2name}}</span>
            </div>
        </div>

        <GameLayout />
        <Winner v-if="players.winner"/>
    </div>
</template>
<script>
import { mapState } from "vuex"

import GameLayout from "@/components/GameLayout.vue"
import Winner from "@/components/Winner.vue"

export default {
    components: {
        GameLayout,
        Winner
    },
    computed: {
        ...mapState(['players'])
    },
    methods: {
        setWinner(winner) {
            this.$store.commit('SET_WINNER', winner)
        }
    }
}
</script>
<style lang="scss">
    @import "@/styles/game.scss";
</style>