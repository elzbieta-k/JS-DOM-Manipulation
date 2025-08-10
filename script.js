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
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

//Create a paragraph for output
const output = document.createElement("p");
const affirmasjonParagraph = document.createElement("p");
const resetButton = document.createElement("button");
const showAgainButton = document.createElement("button");

//Function that get a random affirmation for chosed category
const getAffirmation = () => {
  //Removing an output if it already exists
  output.remove();

  //Getting a name from the user
  let name = document.getElementById("name");

  if (name.value.trim() === "") {
    errorParagraph.textContent = "Upps, du har glemt å skrive navnet ditt :)";
    label.focus();
    return false;
  } else {
    errorParagraph.textContent = "";
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
      output.classList.add("poppins-bold", "output-paragraph");
      output.textContent = `${valueName}, her er dine ord i dag:`;
      affirmasjonParagraph.classList.add("affirmasjon-text");
      affirmasjonParagraph.textContent = `${randomAffirmation}`;
      label.style.display = "none";
      input.style.display = "none";
      fieldset.style.display = "none";
      visAffirmasjonBtn.style.display = "none";
      outputContainer.append(output, affirmasjonParagraph);
      h1.style.display = "none";
      h2.style.display = "none";
      showAgainButton.style.display = "inline-block";
      showAgainButton.textContent = "Velg en til";
      showAgainButton.classList.add("show-again-button");
      showAgainButton.addEventListener("click", showAgain);
      mainContainer.append(showAgainButton);

      resetButton.style.display = "inline-block";
      resetButton.textContent = "Reset";
      resetButton.addEventListener("click", reset);
      resetButton.classList.add("reset-button");
      mainContainer.append(resetButton);
    }
  }
};

const reset = () => {
  label.style.display = "inline-block";
  input.style.display = "inline-block";
  input.value = "";
  fieldset.style.display = "inline-block";
  visAffirmasjonBtn.style.display = "inline-block";
  showAgainButton.style.display = "none";
  visAffirmasjonBtn.textContent = "Vis affirmasjon";
  output.remove();
  affirmasjonParagraph.remove();
  resetButton.style.display = "none";
};

const showAgain = () => {
  showAgainButton.style.display = "none";
  fieldset.style.display = "inline-block";
  visAffirmasjonBtn.style.display = "inline-block";
  output.remove();
  affirmasjonParagraph.remove();
};
