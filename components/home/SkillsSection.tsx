"use client";

export default function SkillsSection() {
  const domains = [
    {
      number: "01",
      title: "Data Analytics & BI",
      subtitle: "การวิเคราะห์และแสดงผลข้อมูลเชิงลึก (EDA & Dashboards)",
      description:
        "เชี่ยวชาญการเตรียมข้อมูล (Data Preparation) คัดกรองค่าผิดปกติด้วยสถิติ Z-score และ IQR สร้างตัวแปร Growth Rate & Gini Index วิเคราะห์ข้อมูลภาครัฐ 13 ปี และพัฒนา Interactive Dashboard ด้วย Power BI",
      tools: ["Power BI", "Python", "SQL", "Excel", "Pandas", "NumPy"],
    },
    {
      number: "02",
      title: "Machine Learning & AI",
      subtitle: "การพัฒนาโมเดล Computer Vision & Image Classification",
      description:
        "ฝึกสอนโมเดลปัญญาประดิษฐ์ด้วย PyTorch บน Dataset ภาพกว่า 9,600+ รูป ได้ความแม่นยำ 92.2% บน Test Set จัดการภาพขนาด 224x224 ประเมินโมเดลด้วย Confusion Matrix",
      tools: ["PyTorch", "Python", "OpenCV", "Jupyter", "Colab"],
    },
    {
      number: "03",
      title: "Research & Innovation",
      subtitle: "นวัตกรรมและการนำเสนอผลงานระดับประเทศ & สากล",
      description:
        "นำเสนอผลงานวิจัยจนได้รับรางวัลระดับดีมากในการประชุมวิชาการระดับชาติ มศว และชนะเลิศ Pitching นวัตกรรมตู้ดิจิทัลอัจฉริยะ จนได้รับคัดเลือกศึกษาดูงาน Taiwan Tech GTE-X Bootcamp ณ ประเทศไต้หวัน",
      tools: ["Power BI", "Python", "Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="w-full bg-white py-[120px] scroll-mt-20 border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="pb-12">
          <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
            ทักษะและความเชี่ยวชาญ
          </h2>
          <p className="mt-3 text-[16px] leading-[1.6] text-[#6B6B6B] max-w-xl">
            บูรณาการการวิเคราะห์ข้อมูลเชิงลึก (Data Analytics) โมเดลปัญญาประดิษฐ์ (Machine Learning) และการสื่อสารข้อมูล
          </p>
        </div>

        {/* 3 Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((d) => (
            <div
              key={d.title}
              className="flex flex-col justify-between rounded-2xl border border-[#E5E5E5] bg-white p-8 transition-colors hover:border-[#CCCCCC]"
            >
              <div>
                <span className="font-mono text-[13px] font-semibold text-[#6B6B6B]">{d.number}</span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#111111]">{d.title}</h3>
                <p className="mt-1 text-[13px] text-[#6B6B6B]">{d.subtitle}</p>
                <p className="mt-4 text-sm leading-[1.6] text-[#6B6B6B]">{d.description}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#6B6B6B] block mb-3">
                  เครื่องมือ
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {d.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#E5E5E5] bg-white px-3 py-1 text-[13px] text-[#111111]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
