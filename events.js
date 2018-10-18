let numone = document.getElementById("num-one");
let numtwo = document.getElementById("num-two");
let addSum = document.getElementById("add-sum");
let weeed = document.getElementById("weed");
let smoke = document.getElementById("weed-button");
numone.addEventListener("input", add
);
numtwo.addEventListener("input", add
);
smoke.addEventListener("click", pic);
let Summe;
function add() {
    weeed.innerHTML.className = "shown";
    let one = parseFloat(numone.value) || 0;
    let two = parseFloat(numtwo.value) || 0;
    Summe = one + two;
    addSum.innerHTML = one + two;
    
    if (addSum === 420) {
        weeed.className = "";
    } else {
        weeed.className = "hide";
    }

    }

    function pic () {
       /* if(weeed.className == "hide")
        weeed.className = "";
        else weeed.className = "hide"; */
        if (Summe === 420) {
            weeed.className = "";
        } else weeed.className = "hide";
    }