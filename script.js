const form = document.getElementById("submissionForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Submission intercepted!");

});