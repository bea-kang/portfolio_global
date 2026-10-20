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
      media: [],
    },
  ],
  ko: [
    {
      number: "01",
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
      media: [],
    },
  ],
};
