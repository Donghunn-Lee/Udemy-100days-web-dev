// console.log(document.body.children[1].children[0].href)

// document.body.children[1].children[0].href = 'https://www.google.com';
// console.log(document.body.children[1].children[0].href)

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://www.google.com'
newAnchorElement.textContent = ' This leads to Google';

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);


// REMOVE ELEMENTS
// 1. Select the element that should be removed

let firstH1ELement = document.querySelector('h1');      

// 2. Remove it!

firstH1ELement.remove();

// firstH1ELement.parentElement.removeChild(firstH1ELement); // for older browsers


// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);


// innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! this is <strong>important!</strong>';