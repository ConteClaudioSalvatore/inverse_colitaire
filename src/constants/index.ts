const TOTAL_NUMBER_OF_CARDS = 52;
const CARDS_PER_SEED = 13;
const SEEDS = ["hearts", "spades", "diamonds", "clubs"];
const CARD_VALUES = [
  "A",
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
  "K",
];
const CARD_NUMERIC_VALUES = new Array(13).fill(0).map((_, i) => i + 1);

export {
  TOTAL_NUMBER_OF_CARDS,
  CARDS_PER_SEED,
  SEEDS,
  CARD_VALUES,
  CARD_NUMERIC_VALUES,
};
