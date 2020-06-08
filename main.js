// 関数

// function 関数名(引数){
//     // 処理
//     return 戻り値;
// }
// 関数名(); //呼び出し

function person(name,age,weight,height) {
    document.write(`お名前は、${name}です。年齢は、${age}歳です。体重は、${weight}kgです。身長は、${height}cmです。<br>`);
}
// personの中はname = "高橋"
// person("高橋",20,60,175);
// person("鈴木",30,50,160);
// person("佐藤",40,55,170);


/*===
戻り値の説明
データの受け渡し
===*/


// ②引数にx=10,y=4の値が入っている
function sum(x, y) {
    // console.log(x * y);
    // ③returnにてx=10 * y=4を計算し、外にある呼び出し元に引数を戻す
    return x * y;
}

// ①sum関数に10,4を入れる
const sumVal = sum(10, 4);

//④関数内でx=10,y=4が計算された値が戻ってきてるので、出力する。
console.log(sumVal);