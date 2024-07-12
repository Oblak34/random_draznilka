// массивы со словами
let randomBodyParts = ["голова", "глаз", "нос", "пупок"];
let randomAdjectives = ["вонючая", "дебильная", "вялая", "унылая"];
let randomWords = ["дубина", "мартышка", "козявка", "какашка", "пиявка"];

// генераторы рандома
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// склеиваем
let draznilka = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";

console.log(draznilka);