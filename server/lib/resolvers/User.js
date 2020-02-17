"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const apollo_server_1 = require("apollo-server");
exports.userResolver = async (_, args) => {
    const { limit = 1000, id, filter = [], email, } = args;
    try {
        if (id)
            return await _getById(id);
        const queryRes = await config_1.AdminConnection
            .firestore()
            .collection('users')
            // .where('email', '==', email)
            .orderBy('score', 'desc')
            .limit(limit)
            .get();
        if (queryRes.empty)
            return new apollo_server_1.ValidationError('User id not found');
        return queryRes.docs.map(user => (Object.assign({ id: user.id }, user.data())));
    }
    catch (error) {
        throw new apollo_server_1.ApolloError(error);
    }
};
async function _getById(id) {
    const queryRes = await config_1.AdminConnection
        .firestore()
        .doc(`users/${id}`)
        .get();
    if (!queryRes.exists)
        throw new apollo_server_1.ValidationError('User ID not found');
    const user = Object.assign({ id: queryRes.id }, queryRes.data());
    return [user];
}
//# sourceMappingURL=User.js.map