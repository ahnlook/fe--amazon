import $ from './common/$.js'
import extendArrow from '../asset/extendArrow.svg'

const SIDE_BAR_ITEMS = {
  '모두 보기': [
    '자동차 용품',
    '유아',
    '뷰티 및 퍼스널 케어',
    '여성 패션',
    '남성 패션',
    '여아용 의류',
    '남아용 의류',
    '건강 및 가정용품',
    '가정 및 주방',
    '산업용 및 과학용',
    '여행 가방',
    '영화 및 TV',
    '애완동물 용품',
    '소프트웨어',
    '스포츠 및 야외 활동',
    '공구 및 주택 개조',
    '장난감 및 게임',
    '비디오 게임',
  ],
  '자동차 용품': [
    '자동차 관리',
    '자동차 전자기기 및 악세서리',
    '실외용품 악세서리',
    '인테리어 악세서리',
    '램프 및 조명 악세서리',
    '오토바이 및 파워스포츠 차량 용품',
    '오일 및 유체',
    '페인트 및 도장용품',
    '퍼포먼스 부품 및 악세서리',
    '교체용 부품',
    'RV 부품 및 악세서리',
    '타이어 및 휠',
    '공구 및 장비',
    '자동차 매니아용 상품',
    '대형차 및 상용차 장비'
  ]
}

const EXTENDED_ITEMS = [
  '자동차 용품',
  '유아',
  '뷰티 및 퍼스널 케어',
  '여성 패션',
  '남성 패션',
  '여아용 의류',
  '남아용 의류',
  '건강 및 가정용품',
  '가정 및 주방',
  '산업용 및 과학용',
  '여행 가방',
  '영화 및 TV',
  '애완동물 용품',
  '소프트웨어',
  '스포츠 및 야외 활동',
  '공구 및 주택 개조',
  '장난감 및 게임',
  '비디오 게임',
]

const createExtensionItems = () => {
  const referenceNode = $('.side-menu__hide-button')
  const parentNode = referenceNode.parentNode

  EXTENDED_ITEMS.forEach(item => {
    const div = document.createElement('div')
    const span = document.createElement('span')
    const img = document.createElement('img')
    
    span.textContent = item
    div.classList.add('side-menu__item')
    img.setAttribute('src', extendArrow)
    img.setAttribute('alt', 'extendArrow')
    
    parentNode.insertBefore(div, referenceNode)
    div.appendChild(span)
    div.appendChild(img)
  })
}

createExtensionItems()

const detailMenuItemsHandler = () => {
  $('aside').addEventListener('click', ({
    target: { textContent: menu }
  }) => {
    const detailMenuItems = SIDE_BAR_ITEMS[menu]
  
    if (detailMenuItems) {
      createDetailMenuItems(menu)
    }
  })
}

const openDetailMenu = () => {
  const sideMain = $('.side-menu__main')
  const sideMenuDetail = $('.side-menu__detail')

  sideMain.style.display = 'none'
  sideMenuDetail.style.display = 'block'
  sideMenuDetail.style.animation = 'slide-to-left__open .5s forwards'
}

const createDetailMenuItems = (menu) => {
  const ul = $('.side-menu__contents > ul')
  ul.textContent = ''

  SIDE_BAR_ITEMS[menu].forEach(item => {
    const li = document.createElement('li')
    const span = document.createElement('span')
    
    span.textContent = item
    li.classList.add('side-menu__item')

    ul.appendChild(li)
    li.appendChild(span)
  })

  openDetailMenu()
}

detailMenuItemsHandler()
