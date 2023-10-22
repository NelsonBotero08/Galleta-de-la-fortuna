function getRandomPhrase(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const phrase = arr[randomIndex];
  return phrase;
}

export default getRandomPhrase;
