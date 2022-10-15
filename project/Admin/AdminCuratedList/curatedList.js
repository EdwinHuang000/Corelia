    
       // Import the functions you need from the SDKs you need
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
        import { getDatabase,get,ref,set,child,update,remove } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

        const db=getDatabase();

        var composerBox=document.getElementById("Composer");
        var linkBox=document.getElementById("Link");
        var yearBox=document.getElementById("Year");
        let id= Math.random().toString(16).slice(2);   
        
        var insBtn= document.getElementById("InsBtn");
        var selBtn=document.getElementById("SelBtn");
        var updBtn=document.getElementById("UpdBtn");
        var delBtn=document.getElementById("DelBtn");

        insBtn.addEventListener('click',InsertData);
        // selBtn.addEventListener('click',selectData);

//  insert data 
        function InsertData() {
            set(ref(db,"Curated List/"+id),{
                ID:id,
                Name:composerBox.value,
                Recording:linkBox.value,
                Dates:yearBox.value
            })
            .then(()=>{
                alert("data good")
            })
            .catch((error)=>{
                alert("wrong")
            })
        }


        // function selectData() {
        //     const dbRef=ref(db);

        //     get(child(dbRef,"Curated List/"+id)).then((snapshot=>{
        //         if(snapshot.exists()){
        //             composerBox.value=snapshot.val().Name;
        //             linkBox.value=snapshot.val().Recording;
        //             yearBox.value=snapshot.val().Dates;
        //         }
        //         else{
        //             alert("no data");
        //         }

        //         }
        //     )
        //     .catch((error)=>{
        //        alert("not working") 
        //     })
        //     )

            
        // }
  
            // create forms
    //   function showData(id,composerName,year,link){
        
    //         var ul=document.getElementById('list');

    //         var _id=document.createElement('li');
    //         var _composerName=document.createElement('li');
    //         var _year=document.createElement('li');
    //         var _link=document.createElement('li');



    //         _id.innerHTML="ID:"+id;
    //         _composerName.innerHTML="ID:"+composerName;
    //         _year.innerHTML="ID:"+year;
    //         _link.innerHTML="ID:"+link;

    //         ul.appendChild( _id);
    //         ul.appendChild(_composerName);
    //         ul.appendChild(_year);
    //         ul.appendChild(_link);

    //    }
    //     // fetch data 
    //    function FetchAllData(){
    //     const dbRef=ref(db);
    //     get(child(dbRef,"Curated List/")).once('value',function (snapshot) {
    //         snapshot.forEach(
    //             function (ChildSnapshot) {
    //                 let id=ChildSnapshot.val().ID;
    //                 let composerName=ChildSnapshot.val().Name;
    //                 let year=ChildSnapshot.val().Dates;
    //                 let link=ChildSnapshot.val().Recording;
    //                 showData(id,composerName,year,link);
                    
    //             }
    //         )
    //     })


    //    }
    
