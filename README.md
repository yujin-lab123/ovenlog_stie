# 🍞ovenlog🍞

수제 베이커리를 판매하는 적응형 웹쇼핑몰

---

## 📌 목차 (Table of Contents)
- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 Stack](#-기술-stack)
- [폴더 구조](#-폴더-구조)
- [Issue Point](#-Issue-Point)
- [프로젝트 후기](#-프로젝트-후기)

---

## 🚀 프로젝트 소개
* 수제 베이커리와 프리미엄 디저트에 대한 소비자 관심 증가에 주목하여 기획한 온라인 쇼핑몰 프로젝트입니다.
* 다양한 베이커리 제품을 취향에 따라 탐색하고 편리하게 구매할 수 있는 쇼핑 경험을 제공합니다.

## ✨ 주요 기능
1. **회원가입** (Vanilla JavaScript 작성)
2. **슬라이드 메인 배너** (Swiper Plugin 편집 사용)
3. **찜하기, 장바구니 버튼 애니메이션 구현** (jQuery 및 JavaScript 사용)

## 🛠 기술 Stack
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/HTMLCSS.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/JavaScript.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/jQuery.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Mysql.png?raw=true" width="80">
</div>

## 🔗 Site Link
<a href="https://yujin-lab123.github.io/yujin_portfolio_site/" target="_blank" rel="noopener noreferrer">오븐로그 사이트 바로가기</a>


## 📌 Project Info
* Project : **OVENLOG(오븐로그)**
* Type : 개인 프로젝트
* Planning / Design: 2026.06
* Frontend: 2026.06 - 2026.07
* Refactoring: 2026.07 - 2026.08

## 👀 OVERVIEW
- 베이커리 적응형 웹사이트 퍼블리싱 개인 프로젝트.
- JavaScript 기반 UI 인터랙션 리팩토링
- JSON 데이터 바인딩 로그인·회원가입 구현

## 📁 폴더 구조
```text
📦 project-root
 ┣ 📂 css
 ┃ ┣ 📜 detail_page.css
 ┃ ┣ 📜 footer.css
 ┃ ┣ 📜 header.css
 ┃ ┣ 📜 main.css
 ┃ ┣ 📜 mypage.css
 ┃ ┣ 📜 notice_page.css
 ┃ ┗ 📜 sub_page.css
 ┣ 📂 font
 ┣ 📂 images
 ┣ 📜 detail_page.html
 ┣ 📜 index.html
 ┣ 📜 mypage.html
 ┣ 📜 notice_page.html
 ┣ 📜 script.js
 ┣ 📜 setting_js.html
 ┗ 📜 sub_page.html
```

# 💻 Issue Point

## 1. 회원가입 아이디 중복 확인
 > JSON 데이터 연동 및 데이터 검증
```javascript
let userlist = [];

fetch("./userlist.json")
  .then(Response => Response.json())
  .then(data => {
    userlist = data;
  })
  .catch(err => console.log(err));

// 아이디 중복 확인
userIdBtn.addEventListener('click', function(){

  const foundId = userlist.find(user => user.id === userId.value);

  if(!foundId){
    idNoti.textContent = '사용가능한 아이디입니다.';
    idNoti.style.color = 'blue';
    isIdChecked = true;
  }else{
    idNoti.textContent = '이미 사용 중인 아이디입니다.';
    idNoti.style.color = 'red';
    isIdChecked = false;
    userId.select();
  }
});

```
<div>
<img width="1497" height="617" alt="ovenlog_readme01" src="https://github.com/user-attachments/assets/eeeaff84-cf87-42e7-b430-4e5f33790f37" />
<img width="1417" height="642" alt="ovenlog_readme02" src="https://github.com/user-attachments/assets/22dbd228-9171-4f0b-99d8-805db99d6aac" />
<img width="1412" height="592" alt="ovenlog_readme03" src="https://github.com/user-attachments/assets/d7aad72a-1eaa-4570-b864-43e1aa562484" />
</div>


**Problem**
- 회원가입 시 이미 사용 중인 아이디가 입력될 수 있음
- 아이디 입력 형식 검사만으로는 중복 여부를 확인할 수 없음
- 중복 확인 후 아이디를 다시 수정하는 경우, 기존 중복 확인 결과가 유효하지 않게 됨


**Solution**
- fetch()를 활용해 JSON 회원 데이터를 불러오도록 구현
- find()를 사용해 입력한 아이디와 기존 회원 데이터를 비교
- isIdChecked 변수를 활용해 중복 확인 여부를 관리하고, 아이디 수정 시 확인 상태를 초기화하도록 구현
<br>

## 2. 상품 수량 및 가격 계산
 > 함수 재사용 및 동적 UI
```javascript
const price = 8200;
const discount = 7626;
let cnt = 2;

function updatePrice() {
  let totalOld = (price * cnt).toLocaleString() + '원';
  let totalNew = (discount * cnt).toLocaleString() + '원';

  $('#count_box span').text(cnt);
  $('.choice_box .price .old_price').text(totalOld);
  $('.choice_box .price .new_price').text(totalNew);
  $('.total_price #new_price').text(totalNew);
}

// 수량 증가
$('.btn_plus').click(function(){
  cnt++;

  if(cnt >= 100){
    cnt = 100;
    alert('100개 이상 주문 시 대량 주문 기능을 이용해주세요.');
  }

  updatePrice();
});
```

**Problem**
- 사용자가 상품 수량을 변경하면 총 상품 금액도 함께 변경되어야 함
- 최소 및 최대 주문 수량을 제한할 필요가 있음
- 할인 전 가격과 할인 후 가격을 각각 계산해야 함


**Solution**
- cnt 변수로 현재 상품 수량 관리
- updatePrice() 함수를 만들어 수량 변경 시 가격 정보를 일괄 갱신
- 조건문으로 최소 1개, 최대 100개까지 주문 수량 제한
<br>

## 3. 카카오 주소 검색 API
 > 외부 API 연동
```javascript
postCodeBtn.addEventListener('click', function(){

  new kakao.Postcode({
    oncomplete: function(data) {

      let fullAddress = '';

      if(data.userSelectedType === 'R'){
        fullAddress = data.roadAddress;
      }else{
        fullAddress = data.jibunAddress;
      }

      zonecodeInput.value = data.zonecode;
      addressInput.value = fullAddress;
      detailAddressInput.focus();

    }
  }).open();

});
```

**Problem**
- 사용자가 주소를 직접 입력해야 하는 번거로움이 있음
- 도로명 주소와 지번 주소를 구분해서 입력하기 어려움
- 우편번호와 주소 정보를 정확하게 입력할 필요가 있음


**Solution**
- 카카오 우편번호 서비스를 연동해 주소 검색 기능 구현
- 사용자가 선택한 주소 유형에 따라 도로명 또는 지번 주소를 가져오도록 처리
- 검색 결과에서 우편번호와 주소를 입력창에 자동 반영하고 상세주소 입력창으로 포커스 이동
<br>

## 4. 로그인 유효성 검사
 > 데이터 조회 및 조건별 예외 처리
```javascript
const foundUser = userlist.find(
  user => user.id === loginId.value
);

if(!foundUser){
  idNoti.textContent = '아이디가 존재하지 않거나 올바르지 않습니다.';
  failPopup.classList.add('active');
  loginId.select();
  return;
}

if(foundUser.password !== loginPw.value){
  pwNoti.textContent = '비밀번호가 올바르지 않습니다.';
  loginPw.select();
  return;
}

successPopup.classList.add('active');
```

**Problem**
- 사용자가 존재하지 않는 아이디를 입력하거나 잘못된 비밀번호를 입력할 수 있음
- 아이디와 비밀번호 오류를 구분해 사용자에게 안내할 필요가 있음


**Solution**
- JSON 회원 데이터를 활용해 입력한 아이디와 일치하는 사용자 검색
- find()로 회원 정보를 조회하고 비밀번호 일치 여부 확인
- 입력 오류에 따라 안내 메시지와 팝업을 구분해 제공 

## 🤝 프로젝트 후기
적응형 홈페이지 구현에 대한 후기


