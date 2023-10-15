const circle = document.querySelector(".circle");
const lotus = document.querySelector(".lotus");
const chakras = document.querySelectorAll(".chakras img");
const chakraName = document.querySelector(".chakra-name");

chakras.forEach( (item) => {

    item.addEventListener("mouseover", () => {
        changeLotusColor(item.className);
    });

    item.addEventListener("mouseout", () => {
        resetLotusColor();
    });
})

const changeLotusColor = (classColor) => {

    switch (classColor) {

        case "sahasrara":
            lotus.style = "filter: drop-shadow(0 0 2rem rgba(137, 62, 151, 0.8));";
            circle.style = "box-shadow: inset 0px 0px 33px 3px rgb(137, 62, 151);";
            chakraName.style = "color: rgb(137, 62, 151)";
            chakraName.innerHTML = "Sahasrara";
            break;
        case "anja":
            lotus.style = "filter: drop-shadow(0 0 2rem rgba(77, 42, 124, 0.8));";
            circle.style = "box-shadow: inset 0px 0px 33px 3px rgb(77, 42, 124);";
            chakraName.style = "color: rgb(77, 42, 124)";
            chakraName.innerHTML = "Anja";
            break;
        case "vishuddha":
            lotus.style = "filter: drop-shadow(0 0 2rem rgba(20, 163, 220, 0.8));";
            circle.style = "box-shadow: inset 0px 0px 33px 3px rgb(20, 163, 220);";
            chakraName.style = "color: rgb(20, 163, 220)";
            chakraName.innerHTML = "Vishuddha";
            break;
        case "anahata":
            lotus.style = "filter: drop-shadow(0 0 2rem rgba(67, 135, 63, 0.8));";
            circle.style = "box-shadow: inset 0px 0px 33px 3px rgb(67, 135, 63);";
            chakraName.style = "color: rgb(67, 135, 63)";
            chakraName.innerHTML = "Anahata";
            break;
        case "manipura":
            lotus.style = "filter: drop-shadow(0 0 2rem rgba(226, 213, 49, 0.8));";
            circle.style = "box-shadow: inset 0px 0px 33px 3px rgb(226, 213, 49)";
            chakraName.style = "color: rgb(226, 213, 49)";
            chakraName.innerHTML = "Manipura";
            break;
        case "svadhishthana":
            lotus.style = "filter: drop-shadow(0 0 2rem rgba(195, 119, 41, 0.8));";
            circle.style = "box-shadow: inset 0px 0px 33px 3px rgb(195, 119, 41);";
            chakraName.style = "color: rgb(195, 119, 41)";
            chakraName.innerHTML = "Svadhishthana";
            break;
        case "muladhara":
            lotus.style = "filter: drop-shadow(0 0 2rem rgba(186, 40, 39, 0.8));";
            circle.style = "box-shadow: inset 0px 0px 33px 3px rgb(186, 40, 39);";
            chakraName.style = "color: rgb(186, 40, 39)";
            chakraName.innerHTML = "Muladhara";
            break;    
    
        default:
            resetLotusColor();
            break;
    }
}

const resetLotusColor = () => {
    lotus.style = "filter: drop-shadow(0 0 0.2 rgb(242, 242, 242));";
    circle.style = "filter: none;"
    chakraName.innerHTML = "&#8193;";
}