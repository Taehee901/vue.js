<template>
  <div class="hangman">
    <h3>행맨 게임</h3>
    <p v-if="!gameOver">
      단어: <span>{{ displayWord }}</span>
    </p>
    <p v-if="!gameOver">남은 기회: {{ remainingGuesses }}</p>

    <div v-if="!gameOver">
      <input
        v-model="letter"
        maxlength="1"
        @keyup.enter="guessLetter"
        placeholder="글자 입력"
      />
      <button @click="guessLetter">확인</button>
    </div>

    <p v-if="gameOver && won">🎉 정답! 단어는 "{{ word }}"</p>
    <p v-else-if="gameOver && !won">😢 실패! 단어는 "{{ word }}"</p>

    <button @click="resetGame">다시 시작</button>
  </div>
</template>

<script>
export default {
  name: "HangmanGame",
  data() {
    return {
      wordList: ["VUE", "JAVASCRIPT", "FRAMEWORK", "LUXURY", "COMPONENT"],
      word: "",
      guessedLetters: [],
      letter: "",
      maxGuesses: 6,
      remainingGuesses: 6,
      gameOver: false,
      won: false,
    };
  },
  computed: {
    displayWord() {
      return this.word
        .split("")
        .map((char) => (this.guessedLetters.includes(char) ? char : "_"))
        .join(" ");
    },
  },
  created() {
    this.startGame();
  },
  methods: {
    startGame() {
      const index = Math.floor(Math.random() * this.wordList.length);
      this.word = this.wordList[index];
      this.guessedLetters = [];
      this.remainingGuesses = this.maxGuesses;
      this.gameOver = false;
      this.won = false;
      this.letter = "";
    },
    guessLetter() {
      const input = this.letter.toUpperCase();
      this.letter = "";

      if (this.guessedLetters.includes(input) || !input.match(/[A-Z]/)) {
        return;
      }

      this.guessedLetters.push(input);

      if (!this.word.includes(input)) {
        this.remainingGuesses--;
      }

      if (this.remainingGuesses <= 0) {
        this.gameOver = true;
        this.won = false;
      } else if (
        this.word.split("").every((char) => this.guessedLetters.includes(char))
      ) {
        this.gameOver = true;
        this.won = true;
      }
    },
    resetGame() {
      this.startGame();
    },
  },
};
</script>

<style scoped>
.hangman {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  width: 220px;
  color: #d4af37;
  font-family: monospace;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.hangman input {
  width: 50px;
  padding: 4px;
  margin-right: 8px;
  background: #2c2c2c;
  border: 1px solid #555;
  color: #fff;
  border-radius: 4px;
}

.hangman button {
  background: linear-gradient(145deg, #d4af37, #b99628);
  color: #1f1f1f;
  border: none;
  padding: 6px 10px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.hangman button:hover {
  background: linear-gradient(145deg, #fff6c2, #d4af37);
}
</style>
