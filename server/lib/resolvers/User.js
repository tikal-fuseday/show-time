"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const apollo_server_1 = require("apollo-server");
exports.userResolver = async (_, args) => {
    try {
        const queryRes = await config_1.AdminConnection
            .firestore()
            .collection('users')
            // .where('email', '==', args.email)
            .orderBy('score', 'desc').limit(2)
            .get();
        if (queryRes.empty)
            return new apollo_server_1.ValidationError('User id not found');
        return queryRes.docs.map(user => (Object.assign({ id: user.id }, user.data())));
    }
    catch (error) {
        throw new apollo_server_1.ApolloError(error);
    }
};
//# sourceMappingURL=User.js.map