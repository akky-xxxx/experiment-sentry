# experiment-sentry
## About
- sentry x next.js の組み込みサンプル
- サンプルなので秘匿情報の管理はあえてオープン

## Resolve dependencies
```shell
$ yarn
```

## Confirmation of sentry
```shell
# dev だとエラーが起きた時に next.js 側でハンドリングされて邪魔なので、 prod build の方がストレスフリー
$ yarn build && yarn start
```

1. `エラーテスト` ボタンをクリック
2. sentry で確認

## References
- https://docs.sentry.io/platforms/javascript/guides/nextjs/
- https://note.com/tabelog_frontend/n/n7f6822ae0c0d
