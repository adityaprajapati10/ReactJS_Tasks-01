const wordsTextarea = document.querySelector(".counter .words")
const countBtn = document.querySelector(".counter .count-btn")
const wordCount = document.querySelector(".counter .word-count span")
const countWords = () => {
    let words = wordsTextarea.value;
    let wordsTrimmed = words.replace(/\s+/g, " ").trim();
    let splitWords = wordsTrimmed.split(" ")
    let noOfWords = splitWords.length;
    wordCount.innerHTML = noOfWords;
};
countBtn.addEventListener("click", countWords)