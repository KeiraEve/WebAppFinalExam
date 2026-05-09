document.getElementById("pkmnform").addEventListener("submit", function (e) {
    // Prevent default form submission
    e.preventDefault();

    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const atkpts = document.getElementById("atkpts").value;

    const newMon = [{ "name": name }, { "type": type }, { "attack-points": atkpts }];

    const response = fetch("https://fierce-phoenix-35.webhook.cool/", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(newMon)
    });
});