const affirmations = {
  motivasjon: [
    "Du trenger ikke være perfekt for å begynne – bare begynn.",
    "Små skritt teller også.",
    "Du er sterkere enn du tror.",
  ],
  selvkjærlighet: [
    "Du er nok, akkurat som du er.",
    "Din verdi bestemmes ikke av hva du gjør, men hvem du er.",
    "Du fortjener det beste.",
  ],
  håp: [
    "Gode ting er på vei.",
    "Alt endrer seg – også det som føles tungt.",
    "Du vet ikke hva som venter rundt neste sving – og det kan være fantastisk.",
  ],
  ro: [
    "Du kan puste ut – det er trygt å slappe av.",
    "Hvile er ikke bortkastet tid. Det er viktig.",
    "Det du rekker i dag, er godt nok.",
  ],
  kreativitet: [
    "Du har unike ideer som verden trenger.",
    "Tillat deg selv å utforske og leke.",
    "Kreativitet er ikke perfeksjon – det er frihet.",
  ],
};

//Getting elements from HTML
const outputContainer = document.getElementById("outputContainer");
const form = document.getElementById("form");
const fieldset = document.querySelector("fieldset");
const label = document.querySelector(".label-name");
const input = document.getElementById("name");
const visAffirmasjonBtn = document.getElementById("get-affirmation");
const errorParagraph = document.getElementById("error-message");
const mainContainer = document.getElementById("main-container");
const heading = document.querySelector(".heading");

//Create a paragraph for output
const output = document.createElement("p");
const affirmasjonParagraph = document.createElement("p");

//Function that creates button
const createButton = (text, className, onClick) => {
  const btn = document.createElement("button");
  btn.style.display = "inline-block";
  btn.textContent = text;
  btn.classList.add(className);
  btn.addEventListener("click", onClick);
  return btn;
};

//Function to set display to none or inline-block
const setDisplay = (elements, valueToet) => {
  for (let element of elements) {
    element.style.display = valueToet;
  }
};

//Function that removes elements from DOM
const remove = (elements) => {
  for (let element of elements) {
    element.remove();
  }
};

//Function that get a random affirmation for chosed category
const getAffirmation = () => {
  //Removing an output if it already exists
  output.remove();

  //Getting a name from the user
  let name = document.getElementById("name");
  //checking if the name is entered
  if (name.value.trim() === "") {
    errorParagraph.textContent = "Obs, du har glemt å skrive navnet ditt :)";
    label.focus();
    return false;
  } else {
    //removing content from error message
    errorParagraph.textContent = "";

    //changing the first letter of the name to uppercase
    let valueName = name.value;
    valueName =
      valueName.charAt(0).toUpperCase() + valueName.slice(1).toLowerCase();

    //Getting all the categories from the form
    const radios = document.querySelectorAll('input[name="category"]');

    // Getting a name of chosen category
    let category = "";
    for (let radio of radios) {
      if (radio.checked) {
        category = radio.value;
      }
    }

    //Getting a random affirmation from a chosed category and appending to the outputContainer
    if (category) {
      const affirmationOfCategory = affirmations[category];
      const randomAffirmation =
        affirmationOfCategory[
          Math.floor(Math.random() * affirmationOfCategory.length)
        ];

      //Add classes to output paragrapgh, affirmasjonParagrapgh, added text of the affirmation
      output.classList.add("poppins-bold", "output-paragraph");
      output.textContent = `${valueName}, her er dine ord i dag:`;

      affirmasjonParagraph.classList.add("affirmasjon-text");
      affirmasjonParagraph.textContent = `${randomAffirmation}`;

      //Setting display to chosen elements to "none"
      setDisplay([label, input, fieldset, visAffirmasjonBtn], "none");
      heading.style.display = "none";

      //Appending elements to the ouputContainer
      outputContainer.append(output, affirmasjonParagraph);
      mainContainer.append(showAgainButton, resetButton);
    }
  }
};

//Function for button which show again a categories for choosing new afirmation
const showAgain = () => {
  //Setting display
  setDisplay([heading], "flex");
  setDisplay([fieldset, visAffirmasjonBtn, showAgainButton], "inline-block");

  //Removing chosen elements from the document
  remove([showAgainButton, output, affirmasjonParagraph]);
};

//Function reset - takes back to the input for entering name
const reset = () => {
  //Setting display
  setDisplay([heading], "flex");
  setDisplay([label, input, fieldset, visAffirmasjonBtn], "inline-block");

  //Clear the input value from the previous entered name
  input.value = "";

  //Changing back the text of button
  visAffirmasjonBtn.textContent = "Vis affirmasjon";

  //Removing chosen elements from the document
  remove([showAgainButton, output, affirmasjonParagraph, resetButton]);
};

//Creating buttons with function
const showAgainButton = createButton(
  "Velg en til",
  "show-again-button",
  showAgain
);
const resetButton = createButton("Reset", "reset-button", reset);
