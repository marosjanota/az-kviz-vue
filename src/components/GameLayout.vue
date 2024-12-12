<template lang="html">
    <div class="container">
        <div v-for="hexa in hexagonList" :key="hexa.number" class="hexagon-wrapper">
            <div class="hexagon hexagon-medium " 
                    :class="{
                        'user-1': hexa.winner === 1,
                        'user-2': hexa.winner === 2,
                        'user-none': hexa.winner === 0,
                    }"
                    @click="setQuestion(hexa)">
                <span class="hexagon-number">{{hexa.number}}</span>
            </div>
        </div>
    </div>
    <CurrentQuestion 
        :questions="hexagonList" 
        :number="num"
        v-if="this.$store.state.currentQuestion" />
</template>
<script>
import { reactive, ref } from 'vue'
import {  useStore } from "vuex"

import CurrentQuestion from "@/components/CurrentQuestion.vue"

export default {
    components: {
        CurrentQuestion
    },
    setup () {
        const store = useStore()
        const gameQuestions = reactive([])

        const qList1 = store.getters.getFirstQeustionsList
        const qList2 = store.getters.getSecondQeustionsList

        const hexagonList = reactive([])
        const num = ref(0)

        var audioShow = new Audio(require('@/assets/audio/q-show.ogg'))
        var audioStart = new Audio(require('@/assets/audio/q-start.ogg'))
        audioStart.play()

        for (let h = 1; h < 22  ; h++) {
            hexagonList.push({
                number: h,
                winner: null,
                q1: qList1[h - 1],
                q2: qList2[h - 1]
            })            
        }

        const setQuestion = (q) => {
            num.value = q.number
            if(q.winner === null) {
                store.commit('SET_QUESTION', qList1.find(i => i.id === q.q1.id))
                localStorage.setItem("first", localStorage.getItem("first") + q.q1.id + ",")
            } 
            else if(q.winner === 0) {
                store.commit('SET_QUESTION', qList2.find(i => i.id === q.q2.id))
                localStorage.setItem("second", localStorage.getItem("second") + q.q1.id + ",")
            } else {
                // Has winner - not todo or only provide winner change option
            }
            audioShow.play()
        }

        return {
            gameQuestions,
            hexagonList,
            setQuestion,
            num
        }
    }
}
</script>