import type { Locale } from "@/lib/i18n";
import type { BulletItem } from "@/components/CaseStudy";

/** `gallery` drops the live-storefront images into the section flow. */
export type PiyonnaBlock =
  | { p: string }
  | { ul: BulletItem[] }
  | { gallery: true };

export type PiyonnaSection = { title: string; blocks: PiyonnaBlock[] };

export type PiyonnaContent = {
  eyebrow: string;
  title: string;
  meta: string;
  intro: string;
  sections: PiyonnaSection[];
  lessonLabel: string;
  lesson: string[];
  liveCaption: string;
  liveCta: string;
};

export const piyonna: Record<Locale, PiyonnaContent> = {
  en: {
    eyebrow: "kakaostyle · Global Beauty TF",
    title: "Launching a K-beauty platform in France",
    meta: "Product Manager · Dec 2025–Mar 2026",
    intro:
      "A new business buying from beauty brands listed on Zigzag and reselling to French customers. I defined the market, the target customer, and the product structure from zero, and launched within three months. I actively stretched the PM role along the way: AI-assisted research, building an internal ops site, and data scraping.",
    sections: [
      {
        title: "Background",
        blocks: [
          {
            p: "K-beauty's popularity in Europe was rising, and with it beauty brands' appetite for selling abroad, so the company planned a new business line.",
          },
          {
            p: "The plan was to buy inventory from beauty brands listed on Zigzag and resell it to French customers. I joined on the condition of finishing the launch within three months of the date I gave notice.",
          },
        ],
      },
      {
        title: "Action 1: scope the research to the launch decision",
        blocks: [
          {
            ul: [
              {
                text: "Ran interviews with five French shoppers to derive the site's selling points and must-haves.",
                sub: [
                  "How K-beauty and overseas products are perceived locally, and the purchase journey",
                  "What drives purchase decisions locally, and where it differs",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Two selling points",
        blocks: [
          {
            ul: [
              {
                text: "**Prove that real Koreans use these products.**",
                sub: [
                  "French shoppers wanted to confirm whether a product was genuinely popular with locals. We decided to process and surface the user reviews accumulated on Zigzag.",
                ],
              },
              {
                text: "**Hold a price advantage over competitors.**",
                sub: [
                  "For the initial entry we bought inventory, so margin was ours to set. The strategy was to price below competitors, even by a dollar.",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Action 2: PM work to make the selling points real",
        blocks: [
          {
            p: "Beyond core product specs, I took on the following to speed up the launch and shrink grey zones inside the TF.",
          },
          {
            ul: [
              {
                text: "**Competitor price and category scraping and reporting**",
                sub: [
                  "An automated daily pull of competitor products and prices, handed to the merchandising team so they could set pricing against live market data rather than assumption.",
                ],
              },
              {
                text: "**Review data localization pipeline**",
                sub: [
                  "Built a page to run review-data extraction, prompting, and display QA against Zigzag's review data, and shared it with the team.",
                ],
              },
            ],
          },
          { gallery: true },
        ],
      },
      {
        title: "Outcome",
        blocks: [
          {
            p: "Five people worked off these two systems: the French localization lead, a product designer, an engineer, and two merchandisers handling pricing and category checks. Anything that fell between defined roles, I absorbed.",
          },
          {
            p: "The platform launched within the three-month window and is live.",
          },
        ],
      },
    ],
    lessonLabel: "What I'd take from it",
    lesson: [
      "Three months with no domain knowledge forces you to decide what you are not going to learn. The interviews were narrow on purpose. The bet was that positioning and price would carry a first launch, and that everything else could be corrected after real traffic.",
    ],
    liveCaption: "Live creative from piyonna.com, the storefront after launch.",
    liveCta: "Visit piyonna.com ↗",
  },
  ko: {
    eyebrow: "kakaostyle · 글로벌 뷰티 TF",
    title: "프랑스 K뷰티 플랫폼 런칭",
    meta: "Product Manager · 2025.12–2026.03",
    intro:
      "지그재그에 입점한 뷰티 브랜드를 프랑스 고객에게 매입 판매하는 신사업으로, 시장·타겟 고객·제품 구조를 0부터 정의해 3개월 안에 런칭했습니다. AI를 통한 리서치, 운영 사이트 구축, 데이터 스크래핑 등 PM의 역할을 적극적으로 확장하며 일했습니다.",
    sections: [
      {
        title: "배경",
        blocks: [
          {
            p: "유럽의 K뷰티 인기와 함께 뷰티 브랜드사의 해외 판매 니즈 역시 성장하고 있었고, 신사업 확장을 계획했습니다.",
          },
          {
            p: "지그재그에 입점한 뷰티 브랜드를 프랑스 고객에게 매입 판매하는 계획으로, 퇴사를 통보한 시점으로부터 3개월간 런칭을 끝내는 조건으로 합류했습니다.",
          },
        ],
      },
      {
        title: "액션 1: 런칭 의사결정에 필요한 만큼만 리서치한다",
        blocks: [
          {
            ul: [
              {
                text: "프랑스 소비자 5명 인터뷰를 진행해서 사이트의 셀링 포인트와 must have를 도출했습니다.",
                sub: [
                  "현지에서의 K뷰티/해외 상품 인식 및 구매 여정",
                  "현지에서의 구매 의사결정 영향 요인 및 차이점",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "두 가지 셀링 포인트",
        blocks: [
          {
            ul: [
              {
                text: "**실제 한국인이 쓰는 제품을 증명한다.**",
                sub: [
                  "프랑스 소비자는 진짜 현지인에게 인기가 많은지를 확인하고 싶어 했습니다. 지그재그에 축적된 사용자 리뷰를 가공해 노출하도록 의사결정했습니다.",
                ],
              },
              {
                text: "**경쟁사보다 가격 우위를 점한다.**",
                sub: [
                  "최초 진출 시 재고 사입 형태로 마진 설정이 가능했습니다. 1달러여도 경쟁사 가격보다 저렴하게 판매하는 전략을 취했습니다.",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "액션 2: 셀링 포인트를 실현하기 위한 PM으로서의 업무",
        blocks: [
          {
            p: "기본 기획 외 다음 업무로 TF 내 런칭 속도를 높이고 그레이존을 줄이기 위해 노력했습니다.",
          },
          {
            ul: [
              {
                text: "**경쟁사 가격·카테고리 스크래핑 및 리포팅**",
                sub: [
                  "경쟁사 상품과 가격을 매일 자동으로 수집해 MD팀에 전달했고, 추측이 아니라 실시간 시장 데이터를 기준으로 가격을 정할 수 있도록 했습니다.",
                ],
              },
              {
                text: "**리뷰 데이터 현지화 파이프라인 구축**",
                sub: [
                  "지그재그 내 리뷰 데이터 추출, 프롬프팅, 노출 검수를 운영할 수 있는 페이지를 구축하고 팀 내 공유했습니다.",
                ],
              },
            ],
          },
          { gallery: true },
        ],
      },
      {
        title: "결과",
        blocks: [
          {
            p: "두 시스템을 기반으로 PD, 엔지니어, 로컬라이제이션 담당자, MD가 활용했습니다.",
          },
          { p: "플랫폼은 목표 기간 3개월 내 런칭, 현재 운영 중입니다." },
        ],
      },
    ],
    lessonLabel: "레슨런",
    lesson: [
      "PM은 더 이상 기획하고 프로젝트를 관리하는 역할에 머물지 않습니다. 런칭까지 가는 길에는 누가 맡아야 할지 정해지지 않은 그레이존이 훨씬 많고, 그것을 먼저 인식해 직접 실행하는 역량이 중요해졌습니다. AI 도구가 발전하면서 한 사람이 실행할 수 있는 범위도 그만큼 넓어졌습니다. 이 프로젝트에서 역할이 나뉘지 않은 일은 제가 찾아서 처리했습니다.",
    ],
    liveCaption: "런칭 후 실제 스토어 piyonna.com의 라이브 크리에이티브입니다.",
    liveCta: "piyonna.com 방문하기 ↗",
  },
};
