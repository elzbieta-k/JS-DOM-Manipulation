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

//Getting container for output
const outputContainer = document.getElementById("outputContainer");

//Create a paragraph for output
const output = document.createElement("p");

//Function that get a random affirmation for chosed category
const getAffirmation = () => {
  //Removing an output if it already exists
  output.remove();

  //Getting a name from the user
  const name = document.getElementById("name");

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
    output.classList.add("poppins-bold", "outputParagraph");
    output.textContent = `${name.value}, her er dine ord i dag: ${randomAffirmation}`;
    outputContainer.append(output);
  }
};
