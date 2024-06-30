# Towa Chrome拡張機能

Towaは、Google検索で漢字のみの検索ワードに自動的に「とは」を追加するChrome拡張機能です。

## 機能

- Google検索で漢字のみの検索ワードが入力された場合、自動的に「とは」を追加します。
- 例：「検索」→「検索とは」

## インストール方法

1. このリポジトリをクローンまたはダウンロードします。
2. Chrome ブラウザで `chrome://extensions` を開きます。
3. 右上の "Developer mode" を有効にします。
4. "パッケージ化されていない拡張機能を読み込む" をクリックし、このプロジェクトのディレクトリを選択します。

## 開発

- `src/background.ts` にメインのロジックが記述されています。
- 変更を加えた後は `npm run build` を実行してコンパイルし、Chrome拡張機能ページで拡張機能をリロードしてください。

## 使用技術

- TypeScript
- Chrome Extension API

## ビルドコマンド

- `npm run build`: TypeScriptファイルをコンパイルします。

## ライセンス

[MITライセンス](LICENSE)