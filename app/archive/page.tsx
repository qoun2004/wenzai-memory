import type { Metadata } from "next";
import { PageHero, StatusBadge } from "../components";
import { archiveItems } from "../data";

export const metadata: Metadata = { title: "地方知識庫／影音典藏" };

export default function ArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="地方知識庫／影音典藏"
        title="每一筆資料，都知道自己從哪裡來"
        lead="影片、新聞、文字、訪談聲音、老照片、成果、短影音與教案，不再散落在不同人的硬碟和訊息裡，而是依年代、人物、地點、主題與權利狀態重新建立關係。"
        note="本頁目前是公開資料庫模板。高畫質原始檔與私人資料不會直接放在網站主機。"
      />
      <section className="section site-width">
        <div className="filter-bar" aria-label="典藏分類示意">
          <span className="filter-pill active">全部資料</span>
          <span className="filter-pill">影音</span>
          <span className="filter-pill">聲音／訪談</span>
          <span className="filter-pill">照片</span>
          <span className="filter-pill">新聞／文件</span>
          <span className="filter-pill">教案</span>
          <span className="filter-pill">需申請使用</span>
        </div>
        <div className="archive-grid">
          {archiveItems.map((item) => (
            <article className="archive-card" key={`${item.year}-${item.title}`}>
              <p className="archive-type">{item.type}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <StatusBadge status={item.status} />
              <footer><span>{item.year}</span><span>資料頁模板</span></footer>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width prose-grid">
          <aside><p className="eyebrow">公開層級</p><p>不是所有資料都適合直接上網。網站會清楚區分可公開、需申請、限研究、限內部與不可公開。</p></aside>
          <article>
            <h2>一筆完整典藏資料應包含什麼</h2>
            <div className="steps">
              <div className="step"><div><h3>基本脈絡</h3><p>標題、日期、摘要、人物、地點、主題與相關專案。</p></div></div>
              <div className="step"><div><h3>來源與作者</h3><p>作者、拍攝者、發布者、資料提供者、原件持有人與原始連結。</p></div></div>
              <div className="step"><div><h3>權利與使用</h3><p>可嵌入、可下載、需申請、僅典藏或不可公開，以及建議引用方式。</p></div></div>
              <div className="step"><div><h3>相關內容</h3><p>連回人物故事、教案、體驗活動、影片、聲音與其他年代資料。</p></div></div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
