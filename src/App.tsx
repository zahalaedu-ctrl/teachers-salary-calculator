import { FormEvent, useMemo, useState } from "react";
import { faqItems } from "./data/faq";

type View = "home" | "faq" | "manual";

type ManualForm = {
  degree: "ba" | "ma" | "phd";
  certificate: "certified" | "intern" | "none";
  rank: string;
  seniority: string;
  frontalHours: string;
  age: string;
  role: string;
};

const initialForm: ManualForm = {
  degree: "ba",
  certificate: "certified",
  rank: "1",
  seniority: "0",
  frontalHours: "26",
  age: "",
  role: "none",
};

function calculatePositionPercent(frontalHours: number, age?: number) {
  let fullTimeFrontalHours = 26;
  let explanation = "ללא הפחתת שעות גיל.";

  if (typeof age === "number" && age >= 55) {
    fullTimeFrontalHours = 22;
    explanation = "חושבה הפחתה של 4 שעות גיל.";
  } else if (typeof age === "number" && age >= 50) {
    fullTimeFrontalHours = 24;
    explanation = "חושבה הפחתה של 2 שעות גיל.";
  }

  return {
    percent: Math.round((frontalHours / fullTimeFrontalHours) * 1000) / 10,
    fullTimeFrontalHours,
    explanation,
  };
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState<ManualForm>(initialForm);
  const [result, setResult] = useState<ReturnType<typeof calculatePositionPercent> | null>(null);

  const filteredFaq = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return faqItems;
    return faqItems.filter((item) =>
      `${item.question} ${item.description} ${item.category}`.toLowerCase().includes(query)
    );
  }, [search]);

  function submitManualCalculation(event: FormEvent) {
    event.preventDefault();
    const frontalHours = Number(form.frontalHours);
    const age = form.age ? Number(form.age) : undefined;
    if (!Number.isFinite(frontalHours) || frontalHours <= 0) return;
    setResult(calculatePositionPercent(frontalHours, age));
  }

  if (view === "faq") {
    return (
      <main className="page">
        <section className="content-shell">
          <button className="text-button" onClick={() => setView("home")}>חזרה לעמוד הראשי</button>
          <header className="section-header">
            <span className="eyebrow">חיפוש מהיר</span>
            <h1 className="section-title">רציתי לבדוק…</h1>
            <p>כתבו מילה או בחרו שאלה נפוצה. בהמשך כל שאלה תוביל לחישוב קצר וממוקד.</p>
          </header>

          <label className="search-box">
            <span className="sr-only">חיפוש שאלה</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="למשל: תואר שני, שעה בודדת, שבתון…"
            />
          </label>

          <div className="faq-list">
            {filteredFaq.map((item) => (
              <button className="faq-card" key={item.id}>
                <span className="faq-category">{item.category}</span>
                <strong>{item.question}</strong>
                <span>{item.description}</span>
              </button>
            ))}
            {filteredFaq.length === 0 && (
              <div className="empty-state">לא מצאנו שאלה מתאימה. נסו לכתוב מילה אחרת.</div>
            )}
          </div>
        </section>
      </main>
    );
  }

  if (view === "manual") {
    return (
      <main className="page">
        <section className="content-shell">
          <button className="text-button" onClick={() => setView("home")}>חזרה לעמוד הראשי</button>
          <header className="section-header">
            <span className="eyebrow">חישוב לפי הפרטים שלי</span>
            <h1 className="section-title">הפרופיל המקצועי שלי</h1>
            <p>שבעה פרטים בלבד. בשלב הראשון נחשב את אחוז המשרה לפי השעות הפרונטליות והגיל.</p>
          </header>

          <form className="manual-form" onSubmit={submitManualCalculation}>
            <label>
              <span>ההשכלה שלי</span>
              <select value={form.degree} onChange={(e) => setForm({ ...form, degree: e.target.value as ManualForm["degree"] })}>
                <option value="ba">תואר ראשון</option>
                <option value="ma">תואר שני</option>
                <option value="phd">תואר שלישי</option>
              </select>
            </label>

            <label>
              <span>תעודת ההוראה שלי</span>
              <select value={form.certificate} onChange={(e) => setForm({ ...form, certificate: e.target.value as ManualForm["certificate"] })}>
                <option value="certified">יש לי תעודת הוראה</option>
                <option value="intern">אני מתמחה</option>
                <option value="none">אין לי תעודת הוראה</option>
              </select>
            </label>

            <label>
              <span>הדרגה שלי באופק חדש</span>
              <select value={form.rank} onChange={(e) => setForm({ ...form, rank: e.target.value })}>
                {Array.from({ length: 17 }, (_, index) => {
                  const value = 1 + index * 0.5;
                  return <option key={value} value={value}>{value}</option>;
                })}
              </select>
            </label>

            <label>
              <span>שנות הוותק המוכרות שלי</span>
              <input type="number" min="0" max="50" value={form.seniority}
                onChange={(e) => setForm({ ...form, seniority: e.target.value })} />
            </label>

            <label>
              <span>השעות הפרונטליות שלי בשבוע</span>
              <input type="number" min="1" max="40" step="0.5" value={form.frontalHours}
                onChange={(e) => setForm({ ...form, frontalHours: e.target.value })} />
            </label>

            <label>
              <span>הגיל שלי</span>
              <input type="number" min="18" max="80" value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })} placeholder="לא חובה בשלב זה" />
            </label>

            <label>
              <span>התפקיד המרכזי שלי</span>
              <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                <option value="none">ללא תפקיד נוסף</option>
                <option value="homeroom">חינוך כיתה</option>
                <option value="subject">ריכוז מקצוע</option>
                <option value="ict">ריכוז תקשוב</option>
                <option value="pedagogical">ריכוז פדגוגי</option>
                <option value="counselor">ייעוץ חינוכי</option>
                <option value="deputy">סגנות</option>
              </select>
            </label>

            <button className="primary-button form-submit" type="submit">חשב את אחוז המשרה שלי</button>
          </form>

          {result && (
            <section className="result-card" aria-live="polite">
              <span>אחוז המשרה המשוער</span>
              <strong>{result.percent}%</strong>
              <p>החישוב מבוסס על מכסה של {result.fullTimeFrontalHours} שעות פרונטליות למשרה מלאה. {result.explanation}</p>
              <small>זהו חישוב ראשוני. בהמשך נחבר אותו לטבלאות השכר ולכללי שעות ההורות.</small>
            </section>
          )}
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="logo-mark" aria-hidden="true">ב</div>
        <span className="eyebrow">מערכת הידע לשכר עובדי הוראה בישראל</span>
        <h1>בפירו״ש</h1>
        <p className="tagline">להבין. לחשב. להחליט.</p>
        <p className="lead">
          פורטל שנועד להפוך מידע מורכב על שכר, זכויות וקריירה של עובדות ועובדי הוראה
          לידע ברור, אישי ושימושי.
        </p>
        <p className="founder-note">
          המיזם נבנה בהתנדבות על־ידי אורי ליבר, מורה ומנהל בית ספר, לתועלת ציבור
          עובדות ועובדי ההוראה — ולא למטרות מסחריות.
        </p>
        <div className="actions">
          <button className="primary-button" onClick={() => setView("manual")}>חישוב לפי הפרטים שלי</button>
          <button className="secondary-button" onClick={() => setView("faq")}>רציתי לבדוק…</button>
        </div>
      </section>
    </main>
  );
}
