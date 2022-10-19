/* globals Chart:false, feather:false */
//Brings in firestore functionality
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// Brings in the core functionality
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


const authorsList = document.querySelector('#authorsList')

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

function renderAuthorList(doc){
 try{
   var name = doc.data().name;
   var year = doc.data().dates;
   var nation = doc.data().nationality;
   var web= doc.data().website;
   AddItems(name, year, nation, web);
   }
 catch(err){{
    document.getElementById("authorDetails").innerHTML = err.message;
  }}

}

function AddItems(name, year, nation, web){

  var tbody = document.getElementById('authorDetails');
  var trow = document.createElement('tr');
  var td1 =document.createElement('td');
  var td2 =document.createElement('td');
  var td3 =document.createElement('td');
  var td4 =document.createElement('td');
  let btn = document.createElement("button");
  let btn2 = document.createElement("button2");

  td1.innerHTML =name;
  td2.innerHTML =year;
  td3.innerHTML =nation;
  td4.innerHTML =web;
  btn.innerHTML = "Update";
  btn2.innerHTML = "Delete";
  
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(btn);
  trow.appendChild(btn2);
  tbody.appendChild(trow);

}

initializeApp(firebaseConfig);
const db = getFirestore()
const colRef = collection(db, 'authors')
getDocs(colRef)
.then((snapshot) =>{
   snapshot.docs.forEach(doc =>{
    renderAuthorList(doc);
  })
})


(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()

//------------------References---------------------------//

let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
let header = document.getElementById('header2');
var currentUser = null;

//----------------Function---------------------------//

function getUsername(){
  let keepLoggedIn = window.localStorage.getItem('keepLoggedIn');

  if(keepLoggedIn == "yes"){
    currentUser = JSON.parse(window.localStorage.getItem('user'));
  }
  else{
    currentUser = JSON.parse(window.sessionStorage.getItem('user'));
  }
}

function Signout(){
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keepLoggedIn');
  window.location="home.html"
}

//------------------------Windows---------------------------//

window.onload = function(){
  getUsername();
  
  if(currentUser == null){
    userlink.innerText = "Login";
    userlink.classList.replace("nav-link", "btn");
    userlink.classList.add("btn-primary");
    userlink.href = "sign-in.html";

    signoutlink.innerText = "Register";
    signoutlink.classList.replace("nav-link", "btn");
    signoutlink.classList.add("btn-success");
    signoutlink.href = "sign-up.html";
  } 
  else{
    userlink.innerText = currentUser.username;
    userlink.classList.replace("btn", "nav-link");
    userlink.classList.remove("btn-primary");
    userlink.href = "#";

    signoutlink.innerText = "Sign Out";
    signoutlink.classList.replace("btn", "nav-link");
    signoutlink.classList.remove("btn-success");
    signoutlink.href = "javascript:Signout()";
  }

}
