import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink, PageHero, SourceNote, StatusBadge } from "../components";

export const metadata: Metadata = {
  title: "大東石里海計畫",
  description: "整理大東石地區的共好夥伴、地方產品、食農與食漁體驗、小旅行及地方服務。",
};

export default function SatoumiPage() {
  return (
    <>
      <PageHero
        eyebrow="大東石里海計畫"
        title="從海、田、聚落到餐桌的共好網絡"
        lead="這是協會理事長與地方夥伴使用的區域行動概念：把養殖、雜糧、飲食、技藝、居民與遊程放回同一個生活地景裡，讓地方產品與服務能互相支持。"
        note="本頁先建立可持續擴充的架構。正式範圍、完整夥伴名單與合作關係，將依協會文件及夥伴確認逐筆補登；目前的主力執行仍是2026塭仔摃梗子計畫。"
      />

      <section className="section site-width">
        <div className="section-heading">
          <div><p className="eyebrow">區域關係圖</p><h2>不是單點景點，而是一張可以共同工作的地方網絡</h2></div>
          <p>概念關係圖，呈現內容串聯方向，並非精確地理比例。</p>
        </div>
        <div className="satoumi-map" aria-label="大東石里海計畫概念關係圖">
          <div className="satoumi-water" aria-hidden="true" />
          <div className="satoumi-route route-one" aria-hidden="true" />
          <div className="satoumi-route route-two" aria-hidden="true" />
          <article className="satoumi-node node-center"><small>區域行動架構</small><strong>大東石里海計畫</strong><span>海・田・聚落・餐桌</span></article>
          <article className="satoumi-node node-wenzai"><small>本期主專案</small><strong>塭仔</strong><span>摃梗・黑豆・豆腐</span></article>
          <article className="satoumi-node node-baisuihu"><small>食漁夥伴</small><strong>白水湖／掌潭</strong><span>牡蠣・蚵田體驗</span></article>
          <article className="satoumi-node node-fishpond"><small>地方產業</small><strong>東石魚塭</strong><span>養殖・一夜干</span></article>
          <article className="satoumi-node node-more"><small>預留擴充</small><strong>其他聚落與夥伴</strong><span>待確認後補登</span></article>
        </div>
      </section>

      <section className="section section-tint">
        <div className="site-width">
          <div className="section-heading">
            <div><p className="eyebrow">第一批夥伴資料</p><h2>先把已知內容放對位置，再持續擴大名單</h2></div>
            <p>列入此頁不等同正式會員清冊；合作身分、聯絡與預約方式仍需各夥伴確認。</p>
          </div>
          <div className="partner-grid">
            <article className="partner-card featured">
              <div className="partner-visual">
                <Image src="/partners/50fen-dried-fish.jpg" alt="50分工作室的一夜干產品製作紀錄" width={1600} height={1201} />
                <span>照片由吳淑芳提供</span>
              </div>
              <div className="partner-content">
                <p className="card-label">塭仔・東石</p>
                <h3>50分工作室・吳淑芳</h3>
                <p>以魚塭養殖與一夜干等地方產品為生活產業的一部分，也長期串聯在地夥伴的產品、小旅行與體驗服務。</p>
                <ul className="partner-tags"><li>魚塭養殖</li><li>一夜干</li><li>地方產品</li><li>小旅行串聯</li></ul>
                <StatusBadge status="第一批資料已入庫" />
              </div>
            </article>

            <article className="partner-card oyster-card">
              <div className="partner-monogram" aria-hidden="true"><span>蚵</span><small>從蚵田認識海邊生活</small></div>
              <div className="partner-content">
                <p className="card-label">掌潭村白水湖</p>
                <h3>白水湖蚵學家・陳長花（長花姐）</h3>
                <p>從家族牡蠣養殖經驗出發，帶領參與者走進蚵田，認識養殖環境與產業文化，並透過蚵殼鑽孔、串蚵、剖蚵與品嚐等活動進行食漁教育。</p>
                <ul className="partner-tags"><li>蚵田巡禮</li><li>串蚵與剖蚵</li><li>食漁教育</li><li>牡蠣產品</li></ul>
                <StatusBadge status="公開資料已確認" />
                <SourceNote label="農業易遊網｜白水湖蚵學家" href="https://ezgo.ardswc.gov.tw/zh-tw/spot/2511/" prefix="體驗資料來源" />
                <SourceNote label="農業部食農教育資訊整合平台｜嘉義牡蠣食魚教育" href="https://fae.moa.gov.tw/theme_data.php?id=17523&sub_theme=event_result&theme=news" prefix="活動資料來源" />
              </div>
            </article>

            <article className="partner-card placeholder-card">
              <div className="partner-monogram muted" aria-hidden="true"><span>＋</span><small>名單持續補登</small></div>
              <div className="partner-content">
                <p className="card-label">預留夥伴板塊</p>
                <h3>其他大東石共好夥伴</h3>
                <p>後續可依夥伴提供的正式名稱、所在聚落、產品與服務、預約方式、照片授權及合作關係逐筆建立專頁。</p>
                <ul className="partner-tags"><li>餐飲與加工</li><li>農漁產品</li><li>導覽與體驗</li><li>場域與團體服務</li></ul>
                <StatusBadge status="待補資料與確認" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section site-width">
        <div className="section-heading">
          <div><p className="eyebrow">塭仔社區體驗</p><h2>從豆腐庄記憶，到今天可以重新參與的地方學習</h2></div>
          <p>目前列為內容建置與活動發展中；實際場次、費用、容量與預約方式確認後再公開。</p>
        </div>
        <div className="card-grid">
          <article className="info-card">
            <p className="card-label">地方飲食記憶</p><h3>塭仔豆腐庄</h3>
            <p>整理塭仔過去豆腐店、製作技藝、家族記憶與地方生活，作為黑豆食農及社區體驗的文化背景。</p>
            <StatusBadge status="故事與資料整理中" />
          </article>
          <article className="info-card">
            <p className="card-label">食農手作</p><h3>黑豆豆腐 DIY 體驗</h3>
            <p>從在地黑豆、豆漿到豆腐製作，認識作物、生產過程、飲食應用與豆腐庄的地方故事。</p>
            <StatusBadge status="體驗內容發展中" />
          </article>
          <article className="info-card">
            <p className="card-label">農具與技藝</p><h3>摃梗體驗</h3>
            <p>認識摃梗的材料、製作、使用方法與換工記憶，並實際感受傳統雜糧手工脫粒的動作。</p>
            <StatusBadge status="教案與活動籌備中" />
          </article>
        </div>
        <div className="section-links"><ArrowLink href="/education">查看食農教育與體驗架構</ArrowLink><ArrowLink href="/projects/gonggen">查看塭仔摃梗子計畫</ArrowLink></div>
      </section>

      <section className="section site-width">
        <div className="section-heading"><div><p className="eyebrow">未來可使用的入口</p><h2>把地方內容整理成可理解、可預約、可支持的服務</h2></div></div>
        <div className="card-grid">
          <article className="info-card"><p className="card-label">地方產品</p><h3>從產地到伴手禮</h3><p>養殖漁產、牡蠣、黑豆、醬油、豆腐與其他加工品，補上產地、製作者、季節與購買方式。</p></article>
          <article className="info-card"><p className="card-label">體驗與教案</p><h3>食農、食漁與技藝學習</h3><p>串起摃梗、黑豆豆腐、牡蠣產業與地方飲食，依親子、校園與成人團體整理內容。</p></article>
          <article className="info-card"><p className="card-label">小旅行與團體服務</p><h3>用路線認識大東石</h3><p>未來依交通、季節、場域容量與夥伴合作，組合導覽、體驗、餐食與採購。</p></article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-width invitation-inner">
          <div><p className="eyebrow light">目前執行主軸</p><h2>2026年先把塭仔摃梗子計畫做好</h2></div>
          <div><p>大東石里海計畫是長期的上層架構；本期紀錄片、訪談、歌謠、摃梗復刻、黑豆食農與成果活動，仍以塭仔摃梗為中心。</p><ArrowLink href="/projects/gonggen">查看塭仔摃梗子計畫</ArrowLink></div>
        </div>
      </section>
    </>
  );
}
