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
      title: "Lash Extension Virtual Try-on",
      period: "Sep 2026–Present",
      background: [
        "The same lash design comes out differently depending on eye shape. Customers find a design and a salon they like, then stall at \"would this suit my eyes?\". Salons absorb the \"it's not what I pictured\" complaints and the consultation time. Preset filters and in-chair consultation tools exist, but nothing lets you see a specific salon's real design on your own eyes before you visit.",
        "After leaving kakaostyle I started building it alone, writing the code with Claude Code. The plan is to validate in Korea first, then Japan and Taiwan.",
      ],
      action: [
        "**Set the order of validation.** Quality (does it look like my eyes?) → consumers (do they want it enough to turn on the camera?) → salons (will they attach the link and pay monthly?). If an earlier hypothesis fails, the later ones don't get built.",
        "**Tested the quality hypothesis with spikes, not screens.** Built three rendering approaches side by side: parametric rendering, generative compositing, and transferring lash pixels from the reference photo. Replaced eyeballing with an automated vision-model judge (length, distribution, texture, density, realism, 1–5), and stopped generative models from redrawing the eye and skin by cropping one eye and moving only the lashes.",
        "**Cut the MVP down to live-only.** The generative capture took 30–60 seconds and sent the whole face to a server; the live layer runs entirely in the phone's browser, so the face never leaves the device. Working through the privacy question made the choice clear, and the capture came out of the MVP.",
        "**Designed the entry points and the revenue structure.** Retail lashes are free presets; another salon's design is limited to two tries a day, and at the limit the user can request that salon, which becomes a lead. Once a salon signs up, its customers get unlimited tries. Consumer traffic is the evidence for the B2B2C sale.",
        "**Posted the build in public.** The first reel's insights showed the right audience was watching but nobody saved or shared it, so the next cut opens on the result close-up in the first second.",
      ],
      results: [
        { label: "Status", value: "Live-only MVP built · demo video out to ~10 lash salons in Canada for feedback" },
      ],
      resultsNote: "In progress. No outcome numbers yet.",
      lesson: [
        "With AI I could run research, code, scoring, and content on my own, but the decision that mattered most was still what to leave out. The generative capture was the part I had worked hardest on, and once privacy and perceived speed were on the table, live alone was enough. I now keep a weekly decision log, including the decisions I reversed and why.",
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
      title: "속눈썹 가상 체험 서비스",
      period: "2026.09–진행 중",
      background: [
        "속눈썹 연장은 같은 디자인도 눈매에 따라 다르게 나옵니다. 소비자는 마음에 드는 디자인과 샵을 찾아두고도 \"내 눈에 어울릴까\"에서 멈추고, 샵은 \"생각과 다르다\"는 클레임과 상담 시간을 떠안습니다. 프리셋 필터나 원장용 상담 툴은 있지만, 방문 전에 그 샵의 실제 디자인을 내 눈에 입혀보는 서비스는 없었습니다.",
        "퇴사 후 혼자, Claude Code로 코드를 쓰며 만들고 있습니다. 한국에서 먼저 검증하고 일본·대만으로 넓히는 계획입니다.",
      ],
      action: [
        "**검증 순서를 정했습니다.** 품질(내 눈 같다고 납득되나) → 소비자(카메라를 켤 만큼 원하나) → 샵(링크를 붙이고 월 요금을 내나) 순서로, 앞 가설이 깨지면 뒤는 만들지 않기로 했습니다.",
        "**품질 가설은 화면보다 스파이크로 먼저 검증했습니다.** 파라미터 렌더링, 생성형 합성, 레퍼런스 사진의 속눈썹 픽셀 이식 세 방식을 같이 만들어 비교했습니다. 눈대중 대신 비전 모델 자동 심사(길이·분포·질감·밀도·실제감 1~5점)로 결정했고, 생성 모델이 눈 모양과 피부까지 바꾸는 문제는 눈 한쪽만 잘라 속눈썹만 떼어 옮기는 구조로 막았습니다.",
        "**MVP를 라이브 전용으로 줄였습니다.** 생성형 캡처는 30~60초가 걸리고 얼굴 전체가 서버로 갔습니다. 라이브는 폰 브라우저 안에서만 돌아 얼굴이 기기 밖으로 나가지 않습니다. 개인정보 질문에 답하다 이 구조가 낫다고 판단해 캡처를 MVP에서 뺐습니다.",
        "**진입 구조와 수익 구조를 설계했습니다.** 시판 속눈썹은 무료 프리셋, 남의 샵 디자인은 하루 2회까지. 한도에 닿으면 '이 샵에 요청하기'로 샵 리드를 만들고, 샵이 가입하면 그 샵 고객은 무제한입니다. 소비자 트래픽이 샵 영업의 근거가 되는 B2B2C 구조입니다.",
        "**만드는 과정을 콘텐츠로 올렸습니다.** 첫 릴스 인사이트에서 타깃 연령은 맞았지만 저장·공유가 없어서, 다음 편은 첫 1초를 결과 접사로 시작하도록 바꿨습니다.",
      ],
      results: [
        { label: "현재", value: "라이브 전용 MVP 완성 · 캐나다 래시 샵 10곳에 데모 영상 전달 중" },
      ],
      resultsNote: "진행 중인 프로젝트라 결과 지표는 아직 없습니다.",
      lesson: [
        "AI 덕에 리서치·개발·채점·콘텐츠까지 혼자 돌릴 수 있었지만, 가장 중요한 결정은 여전히 '무엇을 뺄까'였습니다. 생성형 캡처는 가장 공들인 부분이었는데, 개인정보와 체감 속도를 놓고 보니 라이브만으로 충분했습니다. 지금은 매주 결정 로그를 남기고, 뒤집은 결정도 이유와 함께 적어둡니다.",
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
