import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components";
import { historySourceGroups, historySourceItems } from "./data";

const publicHistoryIds = new Set([1, 3, 4, 6, 8, 10, 12, 13, 16, 17, 23, 26]);
const publicHistoryItems = historySourceItems.filter((item) => publicHistoryIds.has(item.id));

export const metadata: Metadata = {
  title: "協會歷程影像精選",
  description: "從協會歷年簡報與照片中，整理農村技藝、環境守護、食農食魚、地方產品與跨域交流的第一批代表影像。",
};

export default function AssociationHistoryArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="協會歷程影像｜第一批公開精選"
        title="從一件農具，到一張地方共好網絡"
        lead="這12張代表影像，從摃梗早期推廣、水環境守護、食農食魚、地方產品與跨域交流，看見協會並非只執行單一計畫，而是長期把人、土地、產業與學習串在一起。"
        note="完整來源共32張獨立照片與2份簡報。網站先公開脈絡較清楚的代表影像；未選入不代表不重要，而是仍需補齊年份、人物、拍攝者與使用範圍。"
      />

      <section className="section site-width source-audit-summary">
        <div><strong>2份</strong><span>原始簡報</span><small>共137頁</small></div>
        <div><strong>32張</strong><span>獨立來源照片</span><small>完整原檔已建檔</small></div>
        <div><strong>349個</strong><span>簡報內嵌媒體</span><small>包含重複與版面素材</small></div>
        <div><strong>12張</strong><span>第一批公開精選</span><small>依來源脈絡與代表性選入</small></div>
      </section>

      <section className="section section-tint">
        <div className="site-width source-audit-guide">
          <div>
            <p className="eyebrow">來源與整理方式</p>
            <h2>完整保存，分批整理公開</h2>
          </div>
          <div>
            <p>原始簡報與照片皆保留原檔名，不覆蓋、不刪除；網站使用適合瀏覽的版本，並依資料脈絡選出代表影像。</p>
            <p>簡報裡的349個媒體物件包含重複照片、圖示和版面素材，因此不直接當成349筆成果。第一批先上線12張，其他內容完成年份、人物與權利核對後再逐步補入。</p>
          </div>
        </div>
      </section>

      {historySourceGroups.map((group, groupIndex) => {
        const items = publicHistoryItems.filter((item) => item.category === group.title);
        if (items.length === 0) return null;
        return (
          <section className={`section ${groupIndex % 2 === 0 ? "site-width" : "section-tint"}`} key={group.title}>
            <div className={groupIndex % 2 === 0 ? undefined : "site-width"}>
              <div className="section-heading archive-heading">
                <div>
                  <p className="eyebrow">來源分類 {String(groupIndex + 1).padStart(2, "0")}</p>
                  <h2>{group.title}</h2>
                </div>
                <p>{group.description}</p>
              </div>
              <div className="source-photo-grid">
                {items.map((item) => (
                  <figure className="source-photo-card" key={item.id}>
                    <div className="source-photo-media">
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <span>來源 {String(item.id).padStart(2, "0")}</span>
                    </div>
                    <figcaption>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="source-photo-meta">
                        <span>{item.status}</span>
                        <code>來源檔案已建檔｜{item.originalFile}</code>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section source-audit-next">
        <div className="site-width source-audit-next-inner">
          <div>
            <p className="eyebrow light">整理原則</p>
            <h2>完整保存，分級公開</h2>
          </div>
          <div>
            <p>本頁公開第一批代表影像。其餘照片仍完整保存在專案資料庫，待協會逐項確認年份、人物、活動與權利狀態後，再補成可追溯的地方歷程。</p>
            <Link className="button button-accent" href="/satoumi#association-history">回到協會歷程精選</Link>
          </div>
        </div>
      </section>
    </>
  );
}
