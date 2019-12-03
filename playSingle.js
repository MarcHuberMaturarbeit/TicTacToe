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


    startGame()

//Spielfeld Vorbereiten
function startGame() {
    //sieger Info zurücksetzen
    document.getElementById("Sieger").innerText = "Programmiert von Marc Huber";
    //X als Start einstellen
    amzug = player1
    //Jedes Feld optisch leeren.
    document.getElementById(1).innerText = "";
    document.getElementById(2).innerText = "";
    document.getElementById(3).innerText = "";
    document.getElementById(4).innerText = "";
    document.getElementById(5).innerText = "";
    document.getElementById(6).innerText = "";
    document.getElementById(7).innerText = "";
    document.getElementById(8).innerText = "";
    document.getElementById(9).innerText = "";
    //Farbe von Felder entfernen
    document.getElementById(1).style.backgroundColor = "";
    document.getElementById(2).style.backgroundColor = "";
    document.getElementById(3).style.backgroundColor = "";
    document.getElementById(4).style.backgroundColor = "";
    document.getElementById(5).style.backgroundColor = "";
    document.getElementById(6).style.backgroundColor = "";
    document.getElementById(7).style.backgroundColor = "";
    document.getElementById(8).style.backgroundColor = "";
    document.getElementById(9).style.backgroundColor = "";
    //Jeder Feld für sieger Leeren
    feld1 = "";
    feld2 = "";
    feld3 = "";
    feld4 = "";
    feld5 = "";
    feld6 = "";
    feld7 = "";
    feld8 = "";
    feld9 = "";
    //Alle Eventlistener für jedes Feld
    document.getElementById(1).addEventListener("click", feldSpielen1)
    document.getElementById(2).addEventListener("click", feldSpielen2)
    document.getElementById(3).addEventListener("click", feldSpielen3)
    document.getElementById(4).addEventListener("click", feldSpielen4)
    document.getElementById(5).addEventListener("click", feldSpielen5)
    document.getElementById(6).addEventListener("click", feldSpielen6)
    document.getElementById(7).addEventListener("click", feldSpielen7)
    document.getElementById(8).addEventListener("click", feldSpielen8)
    document.getElementById(9).addEventListener("click", feldSpielen9)
    //reset deaktivieren
    document.getElementById("m1").disabled = true;
}
//Jedes Feld Spielen
function feldSpielen1(){
    Feld = 1;
    turn(1);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(1).removeEventListener("click",feldSpielen1)
    checkSieger()
}
function feldSpielen2() {
    Feld = 2;
    turn(2);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(2).removeEventListener("click",feldSpielen2)
    checkSieger()
}
function feldSpielen3(){
    Feld = 3;
    turn(3);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(3).removeEventListener("click",feldSpielen3)
    checkSieger()
}
function feldSpielen4(){
    Feld = 4;
    turn(4);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(4).removeEventListener("click",feldSpielen4)
    checkSieger()
}
function feldSpielen5(){
    Feld = 5;
    turn(5);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(5).removeEventListener("click",feldSpielen5)
    checkSieger()
}
function feldSpielen6(){
    Feld = 6;
    turn(6);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(6).removeEventListener("click",feldSpielen6)
    checkSieger()
}
function feldSpielen7(){
    Feld = 7;
    turn(7);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(7).removeEventListener("click",feldSpielen7)
    checkSieger()
}
function feldSpielen8(){
    Feld = 8;
    turn(8);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(8).removeEventListener("click",feldSpielen8)
    checkSieger()
}
function feldSpielen9(){
    Feld = 9;
    turn(9);
    amzug = amzug==player1? player2 : player1;
    document.getElementById(9).removeEventListener("click",feldSpielen9)
    checkSieger()
}

//FeldAnpassen
function turn(){
    document.getElementById(Feld).innerText = amzug
    if (Feld==1){
        feld1 = amzug
    }
    else if (Feld==2) {
        feld2 = amzug
    }
    else if (Feld==3) {
        feld3 = amzug
    }
    else if (Feld==4) {
        feld4 = amzug
    }
    else if (Feld==5) {
        feld5 = amzug
    }
    else if (Feld==6) {
        feld6 = amzug
    }
    else if (Feld==7) {
        feld7 = amzug
    }
    else if (Feld==8) {
        feld8 = amzug
    }
    else if (Feld==9) {
        feld9 = amzug
    }
}

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
        console.log("damn")
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
        console.log("damn")
    }
    else if (player2 == feld3 && player2 == feld5 && player2 == feld7){
        spielGewonnen(player2, 3, 5, 7)
    }
    //check unentschieden
    else checkUnentschieden()
}

function spielGewonnen(Sieger, f1, f2, f3) {
    for (let i = 1 ; i<=9 ; i++) {
    document.getElementById(i).style.backgroundColor = "";
    document.getElementById(i).removeEventListener("click", window["feldSpielen"+i])
    }
	if (Sieger == player1) {
        document.getElementById("Sieger").innerText = "Spieler X hat gewonnen!"
        document.getElementById(f1).style.backgroundColor = "green";
        document.getElementById(f2).style.backgroundColor = "green";
        document.getElementById(f3).style.backgroundColor = "green";
        document.getElementById("m1").disabled = false;
}
    else {
        document.getElementById("Sieger").innerText = "Spieler O hat gewonnen!"
        document.getElementById(f1).style.backgroundColor = "red";
        document.getElementById(f2).style.backgroundColor = "red";
        document.getElementById(f3).style.backgroundColor = "red";
        document.getElementById("m1").disabled = false;

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
    for (let i = 1; i<=9; i++){
        document.getElementById(i).style.backgroundColor = "Yellow"
        document.getElementById("m1").disabled = false;
        document.getElementById(i).removeEventListener("click", window["feldSpielen"+i])
    }
    }
    return
}

