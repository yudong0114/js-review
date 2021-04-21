// 文字列操作メソッド

// split：特定文字列で分解
const text1 = 'https://www.google.co.jp/webhp?hl=ja'
const split1 = text1.split('?hl=')[1];
console.log(split1);

// slice：文字列の切り出し
const text2 = '1234567890';
const slice1 = text2.slice(0, 3);
const slice2 = text2.slice(-3);
console.log(slice1);
console.log(slice2);

// length：文字列の長さ
const text3 = '1234567890';
const length1 = text3.length;
console.log(length1);

// toLocaleString()：数値を文字列に変換(3桁区切りにできる)
const text4 = 1234567890;
const toLocaleString1 = text4.toLocaleString();
console.log(toLocaleString1);

// replace()：パターンにマッチした文字列を置換する
const text5 = '文字をChikanする';
const replace1 = text5.replace(/[A-Za-z]{6}/g, '置換');
console.log(text5+'→置換→'+replace1);