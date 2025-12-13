const a_s = document.querySelectorAll("a")

function alerting() {
    const alert_d = document.getElementById("a-d");
    alert_d.classList.add("alert-div-s");
    const okaybtn = document.getElementById("o-b");
    okaybtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert_d.classList.remove("alert-div-s");
    })
}

