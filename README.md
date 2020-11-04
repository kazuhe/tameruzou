# アプリ概要
ひとことで言うなら貯金シミュレーションアプリです。

- アプリ - https://tameruzou.netlify.app/
- GitHub - https://github.com/kazuhe/tameruzou

目標貯金額・貯金期間・ボーナス月（任意）・ボーナス月の貯金額（任意）をユーザに入力させて、目標貯金額を達成する為には毎月何円貯金する必要があるのか計算するシンプルな作りです。

# ディレクトリ
``` bash
src
 ├─ components  # Viewを担当するコンポーネント郡
 ├─ containers  # 状態管理を担当するコンポーネント郡
 ├─ images
 ├─ pages  # ルーティングに紐付くコンポーネント郡
 ├─ stores  # Redux Toolkitに関するファイル郡
 └─ styles  # 各コンポーネントに紐付くscssファイル郡
     ├─ common
     ├─ components
     └─ pages
```

# 構成
State管理とViewの責務を分割したコンポーネント設計を意識して下図の様な構成。

![tameruzou構成](https://storage.googleapis.com/zenn-user-upload/tr5rx2y769b6f73vah07da5r6lx5)

## Presentational Component
Presentational Component（以下、「Component」とする）はViewを担当するコンポーネントで、どの様に見えるかだけに関心を持つ。今回のアプリでは`components/`以下に配置してPropsとして受け取ったデータを変更せずに表示させている。

## Container Component
Container Component（以下、「Container」とする）は状態管理を担当するコンポーネントで、どの様に機能するかに関心を持つ。今回のアプリでは`containers/`以下に配置しており、ReduxのStoreとデータのやり取りをして必要であれば変更を加えてComponentに渡す。

また、ルールとしてContainerはデータを渡すComponentと同ファイル名で作成する。

## Redux Toolkit
公式でRedux Toolkitを推奨しているので採用。今回のアプリでは`stores/`以下に関連ファイル配置。

# Git管理
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