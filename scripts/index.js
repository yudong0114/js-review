const uploadImageModule = (() => {
    const inputElement = document.getElementById('image');
    const previewElement = document.getElementById('image-preview');

    inputElement.addEventListener('change', event => {
        // デフォルトイベント無効化
        event.preventDefault();
        // イベントの親要素への影響の防止
        event.stopPropagation();

        // inputのfileで受け取ったファイルを変数に格納
        const file = event.target.files[0];
        console.log(file);

        // ファイルが画像以外の場合はアラート&処理終了
        if (!file || !file.type.match(/image\/*/)) {
            alert('画像ではありません。');
            return false;
        }

        // FileReaderのインスタンスを生成(ローカルファイルを読み込むオブジェクト)
        const reader = new FileReader();

        // FileReaderの読み込みが完了した結果をimgタグのsrcに設定
        reader.addEventListener('load', event => {
            // event.target.result は、base64でエンコードされた画像データ
            previewElement.setAttribute('src', event.target.result);
        })

        // セットされたオブジェクトを読み込む
        reader.readAsDataURL(file);
    })
})();