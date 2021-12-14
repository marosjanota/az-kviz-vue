import { createStore } from 'vuex'

import { questions as trueFalseQuestions } from "./trueFalseQuestions.json"
import { questions as answerQuestions } from "./answerQuestions.json"
import { getRandomQuestions } from '@/utils'

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
        getFirstQeustionsList: state => getRandomQuestions(state.firstQuestions),
        getSecondQeustionsList: state => getRandomQuestions(state.secondQuestions),
        getFinalQuestionsList: state => getRandomQuestions(state.firstQuestions.filter(i => i.finalRoundQuestion))
    }
})