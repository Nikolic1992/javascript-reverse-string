function reverseString(str) {
  return str.split("").reverse().join(""); // First we split string to single characters, then we reverse them and re-join
}

// Example usage:
console.log(reverseString("Congratulations!")); // Expected output: "!snoitalutargnoC"
