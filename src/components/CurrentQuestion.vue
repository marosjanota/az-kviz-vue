<template lang="html">
    <div class="current-question">
        <svg class="progress c-p" x="0px" y="0px" viewBox="0 0 776 628" 
                ref="hintBox"
                @click="startCountdown">
            <path class="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
            <path class="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
            <text class="value" x="50%" y="61%">{{currentQuestion.hint}}</text>
        </svg>
        <div class="current-question-timer">
            <p>{{ countdownTime }}</p>
        </div>
        <div class="question" v-bind:class="{ 'timeout': timeoutPassed }">
            <p>{{ currentQuestion.question }}</p>
        </div>
        <div class="users-box">
            <div @click="setWinner(1)">
                <div class="hexagon user-1"></div>
                <span>{{ players.player1name }}</span>
            </div>
            <div @click="setWinner(2)">
                <div class="hexagon user-2"></div>
                <span>{{ players.player2name }}</span>
            </div>
            <div @click="setWinner(0)">
                <div class="hexagon"></div>
                <span>X</span>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
import { mapState, useStore } from "vuex";

export default {
    props: {
        questions: Array,
        number: Number,
    },
    computed: {
        ...mapState(["players", "currentQuestion"]),
    },
    setup (props) {
        const store = useStore()
        const countdownTime = ref(15)
        const hintBox = ref(null)
        const timeoutPassed = ref(false);

        var audioTimer = new Audio(require("@/assets/audio/q-timer.ogg"));
        var audioSent = new Audio(require("@/assets/audio/q-sent.ogg"));

        /* Do not remove this console log !!! */ 
        console.log("Answer is: " + store.state.currentQuestion.answer)

        function startCountdown () {
            hintBox.value.classList.add('start')
            if(countdownTime.value > 0 ) {
                setTimeout(() => {
                    countdownTime.value--;
                    if (countdownTime.value < 5) {
                        audioTimer.play();
                    }
                    startCountdown();
                }, 1000);
            } else {
                timeoutPassed.value = true
            }
        }

        const setWinner = (winner) => {
            audioSent.play();
            countdownTime.value = 0
            props.questions[props.number - 1].winner = winner
            store.commit("SET_QUESTION", null)
        };

        return {
            startCountdown,
            countdownTime,
            timeoutPassed,
            setWinner,
            hintBox
        }
    }
}
</script>
<style lang="scss">

@keyframes countdown {
    from {
        stroke: #20303B;
        stroke-dashoffset: 2160;
    }

    to {
        stroke: #ebabab;
        stroke-dashoffset: 0;
    }
}

.progress .track, .progress .fill{
	stroke-width: 40;
	transform: translate(290px, 800px) rotate(-120deg);
}

.progress {
	width: 400px;
	height: 480px;
    
    .track{
        fill: var(--color-default);
        stroke: #20303B;
    }

    .fill {
        fill: rgba(0,0,0,0);
        stroke: #20303B;
        stroke-linecap: round;
        stroke-dasharray: 2160;
        stroke-dashoffset: 2160;
        transition: stroke-dashoffset 1s;
    }

    &.start .fill {
        animation-duration: 15s;
        animation-name: countdown;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
}

.progress .value, .progress .text {
	fill: rgb(255, 255, 255);
	text-anchor: middle;
}

.progress .value {
	font-size: 180px;
}
.progress .text {
	font-size: 120px;
}
</style>
