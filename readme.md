# 🎯 아마존

## 학습정리

### 3주차

- [ ] ES Classes
- this
  - [x] call
  - [x] bind
- CSS
  - [x] transiton vs animation
  - [x] transition
  - [ ] transform
- [ ] Carousel
- [x] SASS
- [ ] Vsync
- [ ] fps
- [ ] requestAnimationFrame
- [ ] OOP
- [ ] Prototype

### 2주차

### crong's review

- [x] defer vs asyc
- [x] `DOMContentLoaded` vs `load`
  - `addEventListener('DOMContentLoaded', () => {})`  
    초기 HTML 문서를 완전히 불러오고 분석했을 때 발생한다. 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않는다.
  - `addEventListener('load', () => {})`  
    리소스와 그것에 의존하는 리소스들의 로딩이 완료되면 실행된다.
- [x] transition으로 애니메이션 구현해보기
- [x] list 형태는 `li` 태그 사용하기
- [x] 전역변수로 선언되어 있는 `querySeletor` 함수 안으로 넣기
- [ ] `openAllItems` 함수가 호출될 때마다 이벤트가 **등록**되니 확인 후 리팩토링 하기
- [x] `detailMenuHandler` 함수 -> `({ target: { textContent: menu } }) => {`

### DOM, EVENT 제어

- [x] `template literal`
- [x] `createElement`
- [x] `appendChild`
- [x] `insertBefore`
- [x] `event.target`
- [x] `event.preventDefault()`
- Event delegation
  - [x] 버블링
  - [x] 캡쳐링

### CSS

- 단위 공부
  - [x] em : 부모 요소의 글꼴 크기에 따라 상대적으로 크기를 조정 (상대적)
  - [x] rem : HTML 요소의 루트 요소(일반적으로 html 요소)의 글꼴 크기에 따라 상대적으로 크기를 조정 (상대적)

### 추가 요구 사항

- [ ] 메뉴 항목의 갯수가 증가/감소 한다고 생각하면 코드에서 어떻게 대응해야 할까?
- [ ] 메뉴 항목의 애니메이션 표현방식이 변경되면 코드에서 어떻게 대응해야 할까?

## 💻 기능 구현

### 1주차

- 상단 네비게이션 바
  - 공통
    - [x] 각 호버 영역 혹은 레이어 영역은 마우스가 벗어나면 레이어와 효과가 사라지게 한다.
    - [x] 상단바는 화면의 가로 사이즈가 1120px 이상으로 늘어나는 경우, 검색바가 길어지고 화면의 가로사이즈에 맞춰 늘어나도록 한다.
    - [x] 이 때 본문 영역은 1120px로 고정비를 유지하도록 한다.
  - 로그인
    - [x] 메인 페이지 진입 1초 뒤 [로그인] 버튼 스르륵 보이게 한다.
    - [x] [로그인] 영역에 마우스를 호버하면 확장된 버전의 레이어가 뜨게 한다.
    - [x] 이 때 배경은 딤 처리 한다.
  - 배송처 영역
    - [x] [배송처 영역]에 마우스를 호버하면 주소 변경에 대한 레이어가 뜨게 한다.
    - [x] 로그인 레이어와 동일한 배경은 딤 처리 한다.
  - 모달
    - [x] 우측 상단 - 국가, 계정 및 목록
    - [x] alert이나 confirm 함수를 사용하지 않는다.
- 사이드 바
  - [x] 상단 바의 [모두] 버튼을 누르면 좌측에 사이드바가 애니메이션과 함께 나온다.
  - [x] X 버튼으로 사이드 바가 닫히도록 한다.
  - [x] 로그인 버튼은 실제로 동작하지 않는다.
  - [x] 각 목록은 마우스를 호버하면 배경색과 아이콘 색이 변하는 효과를 준다.
  - [x] [모두 보기]를 클릭하면 접혀 있는 카테고리가 아래로 펼쳐지게 하고 애니메이션을 준다.
  - [x] [간단히 보기]를 클릭하면 애니메이션 효과와 함께 목록이 다시 접히게 한다.
  - [x] [부서별 쇼핑] 하위 카테고리를 클릭하면 우측에서 좌측으로 내역이 보이도록 애니메이션을 준다.
  - [x] 각 카테고리 항목은 실제로 작동하지 않는다.

### 2주차

- [x] 사이드바 애니메이션 (trasition 사용)
  - [x] 항목 접기
  - [x] 항목 펼치기
- [x] 하위 메뉴 영역 노출
- DOM 조작시 아래 메서드 활용
  - [x] `createElement`
  - [x] `appendChild`
  - [x] `insertBefore`
- [x] rem 단위 사용해보기

### 3주차

- 히어로 영역
  - Carousel UX 구현 (무한 슬라이더)
  - [ ] 무한 슬라이더
  - [ ] 10초마다 다음 이미지
  - [ ] 좌, 우 화살표로 내용 변경
- [x] SASS 사용
- [ ] 객체지향 프로그래밍 적용
- [ ] 랜더링 작업에서 template literal 활용

- crong's review
  - [ ] `openAllItems` 와 `clsoseAllItems` 을 하나의 함수로 통일
  - [ ] `moveMain` 더 구체적인 이름으로 바꾸기
  - [ ] `hideSideBar` 열고 닫는 함수처럼 보이니 이름 바꾸기

## 📒 reference

[pull request](https://velog.io/@zansol/Pull-Request-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
[eslint & prettier](https://wooogy-egg.tistory.com/82)
[sementic tag](https://stonefree.tistory.com/59)
[CSS-flex](https://studiomeal.com/archives/197)
[CSS-flex 정렬](https://myhappyman.tistory.com/7)
