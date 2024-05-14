function calculateXP() {
    var rarity = document.getElementById("rarityInput").value;
    var xp = parseInt(rarity) ? (1 + Math.floor(parseInt(rarity) / 5)) : "Invalid input";
    document.getElementById("xpResult").innerHTML = "XP: " + xp;
}
