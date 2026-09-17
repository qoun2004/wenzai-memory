import Link from "next/link";
export default function HistoricalCoursePreview(){return (
 <section className="section site-width" id="past-courses">
  <div className="section-heading"><div><p className="eyebrow">協會歷年課程</p><h2>日托試辦計畫：手作紙課程</h2></div><p>協會過去為長輩規劃的週間課程系列，由王柏傑老師指導，將蚵殼粉、小麥桿與日曆紙碎屑加入手作紙。活動年份待補。</p></div>
  <div className="field-gallery">
   <figure className="field-photo"><Link href="/archive/daycare-handmade-paper"><img src="/history/daycare-handmade-paper/paper-01.jpg" alt="協會過去日托試辦計畫的手作紙課程操作現場" loading="lazy" /></Link><figcaption>一起動手抄紙，留下協會過去的課程紀錄。</figcaption></figure>
   <figure className="field-photo"><Link href="/archive/daycare-handmade-paper"><img src="/history/daycare-handmade-paper/paper-03.jpg" alt="手作紙表面的植物纖維" loading="lazy" /></Link><figcaption>紙面上的植物纖維，呈現地方材料的質感。</figcaption></figure>
  </div>
  <p><Link className="button button-accent" href="/archive/daycare-handmade-paper">查看手作紙課程與 7 張舊照 →</Link></p>
 </section>
);}
