import {num, ar, f2} from './data1.js';
import {f1 as f, n1 as n} from './data2.js';
import * as a from './data3.js';

// default를 import시 중괄호 생략
import data4 from './data4.js';

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    console.log("click");
    console.log("NUM : "+num);
    console.log("ar : "+ar);
    f2(200);
    
    f();
    console.log(n);

    console.log(a.a1);
    console.log(a.b1);

    data4();
})

