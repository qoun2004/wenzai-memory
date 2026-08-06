import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="section section-tint" id="community-history">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">第三批地方影像</p>
              <h2>摃梗與黑豆狂想曲的前期累積</h2>
            </div>
            <p>
              這批由吳淑芳提供的舊照片，證明摃梗體驗與黑豆種植在2026子計畫以前就曾發生。
              網站先公開代表影像，完整原檔、人物、拍攝者與活動紀錄再逐筆補登。
            </p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo field-photo-wide">
              <img src="/history/gonggen-early.jpg" alt="早期參與者在塭仔戶外場地操作摃梗農具" />
              <figcaption>早期摃梗操作與體驗影像。拍攝年份、活動名稱、人物與農具細節仍待淑芳姐及當事人確認。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/history/black-bean-briefing-2023.jpg" alt="2023年塭仔社區黑豆狂想曲計畫說明活動" />
              <figcaption>2023.09.28黑豆狂想曲計畫說明，呈現社區如何向居民介紹並共同進入種植行動。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/history/black-bean-sorting.jpg" alt="塭仔長者使用竹篩整理黑豆" />
              <figcaption>採後整理影像串起黑豆種植、長者勞動經驗與後續食農應用。</figcaption>
            </figure>
          </div>
          <p className="material-credit">
            資料提供：吳淑芳｜本批共21張照片、2份影片檔；兩份影片經檔案比對為同一支8.75秒直式影片。影片包含未成年參與者，公開同意未確認前暫不嵌入網站。
          </p>
        </div>
      </section>
      <section className="section site-width" id="first-formal-interview">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">第四批田野影像｜2026.08.06</p>
            <h2>第一位正式耆老訪談完成</h2>
          </div>
          <p>唐榮先生的訪談留下摃梗使用、作物處理、換工、養牛與地方產業變化等線索；目前進入回聽、查證及授權整理。</p>
        </div>
        <div className="field-gallery">
          <figure className="field-photo">
            <img src="/field-notes/interview-20260806-main.jpg" alt="唐榮先生接受第一場正式耆老訪談" />
            <figcaption>單眼主畫面截圖。完整訪談影像與聲音暫不公開，待內容核對與書面授權完成。</figcaption>
          </figure>
          <article className="field-insight">
            <p className="archive-type">典藏狀態</p>
            <h3>四種媒材已入庫，先保留脈絡再整理內容</h3>
            <p>本次包含單眼錄影、DJI運動相機備援、手機錄音與現場影像。手機錄音約71分41秒，適合後續分段回聽；台語自動辨識只能作輔助，特殊詞與完整語意仍需人工確認。</p>
            <StatusBadge status="內容整理中・授權待確認" />
            <Link className="arrow-link" href="/projects/gonggen#interview-20260806">查看訪談成果與內容線索 <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
        <p className="material-credit">資料來源：2026.08.06訪談原始檔與現場紀錄｜整理日期：2026.08.07｜原始素材不提供下載。</p>
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
