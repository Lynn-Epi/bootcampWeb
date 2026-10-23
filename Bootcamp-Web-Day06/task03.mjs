export function countGs(word) {
  let gCounter = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "g" || word[i] === "G") {
      gCounter++;
    }
  }

  return gCounter;
}
