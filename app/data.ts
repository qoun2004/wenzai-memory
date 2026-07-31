export const navItems = [
  { label: "認識塭仔", href: "/place" },
  { label: "人與產業", href: "/people" },
  { label: "社區行動", href: "/actions" },
  { label: "食農教育", href: "/education" },
  { label: "摃梗計畫", href: "/projects/gonggen" },
  { label: "地方典藏", href: "/archive" },
];

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
    status: "索引整理中",
  },
  {
    year: "2026",
    type: "田野紀錄",
    title: "摃梗、換工與鹽地雜糧人物訪談",
    description: "預計十位受訪者；公開摘要、聲音與逐字稿將依同意範圍分級。",
    status: "待訪談與授權",
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
  ...archivePreview,
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
