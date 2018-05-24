const d = document.getElementById("dibujito");
const lienzo = d.getContext("2d");

const inc = 15;
let pos = -inc;

//figura inf-izquierda
while (pos <= 300) {
    pos += inc;
    dibujarLinea("red", 0, pos, pos, 300);
    //console.log(pos);
}

//figura inf-derecha
pos = -inc;
while (pos <= 300) {
    pos += inc;
    dibujarLinea("red", pos, 300, 300, 300 - pos);
    //console.log(pos);
}

//figura sup-derecha
pos = -inc;
while (pos <= 300) {
    pos += inc;
    //console.log(pos);
    dibujarLinea("red", 300 - pos, 0, 0, pos);
}

//figura sup-izquiera
pos = -inc;
while (pos <= 300) {
    pos += inc;
    // console.log(pos);
    dibujarLinea("red", 300, 300 - pos, 300 - pos, 0);
}

function dibujarLinea(color, xini, yini, xfin, yfin) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xini, yini);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}