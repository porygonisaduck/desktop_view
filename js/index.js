let pets = document.querySelectorAll(".pet");

for (let i = 0; i < pets.length; ++i) {
    let pet =  pets[i];
    let thumbnails = pet.querySelectorAll(".thumbnail");

    for (let i = 0; i < thumbnails.length; ++i){
        thumbnails[i].addEventListener("mouseover", function() {
            let display = pet.querySelector(".display");
            display.alt = this.alt;
            display.setAttribute('og', display.src);
            display.src = this.src;
        });

        thumbnails[i].setAttribute("tabindex", 0);

        thumbnails[i].addEventListener("mouseleave", function() {
            let display = pet.querySelector(".display");
            display.src = display.getAttribute("og");
            display.innerHTML = "Hover over an image below to display the image and the alt text.";

        });
    }
}
