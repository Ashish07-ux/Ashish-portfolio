export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  scoreLabel: string;
  scoreValue: string;
  color: string;
  stickerText?: string;
  rotation?: number;
}

export interface SkillCategory {
  title: string;
  badgeColor: string;
  items: {
    name: string;
    levelHint?: string;
    color: string;
    rotation: number;
    iconType?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  categoryLabel: string;
  techPills: string[];
  description: string;
  bulletPoints: string[];
  color: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  stampType: 'CERTIFIED' | 'COMPLETED' | 'LEARNING';
  color: string;
}

export interface AchievementItem {
  title: string;
  date: string;
  description: string;
  stampLabel: string;
  color: string;
}
