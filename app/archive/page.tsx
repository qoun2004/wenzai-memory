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
        <div className="source-review-callout">
          <div>
            <p className="eyebrow">2026.08.19 新增來源</p>
            <h2>32張來源照片已建檔，第一批12張精選上線</h2>
            <p>兩份簡報共137頁，另有32張獨立照片。網站先公開摃梗、環境守護、食農食魚、地方產品、水域行動與跨域交流的代表影像。</p>
          </div>
          <Link className="button button-accent" href="/archive/association-history">查看協會歷程影像</Link>
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
      <section className="section section-tint" id="tofu-workshop-archive">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div><p className="eyebrow">第四批食農影像｜2026.07.21</p><h2>黑豆豆漿、豆腐DIY與社區客廳</h2></div>
            <p>140支短片、約44分鐘，從戶外炊煮走到室內共同操作；可同時支援紀錄片、黑豆食農教案、豆腐庄故事及體驗流程整理。</p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo"><img src="/field-notes/tofu-workshop-20260721/elder.jpg" alt="在地豆腐第四代長輩於活動現場示範" /><figcaption>第四代長輩示範畫面；姓名、店家沿革與公開身分待補。</figcaption></figure>
            <figure className="field-photo"><img src="/field-notes/tofu-workshop-20260721/finished.jpg" alt="黑豆豆腐DIY完成後的豆腐成品" /><figcaption>豆腐成品與模具操作，補上黑豆從作物走向加工與體驗的影像環節。</figcaption></figure>
          </div>
          <p className="material-credit">影像拍攝：黃建凱｜原始檔保留於專案素材庫；網站僅公開代表截圖。現場另一拍攝團隊屬不同專案，不列入本案製作團隊或成果數量。</p>
          <Link className="arrow-link" href="/education#tofu-workshop-20260721">查看食農教育整理 <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="section section-tint" id="chen-zhonghe-archive">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div><p className="eyebrow">第八批田野影像｜2026.08.17</p><h2>陳忠和伯：廟口雜貨店、帳簿與摃梗的村庄記憶</h2></div>
            <p>第二位正式耆老訪談完成。本批以摃梗的勞動分工為入口，延伸到作物輪作、農村賒帳、養殖、糖業、廟口看戲與長年日記。</p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo"><img src="/field-notes/interview-20260817-chen/conversation.jpg" alt="陳忠和伯在家中接受塭仔地方記憶訪談" /><figcaption>原始單眼、DJI與手機錄音同步保留；網站僅公開授權整理中的代表照片與摘要。</figcaption></figure>
            <article className="field-insight"><p className="archive-type">典藏狀態</p><h3>四種媒材已入庫，先建立口述與物件的關係</h3><p>手機錄音約43分鐘；單眼主畫面約32分鐘、DJI備援約36分鐘。另有雜貨店空間、日記筆記與現場互動照片，可支援紀錄片、三千字技藝報告與後續地方知識庫。</p><StatusBadge status="內容已索引・授權與名詞核對中" /><Link className="arrow-link" href="/projects/gonggen#interview-20260817-chen">查看訪談成果與內容線索 <span aria-hidden="true">↗</span></Link></article>
          </div>
          <p className="material-credit">資料來源：2026.08.17陳忠和訪談原始檔、現場筆記與照片｜整理日期：2026.08.17｜「摃梗」讀音、地方名詞、作物與年代仍待人工回聽及在地核對；日記與帳簿不公開原件。</p>
        </div>
      </section>
      <section className="section site-width" id="cai-jinlu-archive">
        <div className="section-heading archive-heading">
          <div><p className="eyebrow">第九批田野影像｜2026.08.18</p><h2>蔡金露：鰲鼓的農漁工具、摃梗實作與導覽記憶</h2></div>
          <p>本批完成跨村初訪，找到一位兼具農漁生活、手工工具、摃梗實作與濕地導覽經驗的地方知情者。</p>
        </div>
        <div className="field-gallery">
          <figure className="field-photo"><img src="/field-notes/interview-20260818-cai-jinlu/interview.jpg" alt="蔡金露接受摃梗與農漁生活記憶訪談" /><figcaption>原始單眼、運動相機、手機錄音與現場筆記同步入庫；網站僅公開經整理的代表影像與摘要。</figcaption></figure>
          <article className="field-insight"><p className="archive-type">典藏狀態</p><h3>有影音，也有可回到現場試作的技術線索</h3><p>訪談涵蓋芭樂枝芯材、刺竹、金屬螺絲改良、換工、豆科作物與機械化前後的農事記憶；其中台語用詞、年代與工法均待回聽及多人交叉核對。</p><StatusBadge status="內容已索引・口述與授權核對中" /><Link className="arrow-link" href="/projects/gonggen#cai-jinlu-20260818">查看訪談成果與後續試作 <span aria-hidden="true">↗</span></Link></article>
        </div>
        <p className="material-credit">資料來源：2026.08.18蔡金露訪談、現場筆記、手機錄音及單眼／運動相機原始檔｜完整影音、家族資訊、導覽運作資訊與位置不公開。</p>
      </section>
      <section className="section section-tint" id="bamboo-harvest-archive">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div><p className="eyebrow">第十批田野影像｜2026.08.18</p><h2>刺竹與桂竹正式採集：復刻前的材料日誌起點</h2></div>
            <p>在前次勘查後，團隊正式採集、修枝、裝車並搬回社區日曬；素材已從「看到竹子」前進到「可以等待試作的材料」。</p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo"><img src="/field-notes/bamboo-harvest-20260818/materials.jpg" alt="採集後整理成堆準備日曬的竹材" /><figcaption>以成熟刺竹與較細桂竹分別作為不同部位候選；最終尺寸與結構仍需經試作確認。</figcaption></figure>
            <article className="field-insight"><p className="archive-type">典藏狀態</p><h3>把每一批竹材做成可追溯的材料證據</h3><p>本批包含手機、相機與運動相機紀錄。下一步將補上竹材編號、竹種、尺寸、日曬與裂損狀態，連到梗達人試作與長者試打回饋。</p><StatusBadge status="圖文已整理・日曬與試作追蹤中" /><Link className="arrow-link" href="/projects/gonggen#bamboo-harvest-20260818">查看材料選擇與工作流程 <span aria-hidden="true">↗</span></Link></article>
          </div>
          <p className="material-credit">資料來源：2026.08.18採竹現場手機、相機與運動相機原始檔｜參與者個別姓名、肖像與採集位置依公開同意範圍處理。</p>
        </div>
      </section>
      <section className="section site-width" id="first-formal-interview">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">第五批田野影像｜2026.08.06</p>
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
      <section className="section site-width" id="cai-tong-bin-archive">
        <div className="section-heading archive-heading">
          <div><p className="eyebrow">第六批田野影像｜2026.08.09</p><h2>蔡通彬：摃梗材料、製作行動與東崙黑豆</h2></div>
          <p>淑芳姐於東崙拍攝的3分19秒台語口述，已建立原始影片、Breeze ASR辨識初稿、時碼與代表截圖。</p>
        </div>
        <div className="field-gallery">
          <figure className="field-photo"><img src="/field-notes/interview-20260809-cai/conversation.jpg" alt="蔡通彬與吳淑芳進行台語口述記錄" /><figcaption>原始畫面採固定廣角，可作為人物線索與後續實作跟拍的前導。</figcaption></figure>
          <figure className="field-photo"><img src="/field-notes/interview-20260809-cai/black-bean.jpg" alt="蔡通彬談東崙黑豆種植經驗" /><figcaption>口述後段談到黑豆、降雨、種子腐壞發霉與發芽不良等田間問題。</figcaption></figure>
          <article className="field-insight"><p className="archive-type">典藏狀態</p><h3>技藝線索已入庫，角色、台語細節與授權仍待確認</h3><p>目前先定位為「摃梗實作／製作技藝重要知情者或梗達人候選」，不將AI辨識結果直接當成完成考證的史料。</p><StatusBadge status="內容已索引・角色與授權待確認" /><Link className="arrow-link" href="/people#cai-tong-bin">查看人物與追訪方向 <span aria-hidden="true">↗</span></Link></article>
        </div>
        <p className="material-credit">原始影像與資料提供：吳淑芳｜人物：蔡通彬｜拍攝時間：2026.08.09 13:29（依原始檔案時間）｜完整影片待受訪授權確認，目前不嵌入公開網站。</p>
      </section>
      <section className="section section-tint" id="bamboo-survey-archive">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div><p className="eyebrow">第七批田野影像｜2026.08.12</p><h2>刺竹資源調查與採集路線勘查</h2></div>
            <p>採竹因雨延期後，團隊改做現地勘查，留下竹材、道路、安全準備與地方知情者等後續復刻線索。</p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo"><img src="/field-notes/bamboo-survey-20260812/bamboo-overview.jpg" alt="摃梗復刻前期刺竹資源調查現場" /><figcaption>刺竹叢與進場環境已建立第一批影像索引。</figcaption></figure>
            <article className="field-insight"><p className="archive-type">典藏狀態</p><h3>39段影片與17張照片已盤點</h3><p>本批影片總長約35分鐘。網站先公開不涉及人物肖像的代表截圖與田調摘要；柳婉玲、柳水鴨及其他知情者的完整畫面留存在原始素材庫，待同意後再選段。</p><StatusBadge status="圖文已整理・人物影像待授權" /><Link className="arrow-link" href="/projects/gonggen#bamboo-survey-20260812">查看完整田調紀錄 <span aria-hidden="true">↗</span></Link></article>
          </div>
          <p className="material-credit">資料來源：2026.08.12手機與相機原始檔｜整理範圍：刺竹環境、材料判斷、採集準備、柳婉玲地方協同及柳水鴨口述線索。</p>
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
