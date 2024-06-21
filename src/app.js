import "./style.css";
document.onreadystatechange = function(event) {
  if (document.readyState !== "complete") return;
  drawCard();
};

function drawCard() {
  const randomSuit = chooseRandomItemFrom(suits());
  const randomCardValue = chooseRandomItemFrom(cardValues());

  const suitSpans = document.querySelectorAll(".suit");
  for (const span of suitSpans) {
    span.textContent = randomSuit.label;
    span.style.color = randomSuit.color;
  }

  const cardValue = document.querySelectorAll(".cardValue");
  for (const value of cardValue) {
    value.textContent = randomCardValue;
  }
}

function chooseRandomItemFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function cardValues() {
  return [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
}

function suits() {
  return [
    {
      label: "♥",
      color: "red"
    },
    {
      label: "♣",
      color: "white"
    },
    {
      label: "♠",
      color: "white"
    },
    {
      label: "♦",
      color: "red"
    }
  ];
}
