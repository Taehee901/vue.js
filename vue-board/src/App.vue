<template>
  <div class="layout">
    <div class="sidebar">
      <HangmanGame />
    </div>
    <div class="main">
      <div class="container">
        <h1>Vue 게시판</h1>
        <nav>
          <router-link to="/">[ 목록 ]</router-link>
          <router-link to="/create">[ 글쓰기 ]</router-link>
          <router-link to="/">[ ]</router-link>
        </nav>
        <router-view />
      </div>
    </div>
  </div>
  <LoginForm />
</template>
<script>
import HangmanGame from "./components/HangmanGame.vue";
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "App",
  components: {
    LoginForm,
    HangmanGame,
  },
};
</script>
<style>
/* 전체 배경: 럭셔리 블랙 그라데이션 */
body {
  margin: 0;
  font-family: "Noto Sans KR", sans-serif;
  background: linear-gradient(135deg, #1f1f1f, #2c2c2c);
  color: #e5e5e5;
}

/* 공통 링크 스타일 */
a {
  color: #d4af37; /* 고급스러운 골드 색 */
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
  font-weight: 500;
}

a:hover {
  color: #fff;
  border-bottom: 1px solid #d4af37;
}

/* App.vue의 루트 요소 중앙 정렬 */
#app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
}

/* 레이아웃 컨테이너: 좌우 분할 */
.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

/* 왼쪽 고정 사이드바 (행맨 게임 영역) */
.sidebar {
  width: 280px; /* 원하는 고정 너비 */
  position: fixed; /* 화면에 고정 */
  top: 0;
  left: 0;
  bottom: 0;
  background: #1f1f1f;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto; /* 내용 넘칠 때 스크롤 */
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.7);
}

/* 오른쪽 메인 영역 (게시판 영역) */
.main {
  margin-left: 280px; /* sidebar 너비만큼 왼쪽 여백 */
  flex: 1; /* 나머지 공간 차지 */
  padding: 40px 20px;
  background: linear-gradient(135deg, #2c2c2c, #1f1f1f);
  min-height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
}

/* 게시판 컨테이너 카드 */
.container {
  width: 100%;
  max-width: 960px;
  background: rgba(255, 255, 255, 0.02);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

/* 제목 스타일 */
h1 {
  color: #d4af37;
  text-align: center;
  margin-top: 30px;
  font-family: "Playfair Display", serif;
  letter-spacing: 2px;
}

/* 서브 타이틀 */
h2 {
  color: #d4af37;
  margin-top: 20px;
  border-bottom: 2px solid #d4af37;
  padding-bottom: 5px;
  font-family: "Playfair Display", serif;
}

/* 버튼 스타일 */
button {
  background: linear-gradient(145deg, #d4af37, #b99628);
  color: #1f1f1f;
  border: none;
  padding: 12px 20px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

button:hover {
  background: linear-gradient(145deg, #fff6c2, #d4af37);
  color: #000;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.5);
}

/* 폼 스타일 */
form {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  padding: 30px;
  border-radius: 10px;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

form div {
  margin-bottom: 20px;
}

form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #d4af37;
  font-size: 14px;
}

form input,
form textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #444;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 16px;
  box-sizing: border-box;
}

form textarea {
  min-height: 120px;
  resize: vertical;
}

/* 게시글 리스트 스타일 */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  background: linear-gradient(135deg, #2c2c2c, #1f1f1f);
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

ul li:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  background: linear-gradient(135deg, #3a3a3a, #2c2c2c);
}

/* 본문 텍스트 */
p {
  line-height: 1.8;
  color: #e0e0e0;
  font-size: 16px;
}

/* 내비게이션 메뉴 */
nav {
  margin: 20px auto;
  text-align: center;
}

nav a {
  margin: 0 12px;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 5px;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* 모바일 대응 */
@media (max-width: 600px) {
  .container {
    padding: 20px;
  }
  nav a {
    display: block;
    margin: 10px 0;
  }
  /* 사이드바를 숨기고 메인 영역을 전체로 확장 */
  .sidebar {
    position: static;
    width: 100%;
    height: auto;
    box-shadow: none;
  }
  .main {
    margin-left: 0;
    padding: 20px;
  }
  .layout {
    flex-direction: column;
  }
}
</style>
