const page = "https://raw.githubusercontent.com/bnjmn21/plugs/main/src/index.js";
const loadingColor = "#57f";
const errorColor = "#e24";
const plugsLoadingStyles = `position:absolute;top:2rem;left:50vw;background:${loadingColor};padding:.5rem;border-radius:9rem;font-size:1rem;font-family:'Helvetica Neue',arial,sans-serif;color:#fff;transform:translate(-50%,0)`;

const varInit = `i="__plugs__";d=document;s="${plugsLoadingStyles}";`;
const createLoading = `d.body.innerHTML+=\`<div id="\${i}"style="\${plugsLoadingStyles}">Loading plugs...</div>\`;`;
const errorHandler = `e=>{d.querySelector("#"+i).outerHTML=\`<div id="\${i}"style="\${plugsLoadingStyles};background:${errorColor}">Failed to load plugs...</div>\`;throw e}`;
const loader = `fetch("${page}").then(v=>v.text(),${errorHandler}).then(v=>eval(v))`;
const script = `${varInit}${createLoading}${loader}`;

console.log(`Loader:\n${script}`);

document.getElementById("install-btn").setAttribute("href", `javascript:${script}`);