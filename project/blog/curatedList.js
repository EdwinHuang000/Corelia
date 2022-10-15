
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
     import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBRnn91TxolAL9zwd1BLbbsGU6aZKX0KYM",
    authDomain: "corelia-cd147.firebaseapp.com",
    databaseURL: "https://corelia-cd147-default-rtdb.firebaseio.com",
    projectId: "corelia-cd147",
    storageBucket: "corelia-cd147.appspot.com",
    messagingSenderId: "882147339895",
    appId: "1:882147339895:web:95b7d988c8c37e6cd7e072",
    measurementId: "G-P16FPBNX23"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

        const analytics = getAnalytics(app);
        import { getDatabase,ref,set,child,update,remove } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { create } from "lodash";

        const db=getDatabase();

        var composer=document.getElementById("composer");
        var link=document.getElementById("link");
        var year=document.getElementById("year");
        let id= Math.random().toString(16).slice(2);   
        
        

        var insBtn= document.getElementById("InsBtn");
        var selBtn=document.getElementById("SelBtn");
        var updBtn=document.getElementById("UpdBtn");
        var delBtn=document.getElementById("DelBtn");

        insBtn.addEventListener('click',InsertData);

//  insert data 
        function InsertData() {
            set(ref(db,"Composer"+composer,id),{
                Composer:composer.value,
                Link:link.value,
                Year:year.value,
            })
            .then(()=>{
                alert("data good")
            })
            .catch((error)=>{
                alert("wrong")
            })
        }
