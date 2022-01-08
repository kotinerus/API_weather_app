
function wyszukanie(){
    x=document.getElementById('miasto').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+x+'&appid=ff83ff9006e5d926d532943cb8e55bb1&units=metric')
    .then(res => res.json())
    .then((out) => {
      console.log(out.main.temp);
      
    const names = out.weather.map(p => p.main);
    document.querySelector("#description").innerText =names  ;
    document.querySelector("#tempe").innerText =out.main.temp;
    document.querySelector("#press").innerText =out.main.pressure;
    document.querySelector("#humidity").innerText =out.main.humidity;
  })
  .catch(err => {
    alert("Nie ma takiego miasta!")
    throw err
    
  });
}