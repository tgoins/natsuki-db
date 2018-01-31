import { Document } from 'mongoose'

export interface User extends Document {
  id: string,
  name: string,
  level: UserLevel,
  money: UserBalance,
  profile: UserProfile,
  servers: [],
  levelsEnabled: boolean,
  pmNotifications: boolean,
  avatar: string,
  created: Date,
  banned: boolean,
  verified: boolean,
  verificationToken: string,
  cookies: [],
  reputation: [],
  favorites: [],
  warnings: UserWarning[],
  kicks: UserKick[],
  bans: UserBan[],
  createdAt: Date,
  modifiedAt: Date
}

export interface UserKick {
  serverId: string,
  serverName: string,
  reason: string,
  dateKicked: Date
}

export interface UserWarning {
  serverId: string,
  serverName: string,
  reason: string,
  dateWarned: Date
}

export interface UserBan {
  serverId: string,
  serverName: string,
  reason: string,
  dateBanned: Date
}

export interface UserLevel {
  currentLevel: number
  currentExperience: number
  experienceNext: number
  totalExperience: number
}

export interface UserBalance {
  balance: number,
  netWorth: number,
  dateLastClaimed: Date
}

export interface UserProfile {
  title: string,
  bio: string,
  background: string
}
