let nav = document.querySelector("nav");
let user_has_entered_before = localStorage.getItem("user_has_entered_before") || "false";

window.onload = function () {
    if (user_has_entered_before === "false") {
        frist_home_page.classList.remove("hidden");
        home_page.className = "all-c-n-hidden";
        nav.style.opacity = "0";
    } else {
        home_page.className = "all-c-n";
        frist_home_page.classList.add("hidden");
        nav.style.opacity = "1 !important";
    }
}
// General Variables

let frist_home_page = document.getElementById("frist_home_page")
let home_page = document.getElementById("all-c-n");
let home_btn = document.getElementById("home_btn")

// End General Variables

// Start General Functions



// End General Functions

// Start Home Transformations

let home_page_btn = document.getElementById("home_page_btn");
home_page_btn.addEventListener("click", () => {
    home_page.classList.toggle("all-c-n");
    frist_home_page.classList.toggle("hidden");
    home_page.className = "all-c-n";
    nav.style.opacity = "1";
    localStorage.setItem("user_has_entered_before", "true");
});

// End Home Transformations

// Start Note Transformations

let btn = document.getElementById("re");
let btn_i = document.getElementById("notes_place_icon");
let notesss = document.getElementById("writed-notes");
btn_i.addEventListener("click", () => {
    home_page.classList.toggle("all-c-n-hidden");
    notesss.classList.toggle("writed-notes-showed");
});
btn.addEventListener("click", () => {
    home_page.classList.toggle("all-c-n-hidden");
    notesss.classList.toggle("writed-notes-showed");
});

// End Note Trasformation



// Start Authour Transformations

let Authourbtntranscation = document.getElementById("authour_btn")
let AuthourDiv = document.getElementById("about-authour")
let Authour_Button_In_Div = document.getElementById("authour_btn_in_div")

Authourbtntranscation.addEventListener("click", () => {
    home_page.classList.toggle("all-c-n-hidden")
    AuthourDiv.classList.toggle("about-authour-showed")
})

Authour_Button_In_Div.addEventListener("click", () => {
    home_page.classList.toggle("all-c-n-hidden")
    frist_home_page.classList.add("hidden");
    AuthourDiv.classList.toggle("about-authour-showed")
    a_s.forEach(a => {
        if (a.innerText === main_name && home_page.className === "all-c-n") {
            a.innerText = a.dataset.org
        }
    })

})

// End Authour Transformations
