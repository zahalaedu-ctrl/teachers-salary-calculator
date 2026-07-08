# מבנה נתונים ראשוני

## TeacherProfile

```ts
type Degree = 'BA' | 'MA' | 'PhD';
type TeachingCertificate = 'certified' | 'intern' | 'none';

type TeacherProfile = {
  reform: 'ofek-hadash';
  educationStage: 'elementary';
  degree: Degree;
  teachingCertificate: TeachingCertificate;
  ofekRank: number; // 1-9
  recognizedSeniorityYears: number;
  weeklyFrontalHours: number;
  age: number;
  hasChildrenForParentHours?: boolean;
  roles: RoleSelection[];
};
```

## RoleSelection

```ts
type RoleSelection = {
  roleId: string;
  customPercent?: number;
};
```

## CalculationResult

```ts
type CalculationResult = {
  calculatedPositionPercent: number;
  baseSalary: number;
  roleBenefitsTotal: number;
  grossSalaryEstimate: number;
  components: SalaryComponent[];
  notes: string[];
  warnings: string[];
};
```

## SalaryComponent

```ts
type SalaryComponent = {
  code: string;
  label: string;
  amount: number;
  percent?: number;
  explanation?: string;
};
```
