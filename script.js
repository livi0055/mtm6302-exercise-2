let elements = []

for(let i =1; i <=9;i++){ 
elements.push(
    `
    <img src="img/${i}.jpg" alt="">
    `
)

}


let pics = document.querySelector('.container')

pics.innerHTML= elements.join('')