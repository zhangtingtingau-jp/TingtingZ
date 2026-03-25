import { useState, useEffect, useRef } from "react";

// ===== TRILINGUAL SYSTEM =====
const L = {
  en: {
    nav: ["Home", "Services", "Sectors", "Talent", "About", "Contact"],
    hero: { tag: "LIFE SCIENCES TALENT PARTNER", title: "Connecting Global\nPharma Talent", sub: "Specialized executive search across the US, Europe, Japan, and China. Trilingual. Cross-border. Results-driven.", cta: "Partner With Us", cta2: "Submit Your CV" },
    stats: [
      { num: "500+", label: "Placements Made" },
      { num: "12", label: "Countries Covered" },
      { num: "96%", label: "Retention Rate" },
      { num: "3", label: "Languages Spoken" }
    ],
    services: {
      tag: "WHAT WE DO",
      title: "Our Services",
      items: [
        { icon: "🎯", title: "Executive Search", desc: "C-suite and VP-level placements in pharma, biotech, and CROs. We find leaders who transform organizations." },
        { icon: "🌏", title: "Cross-Border Recruitment", desc: "Bridging talent between the US, Europe, Japan, and China. Native-level trilingual capability in English, Japanese, and Mandarin." },
        { icon: "🧬", title: "Clinical Operations Staffing", desc: "CRAs, Data Managers, Biostatisticians, Medical Writers, Pharmacovigilance specialists — we know who's who." },
        { icon: "🤝", title: "Market Entry Consulting", desc: "Helping global pharma companies build teams as they enter new markets. From first hire to full operation." }
      ]
    },
    sectors: {
      tag: "INDUSTRIES",
      title: "Sectors We Serve",
      items: ["Pharmaceutical", "Biotechnology", "CRO / CDMO", "Medical Devices", "Digital Health", "Regulatory & Compliance"]
    },
    roles: {
      tag: "ROLES WE FILL",
      title: "Functional Expertise",
      items: [
        { title: "Clinical Development", roles: "VP Clinical Operations, Medical Directors, Clinical Program Leads, CRAs, Clinical Data Managers" },
        { title: "Regulatory & Quality", roles: "Regulatory Affairs Directors, QA/QC Leads, Pharmacovigilance Managers, Safety Officers" },
        { title: "Commercial & BD", roles: "Business Development VPs, Alliance Managers, Commercial Strategy Leads, Market Access Directors" },
        { title: "Data & Technology", roles: "Biostatisticians, Data Science Leads, EDC Specialists, CTMS Administrators, AI/ML in Pharma" }
      ]
    },
    about: {
      tag: "WHY TTHealth",
      title: "Your Edge in Life Sciences Talent",
      points: [
        { icon: "🗣️", title: "Trilingual Advantage", desc: "Native-level English, Japanese (JLPT N1), and Mandarin Chinese. We communicate with candidates and hiring managers in their own language — no lost nuance, no cultural gaps." },
        { icon: "🧪", title: "Industry Insider", desc: "Our founder comes from the clinical trial industry — WuXi Clinical, Oracle Health Sciences, and beyond. We understand the roles because we've lived them." },
        { icon: "🌐", title: "Cross-Border Network", desc: "Deep relationships across the US, Europe, Japan, and Greater China. When a Japanese pharma needs talent in Shanghai, or a US biotech needs someone who speaks both science and Japanese — we're the call." },
        { icon: "🎓", title: "Business Acumen", desc: "Fudan MBA with international exchange at BI Norwegian Business School. We approach recruitment as a strategic business problem, not a resume-matching exercise." }
      ]
    },
    contact: {
      tag: "GET IN TOUCH",
      title: "Start a Conversation",
      subtitle: "Whether you're hiring or exploring your next career move, we'd love to hear from you.",
      form: { name: "Your Name", email: "Email Address", company: "Company (optional)", message: "Tell us about your needs...", send: "Send Message" },
      info: [
        { label: "Email", value: "hello@tthealth.tech" },
        { label: "Based In", value: "Shanghai · Tokyo · Global" },
        { label: "Languages", value: "English · 日本語 · 中文" }
      ]
    },
    footer: { line1: "TTHealth — Life Sciences Talent Partner", line2: "Shanghai · Tokyo · Global", copy: "© 2026 TTHealth. All rights reserved." },
    langLabel: "EN"
  },
  zh: {
    nav: ["首页", "服务", "行业", "人才", "关于", "联系"],
    hero: { tag: "生命科学人才合作伙伴", title: "连接全球\n医药精英", sub: "专注中美欧日跨境高端人才猎寻。三语服务，深耕行业，以结果为导向。", cta: "企业合作", cta2: "投递简历" },
    stats: [
      { num: "500+", label: "成功案例" },
      { num: "12", label: "覆盖国家" },
      { num: "96%", label: "留任率" },
      { num: "3", label: "服务语言" }
    ],
    services: {
      tag: "我们的服务",
      title: "核心服务",
      items: [
        { icon: "🎯", title: "高管猎寻", desc: "为医药、生物科技及CRO企业寻找C-suite及VP级别领导者，找到真正能带来变革的人才。" },
        { icon: "🌏", title: "跨境招聘", desc: "打通中美欧日人才壁垒。英语、日语、中文三语母语级沟通能力，无缝对接全球市场。" },
        { icon: "🧬", title: "临床运营人才", desc: "CRA、数据管理、生物统计、医学写作、药物警戒——我们了解每一个细分领域的顶尖人才。" },
        { icon: "🤝", title: "市场进入咨询", desc: "帮助跨国药企在新市场组建团队。从第一个招聘到完整团队搭建，全程陪伴。" }
      ]
    },
    sectors: {
      tag: "服务行业",
      title: "深耕领域",
      items: ["制药", "生物科技", "CRO / CDMO", "医疗器械", "数字健康", "法规与合规"]
    },
    roles: {
      tag: "我们擅长的职能",
      title: "职能专长",
      items: [
        { title: "临床开发", roles: "临床运营VP、医学总监、临床项目负责人、CRA、临床数据管理" },
        { title: "注册与质量", roles: "注册事务总监、QA/QC负责人、药物警戒经理、安全官" },
        { title: "商务与BD", roles: "商务拓展VP、联盟管理、商业战略负责人、市场准入总监" },
        { title: "数据与技术", roles: "生物统计师、数据科学负责人、EDC专家、CTMS管理员、医药AI/ML" }
      ]
    },
    about: {
      tag: "为什么选择TTHealth",
      title: "你在生命科学人才领域的优势",
      points: [
        { icon: "🗣️", title: "三语优势", desc: "英语、日语（JLPT N1）、中文母语级别。我们用候选人和招聘方最舒适的语言沟通——零偏差，零文化隔阂。" },
        { icon: "🧪", title: "行业内部人", desc: "创始人来自临床试验行业——药明康德、Oracle健康科学等。我们理解这些职位，因为我们亲身经历过。" },
        { icon: "🌐", title: "跨境人脉", desc: "横跨中美欧日的深度行业关系网。日本药企要在上海找人，美国Biotech需要懂日语的科学家——找我们就对了。" },
        { icon: "🎓", title: "商业思维", desc: "复旦MBA，挪威BI商学院国际交换。我们把招聘当作战略级的商业课题来解决，而不是简单的简历匹配。" }
      ]
    },
    contact: {
      tag: "联系我们",
      title: "开始对话",
      subtitle: "无论您是在招聘还是在探索下一个职业机会，我们都期待与您交流。",
      form: { name: "您的姓名", email: "邮箱地址", company: "公司（选填）", message: "请告诉我们您的需求...", send: "发送消息" },
      info: [
        { label: "邮箱", value: "hello@tthealth.tech" },
        { label: "办公地点", value: "上海 · 东京 · 全球" },
        { label: "服务语言", value: "English · 日本語 · 中文" }
      ]
    },
    footer: { line1: "TTHealth — 生命科学人才合作伙伴", line2: "上海 · 东京 · 全球", copy: "© 2026 TTHealth. 保留所有权利。" },
    langLabel: "中"
  },
  ja: {
    nav: ["ホーム", "サービス", "業界", "人材", "概要", "お問合せ"],
    hero: { tag: "ライフサイエンス人材パートナー", title: "世界の製薬人材を\nつなぐ", sub: "米国・欧州・日本・中国を結ぶエグゼクティブサーチ。三言語対応、クロスボーダー、成果重視。", cta: "パートナーシップ", cta2: "履歴書を提出" },
    stats: [
      { num: "500+", label: "成約実績" },
      { num: "12", label: "対象国" },
      { num: "96%", label: "定着率" },
      { num: "3", label: "対応言語" }
    ],
    services: {
      tag: "サービス内容",
      title: "サービス一覧",
      items: [
        { icon: "🎯", title: "エグゼクティブサーチ", desc: "製薬・バイオテック・CRO企業向けにCxO・VP クラスの人材をご紹介。組織を変革するリーダーを見つけます。" },
        { icon: "🌏", title: "クロスボーダー採用", desc: "米中欧日の人材を橋渡し。英語・日本語・中国語のネイティブレベル三言語で、文化の壁を越えます。" },
        { icon: "🧬", title: "臨床オペレーション人材", desc: "CRA、データマネジメント、生物統計、メディカルライティング、PV — 各専門分野のトップ人材を熟知。" },
        { icon: "🤝", title: "市場参入コンサルティング", desc: "グローバル製薬企業の新市場でのチーム構築を支援。最初の採用からフルオペレーションまで。" }
      ]
    },
    sectors: {
      tag: "対象業界",
      title: "専門分野",
      items: ["製薬", "バイオテクノロジー", "CRO / CDMO", "医療機器", "デジタルヘルス", "薬事・コンプライアンス"]
    },
    roles: {
      tag: "対応職種",
      title: "ファンクショナル・エキスパティーズ",
      items: [
        { title: "臨床開発", roles: "臨床オペレーションVP、メディカルディレクター、臨床プログラムリード、CRA、臨床データマネージャー" },
        { title: "薬事・品質", roles: "薬事部長、QA/QCリード、PVマネージャー、安全性担当" },
        { title: "営業・BD", roles: "事業開発VP、アライアンスマネージャー、コマーシャル戦略リード、マーケットアクセス部長" },
        { title: "データ・テクノロジー", roles: "生物統計家、データサイエンスリード、EDCスペシャリスト、CTMS管理者、製薬AI/ML" }
      ]
    },
    about: {
      tag: "TTHealthが選ばれる理由",
      title: "ライフサイエンス人材における優位性",
      points: [
        { icon: "🗣️", title: "三言語の強み", desc: "英語・日本語（JLPT N1）・中国語のネイティブレベル。候補者と採用担当者の母語でコミュニケーション — ニュアンスの欠落も文化的ギャップもありません。" },
        { icon: "🧪", title: "業界インサイダー", desc: "創業者は臨床試験業界出身 — WuXi Clinical、Oracle Health Sciencesなど。ポジションを理解しているのは、自ら経験してきたからです。" },
        { icon: "🌐", title: "クロスボーダーネットワーク", desc: "米中欧日にわたる深い業界人脈。日本の製薬企業が上海で人材を探す時、米国のバイオテックが日本語も科学も分かる人材を必要とする時 — 私たちにお任せください。" },
        { icon: "🎓", title: "ビジネス視点", desc: "復旦大学MBA、BIノルウェービジネススクール国際交換。採用を戦略的なビジネス課題として取り組み、単なるレジュメマッチングではありません。" }
      ]
    },
    contact: {
      tag: "お問い合わせ",
      title: "まずはご相談ください",
      subtitle: "採用をお考えの企業様も、キャリアをお考えの方も、お気軽にご連絡ください。",
      form: { name: "お名前", email: "メールアドレス", company: "会社名（任意）", message: "ご要望をお聞かせください...", send: "送信する" },
      info: [
        { label: "メール", value: "hello@tthealth.tech" },
        { label: "拠点", value: "上海 · 東京 · グローバル" },
        { label: "対応言語", value: "English · 日本語 · 中文" }
      ]
    },
    footer: { line1: "TTHealth — ライフサイエンス人材パートナー", line2: "上海 · 東京 · グローバル", copy: "© 2026 TTHealth. All rights reserved." },
    langLabel: "日"
  }
};

// ===== COMPONENTS =====
const Section = ({ children, id, bg }) => (
  <section id={id} style={{ padding: "100px 0", background: bg || "transparent", position: "relative" }}>{children}</section>
);

const Container = ({ children, narrow }) => (
  <div style={{ maxWidth: narrow ? 800 : 1140, margin: "0 auto", padding: "0 40px" }}>{children}</div>
);

const SectionTag = ({ text }) => (
  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase", color: "#2A9D8F", marginBottom: 16 }}>{text}</div>
);

const SectionTitle = ({ text, light }) => (
  <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: light ? "#F1FAEE" : "#1D3557", lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.02em" }}>{text}</h2>
);

// ===== MAIN APP =====
export default function TTHealth() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = L[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cycleLang = () => {
    const order = ["en", "zh", "ja"];
    setLang(order[(order.indexOf(lang) + 1) % 3]);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionIds = ["hero", "services", "sectors", "roles", "about", "contact"];

  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", color: "#1D3557", background: "#FAFBF6" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "12px 40px" : "20px 40px",
        background: scrolled ? "rgba(250,251,246,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(29,53,87,0.06)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("hero")}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #2A9D8F, #264653)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: 1 }}>TT</div>
          <span style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Outfit', sans-serif", color: scrolled ? "#1D3557" : "#1D3557" }}>TTHealth</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {t.nav.map((item, i) => (
            <span key={i} onClick={() => scrollTo(sectionIds[i])} style={{ fontSize: 13, fontWeight: 500, color: "rgba(29,53,87,0.55)", cursor: "pointer", transition: "color 0.2s", letterSpacing: "0.02em" }}>{item}</span>
          ))}
          <div onClick={cycleLang} style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid rgba(42,157,143,0.25)", fontSize: 12, fontWeight: 700, color: "#2A9D8F", cursor: "pointer", letterSpacing: 1 }}>
            🌐 {t.langLabel}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "linear-gradient(165deg, #FAFBF6 0%, #F1FAEE 30%, #E8F5E1 100%)" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(42,157,143,0.07) 0%, transparent 70%)", animation: "float 12s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: -150, left: -150, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(233,196,106,0.06) 0%, transparent 70%)", animation: "float 10s ease-in-out infinite reverse" }} />
        <Container>
          <div style={{ maxWidth: 700, paddingTop: 80 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 6, textTransform: "uppercase", color: "#2A9D8F", marginBottom: 28, opacity: 0, animation: "fadeUp 0.7s ease-out 0.2s forwards" }}>{t.hero.tag}</div>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: "#1D3557", lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 28, whiteSpace: "pre-line", opacity: 0, animation: "fadeUp 0.7s ease-out 0.4s forwards" }}>{t.hero.title}</h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(29,53,87,0.6)", maxWidth: 560, marginBottom: 40, opacity: 0, animation: "fadeUp 0.7s ease-out 0.6s forwards" }}>{t.hero.sub}</p>
            <div style={{ display: "flex", gap: 16, opacity: 0, animation: "fadeUp 0.7s ease-out 0.8s forwards" }}>
              <button onClick={() => scrollTo("contact")} style={{ padding: "16px 36px", borderRadius: 12, background: "linear-gradient(135deg, #2A9D8F, #264653)", color: "#fff", fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", letterSpacing: "0.02em", boxShadow: "0 8px 30px rgba(42,157,143,0.25)", transition: "all 0.3s" }}>{t.hero.cta}</button>
              <button onClick={() => scrollTo("contact")} style={{ padding: "16px 36px", borderRadius: 12, background: "transparent", color: "#2A9D8F", fontSize: 15, fontWeight: 700, border: "2px solid rgba(42,157,143,0.25)", cursor: "pointer", letterSpacing: "0.02em", transition: "all 0.3s" }}>{t.hero.cta2}</button>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <div style={{ background: "#264653", padding: "48px 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 40, fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: "#2A9D8F", letterSpacing: "-0.02em" }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(241,250,238,0.5)", fontWeight: 500, letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* SERVICES */}
      <Section id="services">
        <Container>
          <SectionTag text={t.services.tag} />
          <SectionTitle text={t.services.title} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 40 }}>
            {t.services.items.map((s, i) => (
              <div key={i} style={{ padding: 36, borderRadius: 16, border: "1px solid rgba(29,53,87,0.06)", background: "#fff", transition: "all 0.3s", cursor: "default" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Outfit', sans-serif", color: "#1D3557", marginBottom: 12 }}>{s.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(29,53,87,0.55)" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTORS */}
      <Section id="sectors" bg="linear-gradient(165deg, #264653, #1D3557)">
        <Container>
          <SectionTag text={t.sectors.tag} />
          <SectionTitle text={t.sectors.title} light />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 40 }}>
            {t.sectors.items.map((s, i) => (
              <div key={i} style={{ padding: "28px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", textAlign: "center", transition: "all 0.3s" }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#F1FAEE" }}>{s}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ROLES */}
      <Section id="roles">
        <Container>
          <SectionTag text={t.roles.tag} />
          <SectionTitle text={t.roles.title} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 40 }}>
            {t.roles.items.map((r, i) => (
              <div key={i} style={{ padding: 32, borderRadius: 16, background: "#fff", border: "1px solid rgba(29,53,87,0.06)", borderLeft: "4px solid #2A9D8F" }}>
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Outfit', sans-serif", color: "#1D3557", marginBottom: 12 }}>{r.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(29,53,87,0.5)" }}>{r.roles}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ABOUT */}
      <Section id="about" bg="#F1FAEE">
        <Container>
          <SectionTag text={t.about.tag} />
          <SectionTitle text={t.about.title} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 40 }}>
            {t.about.points.map((p, i) => (
              <div key={i} style={{ padding: 32, borderRadius: 16, background: "#fff", border: "1px solid rgba(29,53,87,0.06)" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{p.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Outfit', sans-serif", color: "#1D3557", marginBottom: 10 }}>{p.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(29,53,87,0.5)" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CONTACT */}
<Section id="contact">
  <Container narrow>
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <SectionTag text={t.contact.tag} />
      <SectionTitle text={t.contact.title} />
      <p style={{ fontSize: 16, color: "rgba(29,53,87,0.5)", maxWidth: 500, margin: "0 auto" }}>
        {t.contact.subtitle}
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 40 }}>
      <form
        action="https://formspree.io/f/mqegzrnr"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <input
            name="name"
            placeholder={t.contact.form.name}
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              border: "1px solid rgba(29,53,87,0.1)",
              background: "#fff",
              fontSize: 14,
              outline: "none",
              color: "#1D3557",
              fontFamily: "'DM Sans', sans-serif"
            }}
          />
          <input
            type="email"
            name="email"
            placeholder={t.contact.form.email}
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              border: "1px solid rgba(29,53,87,0.1)",
              background: "#fff",
              fontSize: 14,
              outline: "none",
              color: "#1D3557",
              fontFamily: "'DM Sans', sans-serif"
            }}
          />
        </div>

        <input
          name="company"
          placeholder={t.contact.form.company}
          style={{
            padding: "16px 20px",
            borderRadius: 12,
            border: "1px solid rgba(29,53,87,0.1)",
            background: "#fff",
            fontSize: 14,
            outline: "none",
            color: "#1D3557",
            fontFamily: "'DM Sans', sans-serif"
          }}
        />

        <textarea
          name="message"
          placeholder={t.contact.form.message}
          rows={5}
          style={{
            padding: "16px 20px",
            borderRadius: 12,
            border: "1px solid rgba(29,53,87,0.1)",
            background: "#fff",
            fontSize: 14,
            outline: "none",
            color: "#1D3557",
            fontFamily: "'DM Sans', sans-serif",
            resize: "vertical"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "16px 36px",
            borderRadius: 12,
            background: "linear-gradient(135deg, #2A9D8F, #264653)",
            color: "#fff",
            fontSize: 15,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.02em",
            alignSelf: "flex-start",
            boxShadow: "0 8px 30px rgba(42,157,143,0.2)"
          }}
        >
          {t.contact.form.send}
        </button>
      </form>

      <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 8 }}>
        {t.contact.info.map((info, i) => (
          <div key={i}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(29,53,87,0.25)",
                marginBottom: 6
              }}
            >
              {info.label}
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#1D3557" }}>
              {info.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
</Section>

      {/* FOOTER */}
      <footer style={{ background: "#264653", padding: "48px 0 36px", textAlign: "center" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(42,157,143,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#2A9D8F" }}>TT</div>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#F1FAEE", fontFamily: "'Outfit', sans-serif" }}>{t.footer.line1}</span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(241,250,238,0.35)", marginBottom: 20 }}>{t.footer.line2}</div>
          <div style={{ fontSize: 12, color: "rgba(241,250,238,0.2)" }}>{t.footer.copy}</div>
        </Container>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.03); } }
        input::placeholder, textarea::placeholder { color: rgba(29,53,87,0.25); }
        @media (max-width: 768px) {
          nav > div:nth-child(2) > span { display: none; }
        }
      `}</style>
    </div>
  );
}
