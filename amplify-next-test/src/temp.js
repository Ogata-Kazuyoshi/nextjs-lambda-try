import axios from 'axios'

// JWTトークンを取得する（例: ローカルストレージから）
const token = localStorage.getItem('jwtToken')

// API Gatewayのエンドポイント
const apiEndpoint =
  'https://your-api-id.execute-api.region.amazonaws.com/your-stage/your-resource'

// リクエストの設定
const config = {
  headers: {
    Authorization: `Bearer ${token}`, // JWTをAuthorizationヘッダーに設定
  },
}

// GETリクエストの例
axios
  .get(apiEndpoint, config)
  .then((response) => {
    console.log('Response:', response.data)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
