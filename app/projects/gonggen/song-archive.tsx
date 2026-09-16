const collections = [
  {title:"塭仔｜生活俗語與防穗仔記憶",credit:"林翠蘭採錄、整理｜2026.07.21",text:"從居民對塭仔的描述，記錄防穗仔、聚落遷居與防護的口述故事，並收集節令俗語、生活經驗及婚嫁民俗。植物辨識與歷史背景另作查證，不把民俗說法當作今日操作指引。",source:"《文字稿 塭仔 林翠蘭採錄》；同組5段錄音。"},
  {title:"塭仔／洲仔｜俗語、童謠、勸世歌與謎猜",credit:"邱素綢採錄、柳琬玲整理｜2026年7月",text:"收錄農事與家庭俗語、童謠、勸世歌及以文具、生活器物為題的謎猜，保留長者如何用押韻與問答傳遞生活知識。湯春蘭、黃綉氣兩位的資料歸屬塭仔，不因整份檔名寫洲仔而一併改列。",source:"《文字 洲仔 整理 柳琬玲》；同組13段錄音。檔名7/22與稿首7/21不同，日期尚待對照。"},
  {title:"洲仔｜婚宴裡的機智應答",credit:"鄭水秋講述；徐大年採錄、撰寫｜2026.07.22",text:"婚宴中客人與新娘以押韻問答互動，從請菸到反問，呈現地方口語表演的機智。這類材料的價值不只在文字，更在角色、語氣、節奏與場合。",source:"《洲仔分校採錄稿》；聲音對應關係持續整理。"},
  {title:"西崙｜山龍、鳥仔洞與聚落故事",credit:"唐啟泰講述、吳淑芳補充；徐大年採錄、撰寫｜2026.07.27",text:"以台文及華語對照整理栗子崙山龍、廟宇、鳥群及古厝記憶，並收錄地名謎猜。山龍與道路的故事以地方傳說呈現；人物經歷、年代與生態變遷不僅憑口述定論。",source:"《文字稿 西崙 徐大年採錄》；附1段淑芳補充錄音、1段村長講述影片。"},
  {title:"西崙｜地理歌訣與摃枷勞動口訣",credit:"唐啟泰、邱秀英等講述；邱素綢採錄、整理｜2026.07.30",text:"內容涵蓋〈七星落地〉、十二生肖、婚嫁吉祥話、童謠、無字曲及摃枷口述。〈七星落地〉先列為地方地理歌訣；「十二對」的勞動隊形則作為回訪及工具操作核對線索。",source:"《文字稿 西崙 採錄 邱素綢》；同組10段錄音。"},
];

const illustrationIds = ["wenzai", "riddles", "wedding", "xilun", "oral"];
function Illustration({id,alt}:{id:string;alt:string}){
  return <figure style={{margin:"16px 0"}}><img src={`/song-team/images/${id}.jpg`} alt={alt} loading="lazy" width={1536} height={1024} style={{width:"100%",height:"auto",display:"block",borderRadius:4}}/><figcaption style={{fontSize:13,marginTop:8}}>AI生成情境插畫｜依文本主題繪製，非歷史照片、人物肖像或實物考證。</figcaption></figure>;
}
export default function SongArchive(){
  return <section className="section site-width" id="song-team-results">
    <div className="section-heading archive-heading">
      <div><p className="eyebrow">黃哲永老師團隊｜歌謠、故事與口述採集</p><h2>把長者的聲音，整理成可以延續的地方記憶</h2></div>
      <p>黃哲永老師與邱老師共同帶領，結合長期合作夥伴的採錄與文字整理，走進塭仔、洲仔與西崙。這條工作線不只是歌曲創作，也保存童謠、俗語、謎猜、婚嫁應答與地方故事，為教唱、食農教育及紀錄片提供內容。</p>
    </div>
    <div className="usability-grid">
      <article><strong>創作與統整｜黃哲永</strong><p>彙整枷仔與農村勞動知識，撰寫《東石之歌》及兩篇《摃枷歌》歌詞稿，將魚塭、飲食與雜糧勞動轉化為創作素材。</p></article>
      <article><strong>共同帶領與採錄｜邱素綢</strong><p>參與訪談帶領、歌謠及生活口述採集，並整理西崙資料，與黃哲永老師及合作夥伴共同保存地方聲音。</p></article>
      <article><strong>採錄與文字協作</strong><p>林翠蘭整理塭仔採錄；徐大年整理洲仔與西崙訪談；柳琬玲整理俗語、童謠、勸世歌與謎猜。吳淑芳協助地方連結並補充故事。</p></article>
    </div>
    <p className="material-credit">本批收錄：7項文字成果（含部分編號標註不同的版本）、29段音訊及1段故事影片。同一稿件不同版本不重複計算成果；素材數量不等同歌曲完成數或工作坊場次。</p>
    <h3>從採集走向創作｜三篇歌詞稿與一份工具整理</h3>
    <div className="usability-grid">
      <article><strong>《東石之歌》</strong><Illustration id="dongshi" alt="魚塭與東石飲食的水彩情境插畫"/><p>黃哲永作。以魚塭、魚蝦、豆腐與一夜干描繪東石的生產與飲食風景。</p></article>
      <article><strong>《摃枷歌之一》《摃枷歌之二》</strong><Illustration id="threshing" alt="農村曬穀與共同勞動的水彩情境插畫"/><p>黃哲永作。從竹管構造、曬豆與脫粒，寫到一起勞動及共享豆製品的生活感受。保留作者題名「摃枷」，不改作另一首作品。</p></article>
      <article><strong>《枷仔簡介》</strong><Illustration id="tool" alt="竹製農具與雜糧的概念插畫，非製作圖"/><p>黃哲永輯。整理農具構造、用途及作物線索，並引入古典詩文參照；工具沿革的延伸說法仍需文獻核對。</p></article>
    </div>
    <p>目前確認的是歌詞文字稿，曲調、演唱版本與共同教唱成果將分階段補充。來源文件另引謝金鑾詩作，不計入黃老師新創作品。</p>
    <h3>五份採錄稿，五個閱讀入口</h3>
    {collections.map((item,index)=><article className="field-insight" key={item.title} style={{marginBottom:20}}>
      <p className="archive-type">{item.credit}</p><h3>{item.title}</h3><Illustration id={illustrationIds[index]} alt={`${item.title}主題情境插畫，人物為虛構造型`}/><p>{item.text}</p><p className="material-credit">來源：{item.source}</p>
    </article>)}
    <div id="song-audio-excerpts">
      <h3>聽見口傳的節奏｜西崙童謠短段</h3>
      <p>以下選用團隊已分段的短錄音，保留各檔全長與現場聲音，只轉為瀏覽器相容格式，未以AI生成、補唱或改寫人聲。題名及講述者依邱素綢採錄稿編號標示；尚非逐字校聽定稿。</p>
      <div className="usability-grid">
        {[{id:"egret",title:"白鴒鷥",n:4,length:"約19秒"},{id:"grinding",title:"挨仔挨噓噓",n:5,length:"約21秒"},{id:"rocking",title:"搖啊搖",n:6,length:"約17秒"}].map(a=><article key={a.id}>
          <strong>{a.title}｜{a.length}</strong><p>邱秀英講述｜邱素綢採錄、整理<br/>2026.07.30｜原錄音第{a.n}段</p>
          <audio controls preload="none" aria-label={`${a.title}現場錄音`} style={{width:"100%"}}><source src={`/song-team/audio/${a.id}.mp3`} type="audio/mpeg"/>您的瀏覽器不支援音訊播放。</audio>
        </article>)}
      </div>
    </div>
    <div className="usability-grid">
      <article><strong>保留口述的價值</strong><p>方言、節奏與不同版本都是記憶的一部分。閱讀摘要不取代原稿，也不把地方傳說改寫成唯一史實。</p></article>
      <article><strong>讓聲音與文字對得上</strong><p>逐段補齊講述者、題名、錄音編號與時間碼，再校對台語用字及聽辨不清處，讓日後教唱與剪輯有可追溯的依據。</p></article>
      <article><strong>分階段呈現</strong><p>本頁呈現主題摘要、情境插畫及三段童謠錄音。其餘訪談逐段核對內容及公開範圍後再補充；不以自動轉寫取代人工台語校訂。</p></article>
    </div>
    <p className="material-credit">資料來源：團隊提供之「黃哲永老師相關」資料夾，2026.09.16補充盤點。湯春蘭、黃綉氣之聚落及姓名依專案負責人先前校訂；其餘署名保留原稿。完整原稿、出生年次與未審核原音不整包公開。</p>
  </section>;
}
