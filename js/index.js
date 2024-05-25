window.onload=inici;

const imagenes = ["0.png","1.png","2.png","3.png","4.png"]
const sonidos = ["0.mp3","1.mp3","2.mp3"];
var display = [];
var monedasini;
const min = 0;
const max = imagenes.length;
var NumeroAleatorio;

    function inici(){ 
        tablaPremios();        
        recibirMonedasInici();
        coinInici();
        document.getElementById("lanzar").onclick = tirar;
        document.getElementById("cruz").onclick = mensajeOff;
    };

    function recibirMonedasInici(){
        monedasini = Math.floor((Math.random() * 5) + 10);
    };    

    function coinInici(){
        document.getElementById("dinero").innerHTML = `<div id="disponible"><div>${monedasini}</div><div class="euros"> €</div></div>`;
        document.getElementById("dinero").innerHTML = 
            `<div id="disponible">
                <div>${monedasini}</div>
                <div class="euros"> €</div>
            </div>`;
        document.getElementById("monedas").innerHTML = "";
        for (let n = 0; n < monedasini; n++){
        document.getElementById("monedas").innerHTML += `<img src = "img/moneda.png">`;
        };
        
    };

    function tirar(){
        gastarMoneda();
        if (monedasini != 0){ 
        if (monedasini >= 1){
        coinInici();display = []
            valorAleatorio();display.push(NumeroAleatorio);
            document.querySelector("#ventana1 img").src = `img/${display[0]}.png`;
            valorAleatorio();display.push(NumeroAleatorio);
            document.querySelector("#ventana2 img").src = `img/${display[1]}.png`;
            valorAleatorio();display.push(NumeroAleatorio);
            document.querySelector("#ventana3 img").src = `img/${display[2]}.png`;
            document.getElementById("b0").onclick = random1;
            document.getElementById("b1").onclick = random2;
            document.getElementById("b2").onclick = random3;
        checkPrize();
        } else {checkPrize();gameOver()};} else{checkPrize();gameOver();};
    document.getElementById("cruz").onclick = mensajeOff;
    };

    function random1(){
        gastarMoneda();coinInici();
        if (monedasini != 0){ 
        if (monedasini >= 1){
            valorAleatorio()
            document.getElementById("ventana1").innerHTML = `<img src = "img/${NumeroAleatorio}.png">`;
            display[0]=NumeroAleatorio;
            checkPrize();
        } else {checkPrize();gameOver()};} else{checkPrize();gameOver();};
    };

    function random2(){
        gastarMoneda();coinInici();
        if (monedasini != 0){ 
         if (monedasini >= 1){
            
            valorAleatorio()
            document.getElementById("ventana2").innerHTML = `<img src = "img/${NumeroAleatorio}.png">`;
            display[1]=NumeroAleatorio;
            checkPrize();
        } else {checkPrize();gameOver()};} else{checkPrize();gameOver();};
    };

    function random3(){
        gastarMoneda();coinInici();
        if (monedasini != 0){ 
        if (monedasini >= 1){
            valorAleatorio()
            document.getElementById("ventana3").innerHTML = `<img src = "img/${NumeroAleatorio}.png">`;
            display[2]=NumeroAleatorio;
            checkPrize();

        } else {checkPrize();gameOver()};} else{checkPrize();gameOver();};
    };

    function checkPrize(){
       if (display[0] == display[1] && display[1] == display[2]){ 
            
            document.getElementById("velo").style.display ="flex";
            document.getElementById("velo").style.userSelect ="active";

            document.getElementById("mensaje").innerHTML = `Enhorabuena, has ganado ${display[0]} monedas`;
            monedasini = monedasini + display[0];
            ;sonido(n=1);} else {sonido(n=0)};
            coinInici();
    };
 
    function pagarPremio(){
        monedasini = monedasini + display[0];
        coinInici();
    };

    function mensajeOff(){
        document.getElementById("cruz").onclick = document.getElementById("velo").style.display = "none";
        pagarPremio();
    };

    function gameOver(){
        document.querySelector("#audio").src = `audios/2.mp3`;
        document.querySelector("#audio").play();
        coinInici(0);
        document.getElementById("lanzar").onclick = "none";
        document.getElementById("b0").onclick = "none";
        document.getElementById("b1").onclick = "none";
        document.getElementById("b2").onclick = "none";
    };

    function gastarMoneda(){
        if (monedasini >= 1){
            document.getElementById("dinero").innerHTML = "";
            document.getElementById("monedas").innerHTML = "";
            monedasini--;
        } else {gameOver();};
    };
    
    function recibirMonedasInici(){
        monedasini = Math.floor((Math.random() * 5) + 10);
    }; 
    
    function valorAleatorio(){
        NumeroAleatorio = Math.floor((Math.random()*(max - min) + min));
    };
    
    function sonido(){
        document.querySelector("#audio").src = `audios/${sonidos[n]}`;
        document.querySelector("#audio").play();
    };

    function tablaPremios(){
        document.getElementById("logo").innerHTML = `<img src = "img/mariopad.png"></img>`;
        document.getElementById("tablaPremios").innerHTML = `<Tabla id="monedas">Tabla de premios:</div>`;
        for (n = 1; n < imagenes.length; n++){
            document.getElementById("tablaPremios").innerHTML += 
            `<div id="monedas">
                <div id="disponible"><img src = "img/${imagenes[n]}">+<img src = "img/${imagenes[n]}">+<img src = "img/${imagenes[n]}"> = <img src = "img/moneda.png">x${n}</div>
            </div>`;
           };
    };