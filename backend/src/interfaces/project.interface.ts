export interface ProjectInterface {
  setUser(userId: string): unknown;
  addSkills(skills: string): unknown;
  id?: string;
  projectName: string;
  description: string;
  images: string[]
}