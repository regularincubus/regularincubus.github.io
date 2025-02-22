function calculateDMG()
let scalingvalue = parseFloat(document.getElementById("scalingvalue").value); /*ATK/DEF/HP/WHATEVER*/
let ability = parseFloat(document.getElementById("ability").value) / 100;
let addDMG = parseFloat(document.getElementById("addDMG").value)
let catalyze = parseFloat(document.getElementById("catalyze").value)

let damage = (scalingvalue * ability + addDMG + catalyze) * DMGbonus * DEFmulti * RESmulti * AMPmulti

function calculateAddDMG
let adddmgscaling = parseFloat(document.getElementById("adddmgscaling").value)
let adddmgvalue = parseFloat(document.getElementById("adddmgvalue").value)
let damage = adddmgscaling * adddmgvalue / 100