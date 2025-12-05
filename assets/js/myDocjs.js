let btnsPorts=document.querySelectorAll(".buttonPorts")
btnsPorts.forEach((elementsButtom)=>{
    elementsButtom.addEventListener("click",(e)=>{
e.preventDefault()
window.alert("Endereço Indisponivel no momento !")
    })

})

let loadsBox=document.querySelector(".containerPreload")
window.addEventListener("load",()=>{
 loadsBox.style.display="none"
})


 let aboutMe=document.querySelectorAll(".scrollAbout")
         let observeAbout=new IntersectionObserver((myInterceptOne)=>{
            myInterceptOne.forEach((elementeInObserve)=>{

             if(elementeInObserve.isIntersecting==true){
                elementeInObserve.target.classList.add("swhowAboutme");
               }
               else{
                elementeInObserve.target.classList.remove("swhowAboutme");
               }
            })
         })

         aboutMe.forEach((aboutMes)=>{
            observeAbout.observe(aboutMes)
         })

         


    //    let btnMap=document.getElementById("btnCloseMenu")
       let menuMap=document.getElementById("menuNavegation")

       

        document.querySelector("#home_pagine").addEventListener("click",()=>{

            menuMap.style.left="-1800px"
             menuMap.style.transform="rotate(360deg)"

        })

        document.querySelector(".btnCloseMenu").addEventListener("click",()=>{

            menuMap.style.left="-1800px"
             menuMap.style.transform="rotate(360deg)"

        })

         document.querySelector("#menu-drop").addEventListener("click",()=>{
            menuMap.style.left="0px"
            menuMap.style.transform="rotate(0deg)"
         })





       let boxer=document.querySelector("#ContainerCard")
      
        boxer.addEventListener("click",()=>{
            let view=new IntersectionObserver((elementScrool)=>{
        window.alert(elementScrool)
        })
        })


        var ancoraMenu=document.querySelector(".sub_bloc")
        ancoraMenu.addEventListener("click",(e)=>{
   e.preventDefault();
        })

        var header_two=document.querySelector("#header_two")
        var titleMy=document.querySelector("#fristName")
        var btnMenuLabel=document.querySelector("#menu-drop")
    
        window.addEventListener("scroll",()=>{
        let window_top=window.pageYOffset
if(window_top>90){
    header_two.classList.add("classTomenu")
    titleMy.style.color="rgb(189, 3, 58)"
    btnMenuLabel.style.background="rgb(189, 3, 58)"
    btnMenuLabel.style.color="white"
  
}
else{
    header_two.classList.remove("classTomenu")
    titleMy.style.color="white"
    btnMenuLabel.style.background="white"
    btnMenuLabel.style.color="rgb(189, 3, 58)"
    
}
        })

       


        var btns =document.querySelectorAll("#btn_meu")
        function execute_btn(e){
            btns.forEach((element_btnsOne)=>{

                element_btnsOne.classList.remove("claSSbtn")
               this.classList.add("claSSbtn")

            })


        }


        
        btns.forEach((element_btns)=>{

            element_btns.addEventListener("click",execute_btn)
          

        })


        // var btnSpeak_close=document.querySelector("#close-modal")
        // btnSpeak_close.addEventListener("click",()=>{
        //     modalSend.classList.remove("ModalSendShow")
        // })




        // var modalSend=document.querySelector(".ModalContact")
        // var btnSpeak_open=document.querySelector("#btnContact")
        // btnSpeak_open.addEventListener("click",()=>{
        //     modalSend.classList.add("ModalSendShow")
        // })
       

       let myObserve=new IntersectionObserver((OlhandoElente)=>{

        OlhandoElente.forEach((olhando)=>{
                if(olhando.isIntersecting){
                    
                    olhando.target.classList.add("classCards") 
                }
                else{
                    olhando.target.classList.remove("classCards") 
                }
        })
       })
              
       var myCards=document.querySelectorAll("#ContainerCard")

       myCards.forEach((observandoElemento)=>{
          myObserve.observe(observandoElemento)
       })


      
         
         let observerNetworks=new IntersectionObserver((elementsObservados)=>{
            elementsObservados.forEach((myObserversNetwork)=>{
             if(myObserversNetwork.isIntersecting==true){
                myObserversNetwork.target.classList.add("showCardnetWorks")
             }
             else{
                myObserversNetwork.target.classList.remove("showCardnetWorks")
             }
            })

         })

         let cardNetworks=document.querySelectorAll(".cardMynetwork") 
         cardNetworks.forEach((Observads)=>{
                observerNetworks.observe(Observads)
               })









            