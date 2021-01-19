const sidebarToggle = document.querySelector(".sidebar-toggle")
const sidebarMenu = document.querySelector(".sidebar")
const closeBtn = document.querySelector(".close-btn")

sidebarToggle.addEventListener("click", ()=> {
    sidebarMenu.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click",()=> {
    sidebarMenu.classList.remove("show-sidebar") 
})