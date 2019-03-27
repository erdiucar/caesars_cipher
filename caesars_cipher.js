// Is the character alphabetic?
function isAlpha(str) {
  return str.length === 1 && (/^[a-z]+$/i).test(str);
}

// Caesars cipher function
function rot13(str) {
  // Convert string to upper case
  let notCipheredStr = str.toUpperCase();
  let cipheredStr = '';

  // Check all characters
  for (let index = 0; index < notCipheredStr.length; index++) {
    const element = notCipheredStr[index];
    
    // If the char is alphabetic, sum with 13 on ASCII table
    if (isAlpha(element)) {
      cipheredStr += String.fromCharCode(((element.charCodeAt(0) - 65 + 13) % 26) + 65);
    } else {
      cipheredStr += element;
    }
  }

  return cipheredStr;
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');
