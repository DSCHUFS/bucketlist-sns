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

### DB사용

* signup.js 참고

``` js
const db = require('../config/database')

await db.promise().query(`query 문`) // 해당 함수는 async 함수여야함!
```
