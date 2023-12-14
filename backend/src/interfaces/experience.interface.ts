export interface ExperienceInterface {
  setUser(userId: string): unknown;
  position: string;
  company: string;
  currently: boolean;
  description: string;
  startDate: string;
  endDate: string;
}
