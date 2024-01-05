window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Dom entièrement chargé et analysé");
    setTimeout(function () {
        document.getElementById("loader").style.top = "-100vh";
    }, 1000)
    inputs = document.querySelectorAll("input:not(input[type=\"submit\"]), textarea");

    inputs.forEach(e => {
        e.addEventListener("click", function (){
            inputs.forEach(e => {
            });
            e.style.borderBottom = "2px solid black";
        })
    })
});

function display_modal (){
    document.getElementById("modal ").style.display = "block"
}