// 클라이언트 요청의 IP, 프로토콜 등 메타데이터를 추출하여,
// 동일 주소의 리소스를 프록시 방식으로 요청
// 요청된 리소스와 서버 리소스를 일치시킴 (1:1 매핑)
// DB 서버 정보는 개발 서버 환경 설정에 따라 동적으로 매핑
const target = "http://localhost:3000";
//procy서버 중개하는 부분 필요
//target.download 정보들어오면
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/download": {
        target,
        changeOrigin: true,
      },
      "^/api": {
        target,
        changeOrigin: true,
      },
    },
  },
};
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
