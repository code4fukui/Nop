# Nop - 演算子を持たないプログラミング言語

Nopは演算子を持たない構造化プログラミング言語で、[Nor](https://github.com/code4fukui/Nor)からフォークされました。

## デモ
- ウェブ上の実行環境: [Nop Playground](https://code4fukui.github.io/Nop/)
- HTMLへの組み込み: [Nop on web](https://code4fukui.github.io/Nop/nopweb.html)
- CLI (コマンドラインインターフェース): BMI計算 [examples/add.nop](examples/add.nop)
- デバッグ用アプリ: [nop2js](https://code4fukui.github.io/Nop/nop2js.html)

## 特徴
- 演算子なし、if/else、ループ、関数のみ
- 配列と数値へのビットレベルアクセス
- print、input、その他の基本的なプログラミング構造

## 要件
Nopの実行環境はHTMLに組み込むか、コマンドラインでDenoを介して実行できます。

## 使い方
ブラウザでNopプログラムを実行するには、Nop実行環境のスクリプトを読み込みます:

```html
<script type="module" src="https://code4fukui.github.io/Nop/web.js"></script>
<script type="text/nop">
print 1
</script>
```

コマンドラインでNopプログラムを実行するには、Denoを使用します:

```sh
deno -A https://code4fukui.github.io/Nop/cli.js examples/add.nop
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
