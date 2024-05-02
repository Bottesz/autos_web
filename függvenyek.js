
export function kartyaOsszeallit(lista){
    let txt = "";
    txt += `<div class="row 6">`;
    lista.forEach((element, i) => {
        txt += `<div class="card" style="width:400px">`;
        txt += `<div><img class="card-img" src="${element.kep}" alt="Card image" style="width:100%"></div>`;
        txt += `<div class="card-body">`;
        txt += `<h4 class="card-title">${element.marka}</h4>`;
        txt += `<p class="card-text">${element.szin}</p>`;
        txt += `<p class="card-text">${element.leiras}</p>`;
        txt += `<p class="card-text">${element.ar}</p>`;
        txt += `</div>`;
        txt += `<button type="button" class="btn btn-default">Kosárba</button>`;
        txt += `</div>`;
    });
    txt += `</div>`;
    return txt;
}




export function tablazatRendez(lista) {
    let txt = "";
    txt += "<table class = 'table table-striped'>";
    txt += "<tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";
    lista.forEach((element, i) => {
        txt += `<tr>`;
        for (const key in element) {
            txt += `<td>${element[key]}</td>`;
        }
        txt += `<td id="${i}" class="kuka">🗑️</td>
                    </tr>`;
    });
    txt += "</table>";
    return txt;


}




export function nevszerintrendez(AutokLISTA){

    const SZURTLISTA = lista.filter(function (elem) {
        return elem.nev.includes(szurtSzoveg);
    });
    console.log(SZURTLISTA);
    return SZURTLISTA;
    }







export function megrendeleshezVisz(AutokLISTA){}






export function keresesArszerint(AutokLISTA){}






export function sortorles(AutokLISTA){}