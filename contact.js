let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill all the fields!");
    } 
    else {
        alert("Thank you! Your message has been submitted.");
        form.reset();
    }

});