//반복사용하는 모듈을 함수로 정의 -> 전역 사용
import axios from "axios";
//$붙인 이유 -> 공통모듈 쓸때는 다른 사람이 사용할 수 있으니 $붙여서 사용,하위컴포넌트에서 중복사용이니 특이한 이름으로 사용하기 위해 붙임.
// 사용하는 함수 이름 지정
//요청방식은 app.js지정되어있어 url,data만사용
//data 객체방식으로 받아옴
//result 가지고 있는 실데이터 를 반환,성공했을때 콜백함수에 넣어서 전달 -> async
//async..await 안 썼을때 방식
// axios({
// .. 위와 동일
// }).then((result) => {
//   return result.data;
// });
//처리된 결과를 가지고와서 result 실제 데이터값을 원하니 반환
export default {
  methods: {
    async $api(url, data) {
      let result = await axios({
        method: "post",
        url: url,
        data: data,
      });
      console.log(result);
      return result.data;
    },
  },
};
