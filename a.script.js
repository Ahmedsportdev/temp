let a_s = document.querySelectorAll("a")

function alerting() {
    const alert_d = document.getElementById("a-d");
    alert_d.classList.add("alert-div-s");
    const okaybtn = document.getElementById("o-b");
    okaybtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert_d.classList.remove("alert-div-s");
    })
}

const main_name = "to main page"


a_s.forEach(a => {
    if (a.innerText === "all projects in and contact" || a.dataset.org === "all projects in and contact") return ;
    a.addEventListener("click", () => {
        a.innerText = (a.innerText === a.dataset.org) ? main_name : a.dataset.org;
        if (home_page.className == "all-c-n" && a.innerText === main_name) {
            a.innerText = a.dataset.org
        }
    });
});

