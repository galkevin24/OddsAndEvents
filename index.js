// === state ===

let bank = [];

let odds = [];

let even = [];


function addNumberToBank(n) {
    if (typeof n !== "number") return;

    bank.push(n);
    render();
}

function moveNumberFromBank() {
    if (bank.length == 0) 
        return;

    const n = bank.shift();
    if (n % 2 === 0) {
        even.push(n);
    }
    else {
        odds.push(n);
    }
    render();
}

function SortAll() {
    if (bank.length === 0) {
      return;
    }
    while (bank.length > 0) {
      const number = bank.shift();
      if (number % 2 === 0) {
        even.push(number);
      }
      if (number % 2 === 1) {
        odd.push(number);
      }
    }
    render();
  }

// === Components ===
function NumberForm() {
    const $form = document.createElement("form");
    $form.classList.add("form");

    $form.innerHTML = '
    <label>
    add a number to the bank 
    <input name="number type="number"/>
    </label>
    <button type="add">Add number</button>
    <button type="Sort1">Sort 1</button>
    <button type="SortAll">Sort All</button>
';
$form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData($form);
    const newNumber = data.get("number");
    addNumber(Number(newNumber));
  });

  return $form;
}

// === Render ===

function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
      <h1>Odds and Events</h1>
      <hr>
      <main>
        <h2>Odds and Events</h2>
        <form></form>
        <p>Bank</p>
        <div id="bank"></div>
        <p>Odds</p>
        <div id="odds"></div>
        <p>Evens</p>
        <div id="evens"></div>
      </main>
      `;
    $app.querySelector("form").replaceWith(NumberForm());
    $app.querySelector("#bank").replaceWith(BankNumber(bank));
    $app.querySelector("#odd").replaceWith(Box(odds));
    $app.querySelector("#even").replaceWith(Box(evens));
    document.querySelector("#sort1").addEventListener("click", SortOne);
    document.querySelector("#sortAll").addEventListener("click", SortAll);
  }
  render();

