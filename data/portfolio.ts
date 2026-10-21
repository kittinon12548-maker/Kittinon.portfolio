// ข้อมูลทั้งหมดของเว็บพอร์ตโฟลิโอ — Kittinon Chumboon (กิจตินนท์ ชุมบุญ)
// คำที่อยู่ใน [วงเล็บเหลี่ยม] จะถูกไฮไลต์เป็นสีเขียวในหน้าเว็บ

export const profile = {
  name: "Kittinon Chumboon",
  nameTh: "กิจตินนท์ ชุมบุญ",
  nickname: "Non",
  nicknameTh: "นนท์",
  age: 21,
  roles: ["Data Analyst", "Data Science Student", "Machine Learning Developer"],
  education: "สาขาวิชาวิทยาการคอมพิวเตอร์และสารสนเทศ (Data Science) ชั้นปีที่ 3",
  faculty: "คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล",
  university: "มหาวิทยาลัยทักษิณ วิทยาเขตพัทลุง",
  gpax: "3.18",
  location: "จ.ตรัง",
  timezone: "Asia/Bangkok",
  availability: "7 เม.ย. – ก.ย.",
  availabilityFull: "7 เมษายน – กันยายน",
  availabilityNote: "พร้อมเริ่มฝึกงานช่วง 7 เมษายน ถึง กันยายน",
  sideJob: "วิจัยและพัฒนานวัตกรรม AI & Data Analytics",
  photo: "/images/profile-portrait.webp",
  portrait: "/images/profile-portrait.webp",
  storyPhoto: "/images/profile-portrait.webp",
  avatar: "/images/profile-portrait.webp",
  resumeUrl: "/resume.pdf",
};

export const contact = {
  email: "kittinon12548@gmail.com",
  phone: "066-020-4256",
  socials: [
    { label: "GitHub", icon: "github", href: "https://github.com/kittinon12548-maker" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/kittinon-chumboon-73250b369" },
  ] as const,
};

// ---------- หน้า Home ----------
export const home = {
  hero: {
    rotating: ["Data Analyst", "Data Science Student"],
    line2: "& Power BI Specialist",
    sub: [
      "นิสิต Data Science ชั้นปีที่ 3",
      "มหาวิทยาลัยทักษิณ (GPAX 3.18)",
      "พร้อมสำหรับการฝึกงานในตำแหน่ง Data Analyst",
      "ช่วง 7 เมษายน – กันยายน",
    ],
  },
  intro: {
    kicker: "สวัสดีครับ ผม[กิจตินนท์] นิสิต Data Science ปี 3",
    big: "ผมหลงใหลการเปลี่ยน[ข้อมูลซับซ้อน] ให้กลายเป็น[คำตอบเชิงลึก] และโมเดล AI ที่จับต้องได้",
    pill: "Open for internship",
    statement:
      "ผมเชี่ยวชาญการทำ [EDA & Interactive Dashboard] บน Power BI การเตรียมข้อมูลภาครัฐ 13 ปี จนคว้ารางวัลระดับดีมาก และพัฒนา [PetGuard AI ต้นแบบตรวจสุขภาพแมวด้วย PyTorch] ผ่านเข้ารอบสุดท้าย Pitching League ตอนนี้พร้อมนำทักษะมาสร้างคุณค่าจริง ร่วมกับทีม",
  },
};

// ---------- หน้า About ----------
export const about = {
  heading: "Transforming raw data into meaningful insights & intelligent solutions",
  sub: "นิสิต Data Science ชั้นปีที่ 3 · มหาวิทยาลัยทักษิณ (GPAX 3.18)",
  story:
    "ผมศึกษาด้านวิทยาการข้อมูลและสารสนเทศ มหาวิทยาลัยทักษิณ มีความมุ่งมั่นในการสกัดความรู้และคุณค่าจากข้อมูลดิบ ตั้งแต่กระบวนการ Data Cleaning, Outlier Detection, การวิเคราะห์ข้อมูลเชิงสำรวจ (EDA) ไปจนถึงการสื่อสารผลลัพธ์ผ่าน Power BI Interactive Dashboard ที่ตอบโจทย์การตัดสินใจ นอกจากนี้ยังมีความเชี่ยวชาญด้าน Machine Learning & Computer Vision ในการพัฒนาโมเดลจำแนกภาพและโซลูชันนวัตกรรมเพื่อสุขภาพสัตว์เลี้ยง",
  storySub:
    "เป้าหมายการฝึกงาน: ต้องการนำทักษะด้าน Python, SQL, Power BI, และ Machine Learning มาช่วยงานองค์กรในการจัดทำรายงาน Business Intelligence, วิเคราะห์ Insight สนับสนุนการตัดสินใจ และพัฒนาโซลูชันข้อมูล พร้อมเปิดรับการเรียนรู้วัฒนธรรมการทำงานจริงร่วมกับทีมงานมืออาชีพ ในช่วง 7 เมษายน ถึง กันยายน",
  facts: [
    { label: "เกรดเฉลี่ยสะสม", value: `${profile.gpax} / 4.00` },
    { label: "ช่วงฝึกงาน", value: profile.availabilityFull },
    { label: "สถาบันการศึกษา", value: `${profile.faculty} ${profile.university}` },
    { label: "ภูมิลำเนา", value: "อ.นาโยง จ.ตรัง" },
  ],
  servicesHeading: "What I can do",
  services: [
    {
      title: "Data Analytics & EDA",
      body: "จัดการและเตรียมข้อมูลขนาดใหญ่ (Data Cleaning, Transformation) ตรวจจับค่าผิดปกติด้วยสถิติ Z-score และ IQR สร้างตัวแปรเชิงลึก เช่น Growth Rate และ Gini Index",
      tools: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Jupyter"],
    },
    {
      title: "Business Intelligence & Dashboards",
      body: "ออกแบบ Data Model และพัฒนา Interactive Dashboard ด้วย Power BI สรุปแนวโน้มทางเศรษฐกิจ รายได้เชิงพื้นที่ และตัวชี้วัดสำคัญทางธุรกิจ",
      tools: ["Power BI", "Excel", "SQL", "Google Sheets"],
    },
    {
      title: "Machine Learning & Computer Vision",
      body: "ฝึกสอนโมเดล Image Classification ด้วย PyTorch บน Dataset ภาพกว่า 9,600+ รูป ได้ความแม่นยำ 92.2% ประเมินผลด้วย Confusion Matrix และศึกษาการใช้ CLIP ในการคัดกรองข้อมูล",
      tools: ["PyTorch", "Python", "OpenCV", "Jupyter", "REST API", "Git"],
    },
  ],
  design: { label: "เครื่องมือวิเคราะห์และวิจัย", tools: ["Power BI", "Excel", "Canva", "Word"] },
  activities: [
    {
      year: "2569",
      title: "รางวัลระดับดีมาก (Very Good Award) การนำเสนอผลงานแบบโปสเตอร์ (Poster Presentation)",
      detail:
        "งานวิจัยเรื่อง “การวิเคราะห์ข้อมูลเชิงหลายมิติของรูปแบบและความเหลื่อมล้ำของรายได้ระดับภูมิภาคในประเทศไทย” ในงานประชุมวิชาการระดับชาติวิทยาศาสตร์วิจัย ครั้งที่ 17 ณ มหาวิทยาลัยศรีนครินทรวิโรฒ (ร่วมกับ ผศ.สุดา เธียรมนตรี)",
    },
    {
      year: "2569",
      title: "ผ่านเข้ารอบชิงชนะเลิศ (Final) TSU Innovation Pitching League 2026",
      detail:
        "ทีม EASY อุ้นจิ ผลงาน “PetGuard AI: ระบบปัญญาประดิษฐ์สำหรับวิเคราะห์และคัดกรองลักษณะอุจจาระแมวจากภาพ” ผ่านการคัดเลือกรอบ Campus League เข้าสู่รอบชิงชนะเลิศระดับมหาวิทยาลัย",
    },
    {
      year: "2568",
      title: "รางวัลเชิดชูเกียรติ นิสิตดีเด่น ด้านบำเพ็ญประโยชน์",
      detail: "ประจำปีการศึกษา 2568 คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ",
    },
    {
      year: "2568",
      title: "ชนะเลิศโครงการ TSU Innovation Pitching League 2025 & ศึกษาดูงาน ณ ประเทศไต้หวัน",
      detail:
        "ทีม Style3 ผลงาน “ตู้ขายน้ำหอมอัจฉริยะดิจิทัลที่ล้ำสมัย” ได้รับทุนสนับสนุนและได้รับคัดเลือกศึกษาดูงานระบบนิเวศนวัตกรรมและเทคโนโลยี Taiwan Tech GTE-X Bootcamp ณ ประเทศไต้หวัน (8–11 ธ.ค. 2568)",
    },
  ],
  approach: "ผมชอบ[ตั้งคำถามกับข้อมูล] ค้นหาความเป็นไปได้ และใช้[เครื่องมือทางสถิติและเทคโนโลยีที่แม่นยำ]ในการตอบโจทย์",
  values: [
    "ให้ความสำคัญกับ[ความสะอาดและความถูกต้องของข้อมูล] ก่อนลงมือวิเคราะห์เสมอ",
    "ออกแบบ Dashboard ให้[อ่านง่าย ตอบคำถามผู้บริหาร] และขับเคลื่อนการตัดสินใจได้จริง",
    "ประเมินโมเดล AI ด้วย[สถิติเชิงลึกรอบด้าน] เช่น Confusion Matrix ไม่ยึดติดแค่ความแม่นยำรวม",
    "พร้อม[เรียนรู้อย่างต่อเนื่องและรับฟังคำแนะนำ] เพื่อพัฒนาผลงานให้เกิดประโยชน์สูงสุดต่อทีม",
  ],
};

// ---------- ผลงาน ----------
export type CoverKind = "inventory" | "chat" | "finance" | "dashboard";

export type ProjectImage = string | { src: string; caption?: string } | { row: string[]; caption?: string };
export const imageSrc = (img: ProjectImage) => (typeof img === "string" ? img : "row" in img ? img.row[0] : img.src);

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  metric?: string;
  role: string;
  category: string;
  year?: string;
  cover: { kind: CoverKind; bg: string; accent: string };
  coverImage?: string;
  images?: ProjectImage[];
  problem: string;
  solution: string;
  features?: string[];
  tech: string[];
  award?: string;
  demoUrl?: string;
  demoNote?: string;
  githubUrl?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "regional-income",
    title: "Regional Income Patterns & Inequality in Thailand",
    subtitle: "การวิเคราะห์ข้อมูลเชิงหลายมิติของรูปแบบและความเหลื่อมล้ำของรายได้ระดับภูมิภาคในประเทศไทย",
    metric: "Very Good Award ระดับชาติ & สรุปข้อมูลภาครัฐ 13 ปี",
    role: "Data Analyst · นักวิจัย",
    category: "งานวิจัยและแดชบอร์ดวิเคราะห์ข้อมูล (Power BI & Python)",
    year: "2569",
    cover: { kind: "dashboard", bg: "#131a26", accent: "#38bdf8" },
    coverImage: "/projects/regional-income/cover.webp",
    images: [
      {
        src: "/projects/regional-income/01-award-poster.webp",
        caption:
          "นำเสนอผลงานวิจัยแบบโปสเตอร์และคว้ารางวัลระดับดีมาก (Very Good Award) ร่วมกับ ผศ.สุดา เธียรมนตรี ในการประชุมวิชาการระดับชาติวิทยาศาสตร์วิจัย ครั้งที่ 17 ณ มหาวิทยาลัยศรีนครินทรวิโรฒ",
      },
    ],
    problem:
      "ความเหลื่อมล้ำทางรายได้เป็นประเด็นสำคัญที่ส่งผลต่อการพัฒนาเศรษฐกิจและสังคม โดยเฉพาะความแตกต่างเชิงพื้นที่ระหว่างกรุงเทพฯ และภูมิภาคอื่น ๆ อย่างไรก็ตาม ข้อมูลสถิติของภาครัฐยังกระจัดกระจายและขาดการวิเคราะห์เชิงลึกที่เชื่อมโยงมิติเวลาและดัชนีทางสถิติเข้าด้วยกันเพื่อสนับสนุนการตัดสินใจเชิงนโยบาย",
    solution:
      "ผมนำข้อมูลทุติยภูมิรายได้เฉลี่ยครัวเรือนรายภูมิภาคในช่วงปี พ.ศ. 2554–2566 (รวม 13 ปี) จากระบบข้อมูลเปิดภาครัฐ (data.go.th) มาทำความสะอาดข้อมูล จัดการค่าสูญหาย และตรวจจับค่าผิดปกติ (Z-score และ IQR) จากนั้นสร้างตัวแปรสำคัญ เช่น อัตราการเติบโต (Growth Rate) และดัชนีความเหลื่อมล้ำ (Gini Index) พร้อมพัฒนา Interactive Dashboard ด้วย Power BI สรุป Insight เชิงพื้นที่",
    features: [
      "สกัดและเตรียมข้อมูลภาครัฐย้อนหลัง 13 ปี (2554–2566) จากระบบข้อมูลเปิด (data.go.th) ด้วย Python",
      "ตรวจจับค่าผิดปกติ (Outlier Detection) ด้วยสถิติ Z-score และ Interquartile Range (IQR)",
      "สร้างตัวแปรเชิงลึก: คำนวณอัตราการเติบโตของรายได้ (Growth Rate) และดัชนีความเหลื่อมล้ำ (Gini Index ช่วง 0.52–0.82)",
      "พัฒนา Interactive Dashboard ด้วย Power BI แสดงผลเปรียบเทียบมิติเวลาและภูมิภาคอย่างชัดเจน",
      "ค้นพบ Insight สำคัญ: กรุงเทพฯ และปริมณฑลมีระดับรายได้สูงที่สุด ขณะที่ภาคตะวันออกเฉียงเหนือมีระดับรายได้ต่ำที่สุด",
      "นำเสนอผลงานและตีพิมพ์ในงานประชุมวิชาการระดับชาติวิทยาศาสตร์วิจัย ครั้งที่ 17 จนได้รับรางวัลระดับดีมาก",
    ],
    tech: ["Python", "Power BI", "SQL", "Excel", "Colab", "Git"],
    award:
      "รางวัลระดับดีมาก (Very Good Award) การนำเสนอประเภท Poster Presentation งานประชุมวิชาการระดับชาติวิทยาศาสตร์วิจัย ครั้งที่ 17 ณ มหาวิทยาลัยศรีนครินทรวิโรฒ",
    githubUrl: "https://github.com/kittinon12548-maker",
  },
  {
    slug: "petguard-ai",
    title: "PetGuard AI",
    subtitle: "ระบบปัญญาประดิษฐ์สำหรับวิเคราะห์และคัดกรองลักษณะอุจจาระแมวจากภาพ",
    metric: "Test Accuracy 92.2% (โมเดลต้นแบบ) & ผ่านเข้ารอบชิงระดับมหาวิทยาลัย TSU Pitching League 2026",
    role: "AI / ML Developer · ทีม EASY อุ้นจิ",
    category: "Computer Vision & Pet Health Technology Prototype",
    year: "2569",
    cover: { kind: "inventory", bg: "#0c1b26", accent: "#06b6d4" },
    coverImage: "/projects/petguard-ai/cover.webp",
    images: [
      {
        src: "/projects/petguard-ai/cover.webp",
        caption: "หน้าแรกเว็บไซต์ต้นแบบ PetGuard AI — ระบบ AI จำแนกและคัดกรองลักษณะอุจจาระแมวจากภาพเบื้องต้น เชื่อมต่อกับฮาร์ดแวร์ของพาร์ตเนอร์ผ่าน API (ภาพกระบะทรายเป็นตัวอย่างการติดตั้ง ไม่ใช่สินค้าที่ PetGuard AI ผลิตเอง)",
      },
      {
        src: "/projects/petguard-ai/02-sandbox.webp",
        caption: "หน้าทดสอบระบบ (Sandbox) สำหรับอัปโหลดภาพและทดลองการจำแนกและคัดกรองเบื้องต้น",
      },
      {
        src: "/projects/petguard-ai/03-analysis.webp",
        caption: "ผลการจำแนกลักษณะอุจจาระแมวจากภาพ พร้อมระดับความเสี่ยงเบื้องต้น คำแนะนำเบื้องต้น และตัวอย่าง API Response (Preview)",
      },
      {
        src: "/projects/petguard-ai/04-pitching-final.webp",
        caption: "ทีม EASY อุ้นจิ ได้รับการคัดเลือกรอบ Campus League ผ่านเข้าสู่รอบชิงชนะเลิศระดับมหาวิทยาลัย (Final) TSU Innovation Pitching League 2026",
      },
    ],
    problem:
      "เจ้าของแมวส่วนใหญ่มีข้อจำกัดด้านเวลาในการสังเกตลักษณะการขับถ่ายของสัตว์เลี้ยงอย่างสม่ำเสมอ ขณะที่กระบะทรายอัตโนมัติหลายรุ่นเน้นฟังก์ชันทำความสะอาด และยังไม่ได้นำภาพมาช่วยสังเกตลักษณะการขับถ่ายเบื้องต้น ทำให้ความผิดปกติที่มองเห็นได้จากภาพอาจถูกสังเกตพบช้า",
    solution:
      "PetGuard AI เป็นบริการ AI Model, API และ SDK แบบ B2B สำหรับผู้ผลิตอุปกรณ์สัตว์เลี้ยงและองค์กรด้านสัตวแพทย์ ไม่ได้ผลิตหรือจำหน่ายกระบะทรายเอง ต้นแบบปัจจุบันเป็น Image Classification ด้วย PyTorch ฝึกบน Dataset ภาพอุจจาระแมวจาก Roboflow ประมาณ 9,664 ภาพ (แบ่ง train/valid/test) จำแนก 4 คลาสตามชื่อ Label ของ Dataset ต้นแบบ ได้ความแม่นยำ 92.2% บนชุดทดสอบ 307 ภาพ ชื่อคลาสเป็นเพียง Label ของ Dataset ไม่ได้ยืนยันว่าแมวมีโรคหรือภาวะดังกล่าว ทีมอยู่ระหว่างพัฒนา Dataset ของตนเองเป็น 5 คลาส (Hard, Normal, Soft, Watery, Blood) โดยใช้ CLIP ช่วยคัดกรองภาพเบื้องต้นตามระดับความมั่นใจ และให้มนุษย์ตรวจสอบภาพที่ไม่มั่นใจและภาพที่เกี่ยวข้องกับ Blood",
    features: [
      "จำแนกลักษณะที่มองเห็นจากภาพอุจจาระแมวตาม Label ของ Dataset ต้นแบบ 4 คลาส (Soft, Normal, Diarrhea, Lack-of-water) ด้วย PyTorch Image Classification โดย Lack-of-water เป็นชื่อ Label ไม่ใช่การตรวจยืนยันภาวะขาดน้ำ",
      "โมเดลต้นแบบมีความแม่นยำ 92.2% บนชุดทดสอบ 307 ภาพ (จำแนกถูกต้อง 283 ภาพ) พร้อมวิเคราะห์ Error ด้วย Confusion Matrix",
      "ประมวลผลเตรียมภาพ (Resize 224×224, Normalization) และจัดการข้อมูลด้วย Google Colab & OpenCV",
      "ใช้ CLIP เป็นเครื่องมือช่วยคัดกรองและจัดระเบียบภาพตามระดับความมั่นใจ (สูง/ปานกลาง/ไม่มั่นใจ) ระหว่างสร้าง Dataset 5 คลาสที่ยังอยู่ระหว่างพัฒนา ภาพที่ไม่มั่นใจและภาพที่มีลักษณะคล้ายเลือดต้องให้มนุษย์ตรวจสอบก่อน CLIP ไม่ใช่ผู้ตัดสินป้ายกำกับ",
      "ออกแบบโครงสร้างระบบเป็น AI API ให้เชื่อมต่อกับฮาร์ดแวร์ของพาร์ตเนอร์ (เช่น กล้องของกระบะทรายอัตโนมัติ) และแอปพลิเคชันภายนอก",
      "พัฒนาเว็บแอปต้นแบบ Sandbox ให้ผู้ใช้ทดลองอัปโหลดภาพและดูผลการจำแนกเบื้องต้นหลังอัปโหลด",
      "ผลจาก AI เป็นการจำแนกและคัดกรองจากภาพเบื้องต้น ไม่ใช่การวินิจฉัยโรคหรือการตรวจทางห้องปฏิบัติการ หากพบความผิดปกติควรปรึกษาสัตวแพทย์",
    ],
    tech: ["PyTorch", "Python", "OpenCV", "REST API", "Jupyter", "Git", "GitHub"],
    award:
      "ผ่านการคัดเลือก Campus League เข้าสู่รอบชิงชนะเลิศระดับมหาวิทยาลัย (Final) โครงการ TSU Innovation Pitching League 2026",
    githubUrl: "https://github.com/kittinon12548-maker",
  },
  {
    slug: "smart-perfume",
    title: "Smart Digital Perfume Vending Machine",
    subtitle: "ตู้ขายน้ำหอมอัจฉริยะดิจิทัลที่ล้ำสมัย — TSU Innovation Pitching League 2025",
    metric: "ชนะเลิศทุนสนับสนุน & ตัวแทนศึกษาดูงานนวัตกรรม ณ ประเทศไต้หวัน",
    role: "Startup Pitching & Innovation · ทีม Style3",
    category: "IoT & Startup Innovation",
    year: "2568",
    cover: { kind: "chat", bg: "#161b2e", accent: "#3b82f6" },
    coverImage: "/projects/smart-perfume/cover.webp",
    images: [
      {
        src: "/projects/smart-perfume/01-award-board.webp",
        caption: "ทีม Style3 ได้รับทุนสนับสนุนและได้รับคัดเลือกศึกษาดูงานระบบนิเวศนวัตกรรม ณ ประเทศไต้หวัน",
      },
      {
        src: "/projects/smart-perfume/02-taiwan-bootcamp.webp",
        caption: "เข้าร่วมกิจกรรมและเวิร์กช็อป Taiwan Tech GTE-X Bootcamp ณ มหาวิทยาลัยเทคโนโลยีแห่งชาติไต้หวัน (Taiwan Tech)",
      },
      {
        src: "/projects/smart-perfume/03-team-discussion.webp",
        caption: "การระดมสมอง แก้โจทย์ และพัฒนาแนวคิดธุรกิจร่วมกับผู้เชี่ยวชาญด้าน Startup ในไต้หวัน",
      },
      {
        src: "/projects/smart-perfume/04-pitching-stage.webp",
        caption: "นำเสนอผลงานบนเวที Bootcamp และแลกเปลี่ยนประสบการณ์กับสตาร์ทอัพระดับนานาชาติ",
      },
    ],
    problem:
      "ตู้จำหน่ายสินค้าอัตโนมัติทั่วไปขาดความยืดหยุ่นในการปรับแต่งกลิ่นน้ำหอมให้ตรงกับความชอบของผู้บริโภคแต่ละบุคคล และไม่มีระบบติดตามเก็บข้อมูลความนิยมของผู้ซื้อเพื่อนำมาวิเคราะห์ต่อยอดเชิงธุรกิจ",
    solution:
      "ทีมออกแบบแนวคิดตู้จำหน่ายน้ำหอมดิจิทัลอัจฉริยะที่ผู้ซื้อสามารถเลือกผสมผสานกลิ่นและทดลองกลิ่นผ่านอินเทอร์เฟซหน้าจอดิจิทัล พร้อมระบบเก็บสถิติความนิยมและการจัดการสต็อกอัตโนมัติ โดยนำเสนอต่อคณะกรรมการจนได้รับรางวัลชนะเลิศและทุนสนับสนุน",
    features: [
      "พัฒนา Business Model Canvas และการวิเคราะห์กลุ่มลูกค้าสำหรับตู้จำหน่ายสินค้าอัจฉริยะ",
      "ได้รับรางวัลชนะเลิศทุนสนับสนุนการพัฒนาต้นแบบในโครงการ TSU Innovation Pitching League 2025",
      "ได้รับคัดเลือกเป็นตัวแทนเข้าร่วมโครงการ “TSU Discover Taiwan Startup Ecosystem” ณ กรุงไทเป ประเทศไต้หวัน (8–11 ธ.ค. 2568)",
      "เข้าร่วมอบรมเชิงปฏิบัติการ Taiwan Tech GTE-X Bootcamp เรียนรู้การสร้างนวัตกรรมร่วมกับบุคลากร Taiwan Tech",
      "เสริมสร้างทักษะการทำงานเป็นทีม การสื่อสารภาษาอังกฤษ และการนำเสนอผลงานระดับนานาชาติ",
    ],
    tech: ["Python", "Git", "GitHub"],
    award:
      "ชนะเลิศได้รับทุนสนับสนุนและได้รับคัดเลือกศึกษาดูงานระบบนิเวศนวัตกรรม ณ ประเทศไต้หวัน ในโครงการ TSU Innovation Pitching League 2025",
    githubUrl: "https://github.com/kittinon12548-maker",
  },
];
