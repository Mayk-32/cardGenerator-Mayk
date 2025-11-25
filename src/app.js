import "bootstrap";
import "./style.css";

  
const suits = [
{ symbol: "♠", class: "spade"},
{ symbol: "♥", class: "heart"},
{ symbol: "♦", class: "diamond"},
{ symbol: "♣", class: "club"}
];  
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const cardDiv = document.getElementById("card");

function randomCard() {
  const suitObj = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  return { value, suitObj };
}

function displayRandomCard() {
  const card = randomCard();
  cardDiv.className = "card";
  cardDiv.classList.add(card.suitObj.class);
  cardDiv.querySelector(".bottom-right").textContent = card.suitObj.symbol;
  cardDiv.querySelector(".top-left").textContent = card.suitObj.symbol;
  cardDiv.querySelector(".value").textContent = card.value;
}

window.addEventListener("DOMContentLoaded", displayRandomCard);

document.getElementById("drawBtn").addEventListener("click", displayRandomCard);