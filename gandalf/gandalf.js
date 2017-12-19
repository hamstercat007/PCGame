$(document).ready(function(){
  let audio = new Audio('SupermanTheme.mp3');
  audio.play();
  $(".earth").click(function(){
    setTimeout(function() {
      window.location.href = "../renaissance/renaissance.html";
    }, 1000);
  })
});

// let purrCoinWalletKey = "purrCoins"

// function initPurrCoinWallet() {
//    localStorage.setItem(purrCoinWalletKey, "7")
// };

// function removePurrCoint() {
//   let currentBalance = localStorage.getItem(purrCoinWalletKey);

// //create function which gets the current balance

//   let newBalance = currentBalance--;
//   localStorage.setItem(purrCoinWalletKey, newBalance);
// };

// function addPurrCoin() {
//   let currentBalance = localStorage.getItem(purrCoinWalletKey).toFixed();
//   //convert from string to number at home
//   let newBalance = currentBalance--;
//   localStorage.setItem(purrCoinWalletKey, newBalance);
// }
