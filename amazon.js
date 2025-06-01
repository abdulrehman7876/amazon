const goTop = document.querySelector(".top");
const all = document.querySelector("#hmenuOpen") 
const hMenu = document.querySelector(".h-menu")
const hMenuClose = document.querySelector("#hmenuClose")
const hmenuOverlay = document.getElementById("hmenuOverlay");

hmenuOverlay.addEventListener("click", () => {
    hMenu.classList.remove("active");
    hmenuOverlay.classList.remove("active");
});

goTop.style.cursor = "pointer";
goTop.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
})

all.addEventListener("click", ()=>{
    hMenu.classList.add("active");
    hmenuOverlay.classList.add("active");
    console.log("hel");
})

hMenuClose.addEventListener("click",()=>{
    hMenu.classList.remove("active");
    hmenuOverlay.classList.remove("active");

})