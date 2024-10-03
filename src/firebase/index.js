import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA9UYFfkDxbaT9vQLJ7QQ8Hol8xVXuM_4Q',
	authDomain: 'test-project-5cd8c.firebaseapp.com',
	databaseURL: 'https://test-project-5cd8c-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'test-project-5cd8c',
	storageBucket: 'test-project-5cd8c.appspot.com',
	messagingSenderId: '129597675748',
	appId: '1:129597675748:web:db8d9719f70e3b45a534f1',
	measurementId: 'G-PJ67PVT5SB',
};

const auth = getAuth(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { auth, db, app };
