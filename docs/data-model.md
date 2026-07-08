# מודל נתונים ראשוני

מסמך זה מגדיר את מבנה הנתונים הראשוני של המחשבון.

## TeacherInput

נתוני הקלט שהמשתמש מזין.

```ts
type TeacherInput = {
  reform: "ofek_hadash";
  educationStage: "elementary";

  academicDegree: "ba" | "ma" | "phd";
  teachingCertificateStatus: "certified" | "intern" | "none";

  ofekRank: number;
  recognizedSeniorityYears: number;

  frontalHoursPerWeek: number;

  age?: number;
  hasParenthoodEligibilityData?: boolean;

  roles: RoleInput[];
};
```

## RoleInput

```ts
type RoleInput = {
  roleId: string;
  percentOverride?: number;
};
```

## SalaryResult

```ts
type SalaryResult = {
  grossEstimatedSalary: number;
  calculatedPositionPercent: number;

  baseSalary: number;
  roleBenefitsTotal: number;

  components: SalaryComponent[];
  notes: CalculationNote[];
};
```

## SalaryComponent

```ts
type SalaryComponent = {
  id: string;
  label: string;
  amount: number;
  explanation?: string;
};
```

## CalculationNote

```ts
type CalculationNote = {
  type: "info" | "warning";
  text: string;
};
```

## קובצי נתונים

### salaryTables.json

יכיל בהמשך טבלאות שכר לפי:
- רפורמה
- דרגה
- ותק
- השכלה
- סטטוס תעודת הוראה

### roles.json

יכיל רשימת גמולים ותפקידים.

### reductions.json

יכיל כללים להפחתות:
- שעות אם
- שעות גיל
- חריגים שכיחים
