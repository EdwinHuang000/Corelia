// fetch("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     return res.json();
    
// })
// .then((data=>{
//     console.log(data);
//    return fetch("https://swapi.dev/api/people/2/")
// })).then((res=>{
//     return res.json();
// }))
// .then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log("error",e);
// })

// const loadInfo=async()=>{
//     const res=await axios.get("https://swapi.dev/api/people/1/");
//     console.log(res.data);
//     const res2=await axios.get("https://swapi.dev/api/people/2/");
    
//     console.log(res2.data);

// }

// loadInfo();

// axios.get("https://swapi.dev/api/people/2/")



const jokeWeb=async()=>{
    const test=$(".card-body");

    const config={headers:{Accept:'application/json'}}
    const res=await axios.get(" https://icanhazdadjoke.com/",config)
    
    const newLi=document.createElement('p');
    newLi.append(res.data.joke);
    test.append(newLi);
}


document.querySelector('#fetchData').addEventListener('click',jokeWeb);



