import {api_key} from "./apikeys.js"

fetch("https://api.nasa.gov/planetary/apod?api_key="+api_key)
.then(response => response.json())
.then(data => 
    
    {
        const showDay = document.querySelector('.all-info')

        const all = () =>
        {
            return `<h1>${data.copyright}</h1>
                    <li>${data.date}</li>
                    <h4>${data.explanation}</h4>
                    <img src=${data.url}>
                    <h2>${data.title}</h2>     
                        
            `
        }

        showDay.innerHTML = all()
    }
)