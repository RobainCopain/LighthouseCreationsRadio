const form = document.getElementById("submissionForm");

const scriptURL = "https://script.google.com/macros/s/AKfycbyDX8gpkOc-HFuw8aGm1Q7BKfxWS7qPrEySS_mGowU287zgyfZLZY-qt_au_aFwK01bZg/exec";


form.addEventListener("submit", async function(event) {

    event.preventDefault();


    const formData = new FormData(form);


    const file = formData.get("Audio_File");


    let fileData = "";
    let fileName = "";


    if (file && file.size > 0) {

        fileName = file.name;

        fileData = await fileToBase64(file);

    }


    const submission = {

        Artist_Name: formData.get("Artist_Name"),
        Contact_Email: formData.get("Contact_Email"),
        Song_Title: formData.get("Song_Title"),
        Language: formData.get("Language"),
        Genre_Style_Vibe: formData.get("Genre_Style_Vibe"),
        Submission_Type: formData.get("Submission_Type"),
        Original_Creation: formData.get("Original_Creation"),
        Description: formData.get("Description"),

        File_Name: fileName,
        File_Data: fileData,

        Permission_Confirmed: formData.get("Permission_Confirmed"),
        Interview_Interest: formData.get("Interview_Interest")

    };


    console.log("Sending:", submission);


    fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify(submission)

    })


    .then(response => response.text())


    .then(result => {

        console.log(result);

        alert("Your creation has entered the Lighthouse!");

        form.reset();

    })


    .catch(error => {

        console.error(error);

        alert("Something went wrong.");

    });


});



function fileToBase64(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();


        reader.onload = () => resolve(reader.result);

        reader.onerror = error => reject(error);


        reader.readAsDataURL(file);

    });

}