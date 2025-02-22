function calculateAddDMG
const adddmgscaling = parseFloat(document.getElementById("adddmgscaling").value)
const adddmgvalue = parseFloat(document.getElementById("adddmgvalue").value)

let result = adddmgscaling * adddmgvalue / 100
document.getElementById("result").textContent = result.toFixed(2)