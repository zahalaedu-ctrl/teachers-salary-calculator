import { calculateWorkload } from "./workload";
import { calculateRoleBenefits, RoleInput } from "./roleBenefits";

export type TeacherSalaryInput = {
  academicDegree: "ba" | "ma" | "phd";
  teachingCertificateStatus: "certified" | "intern" | "none";
  ofekRank: number;
  recognizedSeniorityYears: number;
  frontalHoursPerWeek: number;
  age?: number;
  roles: RoleInput[];
};

export type TeacherSalaryResult = {
  positionPercent: number;
  roleBenefitPercentTotal: number;
  notes: string[];
};

export function calculateSalary(input: TeacherSalaryInput): TeacherSalaryResult {
  const workload = calculateWorkload({
    frontalHoursPerWeek: input.frontalHoursPerWeek,
    age: input.age,
  });

  const roleBenefits = calculateRoleBenefits(input.roles);
  const roleBenefitPercentTotal = roleBenefits.reduce((sum, role) => sum + role.percent, 0);

  return {
    positionPercent: workload.positionPercent,
    roleBenefitPercentTotal,
    notes: [
      ...workload.notes,
      "זהו חישוב ראשוני בלבד. חישוב שכר מלא יחובר בהמשך לטבלאות השכר הרשמיות.",
    ],
  };
}
