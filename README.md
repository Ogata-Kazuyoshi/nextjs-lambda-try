##### Amplify のインストール

```zsh
npm install -g @aws-amplify/cli
```

##### Amplify の初期デプロイ

```zsh
amplify init
```

### Auth.js について

#### cognito の設定

- CallBackUrl は、 /api/auth/callback/cognito
- Scope の設定間違うと、ログイン画面まで遷移しない

#### Auth.js の設定

- auth.ts の設定
- middleware.ts の設定（対象外のパスも指定できる）
- /app/api/auth/[...nextauth]で route.ts を設定する
- clientId, clientSecret, issuer, authUrl(/api/auth), auth secret が必要
- auth secret に関しては下記で自分てシークレットを作る

```
openssl rand -hex 32
```
