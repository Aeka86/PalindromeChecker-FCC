function palindrome(str) {
  let alphanumericStr = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
  let reversedStr = alphanumericStr.split("").reverse().join("");
  return alphanumericStr === reversedStr;
}

function checkPalindrome() {
  let inputString = document.getElementById("inputString").value;
  let result = palindrome(inputString)
    ? "It's a palindrome!"
    : "It's not a palindrome.";
  document.getElementById("result").innerText = result;
}
