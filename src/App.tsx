import { useState } from "react";

type View = "home" | "agreement";

export default function App() {
  const [view, setView] = useState<View>("home");

  if (view === "agreement") {
    return (
      <main className="page">
        <section className="panel">
          <button className="back-button" onClick={() => setView("home")}>← חזרה</button>
          <span className="eyebrow">בקרוב</span>
          <h1>הסכם השכר ואני</h1>
          <p className="lead">
            כאן יוצגו השכר לפני שינוי בהסכם, השכר לאחריו והסבר ברור למקור ההפרש.
          </p>
          <div className="comparison-preview">
            <div><span>לפני ההסכם</span><strong>₪X</strong></div>
            <div className="arrow">←</div>
            <div><span>אחרי ההסכם</span><strong>₪Y</strong></div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="hero">
        <span className="eyebrow">מערכת הידע לשכר עובדי הוראה בישראל</span>
        <h1>בפירו״ש</h1>
        <p className="tagline">להבין. לחשב. להחליט.</p>
        <p className="lead">
          מערכת אחת שמתרגמת הסכמי שכר, דרגות, ותק, גמולים ושעות עבודה
          למידע ברור, אישי ושימושי.
        </p>
        <div className="actions">
          <button className="primary-button">התחל</button>
          <button className="secondary-button" onClick={() => setView("agreement")}>
            הסכם השכר ואני
          </button>
        </div>
      </section>

      <section className="principles">
        <article><h2>בהירות</h2><p>הסברים פשוטים במקום שפה משפטית וטבלאות סבוכות.</p></article>
        <article><h2>רלוונטיות</h2><p>רק המידע שנוגע לפרופיל האישי ולמצב המקצועי שלך.</p></article>
        <article><h2>שקיפות</h2><p>לא רק כמה, אלא גם למה וכיצד התקבלה התוצאה.</p></article>
      </section>

      <footer>
        החישובים יהיו אומדנים מבוססי מקורות רשמיים ואינם מחליפים תלוש שכר או בדיקת חשבות.
      </footer>
    </main>
  );
}
