// 関数

// function 関数名(引数){
//     // 処理
//     return 戻り値;
// }
// 関数名(); //呼び出し

// function person(name,age,weight,height) {
//     document.write(`お名前は、${name}です。年齢は、${age}歳です。体重は、${weight}kgです。身長は、${height}cmです。<br>`);
// }
// personの中はname = "高橋"
// person("高橋",20,60,175);
// person("鈴木",30,50,160);
// person("佐藤",40,55,170);


/*===
戻り値の説明
データの受け渡し
===*/


// ②引数にx=10,y=4の値が入っている
// function sum(x, y) {
    // console.log(x * y);
    // ③returnにてx=10 * y=4を計算し、外にある呼び出し元に引数を戻す
//     return x * y;
// }

// ①sum関数に10,4を入れる
// const sumVal = sum(10, 4);

//④関数内でx=10,y=4が計算された値が戻ってきてるので、出力する。
// console.log(sumVal);

// 無名関数 関数式

/*===
無名関数について説明
functionを変数に代入している。functionに関数名がないため、無名関数と呼ばれている。
変数にて関数を宣言しているため、関数の呼び出しを変数の上に移動するとエラーが発生。
===*/

// const person = function (name,age,weight,height) {
//     document.write(`お名前は、${name}です。年齢は、${age}歳です。体重は、${weight}kgです。身長は、${height}cmです。<br>`);
// }
// person("高橋",20,60,175);
// person("鈴木",30,50,160);
// person("佐藤",40,55,170);

/*===
アロー関数について
===*/
//引数が一つの場合はreturnや()が省略できる

// const hello = name => `こんにちは${name}さんですね`;

// document.write(hello("高橋"));

// 引数は2つ以上の場合は省略不可
// const hello = (name, age) => {
//     return `お名前は、${name}さんですね。年齢は${age}歳です。`;
// }

// document.write(hello("高橋",20));

const array = ["高橋","斎藤","山田"];

array.forEach(value => console.log(value));