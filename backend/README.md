### 디렉토리 구조

* app.js : main 실행 파일
* router : router 역할(경로, 미들웨어 설정) 명세 디렉토리
* controller : 실제 기능을 구현한 디렉토리
* queries : controller에서 db crud시 필요한 qeury들 모음

``` js
// app.js
app.use('/signin', signinRouter)

// router/sigin.js
router.post('', signinController.signinAPI)

// [ip]:3000/signin 으로 post 보내는것(app.js의 경로 + router의 경로)
```

### DB사용(이전)

* signup.js 참고

``` js
const db = require('../config/database')

await db.promise().query(`query 문`) // 해당 함수는 async 함수여야함!
```

### DB사용(수정후)

* signup.js 참고

``` js
// 일반적인 사용
await res.pool.query(`query 문`) // 해당 함수는 async 함수여야함!

// transaction 사용시
const conn = await res.pool.getConnection()

try {
    await conn.beginTransaction()
    /* 
        transaction 실행 
    */
    await conn.commit() // transaction 실행도중 에러가 발생하지 않았으면 db에 commit(정보저장)
} catch (e) {
    await conn.rollback() // transaction 실행도중 에러 발생시 beginTransaction 이전상태로 되돌림
} finally {
    await conn.release() // db pool 연결 해제
}
```
