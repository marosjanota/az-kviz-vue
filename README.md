# AZ Kviz (with numbers)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Game Rules
Goal is to create path to connect all three sides of the triangle. 

### Playing Boxes (Hexagons with numbers)
Each box contains two types of questions. 
The first question is answered verbally and the HINT is usually the first letter of the answer (or INT - when it's a number).
If the competitor guesses the correct answer, he will get the box. If he does not guess correctly, the opponent can answer this question.
Note: the opponent does not have to answer if the box does not suit him. If he answers, he will lose the move in the next round.
If the box remains unanswered (X), it may be selected again and the second question will have answer "yes or no".

## Game interface
- Player names must be entered
- The question is selected by clicking on the hexagon with the number
- When the question is read, a timer must be started - by clicking on the hint
- The winner is marked by clicking on his name below the question
- If someone successfully creates a path to the three sides of the triangle, the winner is displayed by clicking on their name in the upper corners
