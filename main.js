import { AutokLISTA } from "./autok.js";
import { kartyaOsszeallit } from "./függvenyek.js";

let txt=kartyaOsszeallit(AutokLISTA)
console.log(txt)
// megfogjuk a szülőelemet
const szuloElem=$(".tarolo")
console.log(szuloElem)
//beletesszük a txt-t
szuloElem.html(txt)



