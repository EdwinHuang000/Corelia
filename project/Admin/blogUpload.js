
       import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
       import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
        // Import the functions you need from the SDKs you need
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
    apiKey: "AIzaSyAtrV7rV2efSswN_o8ZNoJHM7TOCRTLkAw",
    authDomain: "corelia.firebaseapp.com",
    databaseURL: "https://corelia-default-rtdb.firebaseio.com",
    projectId: "corelia",
    storageBucket: "corelia.appspot.com",
    messagingSenderId: "946795229110",
    appId: "1:946795229110:web:69d1231ca29cf5ee499b17",
    measurementId: "G-VE65Z7C6LC"
  }; 
        // Initialize Firebase
       
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        import { getDatabase,ref,set,child,update,remove } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

        const db=getDatabase();

        var nameBox=document.getElementById("composerName");
        var durationBox=document.getElementById("duration");
        var yearBox=document.getElementById("year");
        var instrumentationBox=document.getElementById("instrumentation");
        var publisherBox=document.getElementById("publisher");

        var insBtn= document.getElementById("InsBtn");
        var selBtn=document.getElementById("SelBtn");
        var updBtn=document.getElementById("UpdBtn");
        var delBtn=document.getElementById("DelBtn");

        insBtn.addEventListener('click',InsertData);

//  insert data 
        function InsertData() {
            set(ref(db,"Name/"+nameBox.value),{
                Composer:nameBox.value,
                Duration:durationBox.value,
                Year:yearBox.value,
                Instrumentation:instrumentationBox.value,
                Publisher:publisherBox.value
            })
            .then(()=>{
                alert("data good")
            })
            .catch((error)=>{
                alert("wrong")
            })
        }
        
//  assign eventListener