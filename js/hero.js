import $ from './$.js'

class Hero {
  #directionButton
  #viewport
  #viewportPosition
  #IMAGE_SIZE
  
  init () {
    this.#directionButton = $('.carousel-directionArrows')
    this.#viewport = this.#directionButton.previousElementSibling.firstElementChild
    this.#viewportPosition = 0
    this.#IMAGE_SIZE = 1500

    this.onDirectButtonClick()
  }

  onDirectButtonClick () {
    this.#directionButton.addEventListener('click', ({ target }) => {
      const [leftButton, rightButton] = 
        ['.carousel-left', '.carousel-right'].map(className => 
          target.closest(className)
        )

      if (leftButton) this.slidePrev()
      if (rightButton) this.slideNext()
    })  
  }
  
  slidePrev () {
    this.#viewportPosition += this.#IMAGE_SIZE
    this.#viewport.style.transform = `translateX(${this.#viewportPosition}px)`
  }

  slideNext () {
    this.#viewportPosition -= this.#IMAGE_SIZE
    this.#viewport.style.transform = `translateX(${this.#viewportPosition}px)`
  }
}

const hreo = new Hero()
hreo.init()
