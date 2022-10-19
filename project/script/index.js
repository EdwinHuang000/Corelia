/* globals Chart:false, feather:false */

//Brings in firestore functionality
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// Brings in the core functionality
import { getFirestore, collection, query, where, getDocs, getDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getStorage, ref as sRef } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

const authorDetails = document.querySelector('#authorDetails')
const authorName = document.querySelector('#heading')
const biography = document.querySelector('#biography')
const authID = document.querySelector('#id')
const img1 = document.querySelector("#profile")

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
const q = query(collection(db, "authors"), where('name', '==', 'Ailís Ní Ríain'));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  var author =doc.id;
  console.log(author);
  renderAuthor(doc);
  
});

function renderAuthor(doc){
try{
  var id = document.getElementById('id');
  var name = document.getElementById('heading');
  var year = document.getElementById('year');
  var nation = document.getElementById('nationality');
  var website = document.getElementById('website');
  var bio = document.getElementById('biography');
  var img = doc.data().image;
  

  //id.textContent(doc.id);
  img1.setAttribute('src', img)
  name.textContent = doc.data().name;
  year.textContent = doc.data().dates;
  nation.textContent = doc.data().nationality;
  website.textContent = doc.data().website;
  bio.textContent = doc.data().biography;


  authID.appendChild(id);
  authorName.appendChild(name);
  authorDetails.appendChild(year);
  authorDetails.appendChild(nation);
  authorDetails.appendChild(website);
  biography.appendChild(bio);
  img1.append(img1);
}
  catch(err){{
    document.getElementById("profile").innerHTML = err.message;
  }}
  
}




