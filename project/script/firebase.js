//Brings in firestore functionality
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// Brings in the core functionality
import { getFirestore, getDocs, collection, doc, updateDoc, deleteField, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getStorage, ref as sRef } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5J1wR2YHtTD8fh_rws7HLqqP1ReziVOk",
    authDomain: "corelia-dc958.firebaseapp.com",
    databaseURL: "https://corelia-dc958-default-rtdb.firebaseio.com",
    projectId: "corelia-dc958",
    storageBucket: "corelia-dc958.appspot.com",
    messagingSenderId: "119572348061",
    appId: "1:119572348061:web:6738829b58aa1ad56b2874",
    measurementId: "G-3KSM8XTRY6"
  };

function deleteMuisc ( music ){
    initializeApp(firebaseConfig);
    const db = getFirestore();
    await deleteDoc(doc(db, 'songs'), where('name', '==', music));
}

function deleteAuthor ( author){
    initializeApp(firebaseConfig);
    const db = getFirestore();
    await deleteDoc(doc(db, 'authors'), where('name', '==', author));
}

function addAuthor(aname,adates,anationality,awebsite,abio, imgRef){
    initializeApp(firebaseConfig);
    const db = getFirestore();
    await setDoc(doc(db, "authors"), {
        name: aname,
        dates: adates,
        nationality: anationality,
        website: awebsite,
        biography: bio,
        image: imgRef
      });

}

function addMusic(sname,sdates,slink,rlink,pub,sduration,auth,inst){
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const q = query(collection(db, "authors"), where('name', '==', auth));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
    // doc.data() is never undefined for query doc snapshots
    var author =doc.id;
    await setDoc(doc(db, "songs"), {
        name: sname,
        year: sdates,
        scorelink: slink,
        publisher: pub,
        recordinglink: rlink,
        duration: sduration,
        author: author,
        instrumentation: inst
      });
    }

}

function allMusic(){
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const docRef = doc(db, 'songs');
    getDocs(colRef)
     .then((snapshot) =>{
   snapshot.docs.forEach(doc =>{
    //your function here
   })
   })
}

function allAuthors(){
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const docRef = doc(db, 'authors');
    getDocs(colRef)
     .then((snapshot) =>{
   snapshot.docs.forEach(doc =>{
    //your function here
  })
  })
}