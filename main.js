const page = "https://raw.githubusercontent.com/bnjmn21/plugs/main/src/index.js";
const script = `try{eval(await (await fetch("${page}")).text())}catch{console.log("plugs isn't supported on this page")}`;

document.getElementById("install-btn").setAttribute("href", `javascript:${script}`);