# 김인배 — OA 유지보수 포트폴리오

OA·IT 현장 유지보수 공고 첨부용 1페이지 포트폴리오 사이트입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속합니다.

## GitHub Pages 배포

`main` 브랜치에 push하면 [GitHub Actions](.github/workflows/deploy.yml)가 자동으로 빌드·배포합니다.

### 1. GitHub 저장소 만들기

GitHub에서 새 저장소를 만듭니다 (예: `Portfolio`). README 추가는 **하지 않아도** 됩니다.

### 2. 첫 push

```bash
git init
git add .
git commit -m "feat: OA 유지보수 포트폴리오 초기 배포"
git branch -M main
git remote add origin https://github.com/사용자이름/저장소이름.git
git push -u origin main
```

### 3. Pages 설정 (최초 1회)

저장소 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 선택합니다.

### 4. 접속 URL

배포가 끝나면 (Actions 탭에서 녹색 체크 확인):

`https://사용자이름.github.io/저장소이름/`

예: 저장소가 `Portfolio`이면 `https://kiminbae.github.io/Portfolio/`

### 로컬에서 Pages 경로 미리보기

```bash
npm run build -- --base=/Portfolio/
npm run preview
```

저장소 이름에 맞게 `/Portfolio/`를 바꿉니다.

## 연락처 수정

`src/data/profile.ts` 파일에서 `email`, `phone` 값을 입력하세요.

## 섹션 구성

| 섹션 | 내용 |
|------|------|
| Hero | 이름, OA 유지보수 포지션, 한 줄 소개 |
| 소개 | 지원 동기, 강점, 성장 포인트 |
| 직무 역량 | OA·IT·협업 스킬 |
| 경력 | 기산전자, 아이에듀피아 등 (OA 경험 상단) |
| 핵심 성과 | 500대+, 90지점+ 등 수치 |
| 교육·자격 | 부트캠프, 운전면허, 표창 |
| 연락처 | 이메일·전화 |

## 기술 스택

- React 19 + TypeScript
- Vite 6
- 단일 CSS (`src/styles/index.css`) + CSS 변수(디자인 토큰)

## 스타일 구조

- 모든 스타일: `src/styles/index.css`
- 공통 색·간격: 파일 상단 `:root` 변수 (예: `--color-primary`, `--color-text-muted`)
- 컴포넌트별 클래스: BEM 스타일 접두사 (`hero__name`, `experience-card` 등)
