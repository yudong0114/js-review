// パターンテスト
const pattern = /^[0-9]*5/;
// const pattern = /[0-9]$/;
// const pattern = /[0-9]*/;
// const pattern = /[0-9]+/;
// const pattern = /[0-9]?/;
// const pattern = /[0-9]./;
// const pattern = /([0-9])/;
// const pattern = /13|456/;
// const pattern = /^[0-9]{5}/;
// const pattern = /^[0-9]{5,}/;
const str = '0123456789';
const result = str.match(pattern);
console.log(result[0]);

// 電話番号テスト
// 電話番号(ハイフンあり)
const tel_number = '080-1234-5678';
// ハイフンの削除
const tel_number_replace = tel_number.replace(/[^0-9]/g, '');
// 出力
console.log(tel_number_replace);

// メールアドレステスト
// メールアドレス
const mail_address = 'hoge-hoge@hoge.com';
// メールアドレスパターン()
const mail_address_pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// 正しいメールアドレスかチェック
if(mail_address_pattern.test(mail_address)){
    console.log('メールアドレスOK');
} else {
    console.log('メールアドレスNG');
}