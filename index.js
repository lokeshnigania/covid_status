
function getData(){
    fetch("https://api.covid19api.com/world/total") 
    .then(res => {return res.json()}) 
    .then((data) => {
        console.log(data);
        document.getElementById("infected").innerHTML = data.TotalConfirmed ;
        document.getElementById("recovered").innerHTML = data.TotalRecovered ;
        document.getElementById("deaths").innerHTML = data.TotalDeaths ;
    }
    );
   console.log();
    
}

getData()

