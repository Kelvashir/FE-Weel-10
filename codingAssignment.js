const form = document.querySelector("form");
const table = document.querySelector("table");
let id = 0;

// Event listener for submit button
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Variables set to form data
  const bookTitle = form.elements["bookTitle"].value;
  const bookAuthor = form.elements["bookAuthor"].value;
  const isbn = form.elements["isbn"].value;
  const dateStart = form.elements["dateStart"].value;
  const dateFinish = form.elements["dateFinish"].value;

  // Validate the form data.
  if (bookTitle === "") {
    alert("Please enter a book title.");
    return;
  }

  if (bookAuthor === "") {
    alert("Please enter a book author.");
    return;
  }

  if (dateStart === "") {
    alert("Please enter the date you started reading the book.");
    return;
  }

  if (dateFinish === "") {
    alert("Please enter the date you finished reading the book.");
    return;
  }

  // Create a new row for the table.
  const newRow = table.insertRow(1);
  newRow.setAttribute("id", `item-${id}`);
  newRow.insertCell(0).textContent = bookTitle;
  newRow.insertCell(1).textContent = bookAuthor;
  newRow.insertCell(2).textContent = isbn;
  newRow.insertCell(3).textContent = dateStart;
  newRow.insertCell(4).textContent = dateFinish;
  let actions = newRow.insertCell(5);
  actions.appendChild(createDeleteButton(id++));
  form.reset();
});

//A delete row function
function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.textContent = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
