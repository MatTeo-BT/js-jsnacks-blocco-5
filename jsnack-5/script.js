// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti
const volleyTeams = [
    {
        name: "volleyAB",
        score: getRandomNumber(100, 300),
        fouls: getRandomNumber(10, 30)
    },
    {
        name: "volleyCD",
        score: getRandomNumber(100, 300),
        fouls: getRandomNumber(10, 30)
    },
    {
        name: "volleyEF",
        score: getRandomNumber(100, 300),
        fouls: getRandomNumber(10, 30)
    },
    {
        name: "volleyGH",
        score: getRandomNumber(100, 300),
        fouls: getRandomNumber(10, 30)
    },
    {
        name: "volleyIL",
        score: getRandomNumber(100, 300),
        fouls: getRandomNumber(10, 30)
    },
    {
        name: "volleyMN",
        score: getRandomNumber(100, 300),
        fouls: getRandomNumber(10, 30)
    },
    {
        name: "volleyOP",
        score: getRandomNumber(100, 300),
        fouls: getRandomNumber(10, 30)
    }
]

function getRandomNumber (min, max){
    return Math.floor(Math.random()* max - min)+ min;
  }
  
