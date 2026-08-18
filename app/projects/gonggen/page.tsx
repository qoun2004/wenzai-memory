import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, StatusBadge } from "../../components";

export const metadata: Metadata = {
  title: "摃梗與鹽地雜糧記憶",
  description: "嘉義縣鄉村永續發展協會2026主題子計畫：記錄塭仔摃梗、鹽地雜糧、地方歌謠與黑豆食農。",
  openGraph: { images: ["/og.png"] },
};

export default function GonggenProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="協會主題子計畫｜2026"
        title="摃梗：鹽地雜糧的記憶與新生"
        lead="當一件工具逐漸離開日常生活，與它相連的土地、作物、換工、歌謠、飲食與人際關係，要如何被記住，並重新成為今天仍有人願意使用的地方文化？"
        note="「摃梗」的地方讀音、正確寫法、作物與操作名稱，將依耆老訪談及實物確認持續修訂。"
      />
      <section className="project-parent-bar">
        <div className="site-width project-parent-inner">
          <div>
            <span>上層組織</span>
            <strong>嘉義縣鄉村永續發展協會</strong>
          </div>
          <p>本頁是協會大架構下的「塭仔摃梗與鹽地雜糧記憶」子計畫，不代表協會全部業務。</p>
          <Link href="/about">查看協會架構 ↗</Link>
        </div>
      </section>
      <section className="section site-width">
        <div className="fact-strip">
          <div className="fact"><strong>2＋1</strong><span>正式訪談＋技藝線索</span></div>
          <div className="fact"><strong>5場</strong><span>歌謠工作坊</span></div>
          <div className="fact"><strong>1支</strong><span>五分鐘紀錄片</span></div>
          <div className="fact"><strong>2026.10.24</strong><span>成果活動</span></div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="site-width prose-grid">
          <aside>
            <p className="eyebrow">影片主線</p>
            <StatusBadge status="田野與製作進行中" />
            <p>五分鐘版本以「摃梗從記憶到復刻」為核心，黑豆與豆腐庄是地方產業延續的第二條線。</p>
          </aside>
          <article>
            <h2>從歌聲開始，回到一件工具，再走向今天</h2>
            <div className="steps">
              <div className="step"><div><h3>先聽見歌聲</h3><p>長者、老屋、摃梗聲與雜糧落下的聲音，讓觀眾先進入地方記憶。</p></div></div>
              <div className="step"><div><h3>鹽地、雜糧與農村換工</h3><p>透過空景、老照片與耆老訪談，理解工具為何在這裡出現。</p></div></div>
              <div className="step"><div><h3>重新做出一件摃梗</h3><p>從刺竹採集、選材、處理、製作、修整到試用，保留手與材料的知識。</p></div></div>
              <div className="step"><div><h3>從豆腐庄到黑豆食農</h3><p>連起老店記憶、黑豆種植、豆腐DIY與今天的傳承者。</p></div></div>
              <div className="step"><div><h3>保存之後，可以變成什麼</h3><p>教案、工作坊、小旅行與地方餐桌，讓記憶重新被使用。</p></div></div>
            </div>
          </article>
        </div>
      </section>
      <section className="section site-width" id="black-bean-film-material">
        <div className="section-heading archive-heading">
          <div><p className="eyebrow">紀錄片前期影像｜2026.07.21</p><h2>黑豆食農不是旁支，而是本案連向今天生活的第二條故事線</h2></div>
          <p>第一批臨場拍攝雖未依正式腳本準備，仍記下社區客廳、豆腐第四代長輩、陳鈺益、黑豆豆漿炊煮與居民DIY，可在紀錄片中承接豆腐庄歷史與當代體驗。</p>
        </div>
        <div className="field-gallery">
          <figure className="field-photo">
            <img src="/field-notes/tofu-workshop-20260721/stirring.jpg" alt="黑豆豆漿製作過程中的持續攪拌" />
            <figcaption>製程動作與鍋內聲音能為紀錄片提供具體的勞動節奏。</figcaption>
          </figure>
          <article className="field-insight"><p className="archive-type">成片使用方向</p><h3>從老產業記憶，切到今天仍能親手參與的技術</h3><p>可搭配豆腐庄耆老訪談、老照片與黑豆種植影像，再接到炊煮、模具、居民操作和成品。後續正式補拍材料比例、關鍵步驟與完整示範，這批則保留第一次進入現場的真實氣氛。</p><Link className="arrow-link" href="/education#tofu-workshop-20260721">查看完整活動影像與食農用途 <span aria-hidden="true">↗</span></Link></article>
        </div>
      </section>
      <section className="section site-width" id="gonggen-history">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">歷史影像新入庫</p>
            <h2>摃梗保存並不是2026年才開始</h2>
          </div>
          <p>
            淑芳姐提供的早期照片已出現居民與外來參與者實際操作摃梗。
            它補上協會及社區過去曾推廣這件農具的視覺證據，也讓本案的「復刻」有了可以回看的前史。
          </p>
        </div>
        <div className="field-gallery">
          <figure className="field-photo">
            <img src="/history/gonggen-early.jpg" alt="早期參與者在戶外操作摃梗農具" />
            <figcaption>早期摃梗體驗影像；可看見長竹構件與操作姿勢，仍需由耆老確認工具部位、用法及示範是否正確。</figcaption>
          </figure>
          <article className="field-insight">
            <p className="archive-type">這批資料帶來的意義</p>
            <h3>從「曾經辦過」走向可追溯的地方歷史</h3>
            <p>
              照片可以與2026年的耆老訪談、梗達人製作及工作坊並置，
              比較不同年代的工具形制、操作方式與參與者。下一步要補的是活動年份、地點、人物、拍攝者與當時使用的作物。
            </p>
          </article>
        </div>
        <p className="material-credit">
          照片素材提供：吳淑芳｜拍攝年份與活動名稱待確認。現階段以「早期摃梗推廣／體驗影像」典藏，不推定確切年代。
        </p>
      </section>
      <section className="section section-tint" id="gonggen-memory-and-prototype-20260817">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">地方記憶 × 復刻測試｜2026.08.17整理</p>
              <h2>從黃麻、縣運推廣，到一件摃梗的現場試打</h2>
            </div>
            <p>新的口述補充讓計畫多出一條重要線索：摃梗不是孤立的農具，而是與纖維作物、農會、公共活動和今日重新製作的技術調整連在一起。</p>
          </div>
          <div className="usability-grid">
            <article>
              <strong>黃麻的農村產業記憶</strong>
              <p>陳忠和伯回憶，過去農會曾收購黃麻麻絲；脫皮、取絲後留下的梗，農民可帶回作為柴薪使用，但沒有額外工錢。這條線索可延伸追問黃麻的栽培地、收購流程與殘梗利用。</p>
            </article>
            <article>
              <strong>民國86年嘉義縣縣運的早期推廣</strong>
              <p>吳淑芳回憶，當時她服務於農會，因應各鄉鎮呈現地方特色的活動，規劃以摃梗、抓泥鰍等內容代表東石。那次不是以紀錄片方式保存，卻是她後續持續關注地方事務與摃梗記憶的重要起點。</p>
            </article>
            <article>
              <strong>復刻不能只做「像」</strong>
              <p>近期由梗達人林瑞彬製作的摃梗，已請陳忠和伯試打。他指出長、短竹片之間的木製連結段偏短，讓短邊竹片翻轉時容易卡住；此意見已列入下一版調整與實作驗證。</p>
            </article>
          </div>
          <div className="prose-grid field-followup">
            <aside><p className="eyebrow">下一次實作拍攝</p><h3>把「不好用」記下來，才是真的傳承</h3></aside>
            <article>
              <p>下一件復刻品應保留前後版本，量測連結段長度與竹片活動角度，並由至少兩位熟悉農事的長者試打、口述差異。拍攝重點包括：敲擊、翻轉、卡住的位置、手勢、聲音與調整後的比較。</p>
              <p><strong>複訪線索：</strong>陳忠和伯提到蔡通彬或其他耆老可能仍能提供使用與製作細節。後續將先確認對象、拜訪意願與公開範圍，再列入正式訪談或實作見證。</p>
            </article>
          </div>
          <p className="material-credit">資料來源：2026.08.17陳忠和口述、吳淑芳補充說明與現場試打紀錄｜黃麻收購、民國86年活動名稱、參與者與摃梗構造尺寸，均列為待查證資料；網站目前公開的是來源明確的田野摘要，不作完成考證的歷史定論。</p>
        </div>
      </section>
      <section className="section section-tint" id="cai-tong-bin-20260809">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div><p className="eyebrow">梗達人候選／製作線索｜2026.08.09</p><h2>蔡通彬談的不只是「以前怎麼用」，而是材料去哪裡找、怎麼判斷能不能做</h2></div>
            <p>這段口述對紀錄片最重要的價值，是它指向一個可以立刻行動的下一步：跟著蔡通彬找材料、帶工具，並完整記錄一件摃梗從判斷到製作的過程。</p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo"><img src="/field-notes/interview-20260809-cai/gesture.jpg" alt="蔡通彬以手勢說明摃梗材料與製作方式" /><figcaption>現場手勢是技藝記憶的一部分；下次應補拍手部特寫、工具、材料細節與實際動作。</figcaption></figure>
            <article className="field-insight"><p className="archive-type">初步內容判讀</p><h3>彈性、鐵鎚、拉取與日曬裂損，是四個可追問的製作關鍵詞</h3><p>台語辨識初稿中，蔡通彬比較材料是否容易破裂、提到用鐵鎚敲與拉取，也說到材料曬太陽後裂開便不能使用。這些內容應透過實物與實作再確認，並整理成摃梗教案的選材與保存段落。</p></article>
          </div>
          <div className="usability-grid">
            <article><strong>紀錄片</strong><p>拍一條完整行動線：指認材料→採集→選別→處理→製作→試用，讓口述與動作互相驗證。</p></article>
            <article><strong>追訪線索</strong><p>影片還提及另一位可能知情的地方人物；姓名與身分未核對前，先作內部追訪索引。</p></article>
            <article><strong>黑豆支線</strong><p>後段有東崙黑豆種植、水分、種子腐敗與降雨的經驗，可補足鹽地雜糧的生產現場。</p></article>
          </div>
          <p className="material-credit">人物：蔡通彬（東崙農事小組長）｜「梗達人／摃梗製作者」角色待本人與吳淑芳確認｜主訪、拍攝與影像提供：吳淑芳｜影片長度約3分19秒。內容為AI辨識後的初步摘要，台語特殊詞、人名與技術細節需人工回聽及當事人確認。</p>
        </div>
      </section>
      <section className="section site-width" id="cai-jinlu-20260818">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">跨村田野訪談・技藝與導覽記憶｜2026.08.18</p>
            <h2>蔡金露：會做、會改，也知道一件工具怎麼回到地方</h2>
          </div>
          <p>這次初訪從塭仔延伸到鰲鼓村。蔡金露長年從事鰲鼓濕地導覽解說，也保有農漁生活與傳統工具的實作記憶；他的經驗讓摃梗不只停在「見過」，而有機會進一步核對製作、使用與改良。</p>
        </div>
        <div className="field-gallery interview-gallery">
          <figure className="field-photo field-photo-wide">
            <img src="/field-notes/interview-20260818-cai-jinlu/interview.jpg" alt="蔡金露在鰲鼓村接受摃梗與農漁生活記憶訪談" />
            <figcaption>蔡金露在熟悉的生活空間中口述農漁勞動、傳統工具與導覽經驗；完整影音先保留於原始素材庫。</figcaption>
          </figure>
          <article className="field-insight">
            <p className="archive-type">訪談定位</p>
            <h3>從十歲左右的操作記憶，延伸到可以再試做的工法線索</h3>
            <p>他回憶童年跟著父親與牛車做農事，約十歲已會操作、製作摃梗；早期曾以芭樂枝作為芯材、刺竹作為主要竹材，之後嘗試以金屬螺絲調整結構，降低損壞或傷人的風險。這些是珍貴的口述工法線索，仍需與蔡通彬、林瑞彬及試作過程交叉驗證。</p>
          </article>
        </div>
        <div className="usability-grid">
          <article><strong>工具放回農事裡</strong><p>綠豆、芝麻與豆科作物處理時，幾戶人家會一起曬、一起摃梗，也在換工中分配人力；沒有電力與馬達的條件，使工具、天候與風向都成為勞動的一部分。</p></article>
          <article><strong>一位地方解說者的視角</strong><p>蔡金露長期參與鰲鼓濕地導覽，並有收集農漁手工工具的興趣。他提出魚塭、農漁具、解說與小旅行可彼此串連的想像，現階段先列為地方願景與後續討論線索。</p></article>
          <article><strong>本案的邊界與延伸</strong><p>本期仍以塭仔摃梗保存為核心；鰲鼓的經驗補足相鄰聚落的農漁生活、材料來源與導覽知識，不把它混同為本案既定成果或已啟動的營運計畫。</p></article>
        </div>
        <div className="prose-grid field-followup">
          <aside><p className="eyebrow">下一次回訪／試作</p><h3>不只錄口述，也把「做法」拍下來</h3></aside>
          <article>
            <p>建議補拍他指認既有農漁工具、說明摃梗竹材與芯材、示範操作手勢，以及改良前後的連結方式；同時量測竹片長度、節距、握持直徑與活動角度。若九月中旬材料乾燥狀況合適，可再確認他是否願意參與梗達人工作坊協力，日期與角色均以本人確認為準。</p>
            <p><strong>待核對項目：</strong>家族與年代、地方稱呼、竹材取得位置、機械化時間、訓練與導覽相關敘述，皆先保留在原始訪談與工作筆記中，不作網站上的歷史定論。</p>
          </article>
        </div>
        <p className="material-credit">訪談日期：2026.08.18｜受訪者：蔡金露（自述民國42年次；年齡與背景待本人核對）｜主訪與田野連結：吳淑芳｜影像、手機錄音與現場紀錄：黃建凱及團隊。公開文字依現場筆記整理；台語語音、技術名詞、家族與年代需回聽及當事人確認後，再納入正式技藝報告或紀錄片逐字內容。</p>
      </section>
      <section className="section site-width" id="bamboo-survey-20260812">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">田野紀錄｜2026.08.12</p>
            <h2>採竹延期之後，先把路、人與材料找出來</h2>
          </div>
          <p>原定與梗達人及工作人員採集刺竹，因凌晨降雨、地面濕滑而延期。團隊仍前往溪下村一帶勘查竹叢、進出路線與搬運條件；這次沒有正式砍竹，卻補上復刻摃梗之前不可少的材料、安全與人物線索。</p>
        </div>
        <div className="field-gallery">
          <figure className="field-photo field-photo-wide">
            <img src="/field-notes/bamboo-survey-20260812/bamboo-overview.jpg" alt="2026年8月12日摃梗復刻前期調查所見的刺竹叢" />
            <figcaption>先確認竹叢位置、道路寬度、地面狀況與可能的搬運動線；雨後現場濕滑，因此未進行正式採集。</figcaption>
          </figure>
          <figure className="field-photo">
            <img src="/field-notes/bamboo-survey-20260812/bamboo-material.jpg" alt="田調團隊在竹叢旁檢視既有竹材與材料狀態" />
            <figcaption>現場以既有切段比對直徑、厚度與重量；竹種、竹齡、乾燥時間及可用長度仍須由梗達人實作確認。</figcaption>
          </figure>
          <article className="field-insight">
            <p className="archive-type">這次田調的意外收穫</p>
            <h3>找竹子的路，也是一條找到地方知情者的路</h3>
            <p>帶路者柳婉玲居住溪下村、港口宮周邊，具芝麻種植、學校教學與地方田調經驗。她協助連起父親、附近長輩與小農，也讓團隊遇見柳水鴨及另一位熟悉農具構造的地方知情者。</p>
            <p>人物正面影像已整理於原始素材庫；待完成肖像與訪談公開同意後，再補入網站。</p>
          </article>
        </div>
        <div className="usability-grid">
          <article><strong>材料與路線</strong><p>確認竹叢、入口與搬運條件；下次需由梗達人判斷竹種、成熟度、直徑、節距與實際可用段。</p></article>
          <article><strong>人物與口述</strong><p>柳水鴨回憶童年曾看過多人操作摃梗；另一位知情者提到長柄竹材、短柄木材、鑿孔與早期固定方式，均列為複訪線索。</p></article>
          <article><strong>紀錄片敘事</strong><p>「雨後延期採竹，團隊仍進場勘查，並在找材料時找到人與記憶」可成為復刻段落的自然前導。</p></article>
        </div>
        <div className="prose-grid field-followup">
          <aside><p className="eyebrow">正式採集前</p><h3>安全與器材清單</h3></aside>
          <article>
            <p>手套、刀具或鋸具、雨鞋、長袖衣褲、帽子或頭部防護、護目鏡；另備貨車、繩索與束帶、防水布、簡易量測工具及急救用品。濕滑時不進場，並先劃定切割、傾倒與搬運區域，安排一人專責警戒。</p>
            <p><strong>下一步：</strong>另約乾燥天候，連續拍攝選竹、採集、搬運、乾燥、製作與試用；正式複訪柳水鴨、柳婉玲及農具構造知情者，配合舊物、圖畫或實作逐項核對。</p>
          </article>
        </div>
        <p className="material-credit">拍攝日期：2026.08.12｜地點：嘉義縣東石鄉溪下村周邊｜田野協力：柳婉玲、吳淑芳及在地知情者｜影像：黃建凱與現場手機紀錄｜素材盤點：39段影片、17張照片，影片總長約35分鐘。本頁為資源調查與路線勘查紀錄，非正式採竹；口述摘要待複訪、授權與台語內容核對。</p>
      </section>
      <section className="section section-tint" id="bamboo-harvest-20260818">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">正式採竹・材料處理｜2026.08.18</p>
              <h2>從一片竹叢，到能進入試作的兩種竹材</h2>
            </div>
            <p>8月12日先勘查路線與安全條件，8月18日才進入實際採集。這次的收穫不是一件已完成的摃梗，而是一批被分工處理、搬回社區日曬，準備交給實作驗證的材料。</p>
          </div>
          <div className="field-gallery">
            <figure className="field-photo">
              <img src="/field-notes/bamboo-harvest-20260818/cutting.jpg" alt="採竹現場進行竹材切段與處理" />
              <figcaption>採集時依用途切段、清除細枝；正式工作坊前仍須依安全流程配置防護裝備、警戒與熟悉工具的操作者。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/field-notes/bamboo-harvest-20260818/materials.jpg" alt="採集後整理成堆、準備運回日曬的竹材" />
              <figcaption>竹材將運回塭仔社區附近空地日曬，待乾燥後再由實作經驗者檢查是否適合進入復刻。</figcaption>
            </figure>
            <article className="field-insight">
              <p className="archive-type">現場分工</p>
              <h3>砍、修、搬、曬：工具的第一步，是一群人一起把材料準備好</h3>
              <p>在地青農、協會夥伴與淑芳姐分工採集、修去細枝，再由貨車把材料載回。這段過程可作為紀錄片從「口述記憶」轉入「今日復刻行動」的關鍵段落。</p>
            </article>
          </div>
          <div className="usability-grid">
            <article><strong>敲擊端：成熟刺竹</strong><p>預計使用較成熟、較扎實的刺竹承擔接觸地面的敲擊端；選材理由是重量與耐用度的初步判斷，仍待試打確認。</p></article>
            <article><strong>握持端：較細的桂竹</strong><p>依上午訪談得到的握持提醒，團隊另選較細、較容易握持的桂竹作為手持段候選；不是所有部位都用同一種竹材。</p></article>
            <article><strong>竹齡與乾燥：先建立可驗證流程</strong><p>現場以約二至三年成熟竹材為初步選擇，接下來需記錄長度、直徑、節距、重量、含水與日曬時間，再由多位實作者交叉試用。</p></article>
          </div>
          <div className="prose-grid field-followup">
            <aside><p className="eyebrow">材料日誌</p><h3>讓下一版能知道：哪一段竹子為何能用</h3></aside>
            <article>
              <p>日曬期間建議為每一批竹材編號，記錄採集日期、竹種、來源、初始尺寸、裂損、日曬天數與預定用途；試作時再補上「誰試打、哪裡卡住、如何調整」。如此才能把今天的勞動轉成未來教案可複製的材料知識。</p>
              <p><strong>下一步：</strong>乾燥完成後，以蔡金露、蔡通彬、林瑞彬與其他熟悉農事者的實作意見，確認刺竹／桂竹分段、連結結構與安全性；尚未完成前不宣稱為定型復刻品。</p>
            </article>
          </div>
          <p className="material-credit">拍攝日期：2026.08.18｜內容：刺竹與桂竹採集、切段、去枝、貨車搬運及回塭仔社區附近空地日曬｜參與：吳淑芳、在地青農及協會夥伴（個別姓名與肖像公開範圍待確認）｜影像：黃建凱、現場手機／相機／運動相機紀錄。網站現公開代表照片與田野摘要；完整影音、位置與人員資料留存內部素材庫。</p>
        </div>
      </section>
      <section className="section section-tint" id="interview-20260817-chen">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">第二位正式耆老訪談｜2026.08.17</p>
              <h2>陳忠和伯：從廟口雜貨店，看見摃梗以外的整座村庄</h2>
            </div>
            <p>79歲、長居塭仔的陳忠和伯，童年便看過摃梗的勞動場景。他並非操作技藝者，卻保存了誰在做、什麼時候做，以及農作、賒帳、廟口與看戲如何交織的生活記憶。</p>
          </div>
          <div className="field-gallery interview-gallery">
            <figure className="field-photo field-photo-wide">
              <img src="/field-notes/interview-20260817-chen/conversation.jpg" alt="吳淑芳與陳忠和伯在塭仔家中進行訪談" />
              <figcaption>陳忠和伯在家中接受訪談；老雜貨店的生活空間本身，也是地方經濟與日常記憶的一部分。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/field-notes/interview-20260817-chen/diary-notes.jpg" alt="陳忠和伯身旁放著長年記錄的日記與筆記" />
              <figcaption>他提到長年保有寫日記的習慣；若本人及家屬同意，未來可從中挑選不涉隱私的頁面，作為地方生活史的補充史料。</figcaption>
            </figure>
            <article className="field-insight">
              <p className="archive-type">口述定位</p>
              <h3>不是只問一件工具，而是把工具放回它原來的生活系統</h3>
              <p>他回憶摃梗多由女性操作、男性負責收攏與搬運；豆類多在稻米、甘蔗與番薯等主要作物的空檔種植。這讓摃梗的保存，不只停在農具形制，也能呈現勞動分工與作物輪作的背景。</p>
            </article>
          </div>
          <div className="usability-grid">
            <article><strong>摃梗與農事</strong><p>童年已見摃梗；女性多負責操作，男性多收、扛或搬運。豆類屬作物空檔的補充栽培，需再以其他耆老口述交叉核對。</p></article>
            <article><strong>雜貨店與帳簿</strong><p>家中雜貨店經營約七十年，每戶一本簿子，農民多待收成後結帳；這是理解農村信用、收成與日常消費的重要線索。</p></article>
            <article><strong>廟口與村庄生活</strong><p>初一、十六加菜、過年看戲與廟口表演，是他最鮮明的生活記憶；「王祿仔」等名稱與故事將在回聽後再確認。</p></article>
          </div>
          <div className="field-gallery">
            <figure className="field-photo">
              <img src="/field-notes/interview-20260817-chen/interaction.jpg" alt="吳淑芳與陳忠和伯在訪談中互動並確認資料" />
              <figcaption>訪談中以現場筆記與物件協助追問；後續將補做名詞、讀音、年代與家族資料的核對。</figcaption>
            </figure>
            <article className="field-insight"><p className="archive-type">下一步追訪</p><h3>把日記、帳簿與廟口位置變成可被閱讀的地方史料</h3><p>建議另約短時間補拍老日記或帳簿翻頁、雜貨店門口、店內舊物與廟口位置；內容僅在本人與家屬同意的範圍內整理與公開。</p></article>
          </div>
          <p className="material-credit">訪談日期：2026.08.17｜受訪者：陳忠和（79歲，塭仔人）｜主訪：吳淑芳｜現場紀錄、影像與錄音：黃建凱及現場團隊。已盤點手機錄音約43分鐘、單眼主畫面約32分鐘、DJI備援約36分鐘、手機短影片及現場照片；完整內容、日記與原始影音不提供下載，待書面授權與台語名詞核對後再選段公開。</p>
        </div>
      </section>
      <section className="section section-tint" id="interview-20260806">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">第一位正式耆老訪談｜2026.08.06</p>
              <h2>從養牛、換工到摃梗，唐榮先生帶回一段農村勞動記憶</h2>
            </div>
            <p>淑芳姐主訪，攝影端同步照看單眼主畫面、DJI備援畫面、手機錄音與現場照片。訪談內容正依錄音、筆記與影像交叉整理。</p>
          </div>
          <div className="field-gallery interview-gallery">
            <figure className="field-photo field-photo-wide">
              <img src="/field-notes/interview-20260806-main.jpg" alt="唐榮先生在家中接受塭仔摃梗紀錄片訪談" />
              <figcaption>單眼主畫面記錄唐榮先生的表情與手勢；畫面將作為紀錄片第一部分「農村記憶與摃梗使用背景」的人物素材。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/field-notes/interview-20260806-wide.jpg" alt="唐榮先生、淑芳姐與在場長輩進行訪談的室內全景" />
              <figcaption>DJI備援全景保留訪談互動、現場長輩與居家空間，也能看見多機同步記錄的配置。</figcaption>
            </figure>
            <article className="field-insight">
              <p className="archive-type">目前整理出的四條內容線索</p>
              <h3>一位受訪者，串起工具、作物、勞動與地方變遷</h3>
              <p>現場筆記已記下買牛與農機、牛車耕作、摃梗脫粒、曬種與吹殼、換工與請工、婦女背著孩子工作，以及村落由農作走向溫室、造林與太陽能等線索。</p>
              <p>作物名稱、價格、年代、牛隻數量與地方用語仍需逐段回聽，不把初步筆記直接視為完成考證的史實。</p>
            </article>
          </div>
          <div className="usability-grid">
            <article><strong>影像成果</strong><p>單眼主訪談、DJI全景備援、手機短畫面與現場照片，可交叉支撐人物訪談及拍攝過程紀錄。</p></article>
            <article><strong>文字成果</strong><p>已建立人物生命史、摃梗使用、換工勞動及土地變化四類筆記，可納入三千字摃梗技藝總結報告。</p></article>
            <article><strong>下一步</strong><p>確認特殊台語詞、作物、年代與數字，追查收購商、朴子五金行及牛舍等人物與場域，補拍老照片、動作與環境。</p></article>
          </div>
          <p className="material-credit">
            訪談日期：2026.08.06｜受訪者：唐榮｜主訪：吳淑芳｜影像與錄音：黃建凱及現場團隊。書面訪談與肖像授權待補簽；現階段僅公開進度摘要與低解析畫面，原始錄音、完整回答及個人資料不直接公開。
          </p>
        </div>
      </section>
      <section className="section site-width" id="songs">
        <div className="section-heading">
          <div><p className="eyebrow">聲音線索</p><h2>歌謠不是配樂，而是理解記憶的方法</h2></div>
          <p>歌詞、旋律、演唱、錄音與影像會分別確認來源及授權。</p>
        </div>
        <div className="archive-preview">
          <article className="archive-row">
            <div className="archive-year">已完成</div>
            <div><p className="archive-type">工作坊</p><h3>前四場歌謠採集</h3><p>活動照片、錄音、文字與簽到資料正在收整。</p></div>
            <StatusBadge status="資料補齊中" />
          </article>
          <article className="archive-row">
            <div className="archive-year">下一步</div>
            <div><p className="archive-type">創作與教唱</p><h3>黃哲永老師完成歌曲後的第五場</h3><p>安排老師與在地長者共同教唱，並記錄修正、回應與群體歌聲。</p></div>
            <StatusBadge status="日期待定" />
          </article>
        </div>
      </section>
      <section className="section section-tint" id="field-notes">
        <div className="site-width">
          <div className="section-heading archive-heading">
            <div>
              <p className="eyebrow">最新田野紀錄</p>
              <h2>歌謠不是先寫好答案，而是在一次次回應裡慢慢找回來</h2>
            </div>
            <p>淑芳姐提供的工作坊素材包含19支短片與16張照片，記錄老師引導、長輩回唱、個別說唱、白板整理與全場互動。</p>
          </div>
          <div className="field-gallery workshop-gallery">
            <figure className="field-photo field-photo-wide">
              <img src="/field-notes/workshop-wide.jpg" alt="塭仔社區長輩在教室內參與歌謠工作坊，跟著台前帶領者做動作" />
              <figcaption>長輩共同參與與回應，是歌謠從個人記憶走回群體記憶的重要過程。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/field-notes/workshop-teaching.jpg" alt="黃哲永老師與淑芳姐面向長輩整理地方歌謠記憶" />
              <figcaption>老師、地方協力者與長輩在現場共同確認說法與記憶線索。</figcaption>
            </figure>
            <figure className="field-photo">
              <img src="/field-notes/workshop-board.jpg" alt="歌謠工作坊黑板，上面記錄塭仔鹽地產業文化記憶、歌訣與無字曲等內容" />
              <figcaption>黑板留下「歌訣、無字曲、群體工作時的娛樂」等採集方向。</figcaption>
            </figure>
          </div>
          <p className="material-credit">
            活動日期：2026.07.22（以現場黑板記錄為準）｜照片與影片素材提供：吳淑芳。
          </p>
        </div>
      </section>

      <section className="section site-width" id="interview-progress">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">訪談素材初步整理</p>
            <h2>這批可以用，但定位應是「前期田野與線索採集」</h2>
          </div>
          <p>共11支影片、約7分24秒及17張照片。畫面與地方資料線索很有價值，但短片較零碎，尚不足以單獨取代正式人物訪談與完整逐字稿。</p>
        </div>
        <div className="field-gallery interview-gallery">
          <figure className="field-photo field-photo-wide">
            <img src="/field-notes/interview-listening.jpg" alt="淑芳姐以手機靠近在地耆老，記錄訪談內容" />
            <figcaption>手機靠近受訪者收音，對台語口述採集很實用；後續仍需補姓名、身分、地點與授權紀錄。</figcaption>
          </figure>
          <article className="field-insight">
            <p className="archive-type">具體資料線索 01</p>
            <h3>《七星落地》與地方地名歌謠</h3>
            <p>現場出現一份題為「七星落地」的文字資料，串起半月山、中洲山、栗子崙、樹林頭、崁前崁後及掌潭山等地名與地形意象。</p>
            <p>這條線索適合放入紀錄片的「歌聲與土地」段落，也能延伸成網站地名註解；歌詞字詞、讀音、曲調、流傳者及年代仍需黃老師與耆老逐項確認。</p>
          </article>
          <figure className="field-photo">
            <img src="/field-notes/interview-seven-stars.jpg" alt="訪談現場桌上題為七星落地的地方歌謠文字資料" />
            <figcaption>《七星落地》文字資料。現階段作為田野線索展示，不視為已完成考證的正式歌詞。</figcaption>
          </figure>
          <figure className="field-photo">
            <img src="/field-notes/interview-object.jpg" alt="訪談者在桌邊展示並討論兩片傳統屋瓦" />
            <figcaption>訪談也帶出傳統屋瓦等地方物件；物件名稱、用途及其與摃梗故事的關係仍待確認。</figcaption>
          </figure>
        </div>
        <div className="usability-grid">
          <article><strong>可直接使用</strong><p>訪談現場、手機收音、耆老表情、黃老師筆記、歌謠文字與地方物件等過程畫面。</p></article>
          <article><strong>整理後使用</strong><p>完整語意的台語回答、地名歌謠內容與物件故事；需人工聽打、回訪確認與補充脈絡。</p></article>
          <article><strong>仍需補拍</strong><p>正式自我介紹、摃梗用途與操作、換工故事、年代定位，以及可剪入紀錄片的完整回答。</p></article>
        </div>
        <p className="material-credit">
          照片與影片素材提供：吳淑芳｜2026.07.30訪談素材。受訪者姓名、身分、逐字內容及公開範圍待同意書與本人確認；原始錄音錄影暫不直接公開。
        </p>
      </section>
    </>
  );
}
