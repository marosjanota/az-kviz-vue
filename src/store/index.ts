import { createStore } from 'vuex'

import { questions as trueFalseQuestions } from "./trueFalseQuestions.json"
import { questions as answerQuestions } from "./answerQuestions.json"
import { getRandomItems } from '@/utils'

export default createStore({
    state: {
        players: {
            player1name: "",
            player2name: "",
            winner: null,
            unused: true
        },
        currentQuestion: null,
        firstQuestions: answerQuestions,
        secondQuestions: trueFalseQuestions
    },
    mutations: {
        SET_PLAYERS_NAMES(state, value) {
            state.players = value
        },
        SET_WINNER(state, value) {
            state.players.winner = value
        },
        SET_QUESTION(state, value) {
            state.currentQuestion = value
        }
    },
    getters: {
        getFirstQeustionsList: state => getRandomItems(state.firstQuestions),
        getSecondQeustionsList: state => getRandomItems(state.secondQuestions),
        getFinalQuestionsList: state => getRandomItems(state.firstQuestions.filter(i => i.finalRoundQuestion))
    }
})