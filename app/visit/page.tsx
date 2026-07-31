import type { Metadata } from "next";
import Link from "next/link";
import { InfoCard, PageHero } from "../components";

export const metadata: Metadata = { title: "來塭仔／預約體驗" };

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="來塭仔／預約體驗"
        title="先理解地方，再進入一場體驗"
        lead="未來可從摃梗、黑豆豆腐、聚落踏查、農漁產業與地方餐桌，組成90分鐘、半日或一日的塭仔體驗。"
        note="正式場域、交通、費用、承載人數、保險與預約方式仍待協會確認，目前不開放線上收費。"
      />
      <section className="section site-width">
        <div className="card-grid">
          <InfoCard label="主要場域" title="塭仔的青春美夢" status="開放資訊待確認">
            <p>成果活動預定場地，也是未來可能串接體驗、交流與地方餐桌的入口。</p>
          </InfoCard>
          <InfoCard label="體驗方向" title="摃梗、雜糧與黑豆豆腐" status="方案測試中">
            <p>依季節、材料、帶領者與參與對象組合，不把體驗簡化成只完成一件作品。</p>
          </InfoCard>
          <InfoCard label="合作與研究" title="學校、團隊與地方資料申請">
            <p>未來建立合作說明、資料申請、拍攝與研究使用的聯絡流程。</p>
          </InfoCard>
        </div>
      </section>
      <section className="section invitation">
        <div className="site-width invitation-inner">
          <div><p className="eyebrow light">目前可先做</p><h2>認識網站中的人物、故事與教案雛形。</h2></div>
          <div><p>正式預約功能開放前，可以先從摃梗主題計畫與食農教育頁理解內容方向。</p><Link className="button button-accent" href="/education">查看體驗雛形</Link></div>
        </div>
      </section>
    </>
  );
}
