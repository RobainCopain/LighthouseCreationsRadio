const form = document.getElementById("submissionForm");

const scriptURL = "https://script.google.com/macros/s/AKfycbyDX8gpkOc-HFuw8aGm1Q7BKfxWS7qPrEySS_mGowU287zgyfZLZY-qt_au_aFwK01bZg/exec";


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const formData = new FormData(form);


    console.log("Sending submission...");
    console.log([...formData]);


    fetch(scriptURL, {
        method: "POST",
        body: formData
    })


    .then(response => response.text())


    .then(result => {

        console.log(result);

        alert("Your submission has entered the Lighthouse!");

        form.reset();

    })


    .catch(error => {

        console.error("Error:", error);

        alert("Something went wrong. Please try again.");

    });

});