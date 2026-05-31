# 김인배 — OA 유지보수 포트폴리오

OA·IT 현장 유지보수 공고 첨부용 포트폴리오 사이트입니다.

**배포 URL:** https://kib09.github.io/OAPortfolio/

## GitHub Pages 배포 (최초 설정)

빌드는 성공하는데 `deploy` 단계에서 **404 / Failed to create deployment** 가 나오면, **저장소에서 Pages가 아직 켜지지 않은 상태**입니다. 코드 문제가 아닙니다.

1. [Pages 설정](https://github.com/kib09/OAPortfolio/settings/pages) 이동
2. **Build and deployment** → **Source** 를 **GitHub Actions** 로 선택 (브랜치 배포 아님)
3. [Actions](https://github.com/kib09/OAPortfolio/actions) → 실패한 워크플로 → **Re-run all jobs**

저장소가 **Private** 이면 유료 플랜 없이 Pages가 안 될 수 있습니다. **Public** 저장소인지 확인하세요.

## 로컬 실행

```bash
npm install
npm run dev
```

## 기술 스택

- React 19 + TypeScript
- Vite 6
- 단일 CSS (`src/styles/index.css`) + CSS 변수(디자인 토큰)

## 스타일 구조

- 모든 스타일: `src/styles/index.css`
- 공통 색·간격: 파일 상단 `:root` 변수 (예: `--color-primary`, `--color-text-muted`)
- 컴포넌트별 클래스: BEM 스타일 접두사 (`hero__name`, `experience-card` 등)
