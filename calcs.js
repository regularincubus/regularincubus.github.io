function calculateDMG() {
    const scalingvalue = parseFloat(document.getElementById("scalingvalue").value); /*ATK/DEF/HP/WHATEVER*/
    const ability = parseFloat(document.getElementById("ability").value) / 100;
    const addDMG = parseFloat(document.getElementById("addDMG").value)

let damage = (scalingvalue * ability + addDMG) * DMGbonus * DEFmulti * RESmulti * AMPmulti

    const reacbonus = parseFloat(document.getElementById("reacbonus").value) / 100;
    const em = parseFloat(document.getElementById("em").value);
    const embonus = 2.78 * ((em/(em+1400)) * 1

 if (document.getElementById("melt").checked) {
     result = 2 * (1 + (embonus / 100) + reacbonus);
        } else if (document.getElementById("revmelt").checked) {
    result = 1.5 * (1 + (embonus / 100) + reacbonus);
    } else if (document.getElementById("vape").checked) {
    result = 2 * (1 + (embonus / 100) + reacbonus);
    } else if (document.getElementById("revvape").checked) {
        result = 1.5 * (1 + (embonus / 100) + reacbonus);
    }
}