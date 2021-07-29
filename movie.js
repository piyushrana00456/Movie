 
 const main=document.querySelector('.contain')
 
 async function getMovie(){

  var input=document.getElementById('search').value 
//   var list=document.getElementById('movies')
  try{
      let response=await fetch(`http://www.omdbapi.com/?t=${input}&apikey=16acfe80&s`)
      
      let data=await response.json()
      if(data.Error){
        showError(data)
      }else{
      console.log(data);
      showMovies(data)
      }
  }
  catch(error){
    console.log("error:",error);
  }
  
}

function showMovies(data){
    main.innerHTML=''
    const movieEl=document.createElement('div') 
    movieEl.classList.add('movie');
    movieEl.innerHTML=`  <img src="${data.Poster}" alt="">
    <div class="movie-info">
        <h2>${data.Title}</h2>
        <span id="release">Released:-${data.Released}</span>
        <span id="runtime">Runtime:-${data.Runtime}</span>
        <span class="${getColor(data.imdbRating)} ">${data.imdbRating}<span id='reco'>${getRecommended(data.imdbRating)}</span></span>
    </div>
    <div class="overview">
        <h3>OverView</h3>
       <p>${data.Plot}</p>
       <p id='dir'>Director:-${data.Director}</p>
       <p id='act'>Actors:-${data.Actors}</p>
    </div>`

    main.append(movieEl)
}


function getColor(vote){
 if(vote>=8){
     return 'green'
 }else if(vote>=5){
  return 'orange'
 }else{
     return 'red'
 }
}
function getRecommended(vote){
    if(vote>=8){
     return "Recommended"
    }
    else{
        return ''
    }
}

function showError(data){
    main.innerHTML=''
    const movieEl=document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML=` <img id='gif' src="https://assets.materialup.com/uploads/c13818e8-9e42-4f4d-b657-38743a81b270/preview.gif" alt="">
    <button id='home' onclick='goHome()'>Go Back To Earth</button>`
   main.append(movieEl)
}
 function goHome(){
     window.location.href='movie.html'
 }