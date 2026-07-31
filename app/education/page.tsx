import type { Metadata } from "next";
import { InfoCard, PageHero } from "../components";

export const metadata: Metadata = { title: "食農教育與體驗" };

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="食農教育與體驗"
        title="從土地、生產、加工到親手完成"
        lead="這裡不只是活動消息，而是可長期使用的教育資源中心。每份教案都會標示對象、目標、時間、材料、場地、安全與帶領方式。"
        note="第一版先提供教案架構與體驗雛形；正式下載、費用與預約，待實作測試及協會確認後開放。"
      />
      <section className="section site-width">
        <div className="section-heading">
          <div><p className="eyebrow">教案資源</p><h2>五個可以持續發展的學習模組</h2></div>
          <p>不是把地方故事變成標準答案，而是設計讓參與者觀察、詢問、操作與比較的方法。</p>
        </div>
        <div className="card-grid">
          <InfoCard label="農具與工藝" title="摃梗製作教案" status="製作中">
            <p>刺竹選材、材料處理、結構、綁紮、修整、試用與工具安全。</p>
          </InfoCard>
          <InfoCard label="勞動體驗" title="摃梗手工脫粒" status="製作中">
            <p>辨識雜糧、理解脫粒原理、操作節奏與早年農村換工情境。</p>
          </InfoCard>
          <InfoCard label="種植觀察" title="黑豆從田裡到採收" status="既有素材盤點中">
            <p>土地、季節、開花、結莢、採收與生產影像觀察紀錄。</p>
          </InfoCard>
          <InfoCard label="飲食加工" title="黑豆豆腐DIY" status="教案實作準備中">
            <p>浸泡、磨漿、豆漿與豆渣同煮、攪拌、煮滾、凝固及食品衛生。</p>
          </InfoCard>
          <InfoCard label="地方故事" title="豆腐庄的記憶" status="訪談核對中">
            <p>從老店、家庭技術與停業原因，理解產業傳承與今天的體驗設計。</p>
          </InfoCard>
          <InfoCard label="教師與帶領者" title="學習單、材料表與安全提醒" status="待整合">
            <p>教師版說明、學生觀察單、帶領流程、過敏與工具風險。</p>
          </InfoCard>
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width prose-grid">
          <aside><p className="eyebrow">體驗模組</p><p>依不同對象與時間，組合操作、故事、聚落踏查與地方餐桌。</p></aside>
          <article>
            <h2>從90分鐘到一日小旅行</h2>
            <div className="steps">
              <div className="step"><div><h3>90分鐘｜一件工具，一種作物</h3><p>地方故事導入、摃梗操作、雜糧脫粒與簡短分享。</p></div></div>
              <div className="step"><div><h3>半日｜摃梗與黑豆豆腐</h3><p>農具操作、黑豆豆腐DIY、豆腐庄故事與社區場域認識。</p></div></div>
              <div className="step"><div><h3>一日｜聚落、產業與地方餐桌</h3><p>加入農漁產業踏查、人物交流、體驗與東石食材餐桌。</p></div></div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
