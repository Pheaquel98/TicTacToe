const sections = Array.from(document.querySelectorAll(".cell"))
const reset = document.querySelector(".play-again button")
const results = document.querySelector(".results p")
const turns = document.querySelector(".turns p")
let player1 = "p1"
let player2 = "p2"
let winner = false
let moves = 0
let currentPlayer = "p1"
turns.innerHTML = "X's Turn"
turns.style.fontSize = "20px"

gameInit()

function gameInit() {
  for (let i = 0; i < sections.length; i++) {
    // Ilk olarak tıkladığımız hücreye hangi oyuncu sırasındaysa ona göre x veya o koyuyoruz
    sections[i].addEventListener("click", () => {
      moves += 1
      currentPlayer === player1
        ? ((sections[i].innerHTML = "X"),
          sections[i].classList.add("disabled"),
          (sections[i].style.fontSize = "40px"))
        : ((sections[i].innerHTML = "O"),
          sections[i].classList.add("disabled"),
          (sections[i].style.fontSize = "40px"))
      if (currentPlayer === player1) {
        currentPlayer = player2
        turns.innerHTML = "O's Turn"
        turns.style.fontSize = "20px"
      } else {
        currentPlayer = player1
        turns.innerHTML = "X's Turn"
        turns.style.fontSize = "20px"
      }

      //! X oyuncusunun kazandığı koşullar
      if (
        sections[0].innerHTML.includes("X") &&
        sections[3].innerHTML.includes("X") &&
        sections[6].innerHTML.includes("X")
      ) {
        results.innerHTML = "Player X Won!"
        results.style.color = "green"
        winner = true
        gameEnd()
      }
      if (
        sections[0].innerHTML.includes("X") &&
        sections[1].innerHTML.includes("X") &&
        sections[2].innerHTML.includes("X")
      ) {
        results.innerHTML = "Player X Won!"
        results.style.color = "green"
        winner = true
        gameEnd()
      }
      if (
        sections[0].innerHTML.includes("X") &&
        sections[4].innerHTML.includes("X") &&
        sections[8].innerHTML.includes("X")
      ) {
        results.innerHTML = "Player X Won!"
        results.style.color = "green"
        winner = true
        gameEnd()
      }
      if (
        sections[2].innerHTML.includes("X") &&
        sections[4].innerHTML.includes("X") &&
        sections[6].innerHTML.includes("X")
      ) {
        results.innerHTML = "Player X Won!"
        results.style.color = "green"
        winner = true
        gameEnd()
      }
      if (
        sections[3].innerHTML.includes("X") &&
        sections[4].innerHTML.includes("X") &&
        sections[5].innerHTML.includes("X")
      ) {
        results.innerHTML = "Player X Won!"
        results.style.color = "green"
        winner = true
        gameEnd()
      }
      if (
        sections[6].innerHTML.includes("X") &&
        sections[7].innerHTML.includes("X") &&
        sections[8].innerHTML.includes("X")
      ) {
        results.innerHTML = "Player X Won!"
        results.style.color = "green"
        winner = true
        gameEnd()
      }
      if (
        sections[1].innerHTML.includes("X") &&
        sections[4].innerHTML.includes("X") &&
        sections[7].innerHTML.includes("X")
      ) {
        results.innerHTML = "Player X Won!"
        results.style.color = "green"
        winner = true
        gameEnd()
      }
      if (
        sections[2].innerHTML.includes("X") &&
        sections[5].innerHTML.includes("X") &&
        sections[8].innerHTML.includes("X")
      ) {
        results.innerHTML = "Player X Won!"
        results.style.color = "green"
        winner = true
        gameEnd()
      }
      //! O oyuncusunun kazandığı koşullar
      if (
        sections[0].innerHTML.includes("O") &&
        sections[3].innerHTML.includes("O") &&
        sections[6].innerHTML.includes("O")
      ) {
        results.innerHTML = "Player O Won!"
        winner = true
        results.style.color = "red"
        gameEnd()
      }
      if (
        sections[0].innerHTML.includes("O") &&
        sections[1].innerHTML.includes("O") &&
        sections[2].innerHTML.includes("O")
      ) {
        results.innerHTML = "Player O Won!"
        results.style.color = "red"
        winner = true
        gameEnd()
      }
      if (
        sections[0].innerHTML.includes("O") &&
        sections[4].innerHTML.includes("O") &&
        sections[8].innerHTML.includes("O")
      ) {
        results.innerHTML = "Player O Won!"
        results.style.color = "red"
        winner = true
        gameEnd()
      }
      if (
        sections[2].innerHTML.includes("O") &&
        sections[4].innerHTML.includes("O") &&
        sections[6].innerHTML.includes("O")
      ) {
        results.innerHTML = "Player O Won!"
        results.style.color = "red"
        winner = true
        gameEnd()
      }
      if (
        sections[3].innerHTML.includes("O") &&
        sections[4].innerHTML.includes("O") &&
        sections[5].innerHTML.includes("O")
      ) {
        results.innerHTML = "Player O Won!"
        results.style.color = "red"
        winner = true
        gameEnd()
      }
      if (
        sections[6].innerHTML.includes("O") &&
        sections[7].innerHTML.includes("O") &&
        sections[8].innerHTML.includes("O")
      ) {
        results.innerHTML = "Player O Won!"
        results.style.color = "red"
        winner = true
        gameEnd()
      }
      if (
        sections[1].innerHTML.includes("O") &&
        sections[4].innerHTML.includes("O") &&
        sections[7].innerHTML.includes("O")
      ) {
        results.innerHTML = "Player O Won!"
        results.style.color = "red"
        winner = true
        gameEnd()
      }
      if (
        sections[2].innerHTML.includes("O") &&
        sections[5].innerHTML.includes("O") &&
        sections[8].innerHTML.includes("O")
      ) {
        results.innerHTML = "Player O Won!"
        results.style.color = "red"
        winner = true
        gameEnd()
      }
      //! Beraberlik Koşulları
      if (moves === 9 && winner === false) {
        results.innerHTML = "Draw"
        results.style.color = "grey"
        sections[i].classList.add("disabled")
      }
    })
  }
}

function gameEnd() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add("disabled")
  }
}

reset.addEventListener("click", () => {
  window.location.reload()
})
