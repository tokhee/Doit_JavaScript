/**
  *
  * Author : hazia
  * Date : 2023-09-08
  * File : convert.js
  * doit js page80-81
 *
 **/

//섭씨온도 = (화씨온도 -32) /1.8

let fah = parseFloat(prompt("변환할 화씨 온도"));
let cel;
//toFixed는 실수의 소수점 자리수 고정하는 함수
cel = ((fah - 32) / 1.8).toFixed(1);
alert(`화씨 ${fah}도는 섭씨 ${cel}도입니다.`);


