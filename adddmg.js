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
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateButton").addEventListener("click", calculateAddDMG);
});