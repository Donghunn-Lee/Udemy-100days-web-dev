let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log(paragraphElement);
}

// paragraphElement.addEventListener('click', changeParagraphText);



// let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    let enteredText = event.target.value;
    // console.log(enteredText);
    // console.log(event);

    // let enteredText = event.data; => This is different!
    console.log(enteredText);

}

// inputElement.addEventListener('input', retrieveUserInput)


