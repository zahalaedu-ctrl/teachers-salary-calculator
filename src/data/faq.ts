export type FaqItem = {
  id: string;
  category: string;
  question: string;
  description: string;
};

export const faqItems: FaqItem[] = [
  { id: "single-hour", category: "שכר ותוספות", question: "כמה שווה השעה הבודדת שלי?", description: "חישוב אישי לפי הדרגה, הוותק, ההשכלה והיקף המשרה." },
  { id: "position-change", category: "היקף משרה", question: "איך יושפע השכר שלי מהגדלה או מצמצום של המשרה?", description: "השוואה בין היקף המשרה הנוכחי לבין היקף חדש." },
  { id: "role-benefits", category: "תפקידים", question: "כמה מוסיפים לי גמולי התפקיד לשכר?", description: "חינוך כיתה, ריכוז, ייעוץ, סגנות ותפקידים נוספים." },
  { id: "rank-rise", category: "קידום מקצועי", question: "מה תהיה תוספת השכר שלי אם אעלה בדרגה?", description: "השוואה בין הדרגה הנוכחית לבין הדרגה הבאה." },
  { id: "new-agreement", category: "הסכמי שכר", question: "איך משפיע עליי הסכם השכר החדש?", description: "השוואה אישית בין השכר לפני ההסכם ולאחריו." },
  { id: "become-teacher", category: "כניסה להוראה", question: "כמה ארוויח אם אהפוך עכשיו למורה?", description: "סימולציה למי ששוקל או שוקלת להיכנס למערכת החינוך." },
  { id: "become-principal", category: "קריירה וניהול", question: "איך ישתנה השכר שלי אם אהפוך למנהל או למנהלת בית ספר?", description: "סימולציה לתפקידי ניהול שכיחים במערכת החינוך." },
  { id: "become-counselor", category: "קריירה וניהול", question: "איך ישתנה השכר שלי אם אהפוך ליועץ או ליועצת חינוכית?", description: "השוואת שכר לפי רישיון ייעוץ והיקף משרה." },
  { id: "project-pay", category: "פרויקטים", question: "כמה ארוויח אם אשתתף בפרויקט כמו קיץ פלוס?", description: "חישוב ברוטו ונטו משוער לפי מספר השעות." },
  { id: "unpaid-leave", category: "היעדרויות", question: "איך חל״ת ישפיע על השכר שלי?", description: "הערכת השפעת תקופת החל״ת על השכר ועל הזכויות." },
  { id: "advanced-degree", category: "קידום מקצועי", question: "איך תואר שני או שלישי ישנו את השכר שלי?", description: "השוואת שכר לפי ההשכלה האקדמית." },
  { id: "sick-day", category: "זכויות", question: "מה השווי של יום מחלה בשכר שלי?", description: "הסבר וחישוב משוער לפי פרופיל השכר." },
  { id: "substitution-hour", category: "שכר ותוספות", question: "כמה שווה לי שעת מילוי מקום?", description: "חישוב אישי לפי סוג ההעסקה והנתונים המקצועיים." },
  { id: "pension", category: "פנסיה", question: "מה תהיה הפנסיה המשוערת שלי?", description: "הערכה ראשונית בלבד לפי השכר, הוותק והמסלול." },
  { id: "recreation-pay", category: "זכויות", question: "מה תהיה התוספת שאקבל עבור דמי הבראה?", description: "חישוב לפי הוותק והיקף המשרה." },
  { id: "extra-hours", category: "שכר ותוספות", question: "כמה אקבל עבור השעות הנוספות?", description: "עד 20 שעות במחצית ועד 40 שעות בשנה." },
  { id: "sabbatical", category: "שבתון", question: "מה יהיה השכר שלי בשנת שבתון?", description: "חישוב ברוטו ונטו משוער לשנת שבתון." },
  { id: "half-sabbatical", category: "שבתון", question: "מה יהיה השכר שלי אם אקח חצי שבתון?", description: "השוואה בין עבודה רגילה, חצי שבתון ושבתון מלא." }
];
