let toggle = document.querySelector(".sun");
let isDark = false;
toggle.addEventListener("click", function () {
    if (!isDark) {
        document.querySelector(".sun").textContent = "🌑";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector(".outer").style.backgroundColor = "black";
        document.querySelector(".nav").style.backgroundColor = "black";
        document.querySelector(".para").style.color = "white";
        document.querySelector("h1").style.color = "white";
        
        isDark = true;
    }
    else {
        document.querySelector(".sun").textContent = "☀️";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".outer").style.backgroundColor = "white";
        document.querySelector(".nav").style.backgroundColor = "white";
        document.querySelector(".para").style.color = "black";
        document.querySelector("h1").style.color = "black";
        isDark=false;
    }
});
