<template>
	<h1>Feed</h1>
	<h3>This page is for users only</h3>
	<pre>{{ result }}</pre>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { collection, doc, getDoc, getFirestore, limit, orderBy, query } from 'firebase/firestore';

const result = ref([]);

const getData = () => {
	const db = getFirestore();
	const docRef = collection(db, 'hello');
	// const q = query(docRef);
	// const querySnapshot = await getDoc(q);
	// querySnapshot.forEach((doc) => {
	// 	result.value.push(doc.data());
	// });
};

const router = useRouter();
const authListener = onAuthStateChanged(getAuth(), function (user) {
	if (!user) {
		// not logged in
		alert('you must be logged in to view this. redirecting to the home page');
		router.push('/');
	} else {
		result = getData();
		console.log(docRef);
	}
});

onBeforeUnmount(() => {
	// clear up listener
	authListener();
});
</script>
