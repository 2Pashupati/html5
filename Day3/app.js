

// Get button
const submitButton = document.getElementById("submit");

// add event on button
// give event handler
submitButton.addEventListener('click', submitHandler);

// opertion
function submitHandler() {
    // get input for name
    const nameElement = document.getElementById('name');

    // read value
    const name = nameElement.value;
    console.log('name', name);
    // get email field
    
    const emailElement = document.getElementById('email');
    const email = emailElement.value;
    console.log('email', email);

    // get elment
    const phoneElement = document.getElementById('phone');
    const phone = phoneElement.value;
    console.log('phone', phone);
}