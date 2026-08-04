import type { Metadata } from "next";
import { ArrowLink, InfoCard, PageHero, SourceNote } from "../components";
import { associationSources } from "../data";

export const metadata: Metadata = {
  title: "關於協會",
  description: "認識嘉義縣鄉村永續發展協會的地方行動定位、區域關係與網站架構。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="關於協會"
        title="在地方生活裡，慢慢長出可以一起做事的關係"
        lead="嘉義縣鄉村永續發展協會是這個網站的長期主體。平台從協會多年地方工作出發，整理聚落、人物、產業、食農、環境、共老與文化記憶，也收納每一個主題計畫留下的成果。"
        note="網站採用完整登記名稱「社團法人嘉義縣鄉村永續發展協會」；歷年沿革、組織成員及計畫清單仍待協會文件逐筆核對。"
      />

      <section className="section site-width">
        <div className="prose-grid">
          <aside>
            <p className="eyebrow">組織定位</p>
            <p>這不是單一社區或一次性補助案的成果網站，而是協會可以持續維護、擴充與對外連結的地方知識平台。</p>
            <SourceNote label={associationSources.registration.label} href={associationSources.registration.url} prefix="法人登記來源" />
          </aside>
          <article>
            <h2>從塭仔出發，逐步連成區域合作</h2>
            <p>公開資料顯示，協會的地方工作由塭仔累積經驗，再與栗子崙、洲仔及鄰近社區建立合作。網站因此不把塭仔視為孤立的一點，而是放回大東石的生活、產業與人際網絡裡理解。</p>
            <p>協會關注的不只是活動場次，也包含農村產業、地方文化、自然環境、居民培力與生活支持。每一個計畫都應留下可被下一位執行者、居民、老師或遊客再次使用的內容。</p>
            <SourceNote label={associationSources.regionalAction.label} href={associationSources.regionalAction.url} />
            <SourceNote label={associationSources.ruralNetwork.label} href={associationSources.ruralNetwork.url} />
          </article>
        </div>
      </section>

      <section className="section section-tint">
        <div className="site-width">
          <div className="section-heading">
            <div><p className="eyebrow">長期行動面向</p><h2>協會大架構下，網站可以持續收納的內容</h2></div>
            <p>以下依公開資料與目前專案訪談整理，正式用語仍可由協會確認。</p>
          </div>
          <div className="card-grid">
            <InfoCard label="產業與食農" title="從生產到餐桌的地方價值">
              <p>農漁產業、黑豆、豆腐、加工、地方餐桌、食農教案與體驗活動。</p>
            </InfoCard>
            <InfoCard label="文化與記憶" title="保存技藝，也保存使用情境">
              <p>人物訪談、農具、歌謠、老照片、新聞、地方語彙與生活故事。</p>
            </InfoCard>
            <InfoCard label="聚落與共好" title="讓單點行動形成區域網絡">
              <p>社區空間、居民培力、共老支持、小旅行、跨聚落合作與外部團隊協作。</p>
            </InfoCard>
          </div>
          <SourceNote label={associationSources.mission.label} href={associationSources.mission.url} prefix="行動面向參考" />
        </div>
      </section>

      <section className="section site-width">
        <div className="section-heading">
          <div><p className="eyebrow">網站內容關係</p><h2>一個協會，可以有許多年度與主題子計畫</h2></div>
        </div>
        <div className="program-structure horizontal">
          <article className="program-level umbrella"><p className="program-index">長期主體</p><h3>嘉義縣鄉村永續發展協會</h3><p>維護組織沿革、區域關係、歷年成果與地方知識庫。</p></article>
          <article className="program-level regional"><p className="program-index">區域架構</p><h3>大東石里海計畫</h3><p>串連海、田、聚落、生活產業與共好夥伴；產品、體驗、小旅行與服務將逐步補登。</p><ArrowLink href="/satoumi">查看區域架構</ArrowLink></article>
          <article className="program-level project"><p className="program-index">目前子計畫</p><h3>塭仔摃梗與鹽地雜糧記憶</h3><p>2026年由傳統農具、農村歌謠、黑豆食農與紀錄片展開。</p></article>
        </div>
      </section>
    </>
  );
}
