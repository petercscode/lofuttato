document.addEventListener("click", csinaljlovat);

/* Az event paraméterben ezek lesznek átadva a függvénynek:
- hova kattintottunk:
    event.clientX
    event.clientY
- melyik egérgombbal event.button
- milyen elemre kattintottunk: event.target
 */

function csinaljlovat(event) {
/* létrehoz egy <img> tag-et, ez fogja tartalmazni a gif-et és az erre való
hivatkozást átadja a lo változónak*/
let lo = document.createElement("img");
/* Változtatja az <img> tag egyik attribútumár: src-nek beállítja a lo.gif-et:*/
lo.src = "/img/lo.gif";
/* gyerekként hozzáadja a <body>-hoz a lo.gif-et */
document.body.appendChild(lo);
/* Cél, hogy oda tegye le a lovat ahova kattintunk, vagyis a ló pozíciója
legyen absolute (azaz mindentől független), a style.top és a style.left az
elem pozíciója az oldalon, az event.client X és Y pedig az egér pozíciója
kattintáskor*/
lo.style.position = "absolute";
lo.style.top = event.clientY-100 + "px";
lo.style.left = event.clientX-100 + "px";

/* lo.style.filter = "contrast("+Math.random()+")";
lo.style.filter += "brightness("+Math.random()+")";
lo.style.filter += "invert("+Math.random()+")"; */


lovak.push(lo);

/* Ettől fognak oldalra futni a lovak. A lovakat egy üres tömbben fogja
tárolni, a tömb neve: lovak. Minden alkalommal, amikor lerakunk egy
lovat bele push-olja a tömbbe. */

/* A setIntervallal x ezredmásodpercenként lefuttat újra egy függvényt.
A mindenmozgat a függvény neve, amit 10 ezredmásodpercenként újra és újra
le akar futtatni. A mindentmozgat függvényben van egy ciklus, ami végigmegy
a lovak tömbbön és style.left-et növeli 3-mal. Mivel a lovak tömbben
szövegként vannak tárolva az értékek -mint például a "13px"- ezért ahhoz,
hogy ehhez 3-at hozzá tudjon adni ezt számmá kell alakítani: ezt teszi a
parseInt*/



function mindentmozgat(){
for (let i=0; i<lovak.length; i++){
    lovak[i].style.left = parseInt(lovak[i].style.left) + 1 + "px";
}
}

setInterval(mindentmozgat, 40)

}

let lovak = [];