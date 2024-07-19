function run() {
    let htmlCode = document.getElementById("html_code").value
    let cssCode = document.getElementById("css_code").value
    let jsCode = document.getElementById("js_code").value
    let output = document.getElementById("output")

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>"
    output.contentWindow.eval(jsCode)
}

document.querySelector("#html_code").addEventListener("keyup",run);
document.querySelector("#css_code").addEventListener("keyup",run);
document.querySelector("#js_code").addEventListener("keyup",run);