このリポジトリはReactの勉強の為に作られた何の変哲もないWebアプリである。  
貯金を簡易にシミュレートする。

- [アプリ設計](#アプリ設計)
  - [Router](#router)
- [Git管理](#git管理)

## アプリ設計
使用しているライブラリや実装の際に気をつけた点をまとめている。

### Router
React 向けのルーティングモジュールは2020年現在デファクトスタンダードである「[React Router](https://github.com/ReactTraining/react-router)」を採用し、使用の際は`react-router-dom`をインストールする。

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