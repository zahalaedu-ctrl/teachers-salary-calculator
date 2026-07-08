export type WorkloadInput = {
  frontalHoursPerWeek: number;
  age?: number;
  parenthoodReductionHours?: number;
};

export type WorkloadResult = {
  baseFullTimeFrontalHours: number;
  reductionHours: number;
  adjustedFullTimeFrontalHours: number;
  positionPercent: number;
  notes: string[];
};

export function calculateWorkload(input: WorkloadInput): WorkloadResult {
  const baseFullTimeFrontalHours = 26;
  const notes: string[] = [];

  let ageReductionHours = 0;

  if (typeof input.age === "number") {
    if (input.age >= 55) {
      ageReductionHours = 4;
      notes.push("חושבה הפחתת גיל של 4 שעות שבועיות.");
    } else if (input.age >= 50) {
      ageReductionHours = 2;
      notes.push("חושבה הפחתת גיל של 2 שעות שבועיות.");
    }
  }

  const parenthoodReductionHours = input.parenthoodReductionHours ?? 0;
  const reductionHours = ageReductionHours + parenthoodReductionHours;
  const adjustedFullTimeFrontalHours = baseFullTimeFrontalHours - reductionHours;

  const positionPercent =
    adjustedFullTimeFrontalHours > 0
      ? (input.frontalHoursPerWeek / adjustedFullTimeFrontalHours) * 100
      : 0;

  return {
    baseFullTimeFrontalHours,
    reductionHours,
    adjustedFullTimeFrontalHours,
    positionPercent: Math.round(positionPercent * 100) / 100,
    notes,
  };
}
