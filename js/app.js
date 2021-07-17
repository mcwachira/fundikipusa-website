
            let navbar =  document.querySelector(".navbar")
            let scrollPos = window.scrollY
            
        window.addEventListener('scroll', function()    {
            
            scrollPos = window.scrollY

             if(scrollPos >= 50)  {
            
                navbar.classList.add('affix')
            }else{
                navbar.classList.remove('affix')
            }

    
        })


       let numberCount = function(){
        $(".count").each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 40000,
              easing: 'swing',
              step: function (value) {
                  $(this).text(Math.ceil(value));
              }
          });
      });

    }

    numberCount()

    //   let a = 0;
    //   $(window).scroll(function()   {
    //       let oTop = $(".numbers").offset().top -  window.innerHeight;
    //     console.log(oTop)
    //       if(a==0&& $(window).scrollTop()>= oTop)   {
    //           a++
    //         numberCount(".count>p")
    //       }
    //   });
   

// var docWidth = document.documentElement.offsetWidth;
// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );

