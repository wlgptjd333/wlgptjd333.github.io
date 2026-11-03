# byhyesung.com

Hyesung의 홈 허브. 프로젝트 카드, 글, 링크를 한곳에 모은다. GitHub Pages(Jekyll)로 만들고 Cloudflare로 주소를 연결한다.

## 자주 하는 일

| 하고 싶은 것 | 고칠 파일 |
|---|---|
| 프로젝트 추가·수정 | `_data/projects.yml` (맨 위 주석의 형식대로 한 덩어리 추가) |
| 대표 프로젝트로 첫 화면에 띄우기 | 그 프로젝트에 `featured: true` |
| 분류 버튼 추가 | `_data/categories.yml` |
| 소개·링크·"지금 하는 일" | `_data/profile.yml` |
| 글 쓰기 | `_posts/YYYY-MM-DD-영문-제목.md` 파일 추가 |
| 색·모양 | `assets/css/style.css` 맨 위 `:root` 색 토큰 |

GitHub 웹에서 파일을 고치고 Commit하면 1~2분 뒤 사이트에 반영된다. 휴대폰에서도 된다.

### 글 형식

```markdown
---
title: 글 제목
description: 한 줄 요약 (선택)
tags: [교과9, 회고]
---

본문은 Markdown. 옵시디언에서 쓴 글을 그대로 붙여도 된다.
(단 `[[위키링크]]`와 `![[그림]]`은 일반 링크·그림으로 바꿔야 한다)
```

그림은 `assets/img/`에 넣고 `![설명](/assets/img/파일.png)`로 쓴다.

## 주소 구조

| 주소 | 어디 |
|---|---|
| `byhyesung.com` | 이 저장소 |
| `www.byhyesung.com` | 위로 자동 이동 |
| `coinfloat.byhyesung.com` | `coin-float` 저장소 (자기 CNAME) |
| `byhyesung.com/저장소이름/` | 따로 주소를 안 정한 다른 저장소의 GitHub Pages |

새 프로젝트에 하위 주소를 주려면: 그 저장소 Settings → Pages → Custom domain에 `이름.byhyesung.com`, Cloudflare DNS에 `CNAME 이름 → wlgptjd333.github.io` (회색 구름, DNS only).

## 내 PC에서 미리 보기

Docker Desktop을 켠 뒤:

```bash
docker compose up
```

http://127.0.0.1:4000 에서 확인. 처음에는 준비에 몇 분 걸린다.
