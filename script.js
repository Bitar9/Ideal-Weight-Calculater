function calculateIdealWeight() {
    // Get user input
    var gender = document.querySelector('input[name="gender"]:checked');
    var age = parseInt(document.getElementById('age').value);
    var height = parseInt(document.getElementById('height').value);

    // Calculate ideal weight and height
    var idealWeight;
    var idealHeight;

    if (gender && age && height) {
        if (gender.value === "male") {
            idealWeight = (height - 100 + age / 10) * 0.9;
            idealHeight = 166;
        } else if (gender.value === "female") {
            idealWeight = (height - 100 + age / 10) * 0.9 - 3;
            idealHeight = 152;
        }

        // Display results
        document.getElementById('result').innerHTML = "<p>Ideal Weight: " + idealWeight.toFixed(2) + " kg</p><p>Ideal Height: " + idealHeight.toFixed(2) + " cm</p>";

        // Show result section
        document.getElementById('result').style.display = "block";
    } else {
        alert("Please fill in all fields.");
    }
}
