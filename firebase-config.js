/* ==========================================
   CMNX Platform - Firebase Canlı Veritabanı Entegrasyonu
   ========================================== */

// Firebase Yapılandırması (Ücretsiz Realtime Database)
const firebaseConfig = {
    apiKey: "AIzaSyCMNX_DEFAULT_PUBLIC_KEY",
    authDomain: "cmnx-platform.firebaseapp.com",
    databaseURL: "https://cmnx-platform-default-rtdb.firebaseio.com",
    projectId: "cmnx-platform",
    storageBucket: "cmnx-platform.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:cmnxkey"
};

// Firebase Başlatma
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();