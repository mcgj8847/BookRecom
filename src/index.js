function showbooks(response) {
  new Typewriter("#book", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generateBooks(event) {
  event.preventDefault();
  let subjectElement = document.querySelector("#subject");
  let apiKey = `501af34b402d4e44o6622bceat198ee8`;
  let prompt = `Please list 3 books from The New York Times Best Seller list in the genre of ${subjectElement.value} and a 20 word blurb. Separate the information of each book with <br/>`;
  let context =
    "You are an AI with vast knowledge of Best Sellers book titles. Enumerate each book. The book titles and its author should be <strong>. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#book");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Please wait while we selecte books about ${subjectElement.value} fiction<span class=blink>...</span>`;
  axios.get(apiUrl).then(showbooks);
}

let bookForm = document.querySelector("#form");
bookForm.addEventListener("submit", generateBooks);
