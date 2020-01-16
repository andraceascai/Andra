let name = localStorage.getItem("myName");
    if(name != null) {
        document.getElementById("formular").style.display = "none";
        let text = `Hello ${name} !`;   /*interpolare*/
        document.getElementById("hello").innerText = text;
    }

document.querySelector("input[type = button]")
        .addEventListener("click", hello);

function hello() {
    document.getElementById("formular").style.display = "none";
    let name = document.getElementById("name").value;
    localStorage.setItem("myName", name);
    let text = `Hello ${name} !`;   /*interpolare*/
    document.getElementById("hello").innerText = text;

}