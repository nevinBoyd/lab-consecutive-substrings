function consecutiveSubstrings(string) {
  // type your code here
  let results = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      results.push(string.slice(i, j));
    }
  }

  return results;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: ['a', 'ab', 'b']");
  console.log("=>", consecutiveSubstrings('ab'));

  console.log("");

}

module.exports = consecutiveSubstrings;


