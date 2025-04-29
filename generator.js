const astrologySentences = ["thrives on challenges, always seeking new adventures and excitement daily.",
 "values comfort, stability, and indulges in life’s simple pleasures.",
  "communicates effortlessly, adapting quickly to any social situation encountered.",
  "nurtures loved ones, offering emotional support and unwavering loyalty always.",
  "shines brightly, craving attention and recognition for their creative talents.",
  "analyzes details meticulously, striving for perfection in every task."
]

const sign = ["Aries ", "Taurus ", "Gemini ", "Cancer ", "Leo ", "Virgo "]

// format sign + random sentence + random sentence

function generateNumber() {
  return Math.floor(Math.random() * 6)
}

function createSentence(str1, str2, str3) {
  return `${str1}${str2} Also it ${str3}`
}

let numbers = []

for (let i = 0; i < 3; i++) {
  let number = generateNumber()
  numbers.push(number)
}

console.log(createSentence(sign[numbers[0]], astrologySentences[numbers[1]], astrologySentences[numbers[2]]))