# mocha-test
# 1. Mocha 관련 용어정리
## 1.1. 모카(Mocha)
테스트 코드를 돌려주는 테스트 러너
## 1.2. 테스트 수트
테스트 환경으로 모카에서는 describe()로 구현
## 1.3. 테스트 케이스 
실제 테스트를 의미, 모카에서는 it()으로 구현

# 2. 코드 구성
## 2.1. index.js
라우팅을 설정해주는 파일
## 2.2. ~.ctrl.js
컨트롤러로써 실제 동작하는 소스코드가 담긴 파일
## 2.3. ~.spec.js 
테스트 실행 코드를 저장하는 파일. specification(명세, 요구사항)의 약어
## 2.4 디렉토리 구성 샘플
<pre>
╰api
 ╰user
  ╰ index.js
  ╰ user.ctrl.js
  ╰ user.spec.js
</pre>

# 3.설치사항
## 3.1. 설치 명령어
```bash
npm i mocha --save-dev 
npm i should --save-dev
npm i supertest --save-dev
```
테스트 코드 #1