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
        if(document.querySelectorAll("li")){
            parent.insertBefore(p,parent.firstElementChild)
        } else{
            parent.appendChild(p)
        }
        
        });
    }
    jeudeclick(){
      let boutton=document.querySelectorAll('.item')  
      boutton.forEach((item)=>{
        item.classList.remove("blue")
        item.addEventListener("click",(e)=>{
            
            if (e.target.classList.contains("blue")){

            }else{
                e.target.classList.add("blue")
            }
        })

      })

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
            ul.insertBefore(p,ul.firstElementChild)
            })
            document.querySelector("ul").replaceWith(ul)
        })

    }
}
const d={ama:4,koffi:7}
console.log(d)
d.jean=4
d.jean=5