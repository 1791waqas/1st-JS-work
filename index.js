let one=document.getElementById('heading')


let counter = 0;
function added() {
    counter+=1;
    one.innerHTML=counter;
    
}
function reset() {
    counter=0
    one.innerHTML=counter;
}
function subtract() {
    counter-= 1
    one.innerHTML=counter;
}
function even() {
    one.innerHTML=""
    one.innerHTML=`Even Numbers are here <br>`
    for (let e=2; e<11; e+=2){
    one.innerHTML+=e + "<br>";
}
}
function odd() {
    one.innerHTML=""
    one.innerHTML=`Odd Number are here <br>`
    for (let o = 1; o <10; o+=2)
    one.innerHTML+=o + "<br>";
}
function square() {
    one.innerHTML=""
    one.innerHTML=`Square Number are here <br>`
    for (let s = 0; s <10; s+=2)
    one.innerHTML+=`${s} x ${s} = ${s*s} <br>`;
}
function table2() {
    one.innerHTML=""
    one.innerHTML=` Table Two are here  <br/>`
    for (let table=1; table <11; table++ )
    one.innerHTML+=`2 x ${table} = ${table*2}<br/>`;
}
function table3() {
    one.innerHTML=""
    one.innerHTML=` Table Three are here  <br/>`
    for (let table=1; table <11; table++ )
    one.innerHTML+=`3 x ${table} = ${table*3}<br/>`;
}
function table4() {
    one.innerHTML=""
    one.innerHTML=` Table Four are here  <br/>`
    for (let table=1; table <11; table++ )
    one.innerHTML+=`4 x ${table} = ${table*4}<br/>`;
}
