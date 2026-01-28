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


let indexCarossel=0



function nextCarossel(){
    
    let carosseImgNex=document.querySelectorAll(".linkCarossel")
    carosseImgNex[indexCarossel].classList.remove("classShowCarossel")
    //   indexCarossel=(indexCarossel + 1) % carosseImg.length;
    indexCarossel ++;
    if(indexCarossel >= carosseImgNex.length){indexCarossel=0} ;
    carosseImgNex[indexCarossel].classList.add("classShowCarossel")
}

document.querySelector(".buttonBack").addEventListener("click",()=>{
      nextCarossel(); 
})



// function myCarossel(){

//     let carosseImg=document.querySelectorAll(".linkCarossel")


//     carosseImg[indexCarossel].classList.remove("classShowCarossel")

//     //   indexCarossel=(indexCarossel + 1) % carosseImg.length;
//     indexCarossel ++;
//     if(indexCarossel >= carosseImg.length){indexCarossel=0} ;

//     carosseImg[indexCarossel].classList.add("classShowCarossel")

// }

//  setInterval(myCarossel,4000)





function backCarossel(){
    let carosseImgNex=document.querySelectorAll(".linkCarossel")
    carosseImgNex[indexCarossel].classList.remove("classShowCarossel")
    //   indexCarossel=(indexCarossel + 1) % carosseImg.length;
    indexCarossel --;
    if(indexCarossel <= 0){indexCarossel=0} ;
    carosseImgNex[indexCarossel].classList.add("classShowCarossel")
}




document.querySelector(".buttonNexts").addEventListener("click",()=>{
   
   backCarossel()

})

// inicio tratamento acordion
const Accordion = {
	  settings: {
	    // Expand the first item by default
	    first_expanded: false,
	    // Allow items to be toggled independently
	    toggle: false
	  },

	  openAccordion: function(toggle, content) {
	    if (content.children.length) {
	      toggle.classList.add("is-open");
	      let final_height = Math.floor(content.children[0].offsetHeight);
	      content.style.height = final_height + "px";
	    }
	  },

	  closeAccordion: function(toggle, content) {
	    toggle.classList.remove("is-open");
	    content.style.height = 0;
	  },

	  init: function(el) {
	    const _this = this;

	    // Override default settings with classes
	    let is_first_expanded = _this.settings.first_expanded;
	    if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
	    let is_toggle = _this.settings.toggle;
	    if (el.classList.contains("is-toggle")) is_toggle = true;

	    // Loop through the accordion's sections and set up the click behavior
	    const sections = el.getElementsByClassName("accordion");
	    const all_toggles = el.getElementsByClassName("accordion-head");
	    const all_contents = el.getElementsByClassName("accordion-body");
	    for (let i = 0; i < sections.length; i++) {
	      const section = sections[i];
	      const toggle = all_toggles[i];
	      const content = all_contents[i];

	      // Click behavior
	      toggle.addEventListener("click", function(e) {
	        if (!is_toggle) {
	          // Hide all content areas first
	          for (let a = 0; a < all_contents.length; a++) {
	            _this.closeAccordion(all_toggles[a], all_contents[a]);
	          }

	          // Expand the clicked item
	          _this.openAccordion(toggle, content);
	        } else {
	          // Toggle the clicked item
	          if (toggle.classList.contains("is-open")) {
	            _this.closeAccordion(toggle, content);
	          } else {
	            _this.openAccordion(toggle, content);
	          }
	        }
	      });

	      // Expand the first item
	      if (i === 0 && is_first_expanded) {
	        _this.openAccordion(toggle, content);
	      }
	    }
	  }
	};

	(function() {
	  // Initiate all instances on the page
	  const accordions = document.getElementsByClassName("accordions");
	  for (let i = 0; i < accordions.length; i++) {
	    Accordion.init(accordions[i]);
	  }
	})();
// fim tratamento acordion