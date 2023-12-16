export interface SkillInterface {
  addUser(userId: string | undefined): unknown;
  id?: string;
  nameSkill: string;
  description: string;
  image: string;
  userId: string;
}
