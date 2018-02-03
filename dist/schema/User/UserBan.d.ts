import { User } from './';
export declare class UserBan {
    id: number;
    serverId: string;
    serverName: string;
    reason: string;
    dateBanned: Date;
    user: User;
}
