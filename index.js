let generatebtn = document.getElementById("generate-btn")
let copybtn = document.getElementById("copy-btn");
let outputcolor = document.getElementById("output-color");
let outputcode = document.getElementById("output-code");
let hexstring = "0123456789abcdef"

let randomColor=()=>{
    hexcode = "#";
    for(i=0;i<6;i++){
        hexcode +=hexstring[Math.floor(Math.random()*hexstring.length)];

    }
    return hexcode;

}
let generategrad =()=>{
    let colorone = randomColor();
    let colortwo = randomColor();
    let angle = Math.floor(Math.random()*360);
    outputcolor.style.background  = `linear-gradient(${angle}deg ,${colorone},${colortwo})`;
    outputcode.value = `background: linear-gradient(${angle}deg,${colorone},${colortwo});`;

}

copybtn.addEventListener("click" , ()=>{
    outputcode.select();
    document.execCommand("Copy");
    alert("copied");
})

generatebtn.addEventListener("click",generategrad);
window.onload= generategrad;
