export function getRandomQuestions(questions: Array<any>) {
    var qList = []

    for (let q = 0; q < 21; q++) {
        var random = Math.floor(Math.random() * (questions.length - 1)) + 1
        qList.push(questions[random])
        questions.splice(random, 1)
    }
    return qList
}
