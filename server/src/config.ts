import * as admin from 'firebase-admin';
import serviceAccount from './firebase_config.json';

export const AdminConnection = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://show-time-268509.firebaseio.com"
});
