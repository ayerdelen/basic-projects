// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle")
const list = document.querySelector(".links");

navToggle.addEventListener("click", () => {
// if(list.classList.contains("show-links"))
//     {
//         list.classList.remove("show-links")
//     }
//     else{
//         list.classList.add("show-links")
//     }

list.classList.toggle("show-links");
})