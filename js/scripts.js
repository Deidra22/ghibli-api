const app = document.getElementById('root')

const logo = document.createElement('img')

logo.src = 'logo2.png'
logo.setAttribute('class', 'logo')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

const request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function (){
    const data = JSON.parse(this.response)
    // if else statement in case of errors
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
         //div with a card class
         const card = document.createElement('div')
         card.setAttribute('class', 'card')

         if (document.getElementsByClassName("card")) {
            let autos = document.getElementsByClassName("card");
            for (let i=0; i<autos.length; i++) {
              autos[i].addEventListener("mouseover", autoOver);
              autos[i].addEventListener("mouseout", autoOut);
            }
          }
          
          function autoOver() {
            this.style.height = this.scrollHeight + "px";
          }
          
          function autoOut() {
            this.style.height = "250px";
          }
       
         // h1 and with content of the film's title
         const h1 = document.createElement('h1')
         h1.textContent = movie.title
         h1.setAttribute('class', 'title')
       
         //p with the film's description
         const p = document.createElement('p')
         p.setAttribute('class', 'content')
        //movie.description = movie.description.substring(0, 300) // Limit to 300 chars
         p.textContent = `${movie.description}...` // End with an ellipses
       
         // Append the cards to the container element
         container.appendChild(card)
       
         // Each card will contain an h1 and a p
         card.appendChild(h1)
         card.appendChild(p)  
        })
  } else {
    alert('Error loading page!')
}
}
request.send()





