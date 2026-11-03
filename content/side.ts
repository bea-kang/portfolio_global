import type { Locale } from "@/lib/i18n";
import type { ZigzagCase } from "./types";

export const sideHeader: Record<
  Locale,
  { eyebrow: string; title: string; meta: string; intro: string }
> = {
  en: {
    eyebrow: "Personal",
    title: "Side Projects",
    meta: "Planned and run on my own",
    intro:
      "Projects I took on outside of work: I picked the problem myself, met the people affected, and carried it through to a result.",
  },
  ko: {
    eyebrow: "개인 프로젝트",
    title: "사이드 프로젝트",
    meta: "직접 기획하고 실행한 프로젝트",
    intro:
      "회사 밖에서 직접 문제를 정하고, 사용자를 만나고, 결과까지 끌고 간 프로젝트입니다.",
  },
};

export const sideCases: Record<Locale, ZigzagCase[]> = {
  en: [
    {
      number: "01",
      title: "Live AI Try-on for Beauty Salons (B2B2C)",
      period: "Sep 2026–Present",
      background: [
        "Lash extension results vary with the curl, length, and volume combination and with eye shape (monolid, hidden crease, eye-corner angle). Customers find a design and a salon, then stall at \"would this suit my eyes?\" and either drop off or book anxious. Salons absorb the complaints, consultation time, and redo costs. Existing tools were preset filters and in-chair consultation apps, so nothing in Korea or abroad let you see a salon's real design on your own eyes before visiting.",
        "**Hypothesis:** show the salon's real work on the customer's eyes live, and customers book with less anxiety while salons pay a monthly fee to cut consultation and claim costs. Building it solo with AI coding after leaving kakaostyle, validating Korea first, then Japan and Taiwan.",
      ],
      action: [
        "Split the hypotheses into quality → consumer → salon, and decided not to build a later one if an earlier one fails. Wrote up research (competitors and market in Korea, Japan, Taiwan), concept, MVP scope, cost and roadmap, and the marketing plan first.",
        "**Quality gate (Phase 0):** before building screens, built three rendering approaches and compared them: parametric rendering, generative compositing, and transferring lash pixels from the reference photo. Scored them with an automated vision-model judge (length, distribution, texture, density, realism, 1–5, averaged over three runs) and compared models and prompts against it. Generative models kept changing the eye and skin, so I cropped one eye and moved only the lashes.",
        "**MVP scope cut:** the generative capture took 30–60 seconds and had to send the whole face to a server. Live compositing runs in the phone's browser, so the face never leaves the device. On privacy and speed, I dropped the capture and fixed the MVP as live-only.",
        "**Entry points and revenue:** retail lashes are free presets; other salons' designs are limited to two tries a day. At the limit the user can request that salon, which builds a salon lead, and customers who arrive through a signed-up salon's link get unlimited tries. Consumer requests become the evidence for the salon sale.",
        "**Validation channels:** posted the build as reels, used the insights to check the audience and drop-off point, and adjusted the next one. Currently sending a demo video to about ten lash salons in Canada for feedback.",
      ],
      results: [
        { label: "Status", value: "Live-only MVP built · demo video out to ~10 lash salons in Canada for feedback" },
      ],
      resultsAsText: true,
      video: { src: "/videos/lash-demo.mp4", caption: "Demo clip sent to lash salons in Canada: pick a design, see it on your own eyes live." },
      lesson: [
        "AI let me cover research, code, scoring, and content on my own, but what decided the product was what to leave out. The MVP settled once I cut the generative capture, the part I had worked hardest on, for privacy and speed. Now I keep a weekly decision log, including reversed decisions and why.",
      ],
      media: [],
    },
    {
      number: "02",
      title: "Repackaging Crowdfunding",
      period: "2019–2020",
      background: [
        "At the time, a string of stocking thefts and resale crimes had given the product a negative image in Korea. I planned a crowdfunding project to repackage and resell stockings, aiming to give the people who wear them a better experience of the product.",
      ],
      action: [
        "**Sourcing:** I had about KRW 500K in capital, but the manufacturer's minimum order was more than twice that. I negotiated directly with the owner: in exchange for actively producing real wear reviews and content from the core customer group, women in their 20s, they let me order 50% of the required minimum.",
        "**Selling:** Ran promotion and sales on a crowdfunding platform, and handled pricing, shipping, and customer service myself.",
      ],
      results: [
        { label: "Minimum order", value: "Negotiated down to 50%" },
        { label: "Scope", value: "Planning → sourcing → sales → shipping · CS" },
      ],
      resultsNote: "Closed the project with a small profit.",
      lesson: [
        "When capital is short, finding something else the other side values can change the terms. It was small, but I ran every step of getting a product from an idea into a customer's hands.",
      ],
      media: [
        {
          src: "/images/side/stocking-package.jpg",
          alt: "Gift packaging shaped like a letter envelope",
          caption: "Gift packaging designed as a letter envelope",
        },
        {
          src: "/images/side/stocking-page.jpg",
          alt: "Part of the crowdfunding product page",
          caption: "Part of the crowdfunding product page",
        },
      ],
    },
    {
      number: "03",
      title: "Public Bike App Usability",
      period: "2019–2020",
      background: [
        "As more public services move into apps, people who aren't comfortable with apps can get locked out of them. Seoul's public bike service required the app for every rental and return, so I looked at how people in their 50s and 60s were actually using it.",
      ],
      action: [
        "Designed and ran a survey of 100 people in their 50s and 60s to find what drives usage, splitting out variables such as physical limitations, how often they ride a regular bike, intent to use the service, and whether they own a bike.",
        "The main barrier turned out to be the complexity of the app itself, not the bikes.",
        "Drafted a UI improvement proposal and a step-by-step usage guide, requested approval from the responsible Seoul city department, and had the guide placed at a number of rental stations.",
      ],
      results: [
        { label: "Survey respondents", value: "100 (ages 50–69)" },
        { label: "Field rollout", value: "City-approved guide at stations" },
      ],
      lesson: [
        "Sometimes the point where users drop off sits outside what you can change in the product. Without access to the app, a printed guide at the station still reached the people who were stuck.",
      ],
      media: [
        {
          src: "/images/side/bike-usage.png",
          alt: "Seoul public bike usage by age group",
          caption: "Public bike usage by age group",
        },
        {
          src: "/images/side/bike-problem.png",
          alt: "Top barriers from the survey and solutions by age group",
          caption: "Top barriers from the survey, and a solution for each age group",
        },
        {
          src: "/images/side/bike-guide.jpg",
          alt: "Usage guide booklet pages",
          caption: "Usage guide written for older riders",
        },
        {
          src: "/images/side/bike-stations.jpg",
          alt: "Guides placed at two rental stations",
          caption: "Guides placed at rental stations (Jongno 3-ga Station Exit 2, Seoul Women's University south gate)",
        },
      ],
    },
  ],
  ko: [
    {
      number: "01",
      title: "B2B2C 뷰티샵 전용 Live AI 서비스",
      period: "2026.09–진행 중",
      background: [
        "속눈썹 연장은 컬·길이·숱 조합과 눈매(무쌍·속쌍·눈꼬리 각도)에 따라 결과가 달라집니다. 소비자는 디자인과 샵을 찾아두고도 \"내 눈에 어울릴까\"에서 멈춰 이탈하거나 불안한 채로 예약하고, 샵은 클레임·상담 시간·재시술 비용을 떠안습니다. 기존 도구는 프리셋 필터와 시술용 상담 툴뿐이라, 방문 전에 샵의 실제 디자인을 내 눈에 입혀보는 서비스는 국내외에 없었습니다.",
        "**가설:** 샵의 실제 시술 사진을 소비자 눈에 실시간으로 입혀주면, 소비자는 예약 전 불안이 줄고 샵은 상담·클레임 비용이 줄어 월 요금을 낸다. 퇴사 후 혼자 AI 코딩으로 개발하며 한국 → 일본·대만 순서로 검증하고 있습니다.",
      ],
      action: [
        "품질 → 소비자 → 샵 순서로 가설을 나누고, 앞 가설이 깨지면 뒤는 만들지 않기로 했습니다. 리서치(국내·일본·대만 경쟁/시장), 컨셉, MVP 범위, 비용·로드맵, 마케팅 계획을 먼저 문서로 정리했습니다.",
        "**품질 검증 (Phase 0):** 화면 개발 전에 렌더링 3방식(파라미터 렌더링, 생성형 합성, 레퍼런스 사진의 속눈썹 픽셀 이식)을 만들어 비교했습니다. 판정은 비전 모델 자동 심사(길이·분포·질감·밀도·실제감 1~5점, 3회 평균)로 통일하고 모델·프롬프트를 비교했습니다. 생성 모델이 눈 모양과 피부까지 바꾸는 문제는 눈 한쪽만 잘라 속눈썹만 옮기는 방식으로 해결했습니다.",
        "**MVP 범위 축소:** 생성형 캡처는 30~60초가 걸리고 얼굴 전체를 서버로 보내야 했습니다. 라이브 합성은 폰 브라우저 안에서 처리돼 얼굴이 기기 밖으로 나가지 않습니다. 개인정보와 속도를 기준으로 캡처를 빼고 라이브 전용으로 확정했습니다.",
        "**진입·수익 구조:** 시판 속눈썹은 무료 프리셋으로 제공하고, 다른 샵 디자인은 하루 2회로 제한했습니다. 한도에 닿으면 '이 샵에 요청하기'로 샵 리드를 쌓고, 가입한 샵의 링크로 들어온 고객은 무제한으로 쓰게 했습니다. 소비자 요청 수가 샵 영업 근거가 되는 구조입니다.",
        "**검증 채널:** 개발 과정을 릴스로 올리고 인사이트로 타깃·이탈 구간을 확인해 다음 편에 반영했습니다. 현재 캐나다 래시 샵 10곳에 데모 영상을 보내 피드백을 받고 있습니다.",
      ],
      results: [
        { label: "현재", value: "라이브 전용 MVP 완성 · 캐나다 래시 샵 10곳에 데모 영상 전달 중" },
      ],
      resultsAsText: true,
      video: { src: "/videos/lash-demo.mp4", caption: "캐나다 래시 샵에 보낸 데모 영상: 디자인을 고르면 내 눈에 실시간으로 올라갑니다." },
      lesson: [
        "AI로 리서치·개발·채점·콘텐츠를 혼자 커버할 수 있었지만, 제품을 결정한 건 무엇을 뺄지였습니다. 가장 공들인 생성형 캡처를 개인정보와 속도 기준으로 빼고 나서 MVP가 정리됐습니다. 지금은 매주 결정 로그를 남기고, 뒤집은 결정도 이유와 함께 기록합니다.",
      ],
      media: [],
    },
    {
      number: "02",
      title: "스타킹 리패키징 펀딩",
      period: "2019–2020",
      background: [
        "당시 스타킹 관련 절도·거래 범죄가 사회 문제로 떠올랐습니다. 스타킹에 대한 인식을 바꾸고 착용자에게 긍정적인 경험을 주고자, 제품을 새로 포장해 재판매하는 펀딩 프로젝트를 기획했습니다.",
      ],
      action: [
        "**소싱:** 자본금은 50만 원이었는데, 생산 업체의 필수 발주 물량은 그 2배를 넘었습니다. 업체 대표님과 직접 협상해, 주 고객층인 20대 여성의 실제 착용 후기와 콘텐츠를 적극 만드는 조건으로 필수 물량의 50%만 발주할 수 있었습니다.",
        "**판매:** 펀딩 플랫폼에서 홍보와 판매를 진행했고, 가격 책정·발송·CS까지 직접 맡았습니다.",
      ],
      results: [
        { label: "최소 발주량", value: "필수 물량의 50%로 협상" },
        { label: "담당 범위", value: "기획 → 소싱 → 판매 → 발송 · CS" },
      ],
      resultsNote: "작게나마 수익을 내고 마무리했습니다.",
      lesson: [
        "자본이 부족해도 상대에게 줄 수 있는 다른 가치를 찾으면 조건을 바꿀 수 있었습니다. 작은 규모였지만, 상품이 기획에서 고객 손에 닿기까지의 전 과정을 직접 겪어봤습니다.",
      ],
      media: [
        {
          src: "/images/side/stocking-package.jpg",
          alt: "편지 봉투 모양의 선물용 패키지",
          caption: "편지 봉투 모양으로 만든 선물용 패키지",
        },
        {
          src: "/images/side/stocking-page.jpg",
          alt: "펀딩 상세 페이지 일부",
          caption: "펀딩 상세 페이지 일부",
        },
      ],
    },
    {
      number: "03",
      title: "공공자전거 앱 사용성 개선",
      period: "2019–2020",
      background: [
        "앱 서비스가 보편화되면서, 앱이 익숙하지 않은 사람은 공공 서비스에서도 밀려날 수 있다고 봤습니다. 서울시 공공자전거는 대여부터 반납까지 앱을 거쳐야 했고, 50~60대의 실제 이용 상황을 들여다봤습니다.",
      ],
      action: [
        "50~60대 100명을 대상으로 설문을 설계·진행해 이용률에 영향을 주는 요인을 파악했습니다. 신체 제약, 일반 자전거 이용 빈도, 이용 의사, 자전거 보유 여부 등 변수를 나눠 검증했습니다.",
        "이용을 막는 주된 원인은 자전거가 아니라 앱 서비스의 복잡도였습니다.",
        "앱 UI 개선안과 이용 안내서를 만들고, 서울시 담당 부서에 허가를 요청해 일부 대여소에 안내서를 비치했습니다.",
      ],
      results: [
        { label: "설문 응답", value: "50~60대 100명" },
        { label: "현장 적용", value: "서울시 허가 후 대여소 비치" },
      ],
      lesson: [
        "사용자가 막히는 지점이 제품 바깥에 있을 때도 있습니다. 앱을 고칠 권한이 없어도, 대여소의 안내서처럼 사용자에게 닿을 수 있는 수단으로 문제를 줄일 수 있었습니다.",
      ],
      media: [
        {
          src: "/images/side/bike-usage.png",
          alt: "연령대별 따릉이 이용 현황 차트",
          caption: "연령대별 따릉이 이용 현황",
        },
        {
          src: "/images/side/bike-problem.png",
          alt: "설문으로 꼽은 이용 장벽과 연령대별 해결 방안",
          caption: "설문으로 꼽은 이용 장벽과 연령대별 해결 방안",
        },
        {
          src: "/images/side/bike-guide.jpg",
          alt: "이용 안내 책자 페이지",
          caption: "어르신 눈높이에 맞춘 이용 안내 책자",
        },
        {
          src: "/images/side/bike-stations.jpg",
          alt: "대여소 두 곳에 비치한 안내 책자",
          caption: "실제 비치 모습 (종로3가역 2번 출구 뒤, 서울여대 남문 대여소)",
        },
      ],
    },
  ],
};
