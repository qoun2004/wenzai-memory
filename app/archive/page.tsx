import type { Metadata } from "next";
import { PageHero, StatusBadge } from "../components";
import {
  archiveItems,
  legacyMediaItems,
  publicReferenceItems,
} from "../data";
import YouTubePreview from "./YouTubePreview";

export const metadata: Metadata = { title: "地方知識庫／影音典藏" };

export default function ArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="地方知識庫／影音典藏"
        title="每一筆資料，都知道自己從哪裡來"
        lead="影片、新聞、文字、訪談聲音、老照片、成果、短影音與教案，不再散落在不同人的硬碟和訊息裡，而是依年代、人物、地點、主題與權利狀態重新建立關係。"
        note="第一批既有公開影音索引已上架。高畫質原始檔、私人資料與尚未取得同意的內容不會直接放在網站主機。"
      />
      <section className="section site-width">
        <div className="archive-summary">
          <div><strong>18</strong><span>支不重複公開影音</span></div>
          <div><strong>2009—2025</strong><span>目前索引年代</span></div>
          <div><strong>{publicReferenceItems.length}</strong><span>筆公開文章與資料頁</span></div>
        </div>
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">第一批公開索引</p>
            <h2>塭仔社區 YouTube 影集</h2>
          </div>
          <p>
            依淑芳姐女兒整理的原始資料表建立。原表19列影音紀錄，
            移除1筆重複新聞後，共列出18支影片；著作權仍屬原發布者。
          </p>
        </div>
        <div className="media-index">
          {legacyMediaItems.map((item) => (
            <article className="media-record" key={item.url}>
              <div className="media-date">{item.date}</div>
              <div className="media-content">
                <p className="archive-type">{item.publisher}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="topic-list" aria-label="主題標籤">
                  {item.topics.map((topic) => <span key={topic}>{topic}</span>)}
                </div>
              </div>
              <div className="media-player-column">
                <YouTubePreview url={item.url} title={item.title} />
                <a
                  className="source-link"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  無法播放？前往原始影片 <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">第二批公開索引</p>
              <h2>文章、計畫與社區行動資料</h2>
            </div>
            <p>保留原始發布單位與連結，讓後續研究能回到來源核對。</p>
          </div>
          <div className="media-index compact">
            {publicReferenceItems.map((item) => (
              <article className="media-record" key={item.url}>
                <div className="media-date">{item.date}</div>
                <div className="media-content">
                  <p className="archive-type">{item.publisher}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="topic-list">
                    {item.topics.map((topic) => <span key={topic}>{topic}</span>)}
                  </div>
                </div>
                <a className="source-link" href={item.url} target="_blank" rel="noreferrer">
                  {item.linkLabel} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section site-width">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">持續收整</p>
            <h2>下一批典藏內容</h2>
          </div>
          <p>訪談、老照片、歌謠、工作坊與教案，將依完成與授權狀態逐批公開。</p>
        </div>
        <div className="archive-grid">
          {archiveItems.map((item) => (
            <article className="archive-card" key={`${item.year}-${item.title}`}>
              <p className="archive-type">{item.type}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <StatusBadge status={item.status} />
              <footer><span>{item.year}</span><span>持續整理</span></footer>
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
