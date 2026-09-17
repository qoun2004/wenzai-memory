const posters = [
 {id:"black-bean",title:"黑豆從田裡到餐桌",status:"食農教案・發展初稿",text:"以整地、播種、生長觀察、採收、乾燥、脫粒及黑豆豆漿、豆腐DIY串起學習路徑。目前已有整地與豆腐DIY紀錄；後續農事持續補充，歷史種植素材另列參考，不視為今年已完成採收。",next:"後續補齊：適用對象、課程時間、觀察學習單及由實作帶領者確認的加工流程。"},
 {id:"making",title:"一件摃梗如何完成",status:"製作圖說・架構初稿",text:"依竹材辨識與選材、材料處理、部件與連接、組裝修整、試打、使用及保養建立圖說架構。現有摃梗依調查尺寸比例製作，為可實際使用的手工器具；本張海報不是完整施工圖。",next:"後續以真實照片、實測尺寸及師傅確認的工序完成圖說，不以AI示意取代製作依據。"},
 {id:"children",title:"把農具變成學習體驗",status:"兒童體驗・概念提案",text:"規劃竹材與黑豆觀察、部件配對、組裝模型、節奏遊戲及脫粒原理活動，未來串連塭仔黑豆豆腐DIY。先從不揮打的桌面學習開始，小型化操作器具仍待設計。",next:"原型、重量、握持、連接牢固度與揮動安全尚待測試，未開放兒童實際揮打教具。"},
];
export default function LearningPosters(){
 return <section className="section site-width" id="learning-posters">
   <div className="section-heading"><div><p className="eyebrow">階段成果｜教案架構與推廣設計</p><h2>從記錄走向教學，讓地方知識繼續被使用</h2></div><p>三份教案簡介先行呈現；10/3 梗達人工作坊請見上方最新活動資訊。以下是發展初稿，不代表完整教案、安全驗證或活動已執行；後續持續修訂。</p></div>
   {posters.map(p=><article key={p.id} id={`poster-${p.id}`} style={{marginBottom:48}}>
     <p className="eyebrow">{p.status}</p><h3>{p.title}</h3>
     <a href={`/learning-posters/${p.id}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`開啟${p.title}橫式海報大圖`}><img src={`/learning-posters/${p.id}.jpg`} alt={`${p.title}橫式海報；完整資訊見下方文字`} width={1536} height={864} loading="lazy" style={{width:"100%",height:"auto",display:"block",borderRadius:8}}/></a>
     <p>{p.text}</p><p>{p.next}</p><a href={`/learning-posters/${p.id}.jpg`} download={`${p.title}_橫式海報初稿.jpg`}>下載橫式海報 ↘</a>
   </article>)}
   <p className="material-credit">海報插畫為AI情境示意，不是真實活動照片、講師肖像或精密農具結構圖。聯絡電話沿用協會既有課表資料，正式招生前由協會核對；本頁不提供尚未建立的報名表或QR碼。</p>
 </section>;
}
