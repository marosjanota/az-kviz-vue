<template lang="html">
    <div class="current-question">
        <div class="hexagon hexagon-big" @click="startCountdown">
            <span class="hexagon-letter">{{ currentQuestion.hint }}</span>
        </div>
        <div class="current-question-timer">
            <p>{{ countdownTime }}</p>
        </div>
        <div class="question" v-bind:class="{ timeout: timeoutPassed }">
            <p>{{ currentQuestion.question }}</p>
        </div>
        <div class="users-box">
            <div @click="setWinner(1)">
                <!--  TODO CLick event -->
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
//@ts-check

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
    setup(props) {
        const store = useStore();
        const countdownTime = ref(10);
        const isQuestionActive = ref(true);
        const timeoutPassed = ref(false);

        var audioTimer = new Audio(require("@/assets/audio/q-timer.ogg"));
        var audioSent = new Audio(require("@/assets/audio/q-sent.ogg"));

        console.log("Answer is: " + store.state.currentQuestion.answer);

        function startCountdown() {
            if (countdownTime.value > 0) {
                setTimeout(() => {
                    countdownTime.value--;
                    if (countdownTime.value < 5) {
                        audioTimer.play();
                    }
                    startCountdown();
                }, 1000);
            } else {
                isQuestionActive.value = false;
                timeoutPassed.value = true;
            }
        }

        const setWinner = (winner) => {
            audioSent.play();
            isQuestionActive.valse = false;
            props.questions[props.number - 1].winner = winner;
            store.commit("SET_QUESTION", null);
        };

        return {
            startCountdown,
            countdownTime,
            setWinner,
            timeoutPassed,
        };
    },
};
</script>
