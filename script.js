class Model {
    constructor(key){
        this.key=key
        //dans l attribut this.touteon recupere les donne toute dans local
        //storage qui est sous la form {toute:[...],afaire:[...],faite:[....]}

        this.toute=(()=>{
            let t=localStorage.getItem(this.key)
            t=JSON.parse(t)
            return t.toute
        })();
        this.afaire=(()=>{
            let t=localStorage.getItem(this.key)
            t=JSON.parse(t)
            return t.afaire
        })();
        this.faite=(()=>{
            let t=localStorage.getItem(this.key)
            t=JSON.parse(t)
            return t.faite
        })();
    
    }
    setoute(d){
        let a=localStorage.getItem(this.key)
        let b= this.toute.slice()
    
        if(a){
            let a1=JSON.parse(a)
            b.unshift(d)
            a1.toute=b
            a1=JSON.stringify(a1)
            localStorage.setItem(this.key,a1)
        }else{
            let debut={toute:[d],afaire:[],faite:[]}
            localStorage.setItem(this.key,JSON.stringify(debut))
        }
    }
    seafaire(d){
        let a=localStorage.getItem(this.key)
        let b= this.afaire.slice()
    
        if(a){
            let a1=JSON.parse(a)
            b.unshift(d)
            a1.afaire=b
            a1=JSON.stringify(a1)
            localStorage.setItem(this.key,a1)
        }else{
            let debut={toute:[],afaire:[d],faite:[]}
            localStorage.setItem(this.key,JSON.stringify(debut))
        }
    }
        
    sefaite(d){
        let a=localStorage.getItem(this.key)
        let b= this.faite.slice()
    
        if(a){
            let a1=JSON.parse(a)
            b.unshift(d)
            a1.faite=b
            a1=JSON.stringify(a1)
            localStorage.setItem(this.key,a1)
        }else{
            let debut={toute:[],afaire:[],faite:[d]}
            localStorage.setItem(this.key,JSON.stringify(debut))
        }
    }
        

}
class Vue{

    //le constructeur va contenir 
    constructor(toute,afaire,faite){
        this.toute=toute
        this.afaire=afaire
        this.faite=faite
    }

    affichage(v){
        v.forEach(element => {
        let p=document.createElement("li")
        p.innerHTML=`<input type="checkbox" name="nom" id="" style="transform: scale(1.2); transform:translate(0,1px 0.5px);"> ${element}  <button class="del"><img src="bouton-supprimer.png" alt=""></button>`
        const parent=document.querySelector("ul")
        if(document.querySelectorAll("li").length>0){
            parent.insertBefore(p,parent.firstElementChild)
        } else{
            parent.appendChild(p)
        }
        
        });
    }
    jeudeclick(){
        let boutons = document.querySelectorAll('.item');

        boutons.forEach((bouton) => {
          bouton.addEventListener("click", (e) => {
            boutons.forEach((item) => {
              if (e.target == item && e.target.classList.contains("blue")) {
                // Ne rien faire si l'élément est déjà sélectionné
              } else if (e.target == item && !e.target.classList.contains("blue")) {
                // Ajouter la classe "blue" si l'élément est cliqué et n'est pas déjà sélectionné
                e.target.classList.add("blue");
              } else {
                // Retirer la classe "blue" des autres éléments
                if (e.target != item && item.classList.contains("blue")) {
                  item.classList.remove("blue");
                }
              }
            });
          });
        });
        
    }
    ensemble(v){
        window.addEventListener("load",()=>{
           this.affichage(v)
        })
        const toute=document.querySelector(".item1")
        toute.addEventListener("click",()=>{
            let ul=document.createElement("ul")
            
            v.forEach(e=>{
            let p =document.createElement("li")
            p.innerHTML=`<input type="checkbox" name="nom" id="" style="transform: scale(1.2); transform:translate(0,1px 0.5px);"> ${e}  <button class="del"><img src="bouton-supprimer.png" alt=""></button>`
            ul.appendChild(p)
            })
            document.querySelector("ul").replaceWith(ul)
        })  
        const afaire=document.querySelector(".item2")
        afaire.addEventListener("click",()=>{
            let ul=document.createElement("ul")
            
            v.forEach(e=>{
            let p =document.createElement("li")
            p.innerHTML=`<input type="checkbox" name="nom" id="" style="transform: scale(1.2); transform:translate(0,1px 0.5px);"> ${e}  <button class="del"><img src="bouton-supprimer.png" alt=""></button>`
            ul.appendChild(p)
            })
            document.querySelector("ul").replaceWith(ul)
        })  
        const faite=document.querySelector(".item3")
        faite.addEventListener("click",()=>{
            let ul=document.createElement("ul")
            
            v.forEach(e=>{
            let p =document.createElement("li")
            p.innerHTML=`<input type="checkbox" name="nom" id="" style="transform: scale(1.2); transform:translate(0,1px 0.5px);"> ${e}  <button class="del"><img src="bouton-supprimer.png" alt=""></button>`
            ul.appendChild(p)
            })
            document.querySelector("ul").replaceWith(ul)
        })  
    }
    sub(){
        let text=document.querySelector(".note")
        let submit=document.querySelector(".envoi")

        submit.addEventListener("click",()=>{
            if (text.value!=="" && document.querySelector(".item1").classList.contains("blue")){
                let ul=document.querySelector("ul")
                let p=document.createElement("li")
            let s=document.querySelector(".note")
                p.innerHTML=`<input type="checkbox" name="nom" id="" style="transform: scale(1.2); transform:translate(0,1px 0.5px);"> ${text.value}  <button class="del"><img src="bouton-supprimer.png" alt=""></button>`
                ul.appendChild(p)
            }
        });
        return text.value
    }
    checkerr(){
        let macheckedbox=document.querySelector(".check")

        
    }


}
const d={ama:4,koffi:7}
console.log(d)
d.jean=4
d.jean=5
const b=[]
const a=[1,23,5,6,7]
b.push([a])
console.log(b)