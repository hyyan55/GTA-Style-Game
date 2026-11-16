export interface Vec2 {
  x: number;
  z: number;
}

export interface HudState {
  health: number;
  money: number;
  speed: number;
  inVehicle: boolean;
  nearVehicle: boolean;
  missionTitle: string;
  missionObjective: string;
  missionDistance: number;
  missionActive: boolean;
  missionStage: string;
  wanted: number;
  clock: string;
  isNight: boolean;
  paused: boolean;
  fps: number;
  zone: string;
}

export interface GameNotification {
  id: number;
  title: string;
  text: string;
  kind: 'mission' | 'money' | 'info' | 'danger';
}

export interface SaveData {
  money: number;
  health: number;
  completedMissions: number;
  quality: 'low' | 'medium' | 'high';
  sensitivity: number;
  audio: boolean;
  touchControls: 'auto' | 'on' | 'off';
  timeOfDay: number;
  pos: { x: number; z: number };
}

export const DEFAULT_HUD: HudState = {
  health: 100,
  money: 0,
  speed: 0,
  inVehicle: false,
  nearVehicle: false,
  missionTitle: '',
  missionObjective: '',
  missionDistance: 0,
  missionActive: false,
  missionStage: 'none',
  wanted: 0,
  clock: '18:40',
  isNight: false,
  paused: false,
  fps: 60,
  zone: 'Downtown',
};
