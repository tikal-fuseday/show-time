"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const apollo_server_1 = require("apollo-server");
exports.userItemsResolver = async (user) => {
    try {
        const queryRes = await config_1.AdminConnection
            .firestore()
            .collection('items')
            .where('created_by', '==', user.id)
            .limit(1000)
            .get();
        if (queryRes.empty)
            return new apollo_server_1.ValidationError('Item id not found');
        return queryRes.docs.map(item => (Object.assign({ id: item.id }, item.data())));
    }
    catch (error) {
        throw new apollo_server_1.ApolloError(error);
    }
};
exports.itemResolver = async (_, args) => {
    try {
        const queryRes = await config_1.AdminConnection
            .firestore()
            .collection('items')
            // .where('email', '==', args.email)
            //.orderBy('score', 'desc').limit(2)
            .get();
        if (queryRes.empty)
            return new apollo_server_1.ValidationError('Item id not found');
        return queryRes.docs.map(item => (Object.assign({ id: item.id }, item.data())));
    }
    catch (error) {
        throw new apollo_server_1.ApolloError(error);
    }
};
//# sourceMappingURL=Item.js.map