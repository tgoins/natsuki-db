"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const schema_1 = require("./schema");
/**
 * Create a Postgres connection.
 * @param options Postgres connection options
 */
exports.connect = (options) => {
    const { username, password, port, database } = options;
    const postgresOptions = {
        username,
        password,
        port,
        database,
        type: 'postgres',
        entities: [
            schema_1.User,
            schema_1.UserBalance,
            schema_1.UserBan,
            schema_1.UserGuild,
            schema_1.UserKick,
            schema_1.UserLevel,
            schema_1.UserProfile,
            schema_1.UserReputation,
            schema_1.UserWarning
        ]
    };
    return typeorm_1.createConnection(postgresOptions);
};
__export(require("./schema"));
__export(require("typeorm/connection/Connection"));
