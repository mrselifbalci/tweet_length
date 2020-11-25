const calculateCharacter = () => {
  let name = prompt("Enter your name");
  let tweet = prompt("Enter your tweet");
  let tweetCount = tweet.length;
  let tweetLeft = 150 - tweetCount;
  alert(
    `${name} has written ${tweetCount} characters, he/she has ${tweetLeft} characters remaning.`
  );
};
calculateCharacter();

// Invoke the function when button is clicked

btn.addEventListener("click", calculateCharacter);
