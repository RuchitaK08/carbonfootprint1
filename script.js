function calculateFootprint() {
    let kmDriven = parseFloat(document.getElementById("milesDriven").value) || 0;
    let electricityUsed = parseFloat(document.getElementById("electricityUsed").value) || 0;
    let dietFactor = parseFloat(document.getElementById("diet").value);

    let carbonFootprint = (kmDriven * 0.2) + (electricityUsed * 0.5) + (dietFactor * 100);

    document.getElementById("result").innerText = `Your Carbon Footprint: ${carbonFootprint.toFixed(2)} kg CO₂`;

    let badgeElement = document.getElementById("badge");
    let badge = getBadge(carbonFootprint);
    console.log("Badge:", badge);  // Debugging log
    badgeElement.innerText = badge;
    badgeElement.style.display = "inline"; // Ensure visibility
}

function getBadge(score) {
    if (score < 1500) return "🏅 Eco Hero";
    else if (score < 3000) return "🚶 Moderate";
    else return "🔥 High Impact";
}
function toggleTips() {
    let tipsDiv = document.getElementById("tips");
    if (tipsDiv.style.display === "none") {
        tipsDiv.style.display = "block";
    } else {
        tipsDiv.style.display = "none";
    }
}

   
    