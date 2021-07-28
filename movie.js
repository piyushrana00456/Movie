 async function getMovie(){
  var input=document.getElementById('search').value 
 
  try{
      let response=await fetch(`http://www.omdbapi.com/?apikey=16acfe80&s=${input}`)
      let data=await response.json()
      console.log("data:",data);
  }
  catch(error){
    console.log("error:",error);
  }

}