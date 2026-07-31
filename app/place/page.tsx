import type { Metadata } from "next";
import { InfoCard, PageHero } from "../components";

export const metadata: Metadata = {
  title: "認識塭仔",
  description: "從沿海地景、農漁產業、豆腐庄與社區行動認識嘉義東石塭仔。",
};

export default function PlacePage() {
  return (
    <>
      <PageHero
        eyebrow="認識塭仔"
        title="海風、鹽地與人一起塑造的聚落"
        lead="塭仔位在嘉義東石沿海。這裡的故事不只在地圖上，也藏在雜糧田、養殖魚塭、豆腐老店、廟埕、共同廚房與一代代人的生活選擇裡。"
        note="地理範圍、豆腐庄店家與歷史年代，將依正式資料及在地訪談持續核對。"
      />

      <section className="section site-width">
        <div className="fact-strip">
          <div className="fact"><strong>嘉義東石</strong><span>沿海聚落與農漁生活</span></div>
          <div className="fact"><strong>鹽地雜糧</strong><span>受海風與土地條件影響的作物</span></div>
          <div className="fact"><strong>豆腐庄</strong><span>等待訪談補齊的地方稱呼與產業史</span></div>
          <div className="fact"><strong>2009—今</strong><span>既有影音可追溯的社區行動</span></div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="site-width prose-grid">
          <aside>
            <p className="eyebrow">地方不是背景</p>
            <p>
              這個網站不把塭仔寫成被動等待外界幫助的地方，而是從居民已經做過的選擇、累積的關係與正在面對的困難開始。
            </p>
          </aside>
          <article>
            <h2>土地如何影響生活，生活又如何留下地方性格</h2>
            <h3>海邊的農與漁</h3>
            <p>
              東石常讓人先想到養殖與海產，但沿海土地同時也孕育雜糧、黑豆與不同形式的農村勞動。塭仔的產業故事，需要把田、魚塭、加工、餐桌與觀光放在同一張圖上理解。
            </p>
            <h3>從豆腐庄到黑豆豆腐</h3>
            <p>
              塭仔曾有數家長年製作黃豆豆腐的老店。隨著經營者年長、後繼無人，這段產業逐漸離開日常；如今黑豆豆腐體驗與第三代長輩的傳承意願，讓老技術有了新的入口。
            </p>
            <h3>聚落之間的關係</h3>
            <p>
              本次田野主要以塭仔為核心，也包含栗子崙等鄰近地區。網站後續將以地圖、人物與產業關係補充聚落之間如何往來，而不以行政界線簡化地方生活。
            </p>
          </article>
        </div>
      </section>

      <section className="section site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">社區行動基地</p>
            <h2>從棧寮到「塭仔的青春美夢」</h2>
          </div>
          <p>
            它不只是一處改造完成的建築，而是塭仔居民上課、共食、接待、
            討論與一起做事的社區客廳，也是本案活動實際發生的地方。
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <time>2019起</time>
            <div><h3>整理舊稱「棧寮」的空間</h3><p>海區社規師、返鄉中壯年、社區長輩與志工共同動手，讓閒置土地重新成為公共空間。</p></div>
          </div>
          <div className="timeline-item">
            <time>第一、二期</time>
            <div><h3>社區廚房、大鼎灶與友善菜園</h3><p>以「吃」串起居民，並把戶外場域轉化為飲食教育、共食與交流的平台。</p></div>
          </div>
          <div className="timeline-item">
            <time>第三、四期</time>
            <div><h3>親水平台、同心圓廣場與FOODTALK客廳</h3><p>增加休憩、聚會、接待、簡易輕食與地方活動等多元使用方式。</p></div>
          </div>
          <div className="timeline-item">
            <time>2026本案</time>
            <div><h3>黑豆豆腐手作與專案成果展場地</h3><p>本案將在此進行黑豆豆腐DIY，並規劃紀錄片、歌謠、摃梗體驗及地方風味餐的成果展。</p></div>
          </div>
        </div>
        <a
          className="arrow-link"
          href="https://enews.ccu.edu.tw/p/404-1089-62694.php?Lang=zh-tw"
          target="_blank"
          rel="noreferrer"
        >
          閱讀中正E報場域紀錄 <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="section site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">理解塭仔的三個入口</p>
            <h2>從產業、空間與記憶交叉閱讀</h2>
          </div>
        </div>
        <div className="card-grid">
          <InfoCard label="產業" title="雜糧、黑豆、臺灣鯛與蚵仔">
            <p>整理土地條件、生產方式、地方加工、婦女勞動與餐桌文化。</p>
          </InfoCard>
          <InfoCard label="空間" title="廟埕、共同廚房與社區客廳">
            <p>記錄地方如何改造空間，回應共老、交流、無障礙與生活需求。</p>
          </InfoCard>
          <InfoCard label="記憶" title="換工、歌謠、俗語與老照片" status="田野整理中">
            <p>讓一段口述、一件農具或一張照片，能連回人物、年代與使用情境。</p>
          </InfoCard>
        </div>
      </section>
    </>
  );
}
