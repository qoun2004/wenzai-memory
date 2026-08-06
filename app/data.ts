export const navItems = [
  { label: "關於協會", href: "/about" },
  { label: "里海與夥伴", href: "/satoumi" },
  { label: "塭仔聚落", href: "/place" },
  { label: "行動與計畫", href: "/actions" },
  { label: "食農教育", href: "/education" },
  { label: "地方典藏", href: "/archive" },
];

export const associationSources = {
  registration: {
    label: "司法院法人登記公告｜社團法人嘉義縣鄉村永續發展協會",
    url: "https://www.judicial.gov.tw/tw/cp-144-335773-38c74-1.html",
  },
  mission: {
    label: "兒童福利聯盟｜合作組織介紹",
    url: "https://league.children.org.tw/organization_intro/index/nc4iv",
  },
  regionalAction: {
    label: "主婦聯盟環境保護基金會｜嘉義縣鄉村永續發展協會",
    url: "https://www.huf.org.tw/essay/content/4615",
  },
  ruralNetwork: {
    label: "農業部農村發展及水土保持署｜從素人到達人的地方行動",
    url: "https://www.ardswc.gov.tw/Home/Topic/show_detail?id=052df733c8c944de8dc3c6ba6bdbe5f6",
  },
};

export const themes = [
  {
    kicker: "工具與農村生活",
    title: "摃梗：從記憶到復刻",
    description:
      "從老摃梗、鹽地雜糧與換工記憶，走到刺竹採集、重新製作、實際操作與教案。",
    status: "田野與拍攝進行中",
    href: "/projects/gonggen",
  },
  {
    kicker: "歌聲與口述記憶",
    title: "把田裡的故事再唱一次",
    description:
      "黃哲永老師從耆老記憶與地方資料出發，整理並創作新的歌謠，讓聲音成為記憶的線索。",
    status: "第五場工作坊籌備中",
    href: "/projects/gonggen#songs",
  },
  {
    kicker: "豆腐庄與當代食農",
    title: "從黃豆老店到黑豆豆腐",
    description:
      "重新整理豆腐庄的地方歷史，串起黑豆種植、DIY體驗、食農教案、地方餐桌與小旅行。",
    status: "資料核對中",
    href: "/education",
  },
];

export const archivePreview = [
  {
    year: "2009—2025",
    type: "影音",
    title: "塭仔社區既有 YouTube 影集",
    description: "18支不重複影片，涵蓋環境、飲食、信仰、共老、黑豆與地方空間。",
    status: "公開索引已建立",
  },
  {
    year: "2026",
    type: "田野紀錄",
    title: "摃梗、換工與鹽地雜糧人物訪談",
    description: "第一位耆老訪談已於8月6日完成；公開摘要、聲音與逐字稿將依同意範圍分級。",
    status: "1／10位完成・授權待確認",
  },
  {
    year: "2026.07",
    type: "交流協作",
    title: "台藝大團隊：豆腐、踏查與地圖製作",
    description: "屬相關專案的第一階段紀錄，將清楚標示團隊、作者與專案歸屬。",
    status: "資料整理中",
  },
];

export const archiveItems = [
  ...archivePreview.slice(1),
  {
    year: "歷年",
    type: "文件／新聞",
    title: "協會計畫、成果冊與新聞資料",
    description: "建立年份、主辦、作者、來源與權利狀態後逐筆上架。",
    status: "待盤點",
  },
  {
    year: "2026",
    type: "教案",
    title: "摃梗製作與雜糧脫粒體驗",
    description: "包含適用年齡、材料、流程、安全與帶領方式。",
    status: "製作中",
  },
  {
    year: "2026",
    type: "聲音／歌謠",
    title: "地方歌謠採集與新創歌謠",
    description: "歌詞、旋律、演唱、錄音與影像將分別確認授權。",
    status: "待授權公開",
  },
];

export const legacyMediaItems = [
  {
    date: "2009.08.10",
    publisher: "中時新聞網",
    title: "東石塭仔村水淹一樓高，民眾捕蚵抓魚",
    summary: "記錄塭仔村淹水與居民在水中捕蚵、抓魚的新聞影像。",
    url: "https://www.youtube.com/watch?v=hsZAafvh3Dc",
    topics: ["環境", "災害記憶"],
  },
  {
    date: "2010.09.03",
    publisher: "三立電視台29頻道",
    title: "《用心看台灣》嘉義縣東石篇：塭仔村單元",
    summary: "電視節目走入東石與塭仔，留下早期地方生活影像。",
    url: "https://www.youtube.com/watch?v=vHa5nVDs9q0",
    topics: ["地方影像", "社區生活"],
  },
  {
    date: "2012.01.05",
    publisher: "嘉義鄉協",
    title: "嘉義縣東石鄉塭仔社區活動點滴紀錄",
    summary: "由地方協會發布的塭仔社區活動紀錄。",
    url: "https://www.youtube.com/watch?v=9_uHsaTLWxQ",
    topics: ["社區行動"],
  },
  {
    date: "2014.08.30",
    publisher: "黃昌和",
    title: "東石塭仔社區鄉村美食",
    summary: "以參訪視角記錄塭仔社區的鄉村飲食體驗。",
    url: "https://www.youtube.com/watch?v=oxK8LJSVxHo",
    topics: ["飲食文化", "社區體驗"],
  },
  {
    date: "2014.08.31",
    publisher: "黃昌和",
    title: "東石鄉塭仔村練拍",
    summary: "嘉義社大攝影學會前往塭仔村參訪，由吳淑芳接待導覽。",
    url: "https://www.youtube.com/watch?v=iJOqo22A5ok",
    topics: ["地方導覽", "社區影像"],
  },
  {
    date: "2018.12.31",
    publisher: "Bear House",
    title: "嘉義縣東石鄉塭仔村",
    summary: "創作者以影像記錄居住的土地與塭仔村景觀。",
    url: "https://www.youtube.com/watch?v=vCC_D7p_2Do",
    topics: ["地方景觀", "生活記錄"],
  },
  {
    date: "2019.11.10",
    publisher: "奶儀／A.2. STUDIO",
    title: "【廟會紀錄】東石塭仔慈安宮",
    summary: "慈安宮廟會活動影像，記錄地方信仰與儀式現場。",
    url: "https://www.youtube.com/watch?v=tg8mufJ-oQg",
    topics: ["慈安宮", "地方信仰"],
  },
  {
    date: "2021.01.17",
    publisher: "世新新聞",
    title: "東石塭仔柴香灶炊古早味，大鼎灶啟用",
    summary: "記錄社區共同營造大鼎灶，重現農村煮食文化的成果活動。",
    url: "https://www.youtube.com/watch?v=f58N7xnUtYE",
    topics: ["大鼎灶", "農村飲食"],
  },
  {
    date: "2021.01.17",
    publisher: "下暗新聞",
    title: "嘉義塭仔社區起大鼎灶，做伙煮食聯絡感情",
    summary: "從台語新聞視角記錄居民共同打造大鼎灶與社區共食。",
    url: "https://www.youtube.com/watch?v=oe5G8B2e2ME",
    topics: ["大鼎灶", "社區共食"],
  },
  {
    date: "2021.01.25",
    publisher: "大揚新聞",
    title: "打造社區專屬廚房，古早大鼎灶重現東石",
    summary: "三十多位長者參與建造大鼎灶，希望成為旅外遊子回家的廚房。",
    url: "https://www.youtube.com/watch?v=GI1zlPtL8UM",
    topics: ["大鼎灶", "共老", "返鄉"],
  },
  {
    date: "2022.04.04",
    publisher: "世新新聞",
    title: "東石鄉塭仔社區無障礙洗手間揭牌啟用",
    summary: "記錄社區公共空間補足無障礙設施，以及地方與公益單位的合作。",
    url: "https://www.youtube.com/watch?v=6X2BvybIAgE",
    topics: ["公共空間", "高齡友善"],
  },
  {
    date: "2023.11.25",
    publisher: "立影專業攝影",
    title: "東石塭仔慈安宮回駕本宮繞境篇",
    summary: "慈安宮回駕與繞境的地方信仰紀錄。",
    url: "https://www.youtube.com/watch?v=OuIHeLVDpaA",
    topics: ["慈安宮", "地方信仰"],
  },
  {
    date: "2024.01.25",
    publisher: "世新新聞",
    title: "朴石連線，用黑豆串聯海線地區",
    summary: "從黑豆種植、醬油釀製到成果分享，串聯朴子與東石的食農文化行動。",
    url: "https://www.youtube.com/watch?v=8wW9UpQK-LQ",
    topics: ["黑豆", "食農教育", "區域串聯"],
  },
  {
    date: "2024.06.27",
    publisher: "小世界周報",
    title: "阮來發揮「銀」響力：塭仔的青春老人夢",
    summary: "記錄中壯輩帶領長輩參與社區生活，以行動回應高齡化與地方情感。",
    url: "https://www.youtube.com/watch?v=A_UAndmvRGo",
    topics: ["共老", "社區照顧"],
  },
  {
    date: "2024.09.25",
    publisher: "嘉義鄉協",
    title: "嘉義東石【塭仔的青春美夢】",
    summary: "呈現塭仔長輩投入社區、發揮「銀」響力的生活片段。",
    url: "https://www.youtube.com/watch?v=nqbnjE1XAUw",
    topics: ["共老", "社區行動"],
  },
  {
    date: "2024.10.26",
    publisher: "上浩 清淨家園",
    title: "嘉義縣東石鄉塭仔村村里清潔大作戰",
    summary: "居民與相關單位共同整理村里環境的行動紀錄。",
    url: "https://www.youtube.com/watch?v=NKQRaQu6MZg",
    topics: ["環境整理", "居民參與"],
  },
  {
    date: "2024.10.26",
    publisher: "世新新聞",
    title: "東石塭仔村雨水再利用，覆網防止病媒蚊孳生",
    summary: "記錄清潔大作戰、雨水再利用與社區環境維護措施。",
    url: "https://www.youtube.com/watch?v=gPRhulYMuig",
    topics: ["環境整理", "雨水再利用"],
  },
  {
    date: "2025.05.02",
    publisher: "嘉義鄉協",
    title: "《東石飲食記憶與海派社造》",
    summary: "以飲食文化、人物訪談與 podcast 串起東石生活記憶、產業及地方社造脈絡。",
    url: "https://www.youtube.com/watch?v=3B82v8x39Oo",
    topics: ["飲食記憶", "海派社造", "口述紀錄"],
  },
];

export const publicReferenceItems = [
  {
    date: "2020.09.23",
    publisher: "城市學／遠見",
    title: "全台最老嘉義縣的塭仔社區，她如何引人回「嘉」？",
    summary:
      "從吳淑芳長期參與農村學習、包車會議室、居民培力、跨社區串聯與50分工作室，整理塭仔如何把學習轉成地方行動。",
    url: "https://city.gvm.com.tw/article/74741",
    topics: ["學習型社區", "吳淑芳", "區域串聯"],
    linkLabel: "閱讀城市學報導",
  },
  {
    date: "2021.09.12",
    publisher: "食農+",
    title: "嘉義東石魚塭邊的二十年青春美夢",
    summary:
      "記錄社區居民、新住民、食農行動、生態廚房與地方團隊如何在長期累積中建立信心。",
    url: "https://agrifoodplus.foodiedu.org/news/38",
    topics: ["食農教育", "新住民", "社區培力"],
    linkLabel: "閱讀食農+專文",
  },
  {
    date: "2021.12.04",
    publisher: "大享食育協會",
    title: "在產地裡遇見東南亞：塭仔廣播劇與食育體驗",
    summary:
      "由大享食育協會與50分Life工作室合作，結合廣播劇、白蝦知識、生春捲與蚵仔包體驗。",
    url: "https://www.foodiedu.org/news/1189",
    topics: ["新住民文化", "白蝦", "食育體驗"],
    linkLabel: "查看活動紀錄",
  },
  {
    date: "日期待核",
    publisher: "國立中正大學中正E報",
    title: "塭仔的青春美夢：打造夢想未來",
    summary:
      "梳理社區廚房、大鼎灶、友善菜園、無障礙設施、親水平台與FOODTALK客廳的四期空間行動。",
    url: "https://enews.ccu.edu.tw/p/404-1089-62694.php?Lang=zh-tw",
    topics: ["公共空間", "共老", "青春美夢"],
    linkLabel: "閱讀中正E報",
  },
  {
    date: "2023",
    publisher: "嘉義縣政府綜合規劃處",
    title: "112年施做點：塭仔社區空間改造",
    summary:
      "將傾頹閒置豬舍轉化為長者樂活學堂、社區客廳與旅外遊子返鄉空間的公開資料頁。",
    url: "https://rd.cyhg.gov.tw/cp.aspx?n=2421",
    topics: ["公共空間", "社區營造"],
    linkLabel: "查看政府資料",
  },
  {
    date: "2024",
    publisher: "農業部農村發展及水土保持署",
    title: "大專院校農村實踐共創：嘉鄉的豆味食餞",
    summary:
      "長庚科技大學團隊以塭仔青春美夢園地為場域，串連塭仔、洲仔、東崙與西崙等社區生活圈。",
    url: "https://ruralup.ardswc.gov.tw/backend/media/announcement/brochure/113%E5%B9%B4%E5%BA%A6%E5%A4%A7%E5%B0%88%E9%99%A2%E6%A0%A1%E8%BE%B2%E6%9D%91%E5%AF%A6%E8%B8%90%E5%85%B1%E5%89%B5%E8%A8%88%E7%95%AB%E5%85%AC%E5%91%8A.pdf",
    topics: ["黑豆", "大學協作", "農村實踐"],
    linkLabel: "查看官方通過名單",
  },
];
