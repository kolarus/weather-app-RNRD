export interface Day {
  label: string;
  icon: string;
  dt: number;
  temperatureRange: {
    from: number;
    to: number;
  };
}

export type Days = Array<Day>;
