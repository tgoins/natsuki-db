import { UserWarning, UserBalance, UserProfile, UserLevel, UserKick, UserBan, UserGuild, UserReputation } from './';
export declare class User {
    id: string;
    name: string;
    levelsEnabled: boolean;
    pmNotifications: boolean;
    avatar: string;
    created: Date;
    banned: boolean;
    verified: boolean;
    verificationToken: string;
    lastMessage: Date;
    balance: UserBalance;
    profile: UserProfile;
    level: UserLevel;
    reputation: UserReputation[];
    guilds: UserGuild[];
    warnings: UserWarning[];
    kicks: UserKick[];
    bans: UserBan[];
}
