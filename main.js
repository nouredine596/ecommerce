let btn = document.getElementById('btn')
let main = document.getElementById('main')
let image = document.getElementById('image')
let imgChange = document.getElementById('imgChange')
let tv = document.querySelectorAll('.tv')
let meubleTitle = document.getElementById('meubleTitle')
let chaussure = document.querySelectorAll('.chaussure')

function Image (img) {
    imgChange.src = img
}


window.onscroll = function () {
    if (scrollY > 1000){
        btn.style.display = 'block'
    }else{
        btn.style.display = 'none'
    }
}


btn.onclick = function () {
    scroll ({
        top : 0,
        behavior : "smooth"
    })
}



function MeubleChaussure() {
    let MeubleChaussureUrl = meubleChaussure.map((item)=>{
        return `

        <div class="card-project">
        <div class="image-project">
            <img src="${item.image}" alt="image">
        </div>

        <div class="info-project">
            <p>${item.p}</p>
            <strong>
                <span>15000 DA</span>
                <a href="#" onclick = 'ItemDetails (${item.id}) '>More details</a>
            </strong>
        </div>
    </div>
        `
     
    })
    let meubleChaussur = document.getElementById('meubleChaussure')
    meubleChaussur.innerHTML = MeubleChaussureUrl
}MeubleChaussure()

function MeublesTv() {
    let MeubleTvUrl = meubleTv.map((item)=>{
        return `

        <div class="card-project">
        <div class="image-project">
            <img src="${item.image}" alt="image">
        </div>

        <div class="info-project">
            <p>${item.p}</p>
            <strong>
                <span>15000 DA</span>
                <a href="#" onclick = 'ItemDetails (${item.id}) '>More details</a>
            </strong>
        </div>
    </div>
        `
     
    })
    let meubleTvv = document.getElementById('meubleTv')
    meubleTvv.innerHTML = MeubleTvUrl
}MeublesTv()

let images = ['image/11.jpg','image/12.jpg','image/13.jpg']
let i = 0
setInterval (()=>{
    image.setAttribute('src',images[i])
    i++
    if (i == images.length){
        i = 0
    }
},3000)


function MeubleTitle (title) {
  meubleTitle.innerHTML = 'Meuble '+title
}



