"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const firebase_config_json_1 = __importDefault(require("./firebase_config.json"));
exports.AdminConnection = admin.initializeApp({
    credential: admin.credential.cert(firebase_config_json_1.default),
    databaseURL: "https://show-time-268509.firebaseio.com"
});
//# sourceMappingURL=config.js.map