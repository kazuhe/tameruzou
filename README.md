- [アプリ詳細](#アプリ詳細)
- [アプリ設計](#アプリ設計)
  - [Component](#component)
  - [状態管理](#状態管理)
  - [Router](#router)
  - [Deploy](#deploy)
  - [Datepicker](#datepicker)
  - [Tooltip](#tooltip)
  - [CSS](#css)
- [Git管理](#git管理)

## アプリ詳細
https://tameruzou.netlify.app/

このリポジトリはReactの勉強の為に作られた何の変哲もないWebアプリである。  
貯金を簡易にシミュレートすることができる。

## アプリ設計
使用しているライブラリや実装の際に気をつけた点をまとめている。

### Component
- 関数コンポーネントで見た目だけを整えた「Presentational Component（`Components`）」
- 「Presentational Component」をインポートして`Hooks`や`HOC`で必要な機能を追加し、処理を担う「Container Component（`Containers`）」  
上記のそれぞれを`components/`と`containers/`に分けて、対応するファイルを同じ名前・同じ階層に置く。

### 状態管理
状態管理にはRedux公式が推奨している`Redux Toolkit`を使用。
`dispatch`は「Container Component（`Containers`）」からのみ行う。参照はどこからしても良い。  

### Router
ルーティングモジュールは2020年現在デファクトスタンダードである「[React Router](https://github.com/ReactTraining/react-router)」を採用し、`react-router-dom`をインストールして使用している。

### Deploy
Netlifyの無料枠を利用し当リポジトリと連携している。`master`ブランチに`push`すると自動でデプロイされる。

### Datepicker
日付入力には[react-datepicker](https://github.com/Hacker0x01/react-datepicker/)を使用している。

### Tooltip
ツールチップは[@tippyjs/react](https://github.com/atomiks/tippyjs-react)を使用している。

### CSS
CSSは`CSS Modules`を採用。BEMの短縮形を採用。
ひとつのコンポーネントに対応するCSSファイルを`styles/`配下に配置する。

## Git管理
コミットメッセージには必ずステータスを記載する。また、commitは可能な範囲で細かく行う。
``` bash
# [add] 機能 / ファイル追加
$ git commit -m 'add : 追加する機能'

# [fix] バグ修正
$ git commit -m 'fix : バグの内容'

# [mod] バグ以外の修正
$ git commit -m 'mod : 修正内容'

# [cln] リファクタリング / ファイル整理
$ git commit -m 'cln : 内容'

# [rvt] 変更の取り消し
$ git commit -m 'rvt : 取り消す内容'
```