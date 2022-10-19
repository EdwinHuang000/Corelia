/* globals Chart:false, feather:false */

//Brings in firestore functionality
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// Brings in the core functionality
import { getFirestore, collection, query, where, getDocs, getDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getStorage, ref as sRef } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

const musicDetails = document.querySelector('#musicDetails')


// TODO: Should not be in source code
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


initializeApp(firebaseConfig);
const db = getFirestore()
const q = query(collection(db, "authors"), where('name', '==', 'Augusta Holmès'));

const querySnapshot = await getDocs(q);
querySnapshot.forEach(async (doc) => {
  // doc.data() is never undefined for query doc snapshots
  
  var author =doc.id;
  console.log(author);
  const q1 = query(collection(db, "songs"), where('author', '==', author));
const picSnapshot = await getDocs(q1);
picSnapshot.forEach((doc) => {

    renderMusic(doc);
  
  })
 
});

function renderMusic(doc){
try{
 var mname = doc.data().name;
 var myear = doc.data().year;
 var instrumentation= doc.data().instrumentation;
 var pub= doc.data().publisher;
 var duration = doc.data().duration;
 var rLink = doc.data().recordinglink;
 var sLink = doc.data().scorelink;
 AddItems(mname, myear, instrumentation, pub, duration, rLink, sLink);

}
  catch(err){{
    document.getElementById("musicDetails").innerHTML = err.message;
  }}
  
}

function AddItems(mname, myear, instrumentation, pub, duration, rLink, sLink){

    var tbody = document.getElementById('musicDetails');
    var trow = document.createElement('tr');
    var td1 =document.createElement('td');
    var td2 =document.createElement('td');
    var td3 =document.createElement('td');
    var td4 =document.createElement('td');
    var td5 =document.createElement('td');
    var td6 =document.createElement('td');
    var td7 =document.createElement('td');

    td1.innerHTML =mname;
    td2.innerHTML =myear;
    td3.innerHTML =pub;
    td4.innerHTML =duration;
    td5.innerHTML =instrumentation;
    td6.innerHTML =rLink;
    td7.innerHTML =sLink;
    
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    tbody.appendChild(trow);

}



