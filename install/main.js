const srcFile = "https://raw.githubusercontent.com/bnjmn21/plugs/master/src";
const installScript =`import("${srcFile}")`;

const installBtn = document.getElementById("install-btn");

installBtn.setAttribute("href", `javascript:${installScript}`);
installBtn.innerHTML = "Get plugs";