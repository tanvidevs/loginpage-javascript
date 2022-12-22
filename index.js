document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .Close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});