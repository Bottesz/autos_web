# Webárúház

## Specifikáció
1. A publikus felületen div-ekben jelenítsük meg az adatokat. 
2. (az előzetes minta alapján! Figyelj a reszponzitvitásra!)
3. Az oldalon legyen szűrési pl keresés névben, leírásban, szűrés kategoria szerint
4. rendezési lehetőség, pl ár szerint növekvő, csökkenő
4. Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. 
5. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
7. ++ Lehet, hogy szükséged lesz a localStorage használatára. 
8. ++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
9. ++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.




## ALkalmazott függvények

1. tablazatOsszeallit(lista) --> txt - összeállítja a html kódot egy szöveges formátumban, ugy hogy minden sor végén legyen egy kuka
2. kartyaosszeallit(lista,szuroszoveg)
2. keres(lista, szuroszoveg);-> beirt auto nev alapján keres
3. keresar(lista, szuroszoveg); -> beirt ár szerint szerint keres
4. kosarba(lista); -> ha rányomunk a kosárba gombra akkor átvisz minket a megrendelések oldara
5. megjelenites(txt) - megjelenít egy html szöveget egy html elemben
6. tablazatbaTeszt(lista) - összeszedi az űrlapadatokat, és hozzáfűzi a listához, majd megjelenití újra a táblázatot
7. tablazatRendez(lista) - adott mező szerint rendezi a táblázatot - akkor hívodik meg, ha a táblázat adott feléc mezőjére kattintunk, berendezzük a listát, és megjelenítjuk újra a táblázatot
8. sorTorles(lista,index) - minden sor végén legyen egy kuka, erre a kukára kattintva töröljük az adott sort a listából és újra megjelenítjük a táblázatot a módosult listával