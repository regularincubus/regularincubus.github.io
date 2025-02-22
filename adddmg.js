// Stelle sicher, dass das Skript erst nach dem Laden der HTML-Elemente ausgeführt wird
document.addEventListener("DOMContentLoaded", function () {
    // Funktion hier innerhalb von DOMContentLoaded definieren
    function calculateAddDMG() {
        const adddmgscaling = parseFloat(document.getElementById("adddmgscaling").value);
        const adddmgvalue = parseFloat(document.getElementById("adddmgvalue").value);

        if (isNaN(adddmgscaling) || isNaN(adddmgvalue)) {
            alert("Please enter valid numbers!");
            return;
        }

        let result = (adddmgscaling * adddmgvalue) / 100;
        document.getElementById("result").textContent = result.toFixed(2);
    }

    // Button-EventListener hinzufügen
    document.getElementById("calculateButton").addEventListener("click", calculateAddDMG);
});
