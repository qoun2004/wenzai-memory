import SourceGallery from "../../source-gallery";
const photos=[
 {file:"photo-01.jpg",caption:"材料加工：賴永富在家處理竹材，從手邊材料開始試作。"},
 {file:"photo-03.jpg",caption:"部件展示：拿起試作中的木製部件，觀察長度與形狀。"},
 {file:"photo-07.jpg",caption:"器具全貌：在戶外展示試作器具，作為後續交流的實物素材。"},
];
const clips=[{key:"02",caption:"製作近看｜鑽孔與部件加工"},{key:"04",caption:"戶外試用｜擺動與操作觀察"}];
export default function HomeTrial(){return <section className="section site-width" id="lai-yongfu-home-trial"><div className="section-heading"><div><p className="eyebrow">新增梗達人｜2026.09.17 補充收件</p><h2>賴永富：先在家裡，把材料做成摃梗</h2></div><p>新的梗達人之一賴永富，先拿材料在家試作。這批照片與影片記下材料處理、部件連接及戶外試用，讓後續工作坊可以從實物與製作經驗展開交流。</p></div><p>已與賴永富預約 10/3 梗達人工作坊。以下是居家試作紀錄，並非工作坊已辦理或全案製作完成的成果；實際拍攝日期待補。</p><SourceGallery base="/field-notes/lai-yongfu-home-trial" items={photos}/><h3>兩段精選｜製作與試用</h3><p>各段約 20 秒，採無聲節錄呈現動作；完整原始影片另存素材庫。</p><div className="field-gallery">{clips.map(({caption,key})=>{return <figure className="field-photo" key={key}><video controls playsInline preload="none" poster={`/field-notes/lai-yongfu-home-trial/trial-${key}-poster.jpg`} style={{width:"100%",maxHeight:560,background:"#17221d"}}><source src={`/field-notes/lai-yongfu-home-trial/trial-${key}.mp4`} type="video/mp4"/>您的瀏覽器不支援影片播放。</video><figcaption>{caption}｜20 秒無聲節錄</figcaption></figure>})}</div><p className="material-credit">精選 3 張照片、2 段影片，分別呈現材料、部件、器具全貌及製作／試用動作。原始 7 張照片、4 段影片完整留存。影像呈現試作過程，不作為完整工序或操作教學。</p></section>}
