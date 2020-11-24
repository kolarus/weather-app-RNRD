export interface NavigationRef {
  current: Nullable<{
    navigate: (route: string) => void;
  }>;
}
