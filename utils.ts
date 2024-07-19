export type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

export type Computer = {
  readonly id: number;
  brand: string;
  ram: number;
  storage: number;
  upgradeRam: (val: number) => number;
};
