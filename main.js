const page = "https://raw.githubusercontent.com/bnjmn21/plugs/main/src/index.js";
const loadingColor = "#57f";
const errorColor = "#e24";
const plugsLoadingStyles = `position:absolute;top:2rem;left:50vw;background:${loadingColor};padding:.5rem;border-radius:9rem;font-size:1rem;font-family:'Helvetica Neue',arial,sans-serif;color:#fff;transform:translate(-50%,0)`;

const varInit = `i="__plugs__";d=document;s="${plugsLoadingStyles}";`;
const createLoading = `d.body.insertAdjacentHTML("beforeend",\`<div id="\${i}"style="\${s}">Loading plugs...</div>\`);`;
const errorHandler = `x=e=>{d.querySelector("#"+i).outerHTML=\`<div id="\${i}"style="\${s};background:${errorColor}">Failed to load plugs...</div>\`;setTimeout(_=>d.querySelector("#"+i).remove(),2e3);throw e};`;
const loader = `fetch("${page}").then(v=>v.text(),x).then(v=>{try{eval(v)}catch(e){x(e)}})`;
const script = `${varInit}${errorHandler}${createLoading}${loader}`;

console.log(`Loader:\n${script}`);

document.getElementById("install-btn").setAttribute("href", `javascript:${script}`);