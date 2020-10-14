
// Nav bar scroll -> navbar color change and adquire "sticky" propiety//
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})