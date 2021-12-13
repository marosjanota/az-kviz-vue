<template lang="">
    <div class="game--intro" v-if="currentPart < 4">
        <div class="intro--part-01" v-if="currentPart == 1">
            <img :src="require('@/assets/ltgb.jpg')" @click="currentPart = 2" class="c-p"/>
        </div>
        <div class="intro--part-02"  v-if="currentPart == 2">
            <div class="users-box">
                <div>
                    <div class="users-box--img user-img-01">
                        <img :src="require('@/assets/images/char1.png')" />
                    </div>
                    <input v-model="players.player1name" placeholder="Player 1">
                </div>
                <div class="users-vs">
                    <img :src="require('@/assets/images/vs.png')" />
                </div>
                <div>
                    <div class="users-box--img user-img-02">
                        <img :src="require('@/assets/images/char2.png')" />
                    </div>
                    <input v-model="players.player2name" placeholder="Player 2">
                </div>
            </div>
            <div class="intro--submit" v-if="(players.player1name && players.player2name)">
                <img :src="require('@/assets/images/fight.png')" class="submit-btn c-p" @click="currentPart = 3"/>
            </div>
        </div>
        <div class="intro--part-03"  v-if="currentPart == 3">
            <video :src="require('@/assets/video/azkviz.mp4')" class="az-video" autoplay></video>
            <button class="btn c-p" @click="saveAndStart">Let's play!</button>
        </div>
    </div>
    <div v-if="currentPart == 4">
        <Game />
    </div>
</template>

<script>
import Game from "./Game.vue"

export default {
    components: {
        Game
    },
    data () {
        return {
            currentPart: 1,
            players: {
                player1name: '',
                player2name: ''
            }
        }
    },
    methods: {
        saveAndStart() {
            this.$store.commit('SET_PLAYERS_NAMES', this.players)
            this.currentPart = 4
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        position: fixed;
        bottom: 10vh;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: var(--color-primary);
        padding: 2rem;
        z-index: 5;
        border: 2px solid transparent;
        border-radius: 15px;
        font-size: 2rem;
        transition: all .25s ease;
        
        &:hover {
            border: 2px solid var(--color-secondary)
        }
    }
    .game--intro {
        position: relative;
    }
    
    .az-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
    }
</style>