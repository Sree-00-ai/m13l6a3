// Select the button
let button = document.getElementById("changeBtn");

// Add a click event
button.addEventListener("click", function () {

    // Change the heading
    document.getElementById("heading").textContent =
        "JavaScript is Working!";

    // Change the paragraph
    document.getElementById("message").textContent =
        "JavaScript is connected externally!";

});