export function getRandomItems(questions: Array<any>, count = 21) {
    var qList = []

    for (let q = 0; q < count; q++) {
        var random = Math.floor(Math.random() * (questions.length - 1)) + 1
        qList.push(questions[random])
        questions.splice(random, 1)
    }
    return qList
}
