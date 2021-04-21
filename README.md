# 概要

[【とらゼミ】トラハックのエンジニア学習講座 - わかりすぎて怖いJavaScript入門](https://www.youtube.com/watch?v=EXxIVEC72mU&list=PLX8Rsrpnn3IVvcPCZTixO7Pf5lAGoyNOA)でのJSの復習

## セクション

### 画像をアップロード＆プレビューしよう
* `event`には`value、text、files`などがある
* `preventDefault()`で要素のデフォルトの動作を無効(ex. `file`でfinderが開くなど)
* `stopPropagation()`で子要素のイベントが親要素に影響を与えないようにする(伝播を防ぐ)

### 正規表現
#### 【記法】
 * コンストラクタ記法：new RegExp('[^0-9]', g);
 * リテラル記法：/[^0-9]/g

#### 【基礎情報(特殊文字)】
 * ^：先頭
 * $：末尾
 * *：直前の0回以上
 * +：直前の1回以上
 * ?：直前の0回か1回
 * .：改行文字以外の1文字
 * (x)：()内に指定した文字列
 * x|y：指定した文字列のどちらか
 * {n}：直前のn回の繰り返し
 * {n,}直前の少なくともn回の繰り返し

#### 【基礎情報(文字集合)】
 * /[0-9]/：数値
 * /[a-z]/：英小文字
 * /[A-Z]/：英大文字
 * /[a-zA-Z0-9]/：英数大小文字
 * /[^0-9]/：数字以外

#### 【基礎情報(その他)】
 * /\/path\//：バックスラッシュで特殊文字をエスケープ
 * オプション「g」：マッチしたもの全て

#### 【メソッド】
 * replace()：置換
 * match()：抽出(returnは配列)
 * test()：Boolでリターン

### 文字列操作メソッド
* `string.split('分岐になる文字')`：特定文字列で分解
* `string.slice(n, n)`：文字列の切り出し
* `string.length`：文字列の長さ
* `string.toLocaleString()`：数値を文字列に変換(3桁区切りにできる)
* `string.replace(target, aftertext)`：パターンにマッチした文字列を置換する