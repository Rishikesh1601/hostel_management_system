let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})

let dropdown = document.querySelector(".dropdown");
let dropdownContent = dropdown.querySelector(".dropdown-content");

    dropdown.addEventListener("click", () => {
        // Toggle the dropdown content visibility
        dropdownContent.style.display = (dropdownContent.style.display === "none" || dropdownContent.style.display === "") ? "block" : "none";

        // Toggle the arrow direction
        dropdown.classList.toggle("open");
    });