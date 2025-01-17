import $ from './common/$.js'
class Hero {
  #directionBtn
  #viewport
  #imageSize
  #currentImage
  #viewportPosition

  constructor() {
    this.#directionBtn = $('.carousel-directionArrows')
    this.#viewport = this.#directionBtn.previousElementSibling.firstElementChild
    this.#imageSize = 1500
    this.#currentImage = 1
    this.#viewportPosition = -(this.#imageSize * this.#currentImage)
  }

  init() {
    this.addEvents()
    this.autoSlide()
  }

  addEvents() {
    this.#directionBtn.addEventListener('click', ({ target }) => {
      const [leftButton, rightButton] = [
        '.carousel-left',
        '.carousel-right'
      ].map(className => target.closest(className))

      if (leftButton) this.slidePrev()
      if (rightButton) this.slideNext()
    })

    this.#viewport.addEventListener('transitionend', () => {
      if (this.#currentImage <= 0) {
        this.#viewport.style.transition = 'none'
        this.#viewport.style.transform = 'translateX(-9000px)'
        this.#viewportPosition = -9000
        this.#currentImage = 6
      }

      if (this.#currentImage >= 7) {
        this.#viewport.style.transition = 'none'
        this.#viewport.style.transform = 'translateX(-1500px)'
        this.#viewportPosition = -1500
        this.#currentImage = 1
      }
    })
  }

  autoSlide() {
    const DELAY_TIME = 10000
    setInterval(() => {
      this.slideNext()
    }, DELAY_TIME)
  }

  slidePrev() {
    this.#currentImage -= 1
    this.#viewportPosition += this.#imageSize
    this.#viewport.style.transform = `translateX(${this.#viewportPosition}px)`
    this.#viewport.style.transition = 'transform .5s'
  }

  slideNext() {
    this.#currentImage += 1
    this.#viewportPosition -= this.#imageSize
    this.#viewport.style.transform = `translateX(${this.#viewportPosition}px)`
    this.#viewport.style.transition = 'transform .5s'
  }
}

const hero = new Hero()
hero.init()
