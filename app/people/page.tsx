import type { Metadata } from "next";
import { InfoCard, PageHero } from "../components";

export const metadata: Metadata = {
  title: "人與地方產業",
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="人與地方產業"
        title="真正保存地方的，是人的做法與選擇"
        lead="長者記得工具怎麼用，婦女把地方食材做成可以帶走的產品，青年重新設計體驗，社區工作者把不同聚落與團隊連在一起。"
        note="人物姓名、店家名稱與口述內容，待本人同意及資料核對後逐步公開。"
      />
      <section className="section site-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">人物入口</p>
            <h2>每一種角色，都掌握不同的地方知識</h2>
          </div>
          <p>第一版先建立人物分類；後續訪談完成後，每位人物會有公開摘要與相關典藏連結。</p>
        </div>
        <div className="card-grid">
          <InfoCard label="耆老與職人" title="摃梗製作、操作與換工記憶" status="訪談名單確認中">
            <p>回答工具怎麼做、處理哪些作物、誰負責什麼，以及它何時逐漸消失。</p>
          </InfoCard>
          <InfoCard label="聲音採集" title="黃哲永老師與地方歌謠" status="創作進行中">
            <p>從耆老記憶、歌謠與地方故事出發，整理並創作新的歌曲，再與長者共同教唱。</p>
          </InfoCard>
          <InfoCard label="地方行動" title="吳淑芳與長期社區工作">
            <p>連結在地人物、既有黑豆資料、食農經驗與大東石區域協作脈絡。</p>
          </InfoCard>
          <InfoCard label="協會治理" title="林文達理事長與協會責任" status="正式資料待補">
            <p>呈現協會作為受補助與執行主體的角色，以及計畫如何接續長期願景。</p>
          </InfoCard>
          <InfoCard label="傳承火苗" title="豆腐庄家族、第三代長輩與青年">
            <p>理解老店停業、技術中斷與今天重新發展黑豆豆腐體驗的原因。</p>
          </InfoCard>
          <InfoCard label="地方餐桌" title="農漁生產者與在地廚師">
            <p>讓黑豆、養殖魚與東石食材，不只成為菜色，也能被說明其土地與產業關係。</p>
          </InfoCard>
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width prose-grid">
          <aside><p className="eyebrow">內容原則</p><p>網站不把口述記憶直接當成唯一史實，而是標示說話者、時間、來源與待查證之處。</p></aside>
          <article>
            <h2>人物頁將如何長出來</h2>
            <div className="steps">
              <div className="step"><div><h3>先取得同意</h3><p>確認姓名、聲音、影像、逐字稿與老照片可公開的範圍。</p></div></div>
              <div className="step"><div><h3>保留完整來源</h3><p>原始錄音與工作檔另行保存，網站只放公開版摘要與經同意的節錄。</p></div></div>
              <div className="step"><div><h3>連回相關內容</h3><p>每位人物會連到對應的農具、歌謠、產業、教案、影片與活動。</p></div></div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
