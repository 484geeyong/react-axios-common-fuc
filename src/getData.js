import axios from 'axios';

export function getData(url){
    const apiUrl = url;
    axios.get(apiUrl)
    .then((response) => {
      const code = response.data.code;
      if(code==='99'){ //정상적으로 처리
            console.log(response.data.data.message)
            console.log(response.data.msg)
            console.log(response.data.date);
      }
      else if(code==='1'){
        console.log('에외처리 에러 발생');
      }
      else if(code==='2'){
        console.log('API 통신 에러 발생');
      }
      else if(code==='10'){
        console.log('필수값 누락');
      }
      else if(code==='70'){
        console.log('데이터 조회 없음');
      }
      else if(code==='81'){
        console.log('데이터 삽입 없음');
      }
      else if(code==='82'){
        console.log('데이터 업데이트 없음');
      }
      else if(code==='83'){
        console.log('데이터 삭제 없음');
      }
      else if(code==='71'){
        console.log('API 데이터 조회 결과 없음');
      }
      else if(code==='100'){
        console.log('데이터 처리 실패');
      }
      else{
        console.log('code error');
      }
    })
    .catch(error=>{
        console.log(error)
    });
}
