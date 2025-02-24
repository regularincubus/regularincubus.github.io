function calculateDEFMulti() {
    const defred = parseFloat(document.getElementById("defred").value);
    const defignore = parseFloat(document.getElementById("defignore").value);
    const k = (1 - (defred/100)) * (1 - (defignored/100))
    if (isNaN(defred) || isNaN(defignore)) {
        alert("Please enter valid numbers!");
        return;
    }

    let result = 190 / (k * 293);
    document.getElementById("result").textContent = result.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateButton").addEventListener("click", calculateDEFMulti);
});