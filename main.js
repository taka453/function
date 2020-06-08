//文字数を識別する関数

//入力文字数の確認
/*===
    引数: text
    外で関数を呼び出しているので戻り値にて、値を戻す必要がある。
    returnの後には処理を取らないので、注意が必要。
    関数を分ける。

    comment関数: 文字数を制限している関数。
    commnetCheck: 条件式を使って、エラーチェックを行っている。
===*/

// コメント入力

const input = window.prompt("コメントを入力");

// 文字数を確認

function commnet(text) {
    return text.length >= 10;
}
commnet(input);

// エラーの出力

function commnetCheck(text) {
    if(commnet(text)) {
        document.write("20文字以内で記入してください。");
    } else {
        document.write(text);
    }
}

commnetCheck(input);