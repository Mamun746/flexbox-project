
      function initMap() {
          const loc= {lat:23.810331, lng:90.412521}
       const map = new google.maps.Map(document.querySelector('.map'), {
          zoom: 14,
          center:loc,
        });
        const marker=new google.maps.Marker({position:loc,map:map})
      }

      window.addEventListener('scroll',function(){
          if (window.scrollY>150){
              document.querySelector('#navbar').style.opacity=0.9
          }else{
            document.querySelector('#navbar').style.opacity=1
          }
      })

     $('#navbar,a,.btn').on('click',function(event){
         if(this.hash !=''){
             event.preventDefault();
             const hash=this.hash;
             $('body,html').animate({
                scrollTop: $(this.hash).offset().top -100
              }, 800 );
         }
     })