# JS-boilerPlate

보일러플레이트? => 반복되고 자주쓰이는 형태를 미리 작성해서 개발 시간을 줄인다.

## How to use?

1. git clone or download
2. 루트 디렉토리에서 `npm i`
3. client 폴더 이동 (`cd client`) => `npm i`
4. `server/config` 여기로가서 dev.js 생성후 MongoDB URI 입력하기 ex.`module.exports = { mongoURI: "YOUR_URI", };`
5. 루트 디렉토리로 가서 `npm run dev`
6. Enjoy!!

## Deploy to Heroku

[heroku](https://www.heroku.com) 사이트로 가서 로그인해서 앱 생성후 Deploy 탭으로 간다.
<br>
프로젝트의 루트 디렉토리에서 터미널을 켠 후 Deploy 탭에 적혀있는 절차를 따른다.

## Deploy to Amazon EC2

To be continued...

`주의사항: 배포할때 client폴더의 .gitignore 확인하기 (build)`

<blockquote>Thanks to John Ahn</blockquote>
