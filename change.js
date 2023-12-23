let subbtn =document.querySelector("#ckbtn")

subbtn.onclick = () => {
    alert("you are processing payment via money transaction apps or you can choose net banking:)")
}

let newdiv = document.createElement(".notify") 
let headdiv = document.querySelector(".acehead")
headdiv.before(newdiv);

/*let comit = document.querySelector(".committeebody")
let pics = document.createElement(".Eventpics")
comit.before(pics);*/
let dev = document.createElement(".developer") 
let copy = document.querySelector(".copyright")
copy.before(dev);




