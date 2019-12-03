//-------------------------------------------------Konstanten und Variablen-------------------------------------------------
//normale Konstanten und Variablen:
const player1 = "X";
const player2 = "O";
var amzug = player1;
var Feld;
//gesammtes Spielbrett
    var feld1 = "";
    var feld2 = "";
    var feld3 = "";
    var feld4 = "";
    var feld5 = "";
    var feld6 = "";
    var feld7 = "";
    var feld8 = "";
    var feld9 = "";

//für Server
var zurücksetzen = 0
var self = 0
const endgame = 1
const starten = 1
const socket = io("http://178.128.194.185:8080");
const name = prompt("Was ist dein Name?");



//-------------------------------------------------Server Verbindung + Rooms-------------------------------------------------
//Neu für Rooms
var raum = ""

//NEU-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//online anzeige
socket.on("raumPlatz", raum => {
    console.log(raum)
    for (let i=1; i<=9;i++ )
    if (raum == i){
        document.getElementById("on"+i).innerText = " Online: 1/2"
    }
})
//FERTIG-NEU-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Neuer Spieler Auf Server -> Spieler an Server senden
socket.emit("neuer-spieler", name) 

//Raum Wechseln
function neuerRaum() {
    socket.emit("RaumVerlassen", raum)
    terminalOff()
    raum=0
    document.getElementById("m1").style.display ="none";
    document.getElementById("m2").style.display ="none";
    document.getElementById("m3").style.display ="";
    //reset spiel
    reset()
    //Spiel Ausblenden
    for (let i = 1; i <= 9; i++)
    document.getElementById(i).style.display = "none";
    //Rooms einblenden
    for (let i = 1; i <= 8; i++) {
    document.getElementById("R"+i).style.display = "";
    //online einblenden
    document.getElementById("on"+i).style.display = "";
    }
    document.getElementById("Sieger").innerText = "Programmiert von Marc Huber"
}

//Raumverlassen erzwingen, wenn mitspieler verlässt.
socket.on("verlassen", () => {
    neuerRaum()
})

//hören ob Raum Voll
socket.on("RaumVoll", raum => {
    for (let i = 1; i<=8; i++)
    if (raum == i) {
        document.getElementById("R"+i).disabled = true;
        document.getElementById("on"+i).innerText = " Online: 2/2"
    }
})

//Raum wieder Frei
socket.on("RaumFrei",raum => {
    for (let i = 1; i<=8; i++)
    if (raum == i){
        document.getElementById("R"+i).disabled = false;
        document.getElementById("on"+i).innerText = " Online: 0/2"
    }
})

//Knopf des Raumes passt Variabel raum an
function Raum(nummer){
    for (let i = 1; i <=8; i++)
    if (nummer == i) {
        raum = i
    }
    console.log(raum)
    socket.emit("Raum", raum)
    socket.emit("neustart", ({starten, raum}))
//Rooms ausblenden
for (let i = 1; i<=8; i++){
    document.getElementById("R"+i).style.display = "none";
//online anzeige ausblenden
    document.getElementById("on"+i).style.display = "none";
    }
//Knöpfe austauschen
document.getElementById("m1").style.display ="";
    document.getElementById("m2").style.display ="";
    document.getElementById("m3").style.display ="none";
//Spiel Einblenden
for (let i = 1; i<=9; i++)
    document.getElementById(i).style.display = "";
//Spiel Blockieren
terminalOff()
//Auf gegner warten
document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
}
//-------------------------------------------------Das Spiel-------------------------------------------------
//Gegner hat beigetretten.
socket.on("spieler-verbunden", startGame())

//Reset Knopf ->> beide zurücksetzen
function reset(){
    zurücksetzen = starten
    if (zurücksetzen == 1) {
        startGame()
        terminalOn()
    }
    socket.emit("neustart", ({starten, raum}))
    terminalOff()
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
}
//reset vom server
socket.on("neustarten", starten => {
    zurücksetzen = starten
    if (zurücksetzen == 1) {
        startGame()
        terminalOn()
        document.getElementById("Sieger").innerText = "Du bist am Zug!"
    }
})

//Spielzug von gegner erhalten, durchführen und Terminal wieder Freigeben.
socket.on("spielen", Feld => {
    console.log(Feld)
    for (let i = 1; i<=9; i++)
    if (Feld == i) {
        terminalOff()
        window["feldSpielen"+i]()
        terminalOn()
        checkSieger()
    }
})
//Spielfeld Vorbereiten
function startGame() {
    //reset deaktivieren
    document.getElementById("m1").disabled = true;
    //sieger Info zurücksetzen
    document.getElementById("Sieger").innerText = "Programmiert von Marc Huber";
    //X als Start einstellen
    amzug = player1
    //Jedes Feld optisch leeren.
    for (let i = 1; i<=9;i++) {
    document.getElementById(i).innerText = "";
    //Farbe von Felder entfernen
    document.getElementById(i).style.backgroundColor = "";
    //Jede Variable zum Feld, welche für Siegerbestimmung ist, Leeren
    window["feld"+i] = ""
}
}
//Eventlistener abhören+info senden
function feldspl1() {
    Feld = 1;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen1()
    terminalOff ()
}
function feldspl2() {
    Feld = 2;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen2()
    terminalOff ()
}
function feldspl3() {
    Feld = 3;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen3()
    terminalOff ()
}
function feldspl4() {
    Feld = 4;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen4()
    terminalOff ()
}
function feldspl5() {
    Feld = 5;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen5()
    terminalOff ()
}
function feldspl6() {
    Feld = 6;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen6()
    terminalOff ()
}
function feldspl7() {
    Feld = 7;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen7()
    terminalOff ()
}
function feldspl8() {
    Feld = 8;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen8()
    terminalOff ()
}
function feldspl9() {
    Feld = 9;
    socket.emit("spielzug", ({Feld, raum}))
    self = amzug
    document.getElementById("Sieger").innerText = "Auf Gegner Warten..."
    feldSpielen9()
    terminalOff()
}


//Jedes Feld Spielen egal ob Gegner oder Spieler selbst.
function feldSpielen1(){
    Feld = 1
    turn(1);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}
function feldSpielen2() {
    Feld = 2
    turn(2);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}
function feldSpielen3(){
    Feld = 3
    turn(3);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}
function feldSpielen4(){
    Feld = 4
    turn(4);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}
function feldSpielen5(){
    Feld = 5
    turn(5);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}
function feldSpielen6(){
    Feld = 6
    turn(6);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}
function feldSpielen7(){
    Feld = 7
    turn(7);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}
function feldSpielen8(){
    Feld = 8
    turn(8);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}
function feldSpielen9(){
    Feld = 9
    turn(9);
    amzug = amzug==player1? player2 : player1;
    checkSieger()
}

//Feld anpassen
function turn(){
    document.getElementById(Feld).innerText = amzug
    for (let i=1; i<=9; i++)
    if (Feld==i){
        window["feld"+i] = amzug
    }
}
//kontrolle ob Sieger vorhanden (nach jedem feldSpielen)
function checkSieger() {
    //Sieger Spieler 1 kontrolle
    if (player1 == feld1 && player1 == feld2 && player1 == feld3){
        spielGewonnen(player1, 1, 2, 3)
    }
    else if (player1 == feld4 && player1 == feld5 && player1 == feld6){
        spielGewonnen(player1, 4, 5, 6)
    }
    else if (player1 == feld7 && player1 == feld8 && player1 == feld9){
        spielGewonnen(player1, 7, 8, 9)
    }
    else if (player1 == feld1 && player1 == feld4 && player1 == feld7){
        spielGewonnen(player1, 1, 4, 7)
    }
    else if (player1 == feld2 && player1 == feld5 && player1 == feld8){
        spielGewonnen(player1, 2, 5, 8)
    }
    else if (player1 == feld3 && player1 == feld6 && player1 == feld9){
        spielGewonnen(player1, 3, 6, 9)
    }
    else if (player1 == feld1 && player1 == feld5 && player1 == feld9){
        spielGewonnen(player1, 1, 5, 9)
    }
    else if (player1 == feld3 && player1 == feld5 && player1 == feld7){
        spielGewonnen(player1, 3, 5 ,7)
    }
    //Sieger Spieler 2 kontrolle
    else if (player2 == feld1 && player2 == feld2 && player2 == feld3){
        spielGewonnen(player2, 1, 2, 3)
    }
    else if (player2 == feld4 && player2 == feld5 && player2 == feld6){
        spielGewonnen(player2, 4, 5, 6)
    }
    else if (player2 == feld7 && player2 == feld8 && player2 == feld9){
        spielGewonnen(player2,7, 8, 9)
    }
    else if (player2 == feld1 && player2 == feld4 && player2 == feld7){
        spielGewonnen(player2, 1, 4, 7)
    }
    else if (player2 == feld2 && player2 == feld5 && player2 == feld8){
        spielGewonnen(player2, 2, 5, 8)
    }
    else if (player2 == feld3 && player2 == feld6 && player2 == feld9){
        spielGewonnen(player2, 3, 6, 9)
    }
    else if (player2 == feld1 && player2 == feld5 && player2 == feld9){
        spielGewonnen(player2, 1, 5, 9)
    }
    else if (player2 == feld3 && player2 == feld5 && player2 == feld7){
        spielGewonnen(player2, 3, 5, 7)
    }
    //check unentschieden
    else checkUnentschieden()
}

//Sieger preisgeben
function spielGewonnen(Sieger, f1, f2, f3) {
	if (Sieger == self) {
        document.getElementById("Sieger").innerText = "Du hast Gewonnen!"
        document.getElementById(f1).style.backgroundColor = "green";
        document.getElementById(f2).style.backgroundColor = "green";
        document.getElementById(f3).style.backgroundColor = "green";
        socket.emit("sieger", ({name, raum}))
    }
    else {
        document.getElementById("Sieger").innerText = "Du hast Verloren :("
        document.getElementById(f1).style.backgroundColor = "red";
        document.getElementById(f2).style.backgroundColor = "red";
        document.getElementById(f3).style.backgroundColor = "red";
    }
    socket.emit("fertig", ({endgame, raum}))
}
//Spielbeenden
socket.on("fertig", endgame => {
    if (endgame == 1){
        terminalOff()
        document.getElementById("m1").disabled = false;
    }
})
socket.on("sieger", name => {
    document.getElementById("Sieger").innerText = name+ " hat gewonnen."
})

//Nach gegnerzug Eventlistener wieder erstellen (nur für leere Felder)
function terminalOn() {
    document.getElementById("Sieger").innerText = "Du bist am Zug!"
    for (let i=1; i <= 9;i++){
    if (window["feld"+[i]] == ""){
        document.getElementById(i).addEventListener("click", window["feldspl"+i])
    }
    }
}

//Nach eigenem Zug, alle Eventlistener löschen.
function terminalOff() {
    for (let i=1; i <= 9;i++){
    document.getElementById(i).removeEventListener("click", window["feldspl"+i])
    }
}

function checkUnentschieden(){
    if (document.getElementById(1).innerText != "" &&
    document.getElementById(2).innerText != "" &&
    document.getElementById(3).innerText != "" &&
    document.getElementById(4).innerText != "" &&
    document.getElementById(5).innerText != "" &&
    document.getElementById(6).innerText != "" &&
    document.getElementById(7).innerText != "" &&
    document.getElementById(8).innerText != "" &&
    document.getElementById(9).innerText != "" ){
    document.getElementById("Sieger").innerText = "Unentschieden!"
    document.getElementById("m1").disabled = false;
    for (let i = 1; i<=9; i++){
        document.getElementById(i).style.backgroundColor = "Yellow"
    }
    }
    return
}