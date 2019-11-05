const io = require("socket.io")(3000);
//maximal 2 personen pro Raum
var Raum1 = 2
var Raum2 = 2
var Raum3 = 2
var Raum4 = 2
var Raum5 = 2
var Raum6 = 2
var Raum7 = 2
var Raum8 = 2
//-----------------------------Verbindung-----------------------------
//connection - disconnect
io.on("connection", socket => {
    socket.on("neuer-spieler", name => {
        console.log("Spieler "+ name +" hat sich verbunden.")
        socket.broadcast.emit("spieler-verbunden")
    //volle Räume mitteilen"
    if (Raum1 != 2){
        raum = 1
        if (Raum1 == 1){
            socket.emit("raumPlatz", raum)
        }
        else{
        socket.emit("RaumVoll", raum)
        }
    }
    if (Raum2 != 2){
        raum = 2
        if (Raum2 == 1){
            socket.emit("raumPlatz", raum)
        }
        else{
        socket.emit("RaumVoll", raum)
        }
    }
    if (Raum3 != 2){
        raum = 3
        if (Raum3 == 1){
            socket.emit("raumPlatz", raum)
        }
        else{
        socket.emit("RaumVoll", raum)
        }
    }
    if (Raum4 != 2){
        raum = 4
        if (Raum4 == 1){
            socket.emit("raumPlatz", raum)
        }
        else{
        socket.emit("RaumVoll", raum)
        }
    }
    if (Raum5 != 2){
        raum = 5
        if (Raum5 == 1){
            socket.emit("raumPlatz", raum)
        }
        else{
        socket.emit("RaumVoll", raum)
        }
    }
    if (Raum6 != 2){
        raum = 6
        if (Raum6 == 1){
            socket.emit("raumPlatz", raum)
        }
        else{
        socket.emit("RaumVoll", raum)
        }
    }
    if (Raum7 != 2){
        raum = 7
        if (Raum7 == 1){
            socket.emit("raumPlatz", raum)
        }
        else{
        socket.emit("RaumVoll", raum)
        }
    }
    if (Raum8 != 2){
        raum = 8
        if (Raum8 == 1){
            socket.emit("raumPlatz", raum)
        }
        else{
        socket.emit("RaumVoll", raum)
        }
    }
    })

//NEU -> Disconnect Problem-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Arrays für die Räume
var R1 = []
var R2 = []
var R3 = []
var R4 = []
var R5 = []
var R6 = []
var R7 = []
var R8 = []

//disconnect - welcher Raum?
socket.on("disconnect", function() {
    if (R1.includes(socket.id)) {
        socket.to(1).emit("verlassen")
        socket.broadcast.emit("RaumFrei", 1)
        Raum1 = 2
        R1 = []
    }
    else if (R2.includes(socket.id)) {
        socket.to(2).emit("verlassen")
        socket.broadcast.emit("RaumFrei", 2)
        Raum2 = 2
        R2 = []
    }
    else if (R3.includes(socket.id)) {
        socket.to(3).emit("verlassen")
        socket.broadcast.emit("RaumFrei", 3)
        Raum3 = 2
        R3 = []
    }
    else if (R4.includes(socket.id)) {
        socket.to(4).emit("verlassen")
        socket.broadcast.emit("RaumFrei", 4)
        Raum4 = 2
        R4 = []
    }
    else if (R5.includes(socket.id)) {
        socket.to(5).emit("verlassen")
        socket.broadcast.emit("RaumFrei", 5)
        Raum5 = 2
        R5 = []
    }
    else if (R6.includes(socket.id)) {
        socket.to(6).emit("verlassen")
        socket.broadcast.emit("RaumFrei", 6)
        Raum6 = 2
        R6 = []
    }
    else if (R7.includes(socket.id)) {
        socket.to(7).emit("verlassen")
        socket.broadcast.emit("RaumFrei", 7)
        Raum7 = 2
        R7 = []
    }
    else if (R8.includes(socket.id)) {
        socket.to(8).emit("verlassen")
        socket.broadcast.emit("RaumFrei", 8)
        Raum8 = 2
        R8 = []
    }
})

//FERTIG-NEU-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------Raum Zuweisung/Sperrung-----------------------------
//Raum zuweisen
socket.on("Raum", raum => {
    socket.join(raum)
    if (raum == 1){
        R1.push(socket.id)
        Raum1 = Raum1-1
        socket.broadcast.emit("raumPlatz", raum)
            console.log("Der Raum " + raum + " hat nun platz für "+ Raum1 + " Spieler.")
        if (Raum1 == 0){
            socket.broadcast.emit("RaumVoll", raum)
            console.log("R1 Voll")
        }}
    else if (raum == 2){
        R2.push(socket.id)
        Raum2 = Raum2-1
        R2 = socket.id
        socket.broadcast.emit("raumPlatz", raum)
            console.log("Der Raum " + raum + " hat nun platz für "+ Raum2 + " Spieler.")
        if (Raum2 == 0){
            socket.broadcast.emit("RaumVoll", raum)
            console.log("R2 Voll")
        }}
    else if (raum == 3){
        R3.push(socket.id)
        Raum3 = Raum3-1
        socket.broadcast.emit("raumPlatz", raum)
            console.log("Der Raum " + raum + " hat nun platz für "+ Raum3 + " Spieler.")
        if (Raum3 == 0){
            socket.broadcast.emit("RaumVoll", raum)
            console.log("R3 Voll")
        }}
    else if (raum == 4){
        R4.push(socket.id)
        Raum4 = Raum4-1
        socket.broadcast.emit("raumPlatz", raum)
            console.log("Der Raum " + raum + " hat nun platz für "+ Raum4 + " Spieler.")
        if (Raum4 == 0){
            socket.broadcast.emit("RaumVoll", raum)
            console.log("R4 Voll")
        }}
    else if (raum == 5){
        R5.push(socket.id)
        Raum5 = Raum5-1
        socket.broadcast.emit("raumPlatz", raum)
            console.log("Der Raum " + raum + " hat nun platz für "+ Raum5 + " Spieler.")
        if (Raum5 == 0){
            socket.broadcast.emit("RaumVoll", raum)
            console.log("R5 Voll")
        }}
    else if (raum == 6){
        R6.push(socket.id)
        Raum6 = Raum6-1
        socket.broadcast.emit("raumPlatz", raum)
            console.log("Der Raum " + raum + " hat nun platz für "+ Raum6 + " Spieler.")
        if (Raum6 == 0){
            socket.broadcast.emit("RaumVoll", raum)
            console.log("R6 Voll")
        }}
    else if (raum == 7){
        R7.push(socket.id)
        Raum7 = Raum7-1
        socket.broadcast.emit("raumPlatz", raum)
            console.log("Der Raum " + raum + " hat nun platz für "+ Raum7 + " Spieler.")
        if (Raum7 == 0){
            socket.broadcast.emit("RaumVoll", raum)
            console.log("R7 Voll")
        }}
    else if (raum == 8){
        R8.push(socket.id)
        Raum8 = Raum8-1
        socket.broadcast.emit("raumPlatz", raum)
            console.log("Der Raum " + raum + " hat nun platz für "+ Raum8 + " Spieler.")
        if (Raum8 == 0){
            socket.broadcast.emit("RaumVoll", raum)
            console.log("R8 Voll")
        }}
    console.log("der Spieler mit der ID " + socket.id + " ist jetzt im Raum "+ raum)
})
//hören ob Raum verlassen wurde
socket.on("RaumVerlassen", raum => {
    socket.leave(raum)
    if (raum == 1){
        R1 = []
        Raum1 = 2
        console.log ("Der Raum "+ raum +" hat nun platz für " +Raum1 +" Spieler.")
        socket.broadcast.emit("RaumFrei", raum)
        socket.to(raum).emit("verlassen")
    }
    else if (raum == 2){
        R2 = []
        Raum2 = 2
        console.log ("Der Raum "+ raum +" hat nun platz für " +Raum2 +" Spieler.")
        socket.broadcast.emit("RaumFrei", raum)
        socket.to(raum).emit("verlassen")
    }
    else if (raum == 3){
        R3 = []
        Raum3 = 2
        console.log ("Der Raum "+ raum +" hat nun platz für " +Raum3 +" Spieler.")
        socket.broadcast.emit("RaumFrei", raum)
        socket.to(raum).emit("verlassen")
    }
    else if (raum == 4){
        R4 = []
        Raum4 = 2
        console.log ("Der Raum "+ raum +" hat nun platz für " +Raum4 +" Spieler.")
        socket.broadcast.emit("RaumFrei", raum)
        socket.to(raum).emit("verlassen")
    }
    else if (raum == 5){
        R5 = []
        Raum5 = 2
        console.log ("Der Raum "+ raum +" hat nun platz für " +Raum5 +" Spieler.")
        socket.broadcast.emit("RaumFrei", raum)
        socket.to(raum).emit("verlassen")
    }
    else if (raum == 6){
        R6 = []
        Raum6 = Raum6+1
        console.log ("Der Raum "+ raum +" hat nun platz für " +Raum6 +" Spieler.")
        socket.broadcast.emit("RaumFrei", raum)
        socket.to(raum).emit("verlassen")
    }
    else if (raum == 7){
        R7 = []
        Raum7 = Raum7+1
        console.log ("Der Raum "+ raum +" hat nun platz für " +Raum7 +" Spieler.")
        socket.broadcast.emit("RaumFrei", raum)
        socket.to(raum).emit("verlassen")
    }
    else if (raum == 8){
        R8 = []
        Raum8 = Raum8+1
        console.log ("Der Raum "+ raum +" hat nun platz für " +Raum8 +" Spieler.")
        socket.broadcast.emit("RaumFrei", raum)
        socket.to(raum).emit("verlassen")
    }
})

//-----------------------------Raum Intern-----------------------------
//Spielzug
socket.on("spielzug", ({Feld, raum}) => {
    socket.to(raum).emit("spielen", Feld)
    console.log("Im Raum "+ raum+ " wurde das Feld "+ Feld +" gespielt")
})
//Neustart
socket.on("neustart", ({starten, raum}) => {
    socket.in(raum).emit("neustarten", starten)
    socket.emit("neustarten", starten)
})
//Spiel Ende
socket.on("fertig", ({endgame, raum}) => {
socket.in(raum).emit("fertig", endgame)
})
//Gegnername für Sieg
socket.on("sieger", ({name, raum}) => {
    socket.to(raum).emit("sieger", name)
})
})