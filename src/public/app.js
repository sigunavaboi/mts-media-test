class Content {
  constructor() {
    this.currentState = null;
    this.$lastButton = null;
    this.$buttons = [];
    this.$discList = [];
    this.init();
  }

  init() {
    this.$buttons = document.querySelectorAll('.content__item');
    this.$buttons.forEach(($button, i) => {
      $button.style.backgroundColor = this.getRandomColor();
      $button.addEventListener('click', (event) => {
        this.handleButtonClick(event, i);
      });
    });
    this.$discList = document.querySelectorAll('.content__description');    
  }
  
  handleButtonClick = (event, index) => {
    const descPosition = Math.floor(index / 3);
    this.$discList[descPosition].style.backgroundColor = event.target.style.backgroundColor;
    if (descPosition !== this.currentState) {
      this.$discList[this.currentState || 0].classList.remove('content__description_active');
      this.$discList[descPosition].classList.add('content__description_active');
      this.currentState = descPosition;
    }
    this.$lastButton = event.target;
    this.$lastButton.style.backgroundColor = this.getRandomColor();
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}


(() => {
  new Content();
})()