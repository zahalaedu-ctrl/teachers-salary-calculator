import roles from "../data/roles.json";

export type RoleInput = {
  roleId: string;
  percentOverride?: number;
};

export type RoleBenefitResult = {
  roleId: string;
  label: string;
  percent: number;
  note?: string;
};

export function calculateRoleBenefits(selectedRoles: RoleInput[]): RoleBenefitResult[] {
  return selectedRoles.map((selectedRole) => {
    const role = roles.find((r) => r.id === selectedRole.roleId);

    if (!role) {
      return {
        roleId: selectedRole.roleId,
        label: "תפקיד לא מוכר",
        percent: selectedRole.percentOverride ?? 0,
        note: "התפקיד לא נמצא ברשימת התפקידים המוגדרת.",
      };
    }

    return {
      roleId: role.id,
      label: role.label,
      percent: selectedRole.percentOverride ?? role.defaultPercent ?? 0,
      note: role.note,
    };
  });
}
