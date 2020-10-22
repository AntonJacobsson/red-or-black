export class App {

  public cards: Array<string>;
  public imageSrc: string = 'cards/backgrounddeck.png';
  public score: number = 0;
  public text: string = '';
  private roundCounter: number = 0;

  constructor() {

    this.cards = this.setupDeckOfCards();
  }

  public pickCard(color: number) {

    this.text = '';

    var random = this.getRandomInt(this.cards.length);
    var card = this.cards[random];
    this.imageSrc = card;

    if(color === 0 && random < 26) {
      this.score = this.score + 1;
    } else if (color === 1 && random >= 26) {
      this.score = this.score + 1;
    } else {
      this.score = 0;
      this.text = 'Drink!';
      this.roundCounter = this.roundCounter + 1;
    }

    if(this.score === 4) {
      this.text = 'Congratulations! Next players turn'
      this.score = 0;
      this.roundCounter = this.roundCounter -1;
      return;
    }

    if(this.roundCounter === 8) {
      var event = new CustomEvent("openBannerAd", { "detail": "Opens banner ad" });
      document.dispatchEvent(event);
    }

    if(this.roundCounter === 10) {
      var event = new CustomEvent("hideBannerAd", { "detail": "Hides banner ad" });
      document.dispatchEvent(event);
      this.roundCounter = 0;
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  setupDeckOfCards() {
    return new Array(
      "cards/ace_of_hearts.svg",
      "cards/2_of_hearts.svg",
      "cards/3_of_hearts.svg",
      "cards/4_of_hearts.svg",
      "cards/5_of_hearts.svg",
      "cards/6_of_hearts.svg",
      "cards/7_of_hearts.svg",
      "cards/8_of_hearts.svg",
      "cards/9_of_hearts.svg",
      "cards/10_of_hearts.svg",
      "cards/jack_of_hearts.svg",
      "cards/queen_of_hearts.svg",
      "cards/king_of_hearts.svg", 
      
      "cards/ace_of_diamonds.svg",
      "cards/2_of_diamonds.svg",
      "cards/3_of_diamonds.svg",
      "cards/4_of_diamonds.svg",
      "cards/5_of_diamonds.svg",
      "cards/6_of_diamonds.svg",
      "cards/7_of_diamonds.svg",
      "cards/8_of_diamonds.svg",
      "cards/9_of_diamonds.svg",
      "cards/10_of_diamonds.svg",
      "cards/jack_of_diamonds.svg",
      "cards/queen_of_diamonds.svg",
      "cards/king_of_diamonds.svg",
  
      "cards/ace_of_clubs.svg",
      "cards/2_of_clubs.svg",
      "cards/3_of_clubs.svg",
      "cards/4_of_clubs.svg",
      "cards/5_of_clubs.svg",
      "cards/6_of_clubs.svg",
      "cards/7_of_clubs.svg",
      "cards/8_of_clubs.svg",
      "cards/9_of_clubs.svg",
      "cards/10_of_clubs.svg",
      "cards/jack_of_clubs.svg",
      "cards/queen_of_clubs.svg",
      "cards/king_of_clubs.svg",
      
      "cards/ace_of_spades.svg",
      "cards/2_of_spades.svg",
      "cards/3_of_spades.svg",
      "cards/4_of_spades.svg",
      "cards/5_of_spades.svg",
      "cards/6_of_spades.svg",
      "cards/7_of_spades.svg",
      "cards/8_of_spades.svg",
      "cards/9_of_spades.svg",
      "cards/10_of_spades.svg",
      "cards/jack_of_spades.svg",
      "cards/queen_of_spades.svg",
      "cards/king_of_spades.svg"
    );
  }

}