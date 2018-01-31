import { Schema, model } from 'mongoose'
import { UserLevel, UserKick, UserBan, UserWarning, UserBalance, UserProfile, User } from './User'

const UserSchema = new Schema({
  id: String,
  name: String,
  level: {
    currentLevel: Number,
    currentExperience: Number,
    experienceNext: Number,
    totalExperience: Number
  },
  money: {
    balance: Number,
    netWorth: Number,
    dateLastClaimed: Date
  },
  profile: {
    title: String,
    bio: String,
    background: String
  },
  servers: [],
  levelsEnabled: Boolean,
  pmNotifications: Boolean,
  avatar: String,
  created: Date,
  banned: Boolean,
  verified: Boolean,
  verificationToken: String,
  cookies: [],
  reputation: [],
  favorites: [],
  warnings: [{
    serverId: String,
    serverName: String,
    reason: String,
    dateWarned: Date
  }],
  kicks: [{
    serverId: String,
    serverName: String,
    reason: String,
    dateKicked: Date
  }],
  bans: [{
    serverId: String,
    serverName: String,
    reason: String,
    dateBanned: Date
  }],
  createdAt: {
    type: Date,
    required: false
  },
  modifiedAt: {
      type: Date,
      required: false
  }
}).pre('save', function (this: any, next) {
  if (this._doc) {
    const doc = this._doc as User
    const now = new Date()
    if (!doc.createdAt) {
      doc.createdAt = now
    }
    doc.modifiedAt = now
  }
  next()
  return this
})

UserSchema.static('updateLevel', (id: string, levelEntry: UserLevel) => {
  const { currentExperience, currentLevel, experienceNext, totalExperience } = levelEntry
  return UserModel.update({ id }, { $set: { level: levelEntry } }).exec()
})
UserSchema.static('updateFavorites', (id: string, favoriteId: string) => {
  return UserModel.update({ id }, { favorites: { $addToSet: favoriteId } }).exec()
})
UserSchema.static('updateName', (id: string, name: string) => {
  return UserModel.update({ id }, { $set: { name } }).exec()
})
UserSchema.static('updateProfile', (id: string, profile: UserProfile) => {
  return UserModel.update({ id }, { $set: { profile } }).exec()
})
UserSchema.static('updateBalance', (id: string, money: UserBalance) => {
  return UserModel.update({ id }, { $set: { money } }).exec()
})
UserSchema.static('setLevelsEnabled', (id: string, levelsEnabled: boolean) => {
  return UserModel.update({ id }, { $set: { levelsEnabled } }).exec()
})
UserSchema.static('setPmNotificationsEnabled', (id: string, pmNotifications: boolean) => {
  return UserModel.update({ id }, { $set: { pmNotifications } }).exec()
})
UserSchema.static('addServer', (id: string, server: Guild) => {
  return UserModel.update({ id }, { $addToSet: { servers: server } }).exec()
})
UserSchema.static('addKick', (id: string, kick: UserKick) => {
  return UserModel.update({ id }, { $addToSet: { kicks: kick } }).exec()
})
UserSchema.static('addWarning', (id: string, warning: UserWarning) => {
  return UserModel.update({ id }, { $addToSet: { warnings: warning } }).exec()
})
UserSchema.static('addBan', (id: string, ban: UserBan) => {
  return UserModel.update({ id }, { $addToSet: { bans: ban } }).exec()
})

export const UserModel = model<User>('Users', UserSchema)
