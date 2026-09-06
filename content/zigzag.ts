import type { Locale } from "@/lib/i18n";
import type { ZigzagCase } from "./types";

export const zigzagHeader: Record<
  Locale,
  { eyebrow: string; title: string; meta: string; intro: string }
> = {
  en: {
    eyebrow: "kakaostyle",
    title: "Zigzag: Commerce Platform",
    meta: "Commerce Platform Planning / Product Owner · Jul 2022–Nov 2025",
    intro:
      "Zigzag is kakaostyle's fashion commerce platform, serving 7M MAU in Korea. I ran user research continuously, defined product and KPI roadmaps, and owned iteration, the backlog, and project management.",
  },
  ko: {
    eyebrow: "kakaostyle",
    title: "Zigzag (지그재그): 커머스플랫폼",
    meta: "커머스플랫폼기획 / Product Owner · 2022.07–2025.11",
    intro:
      "지그재그는 카카오스타일의 패션 커머스 플랫폼으로, 한국에서 700만 MAU에 서비스했습니다. 사용자 리서치를 상시 진행하고 제품·KPI 로드맵을 정의하며, 이터레이션을 담당하며 백로그, 프로젝트를 관리했습니다.",
  },
};

export const zigzagCases: Record<Locale, ZigzagCase[]> = {
  en: [
    {
      number: "01",
      title: "Seller Seeding Promotion",
      period: "2024.03–05 / 09–10, 2025.02–04",
      background: [
        "Halving review credits to cut platform cost dropped review-submission rates by 40% over three months. Reviews drive both purchase intent and seller sales, so we needed another way to generate them. Interviews with the business org found 12 merchandisers (MDs) running seeding by hand every week, spreadsheet by spreadsheet (selecting products, recruiting users, booking placements, issuing coupons), which capped how far it could scale.",
        "**Hypothesis:** turning seeding into a real product, productizing the operating cost sellers were already paying for informally, would recover review volume by leveraging what sellers wanted anyway.",
      ],
      action: [
        "Defined and led the full seeding product cycle end to end (seller application → selection → product exposure → user application → winner selection → purchase → review) and iterated on it using metrics and seller interviews:",
        "**Order-success rate fell from 95% to 75%:** users dropped out between selection and ordering: seller stock ran out first, and each user had to order manually. A three-day application window and automatic ordering on selection recovered the rate to 99%.",
        "**Seller abuse:** sellers applied in bulk for the exposure and never shipped, pushing CS claims to 50 a day. Non-shipment penalty points, blocked listings for sold-out products, and a seller-participation admin returned it to normal.",
        "**Reviews were slow to arrive:** writing a review took 10+ days on average; a revised winner-selection logic and a daily reminder process cut it to under 5 days.",
        "Also owned policy: winner criteria, per-cycle scheduling, listed-product conditions (quantity, shipping, attributes), order/settlement policy, and seller/customer penalties, coordinated with legal and CS.",
      ],
      results: [
        { label: "Products offered / week", value: "200 → 1,600" },
        { label: "Applications / week", value: "30K → 300K" },
        { label: "Participating sellers / week", value: "10 → 100" },
        { label: "Review recovery rate", value: "98%" },
        { label: "Seller ROI (post-seeding sales lift)", value: "+400%" },
        { label: "Operating headcount", value: "5+ / team → 0" },
      ],
      lesson: [
        "Product quality comes from iterating against users and metrics, not from a single launch. Shipping fast and fixing repeatedly, rather than shipping perfect, is what let the program expand into influencer seeding and an internal-employee segment.",
      ],
      media: [
        {
          src: "/images/zigzag/seeding-1.png",
          alt: "Seeding promotion funnel and application flow",
        },
        {
          src: "/images/zigzag/seeding-2.png",
          alt: "Seller admin for the seeding promotion product cycle",
        },
      ],
      links: [
        {
          source: "Dailian",
          title:
            "Zigzag pilots a seeding corner to grow authentic reviews (Korean)",
          href: "https://www.dailian.co.kr/news/view/1335028/%EC%A7%80%EA%B7%B8%EC%9E%AC%EA%B7%B8-%EC%B2%B4%ED%97%98%EB%8B%A8-%EC%BD%94%EB%84%88-%EC%8B%9C%EB%B2%94-%EC%9A%B4%EC%98%81%EC%B0%90-%EB%A6%AC-2024",
        },
        {
          source: "kakaostyle Partner Lounge",
          title:
            "How the seeding promotion performed for real stores (Korean)",
          href: "https://partnerlounge.kakaostyle.com/knowhow/experience-group-update",
        },
      ],
    },
    {
      number: "02",
      title: "Coupon Upsell A/B Test",
      period: "2025.02–04",
      background: [
        "Outside promotion periods, average order value was trending down. An earlier cart-level coupon UI had raised coupon costs enough that it couldn't be rolled out platform-wide, so the goal became growing the AOV lift enough to offset the added coupon cost.",
        "**Hypothesis:** a UI that lets users feel the benefit before checkout would nudge them into buying more.",
      ],
      action: [
        "Designed the experiment: defined the recommended-coupon logic and what to surface (savings amount, extra discount, recommended products) and the funnel. Ran it by varying recommendation pattern (single vs. unlimited), timing (campaign vs. regular), and product logic (personalized vs. ranked) to find a winner. Monitored the success metrics (test-group average order value, item count, cart additions) and guardrail metrics, settling significance thresholds, run length, and the rest of the operating detail with the data team, and worked with the MD team to open up campaign periods and their coupons as experiment variables.",
        "Extending the test and re-running it showed the amount-optimization UI only held up inside small campaign periods, so I pivoted the feature into a switch the team turns on per campaign rather than leaving it on all the time.",
      ],
      results: [
        { label: "Banner CTR", value: "3.8%" },
        { label: "Add-to-cart after entry", value: "70%" },
        { label: "AOV lift vs. added coupon cost", value: "net positive" },
      ],
      resultsNote:
        "CTR came in low, read as weak initial framing and incentive, but the lift in payment per order (about ₩2,000) outweighed the rise in coupon cost per order (about ₩1,000) in the test group.",
      lesson: [
        "Maker buy-in decides how fast and how far an experiment goes. Winning over an owner worried about checkout usability took time, so the final UX shipped more conservative than intended, and coupon budget, a variable outside the product's control, kept it from scaling as an always-on surface. Now I settle the guardrails on what I cannot control and win the room before build starts.",
      ],
      media: [
        {
          src: "/images/zigzag/coupon-abt.png",
          alt: "Coupon upsell A/B test mobile UI showing price comparison and savings",
        },
      ],
    },
    {
      number: "03",
      title: "Coupon Issuance & Approval Overhaul",
      period: "2025.04–06",
      background: [
        "Five years of an admin tool built up through legacy patches had made issuing a coupon error-prone: 20+ misissued coupons a month, each one handled by cancelling and clawing the coupon back, at up to ₩100M in cost plus CS time and product-team cleanup.",
      ],
      action: [
        "Interviewed and shadowed all 60 people who issue coupons, walking their actual workflow to define the problem, then rebuilt the tool: review and approval steps scoped to what's being applied, faster approval paths, and terminology and hierarchy that matched how the business side actually talks about it. Led the cross-functional build end to end (backend, frontend, design, schedule, QA, release) and ran a company-wide session walking every business team through the new process, legacy data, and rollout timeline.",
      ],
      results: [{ label: "Misissued coupons", value: "−90%" }],
      resultsNote:
        "Freed up MD, finance, and product time previously spent on compensation and cleanup.",
      lesson: [
        "Knowing the seller and AMD workflow before, during, and after coupon creation is what let the process come together quickly. An admin built from watching the actual work, not from assumptions, is what saves users time. I still go find the user myself.",
      ],
      media: [
        {
          src: "/images/zigzag/approval-1.png",
          alt: "Legacy coupon creation and lookup admin, before the redesign",
          caption: "Before: legacy coupon creation/lookup admin",
        },
        {
          src: "/images/zigzag/approval-2.png",
          alt: "Redesigned coupon creation, lookup, and approval admin",
          caption: "After: creation, lookup, and approval in one flow",
        },
      ],
    },
    {
      number: "04",
      title: "Review Ranking for Purchase Conversion",
      period: "2025.07–10",
      background: [
        "I took over the review-ranking domain after the ranking structure had already shipped. The ranking existed, but only a small share of users knew about it, so it did nothing to motivate review writing. I laid out a roadmap: revamp the ranking, activate it, then add affiliate.",
        "**Hypothesis:** tying the ranking to rewards and motivation, and scoring it on behaviour that actually moves purchases, would lift engagement and retention among the users who write the most reviews.",
      ],
      action: [
        "I started by finding the segment whose behaviour could actually change. User research plus review-related behavioural data (visit frequency, order frequency, writing frequency) gave me the top 15% of users as a segment.",
        "**Making the ranking visible:** a ranking UI showed users where they stood relative to each other, with feedback on every rank gain and better odds in the seeding draw as supporting incentives.",
        "**Redefining the score criteria:** I logged purchase-impact events (add-to-cart and orders following a review view) and weighted them into the ranking score.",
        "I also added a review browsing page, so discovery and user-to-user interaction had somewhere to happen, which became the base for the rest of the roadmap. Since I inherited the domain, I walked the implementation with the engineers to find what could realistically be reworked, then redefined the product KPIs and monitoring data to align each roadmap stage with the team.",
      ],
      results: [
        {
          label: "Engagement and retention, top 15% of users (vs. before)",
          value: "+6%p",
        },
      ],
      lesson: [
        "Making an existing feature work is a different job from building a new one. I narrowed to the 15% of users who could actually respond, built the hypothesis on that segment, and confirmed it in the results.",
      ],
      media: [],
    },
    {
      number: "05",
      title: "Stacked Coupon Structure",
      period: "2024.01–03",
      background: [
        "At a 40% fee disadvantage to competitors, coupon cost was already being passed to sellers, capping how aggressive a single discount could get, right as a competitor's DAU was trending up and the need for a visible value signal was growing.",
        "**Hypothesis:** letting a second coupon stack on top of the first would sharpen price competitiveness and lift order value.",
      ],
      action: [
        "Designed the stacked-coupon funnel (issuance, display, application, settlement) and built it with the admin team. Beyond the MVP, added price and badge treatment at every coupon-download point (PLP, PDP) and an estimated-lowest-price module, plus a gauge-bar UI (home → campaign → PDP → cart) showing progress toward the stacked discount, built as a reusable admin feature for future promotions.",
      ],
      results: [
        { label: "Order value, YoY", value: "+20%" },
        { label: "Items per order", value: "2.3 → 3.2" },
      ],
      lesson: [
        "The follow-up usability work never shipped: the A/B test showed it cost more than it returned. The structural fix landed but its reach stayed capped, because company-wide cost targets and the product's own usage target pointed in opposite directions. Now I check that alignment with the team and leadership throughout a project, not once at kickoff.",
      ],
      media: [
        {
          src: "/images/zigzag/stacked-coupon.png",
          alt: "Stacked coupon UI in cart and coupon wallet",
        },
      ],
    },
    {
      number: "06",
      title: "First-Purchase Deal",
      period: "2023.03–05",
      background: [
        "New-user acquisition was down about 20% (60K in Q1 '23), and coupons alone couldn't move fast enough (fixed expiry, no easy way to shift eligibility as sell-through changed), so the platform needed something more agile to hook a first purchase.",
        "**Hypothesis:** a dedicated first-purchase price, shown conditionally with the operating tools to run it, would lift first-purchase conversion.",
      ],
      action: [
        "Defined the core funnel and policy (display → checkout → order → claims) and modeled the settlement and refund impact: sellers absorbing promo pricing was affecting which products they'd list, and under-counted fee rates risked understating revenue, so the pricing type and settlement structure were built to let the platform absorb the discount instead. Sampled logs by user segment to prioritize the home → event page → PDP → cart → checkout funnel, cut low-engagement screens from MVP in favor of an in-app push, and led the project across five product teams (placement, order, claims, settlement, and business/CS policy).",
      ],
      results: [
        { label: "Monthly new buyers, YoY", value: "+40%" },
        {
          label: "Revisit rate (deal vs. coupon first-purchase)",
          value: "40% vs. 33%",
        },
        { label: "Repeat-purchase rate", value: "2.8% → 5.8%" },
      ],
      lesson: [
        "Collaboration starts by aligning on the product's purpose, background, and impact. With display and backend split across teams, priorities differ, and that gap shows up directly in quality and timeline. I use a weekly sync to share target metrics and rollout plans, and to stay in sync with makers on how much the product matters.",
      ],
      media: [
        {
          src: "/images/zigzag/first-purchase.png",
          alt: "First-purchase deal campaign page and product detail page",
        },
      ],
    },
    {
      number: "07",
      title: "Discounted-Price Structure by Option",
      period: "2024.03–05",
      background: [
        "Zigzag's catalog grew out of syncing sellers' own storefronts, and about half of listed products still work that way, creating two problems: a flat discount entered by a seller could double-stack with price changes on their own storefront, sometimes selling well under intended price; and discounts applied at the product level meant every option under it needed its base price adjusted by hand. The goal was a pricing structure flexible enough to run in-app discounts, decoupled from the seller's own storefront.",
      ],
      action: [
        "Led the rollout schedule and internal communication, and planned the seller and internal admin end to end, including a backlog of edge cases: hidden or sold-out options were still surfacing at sale price and being exploited by some sellers, so the new logic shipped with an exception path for those states. In the seller admin, defined how a discount is deducted, calculated, paused, edited, deleted, and displayed. Because 90%+ of sellers used the existing discount data and the change touched settlement-linked screens, ran onboarding sessions for MD, PM, and operations teams across every business category and documented the change with FAQs and setup examples.",
      ],
      results: [
        { label: "Discount-rate gap vs. competitors", value: "closed" },
        {
          label: "Items per order",
          value: "up during promo window",
        },
      ],
      lesson: [
        "A pricing feature that ships with a config error turns into cancelled orders, settlement correction, and compensation, fast. For two weeks post-launch, I tracked company-wide support keywords daily and reviewed them each morning with the team to catch issues early.",
        "A database migration required a 1–2 hour write freeze, communicated in advance, but a missed cache/traffic test meant a same-day rollback of every affected feature and a three-week delay renegotiating the window. Even a \"purely technical\" risk is worth one more check with engineering before it ships.",
      ],
      media: [
        {
          src: "/images/zigzag/option-price-1.png",
          alt: "Seller admin for the option-level discount price structure",
        },
        {
          src: "/images/zigzag/option-price-2.png",
          alt: "Storefront app screens showing the new discounted price",
        },
      ],
    },
    {
      number: "08",
      title: "First-Come Order Coupon",
      period: "2023.09",
      background: [
        "Standard first-come coupons cap out at issuance: once the quota is gone, a high-intent user about to order gets nothing, and a user who already claimed one has no reason left to convert. Usage sat under 30%.",
        "**Hypothesis:** a coupon type that decrements on order instead of on issuance would roughly double redemption by staying live for buyers all the way to checkout.",
      ],
      action: [
        "Led the product definition for an order-quota coupon and the CMS and cart surfaces showing it: requested a new \"orderable quantity\" field alongside issued quantity in the coupon service and coordinated the admin build, designed a remaining-quantity indicator shown at cart and redemption, and worked with the content team to add a live quantity counter to the first-come content module. Watched VOC in real time after release and responded same-day.",
      ],
      results: [
        { label: "Redemption rate", value: "~80% of orders" },
        { label: "vs. standard first-come issuance", value: "+50pp" },
      ],
      resultsNote:
        "Caught buyers using deferred payment methods to lock in quantity ahead of checkout and shipped a fix the same day the campaign went live; surfaced issuance history and policy in the coupon wallet after a spike in \"this is just for traffic\" complaints as the coupon ran low.",
      lesson: [
        "During the two-week Black Friday run, 100+ VOC threads on day one dropped to zero. Every morning I read the unfiltered VOC sheet myself, sorted each case by root cause — product policy, missing on-screen information, stability — and pushed same-day fixes with the team. Checking every day instead of putting it off is its own skill.",
      ],
      media: [
        {
          src: "/images/zigzag/first-come.png",
          alt: "First-come order coupon countdown banner and coupon detail screen",
        },
      ],
    },
  ],
  ko: [
    {
      number: "01",
      title: "체험단 프로모션",
      period: "24.03-05 / 24.09-10 / 25.02-04",
      background: [
        "플랫폼 비용 감축 정책으로 리뷰 적립금이 절반으로 축소되면서, 3개월간 리뷰 작성률이 40% 하락했습니다. 리뷰는 구매 유도 장치이자 셀러 판매량 확보의 필수 요인이라 리뷰 확보가 필요했습니다. 사업실 인터뷰 결과 MD 12명이 매주 수기로 운영하고 있었지만, 상품 선정, 유저 모집, 지면 확보, 쿠폰 발행 관리 등 운영 절차로 인해 규모 확대가 어려웠습니다.",
        "**가설:** 체험단 프로그램을 제품화해 운영 비용을 절감하고, 셀러 니즈를 레버리지로 리뷰를 확보한다.",
      ],
      action: [
        "체험단 프로모션 제품 사이클(셀러 신청 → 선정 → 상품 노출 → 유저 신청 → 당첨 → 구매 → 리뷰 작성)을 정의하고 프로젝트를 리딩했습니다. 지표 기반 제품 이터레이션과 셀러 인터뷰를 통해 로드맵을 개발했습니다:",
        "**주문 성공률 95% → 75% 하락:** 선정과 주문 사이에서 이탈이 발생하고 있었습니다. 셀러 재고가 먼저 소진되고 유저가 직접 주문해야 하는 구조라, 모집 기간을 3일로 제한하고 선정 즉시 자동 주문되도록 바꿔 99%로 회복했습니다.",
        "**셀러 어뷰징:** 노출만을 목적으로 대량 신청 후 미배송하는 사례가 발생해 CS 클레임이 하루 최대 50건까지 올랐습니다. 미배송 페널티 포인트, 재고 소진 상품의 등록 차단, 셀러 참여 관리 어드민을 도입해 정상 수준으로 회복했습니다.",
        "**리뷰 작성일 지연:** 평균 10일 이상 소요되던 리뷰 작성을, 당첨 로직과 일단위 안내 프로세스를 도입해 평균 5일 이내로 단축했습니다.",
        "서비스 정책 수립(고객 당첨 기준, 사이클별 스케쥴, 등록 상품 조건: 수량·배송·상품 속성 등), 주문-정산 정책 정의 및 담당 팀 커뮤니케이션, 운영 정책(셀러 페널티 포인트, 고객 페널티 등) 수립 및 법무·CS 담당자 커뮤니케이션도 담당했습니다.",
      ],
      results: [
        { label: "상품 제공 수 (주평균)", value: "200개 → 1,600개" },
        { label: "응모 수 (주평균)", value: "3만 → 30만" },
        { label: "셀러 참여 수 (주평균)", value: "10개 → 100개" },
        { label: "리뷰 회수율", value: "98%" },
        { label: "셀러 ROI (체험단 참여 후 매출 상향분)", value: "+400%" },
        { label: "운영 인력", value: "조직당 5명 이상 → 0명" },
      ],
      lesson: [
        "제품 완성도는 한 번의 출시가 아니라 사용자·지표 기반 이터레이션에서 나옵니다. 완벽하게 내놓는 것보다 빠르게 내고 반복해서 고치는 쪽을 택했고, 그 결과 광고 인플루언서 협찬과 사내 직원 타깃으로 확장할 수 있었습니다.",
      ],
      media: [
        {
          src: "/images/zigzag/seeding-1.png",
          alt: "체험단 프로모션 퍼널 및 신청 플로우",
        },
        {
          src: "/images/zigzag/seeding-2.png",
          alt: "체험단 프로모션 제품 사이클 셀러 어드민",
        },
      ],
      links: [
        {
          source: "데일리안",
          title: "지그재그, 체험단 코너 시범 운영…'찐' 리뷰 키운다",
          href: "https://www.dailian.co.kr/news/view/1335028/%EC%A7%80%EA%B7%B8%EC%9E%AC%EA%B7%B8-%EC%B2%B4%ED%97%98%EB%8B%A8-%EC%BD%94%EB%84%88-%EC%8B%9C%EB%B2%94-%EC%9A%B4%EC%98%81%EC%B0%90-%EB%A6%AC-2024",
        },
        {
          source: "kakaostyle 파트너라운지",
          title: "실제 스토어들의 체험단 프로모션 효과",
          href: "https://partnerlounge.kakaostyle.com/knowhow/experience-group-update",
        },
      ],
    },
    {
      number: "02",
      title: "상향 쿠폰 추천 ABT",
      period: "25.02-04",
      background: [
        "비프로모션 시기, 주문당 결제 금액의 하향세를 보완할 장치가 필요했습니다. 이전에 도입했던 장바구니 내 쿠폰 적용 UI는 쿠폰 비용 증가로 전체 배포가 불가했기 때문에, 주문당 결제 금액 상승분을 키워 비용 증가분을 보완할 수 있도록 실험을 계획했습니다.",
        "**가설:** 결제 전 혜택을 체감시키는 UI가 추가 구매를 유도할 것이다.",
      ],
      action: [
        "실험을 기획했습니다: 추천 쿠폰 정의와 노출 정보(차액, 추가 할인 정보, 추천 상품군), 퍼널을 설계하고, 추천 패턴(1회 추천 vs 무한 추천), 기간(기획전 vs 평시), 상품 로직(개인화 vs 랭킹) 변수를 바꿔가며 운영해 winner를 도출했습니다. 성공 지표(실험군 평균 구매액, 개수, 상품 추가량) 및 가드레일 지표를 모니터링하며 데이터팀과 실험 유의성, 기간 등 세부 운영 요소를 조율했고, MD팀과의 협의를 통해 기획전 기간과 쿠폰을 실험 변수로 활용할 수 있도록 확장했습니다.",
        "실험 기간을 연장해 반복 운영한 결과, 금액 최적화 UI는 소규모 기획전 기간에만 유효하다는 점을 도출했습니다. 상시 노출 대신 기획전 단위로 켜고 끌 수 있도록 기능을 스위치 구조로 피벗했습니다.",
      ],
      results: [
        { label: "추천 배너 CTR", value: "3.8%" },
        { label: "진입 이후 상품 추가 비중", value: "70%" },
        { label: "쿠폰 비용 대비 결제액 상승", value: "순증가" },
      ],
      resultsNote:
        "최초 정보 소구·동기 부여 부족으로 CTR은 낮은 편이었으나, 실험군 쿠폰 비용 상승폭(건당 평균 1천원) 대비 건당 결제액 상승폭(건당 평균 2천원)이 우세했습니다.",
      lesson: [
        "메이커의 공감이 실험 속도와 완성도를 좌우합니다. 결제 사용성을 우려한 메이커를 설득하는 데 시간이 들면서 최종 UX는 초기 구상보다 소극적으로 구현됐고, 쿠폰 비용이라는 통제 밖 변수 때문에 상시 노출로는 확대하지 못했습니다. 이후로는 빌드에 들어가기 전에 통제할 수 없는 요소를 가드레일로 정리하고 메이커의 공감을 먼저 얻습니다.",
      ],
      media: [
        {
          src: "/images/zigzag/coupon-abt.png",
          alt: "가격 비교와 절약 금액이 노출된 상향 쿠폰 추천 ABT 모바일 UI",
        },
      ],
    },
    {
      number: "03",
      title: "쿠폰 발급-승인 프로세스 개편",
      period: "25.04-06",
      background: [
        "5년간 누적된 레거시 어드민과 신규 기능 추가의 반복으로 복잡도와 오발급 사례가 증가했습니다. 월 20건 이상의 오발급을 발급 후 취소와 회수로 대응하고 있어, 최대 1억 원의 비용과 CS 대응, 제품팀 운영 비용이 매번 발생했습니다.",
      ],
      action: [
        "발급 담당 60명 전원을 인터뷰하고 모더레이팅해 실제 쿠폰 발급-승인 업무 과정을 확인하고 문제를 정의한 뒤, 어드민을 다시 설계했습니다: 적용 대상별 검수 절차와 빠른 승인 경로 신설, 사업 용어와 노출 위계를 실제 업무 언어에 맞춰 개선했습니다. 셀러 플랫폼 조직(BE, FE, PD)과 협업해 일정·QA·배포까지 프로젝트를 전체 리딩했고, 전사 세션을 열어 사업 조직 전체에 신규 개편 사항과 이전 데이터, 업무 처리 방법을 안내했습니다.",
      ],
      results: [{ label: "오발행 비중", value: "−90%" }],
      resultsNote: "MD, 재무, 제품팀의 리소스를 절감했습니다.",
      lesson: [
        "쿠폰 생성 전·중·후의 셀러·AMD 업무를 모두 알고 있었기 때문에 프로세스를 빠르게 확립할 수 있었습니다. 가설이 아니라 현장을 보고 만든 어드민이 사용자의 업무 효율로 이어집니다. 지금도 사용자를 직접 찾아갑니다.",
      ],
      media: [
        {
          src: "/images/zigzag/approval-1.png",
          alt: "개편 전 레거시 쿠폰 생성-조회 어드민",
          caption: "개편 전: 레거시 쿠폰 생성-조회 어드민",
        },
        {
          src: "/images/zigzag/approval-2.png",
          alt: "개편 후 쿠폰 생성-조회-승인 어드민",
          caption: "개편 후: 생성·조회·승인을 하나의 플로우로",
        },
      ],
    },
    {
      number: "04",
      title: "리뷰 랭킹 기반 구매 전환 강화",
      period: "25.07-10",
      background: [
        "리뷰 랭킹 구조가 배포된 뒤 개편 과제를 인수인계받았습니다. 랭킹은 존재했지만 소수의 유저만 인지하고 있어 리뷰 작성 동기로 작동하지 않았습니다. 랭킹 개편, 활성화, 어필리에이트 신설 순으로 로드맵을 구성했습니다.",
        "**가설:** 랭킹을 리워드와 동기부여 장치에 연결하고 점수 기준을 구매 영향 행동으로 바꾸면, 리뷰를 많이 쓰는 상위 유저의 참여와 리텐션을 끌어올릴 수 있다.",
      ],
      action: [
        "먼저 행동이 바뀔 수 있는 세그먼트를 특정했습니다. 유저 리서치와 리뷰 관련 행동 데이터(방문 빈도, 주문 빈도, 작성 빈도)를 분석해 상위 15% 유저를 세그먼트화했습니다.",
        "**랭킹을 보이게 만들기:** 랭킹 UI로 유저 간의 위치를 시각화하고, 랭킹 상승 시 피드백과 체험단 상품 당첨 확률 상향을 보조 장치로 붙였습니다.",
        "**점수 기준 재정립:** 리뷰 조회 후 장바구니 추가와 구매 등 구매 영향 지표를 로깅하고 랭킹 점수에 가중치로 반영했습니다.",
        "리뷰 전시 페이지를 신설해 탐색과 유저 간 교류가 발생할 수 있는 환경을 만들고, 이후 로드맵의 기반을 구성했습니다. 인수인계받은 도메인이라 개발자와 구현 구조를 함께 짚으며 개편 가능한 범위를 확인했고, 제품 KPI와 모니터링 데이터를 재정의해 로드맵 단계별 요구사항과 목표를 팀과 얼라인했습니다.",
      ],
      results: [
        {
          label: "상위 15% 유저 참여율·리텐션 (개편 전 대비)",
          value: "+6%p",
        },
      ],
      lesson: [
        "이미 있는 기능을 작동하게 만드는 일은 새로 만드는 것과 다른 접근이 필요합니다. 반응할 수 있는 15%로 좁혀 가설을 세우고, 결과로 확인했습니다.",
      ],
      media: [],
    },
    {
      number: "05",
      title: "중복 쿠폰 구조 신설",
      period: "24.01-03",
      background: [
        "판매 수수료가 경쟁사 대비 40% 열위로, 쿠폰 비용을 셀러에게 전가하는 구조라 고할인율 쿠폰 발행에 한계가 있었습니다. 경쟁사의 DAU가 우상향하는 상황에서 혜택 인지 장치의 중요도가 높아졌습니다.",
        "**가설:** 1차 쿠폰 위에 2차 쿠폰을 중복 적용할 수 있게 하면 가격 경쟁력을 강화하고 주문당 결제 금액을 향상시킬 수 있다.",
      ],
      action: [
        "중복 쿠폰의 발행-노출-적용-정산 퍼널을 설계하고 어드민팀과 함께 구현했습니다. MVP 배포 이후에도 PLP·PDP 내 쿠폰 다운로드 지점마다 가격·뱃지 표기와 예상 최저가 영역을 추가했고, 이벤트 기간 내 장바구니 상품 대상 쿠폰 적용 금액을 홈-기획전-PDP-장바구니에 게이지 바 UI로 전시했으며, 이후 프로모션에도 재사용할 수 있는 백오피스 어드민 기능으로 만들었습니다.",
      ],
      results: [
        { label: "주문 단가 (YoY)", value: "+20%" },
        { label: "평균 주문 상품 수", value: "2.3개 → 3.2개" },
      ],
      lesson: [
        "후속 사용성 개선은 ABT에서 비용 손실이 확인돼 배포하지 못했습니다. 구조는 만들었지만 영향력은 넓히지 못한 셈인데, 전사의 비용 지표와 제품의 사용 지표가 서로 반대 방향을 향하고 있었습니다. 이후로는 전사 지표와 제품 목표의 정렬을 킥오프 때 한 번이 아니라 프로젝트 내내 팀·리더와 점검합니다.",
      ],
      media: [
        {
          src: "/images/zigzag/stacked-coupon.png",
          alt: "장바구니와 쿠폰함에 노출된 중복 쿠폰 UI",
        },
      ],
    },
    {
      number: "06",
      title: "첫구매딜 프로모션 신설",
      period: "23.03-05",
      background: [
        "신규 유저 유입이 23년 1분기 기준 6만 명, 약 20% 이상 감소했습니다. 쿠폰은 유효기간이 고정돼 있고 판매량 추이에 따라 대상을 민첩하게 바꾸기 어려워, 새로운 첫 구매 유인 장치가 필요했습니다.",
        "**가설:** 첫구매 유저 전용 할인가를 조건부로 노출하고 운영 기능을 제공하면 첫 구매 전환율이 향상될 것이다.",
      ],
      action: [
        "핵심 퍼널과 정책(노출-결제-주문-클레임)을 정의하고, 정산·환급 영향도를 설계했습니다: 프로모션 가격 판매 시 셀러 부담 수준이 이벤트 상품 셀렉션에 영향을 주고, 수수료율 과소 집계가 매출 과소 반영으로 이어질 수 있어 플랫폼이 할인 비용을 부담하도록 가격 타입과 정산 구조를 새로 설계했습니다. 유저 세그먼트별 로그 샘플링으로 홈 > 이벤트 페이지 > 상품 상세 > 장바구니 > 주문서 퍼널의 우선순위를 정하고, 관여도 낮은 화면은 MVP에서 제외해 인앱 푸시로 대체했으며, 5개 제품팀(전시, 주문, 클레임, 정산, 사업/CS 정책)에 걸쳐 프로젝트를 리딩했습니다.",
      ],
      results: [
        { label: "월평균 신규 구매 고객 수 (YoY)", value: "+40%" },
        { label: "재접속 비중 (첫구매딜 vs 쿠폰)", value: "40% vs 33%" },
        { label: "재구매 비중", value: "2.8% → 5.8%" },
      ],
      lesson: [
        "협업은 제품의 목적과 배경, 영향도에 대한 이해를 맞추는 데서 시작합니다. 전시와 백엔드가 분리된 조직이라 팀별 우선순위가 다르고, 그 차이가 완성도와 일정에 그대로 나타납니다. Weekly 미팅에서 기대 지표와 운영 방안을 공유하며 메이커와 제품 중요도를 싱크하기 위해 노력합니다.",
      ],
      media: [
        {
          src: "/images/zigzag/first-purchase.png",
          alt: "첫구매딜 프로모션 이벤트 페이지와 상품 상세 페이지",
        },
      ],
    },
    {
      number: "07",
      title: "옵션 할인 판매가 구조 신설",
      period: "24.03-05",
      background: [
        "지그재그는 셀러 자사몰 상품 연동으로 시작된 비즈니스 모델로, 일반 상품의 50%가 이 구조입니다. 할인 금액을 기입하면 자사몰 가격 변동 시 이중 할인이 발생해 기대 이하 가격에 판매되는 문제, 그리고 상품 중심 구조라 동일 할인액이 전체 옵션에 적용돼 옵션별 기본 판매가를 일일이 조정해야 하는 문제가 있었습니다. 앱 내 할인가를 유연하게 설정하면서도 자사몰 가격 변동과 독립적으로 동작하는 기본 가격 구조가 필요했습니다.",
      ],
      action: [
        "프로젝트 시행 일정 관리와 내부 사용자 커뮤니케이션을 주도했고, 전시-셀러 어드민을 일괄 기획했습니다. 미전시·품절 상태 옵션이 판매가로 노출되어 일부 셀러가 어뷰징하는 사례가 있어, 대표 노출가격에서 예외 처리할 수 있도록 보완했습니다. 셀러 어드민에서 할인 등록 시 금액 차감 방식, 산식, 데이터 중지·수정·삭제·조회 동작과 노출 화면을 기획했습니다. 90% 이상의 셀러가 활용하는 데이터이자 정산 연동 화면(기획전 가격 예약, 아울렛 판매가)이라 카테고리별 MD·PM·운영 센터를 대상으로 세션을 열어 변경 정책을 안내하고 FAQ와 설정 예시를 문서화했습니다.",
      ],
      results: [
        { label: "경쟁사 대비 할인율 열위", value: "해소" },
        { label: "주문당 상품 수", value: "프로모션 기간 내 상승" },
      ],
      lesson: [
        "가격 기능은 설정 오류 시 주문 취소 → 정산 보정 → 보상 운영으로 이어지는 문제입니다. 배포 후 2주간 전사 채널 키워드를 매일 확인하고 오전 미팅으로 팀에 공유해 해결 필요건을 빠르게 식별했습니다.",
        "데이터 DB 이관을 위해 1-2시간 쓰기 제한을 사전 공지했는데, 캐시 트래픽 테스트가 누락돼 배포 당일 영향 서비스의 기능을 전부 롤백하고 재협의로 3주가 밀렸습니다. '순수 기술적인' 리스크라도 배포 전에 개발자와 한 번 더 점검하는 습관의 필요성을 배웠습니다.",
      ],
      media: [
        {
          src: "/images/zigzag/option-price-1.png",
          alt: "옵션 단위 할인 판매가 구조 셀러 어드민",
        },
        {
          src: "/images/zigzag/option-price-2.png",
          alt: "새로운 할인가가 적용된 앱 화면",
        },
      ],
    },
    {
      number: "08",
      title: "선착순 주문 쿠폰",
      period: "23.09",
      background: [
        "일반적인 발급 선착순 쿠폰은 제한 수량에 도달하면 발급이 중지되어, 주문 가능성이 높은 유저여도 마감 시 쿠폰을 받을 수 없고, 이미 발급받은 유저는 실질적인 구매 전환 유인이 없다는 한계가 있었습니다. 사용률은 30% 미만이었습니다.",
        "**가설:** 발급이 아닌 주문 기준으로 수량을 차감하는 쿠폰 타입을 신설하면 결제 시점까지 유효하게 남아 쿠폰 사용 주문량을 2배 이상 높일 수 있다.",
      ],
      action: [
        "주문 선착순 쿠폰 제품 정의와 CMS/장바구니 노출 모듈을 기획했습니다: 쿠폰 서비스에 발급 수량 외 '주문 가능 수량' 신규 필드를 요청하고 어드민 대응을 조율했으며, 장바구니와 쿠폰 사용 시점에 잔여 수량을 인지할 수 있는 UI를 추가하고, 콘텐츠팀과 협업해 '선착순 쿠폰' 콘텐츠 페이지에 수량 카운터를 추가했습니다. 릴리즈 후 VOC 현황을 실시간으로 수집하고 즉시 대응했습니다.",
      ],
      results: [
        { label: "쿠폰 사용률", value: "평균 주문 전환율 80%" },
        { label: "발급 선착순 대비", value: "+50%p" },
      ],
      resultsNote:
        "후불 결제 수단(무통장, 편의점)으로 수량을 선점하는 케이스를 확인해 이벤트 당일 반영했고, 쿠폰 소진 속도로 인한 '트래픽용 운영' 클레임이 누적되자 쿠폰함과 쿠폰 정책 내역에 발급 이력·정책을 노출해 즉각 대응했습니다.",
      lesson: [
        "블랙 프라이데이 2주 동안 초기 100건 이상이던 VOC를 0건까지 낮췄습니다. 매일 아침 정제되지 않은 VOC 시트를 직접 읽고 원인을 제품 정책·화면 정보 부족·안정성으로 나눈 뒤, 일단위로 팀에 공유하고 수정했습니다. 미루지 않고 매일 확인하는 것 자체가 역량이라는 걸 배웠습니다.",
      ],
      media: [
        {
          src: "/images/zigzag/first-come.png",
          alt: "선착순 주문 쿠폰 카운트다운 배너와 쿠폰 상세 화면",
        },
      ],
    },
  ],
};
