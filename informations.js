const imageWarehouse = document.getElementById("imgWarehouse");
const textWarehouse = document.getElementById("textWarehouse");

imageWarehouse.addEventListener('click', function(){
    if (textWarehouse.style.display === "block") {
        textWarehouse.style.display = "none";
        imageWarehouse.style.transform = "rotate(0turn)";

    } else {
        textWarehouse.style.display = "block";
        imageWarehouse.style.transform = "rotate(0.99turn)";
    }
});

const imgFerrailleur = document.getElementById("imgFerrailleur");
const textFerrailleur = document.getElementById("textFerrailleur");

imgFerrailleur.addEventListener('click', function(){
    if (textFerrailleur.style.display === "block") {
        textFerrailleur.style.display = "none";
        imgFerrailleur.style.transform = "rotate(0turn)";

    } else {
        textFerrailleur.style.display = "block";
        imgFerrailleur.style.transform = "rotate(-0.99turn)";
    }
});

const imgStereolux = document.getElementById("imgStereolux");
const textStereolux = document.getElementById("textStereolux");

imgStereolux.addEventListener('click', function(){
    if (textStereolux.style.display === "block") {
        textStereolux.style.display = "none";
        imgStereolux.style.transform = "rotate(0turn)";

    } else {
        textStereolux.style.display = "block";
        imgStereolux.style.transform = "rotate(0.99turn)";

    }
});

const imgTrempolino = document.getElementById("imgTrempolino");
const textTrempolino = document.getElementById("textTrempolino");

imgTrempolino.addEventListener('click', function(){
    if (textTrempolino.style.display === "block") {
        textTrempolino.style.display = "none";
        imgTrempolino.style.transform = "rotate(0turn)";

    } else {
        textTrempolino.style.display = "block";
        imgTrempolino.style.transform = "rotate(-0.99turn)";

    }
});

