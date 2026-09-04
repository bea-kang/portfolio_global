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
        title: "Action 1: scope the MVP to how local shoppers arrive",
        blocks: [
          {
            ul: [
              {
                text: "Interviewed five French shoppers, pulled out the must-haves, and built to those.",
                sub: [
                  "How K-beauty and overseas products are perceived locally, and the purchase journey → hooks on the product detail page",
                  "What drives purchase decisions locally → inventory buying and price optimization",
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
                  "French shoppers wanted proof that Koreans really use the product and that it is popular there. We processed the user reviews accumulated on Zigzag and used them as the hook on the product detail page.",
                ],
              },
              {
                text: "**Hold a price advantage over competitors.**",
                sub: [
                  "Shoppers were price-sensitive: the products already cost more than local ones before shipping was added. The strategy was to land a selling price below competitors.",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Action 2: closing the grey zones with AI",
        blocks: [
          {
            p: "I built these myself with Claude Code, to speed up the launch and cut the operating load.",
          },
          {
            ul: [
              {
                text: "**Competitor price and category scraping, and the reporting on it**",
                sub: [
                  "An automated pull of competitor products and prices, handed to the merchandising team, who used it for inventory buying and category structure.",
                ],
              },
              {
                text: "**Review data localization pipeline**",
                sub: [
                  "Built and shared a page that runs extraction of Zigzag's review data, prompting and processing, display, and localization QA.",
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
            p: "Sharpening the acquisition funnel and the MVP got the platform launched inside the three-month ETA, and it is running now.",
          },
        ],
      },
    ],
    lessonLabel: "Lesson learned",
    lesson: [
      "Spotting the grey zones on the way to launch and working through them myself is what shrank the line around my own job. AI keeps widening what a single PM can cover, so when the product's goal needs it, I would rather execute across that line than stop at it.",
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
        title: "액션 1: 현지인 유입 시나리오에 맞춘 MVP 집중",
        blocks: [
          {
            ul: [
              {
                text: "프랑스 소비자 5명 인터뷰를 통해 must have를 도출하고 집중했습니다.",
                sub: [
                  "현지의 K뷰티·해외 상품 인식 및 구매 여정 → PDP 후킹",
                  "현지의 구매 의사결정 영향 요인 → 상품 사입 및 가격 최적화 구현",
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
                  "프랑스 소비자는 진짜 현지인이 사용하는, 인기 있는 제품인가를 증명하기 원했습니다. 지그재그에 축적된 사용자 리뷰를 가공해 PDP 후킹 포인트로 활용했습니다.",
                ],
              },
              {
                text: "**경쟁사보다 가격 우위를 점한다.**",
                sub: [
                  "현지 상품 대비 비싼 가격과 배송비로 가격 민감도가 높았습니다. 경쟁사 대비 저렴한 판매가를 만드는 전략을 취했습니다.",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "액션 2: 그레이존은 AI로 해결했습니다",
        blocks: [
          {
            p: "런칭 속도를 높이고 운영 부담을 줄이기 위해 클로드 코드로 직접 구현했습니다.",
          },
          {
            ul: [
              {
                text: "**경쟁사 가격·카테고리 스크래핑 및 리포팅 지원**",
                sub: [
                  "경쟁사 상품·가격을 자동 스크랩해 MD팀에 전달했고, 상품 사입과 카테고리 구성에 활용했습니다.",
                ],
              },
              {
                text: "**리뷰 데이터 현지화 파이프라인 구축**",
                sub: [
                  "지그재그 리뷰 데이터 추출, 프롬프팅·가공, 노출, 로컬라이제이션 검수를 운영하는 페이지를 구축하고 팀 내 공유했습니다.",
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
            p: "유입 퍼널과 MVP를 구체화해 목표 ETA인 3개월 안에 런칭했고, 현재 운영 중입니다.",
          },
        ],
      },
    ],
    lessonLabel: "레슨런",
    lesson: [
      "PM으로서 런칭까지의 그레이존을 먼저 인식하고 직접 실행하면서, 업무의 경계를 줄여 나간 경험입니다. AI 기술과 함께 PM의 커버리지도 확장되는 만큼, 프로덕트의 목표를 위해 경계 없이 빠르게 실행하겠습니다.",
    ],
    liveCaption: "런칭 후 실제 스토어 piyonna.com의 라이브 크리에이티브입니다.",
    liveCta: "piyonna.com 방문하기 ↗",
  },
};
