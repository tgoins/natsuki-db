"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const _1 = require("./");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "levelsEnabled", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "pmNotifications", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "created", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "banned", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "verificationToken", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "lastMessage", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserBalance, userBalance => userBalance.user, {
        cascadeAll: true
    }),
    __metadata("design:type", _1.UserBalance)
], User.prototype, "balance", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserProfile, userProfile => userProfile.user, {
        cascadeAll: true
    }),
    __metadata("design:type", _1.UserProfile)
], User.prototype, "profile", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserLevel, userLevel => userLevel.user, {
        cascadeAll: true
    }),
    __metadata("design:type", _1.UserLevel)
], User.prototype, "level", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.UserReputation, userReputation => userReputation.user),
    __metadata("design:type", Array)
], User.prototype, "reputation", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.UserGuild, userGuild => userGuild.user),
    __metadata("design:type", Array)
], User.prototype, "guilds", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.UserWarning, userWarning => userWarning.user),
    __metadata("design:type", Array)
], User.prototype, "warnings", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.UserKick, userKick => userKick.user),
    __metadata("design:type", Array)
], User.prototype, "kicks", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.UserBan, userBan => userBan.user),
    __metadata("design:type", Array)
], User.prototype, "bans", void 0);
User = __decorate([
    typeorm_1.Entity('User')
], User);
exports.User = User;
