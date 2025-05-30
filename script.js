
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
    
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });
  
    /*toggle menu/navbar script*/
  
    $(document).ready(function () {
        $(".menu-btn").click(function () {
            $(".navbar .menu").toggleClass("active");
            $(".menu-btn i").toggleClass("active");
        });
    
        // Close menu when clicking on a link
        $(".navbar .menu li a").click(function () {
            $(".navbar .menu").removeClass("active");
            $(".menu-btn i").removeClass("active");
        });
    });
       


    //typing animation script
//    first animation
var typed = new Typed(".typing",{
    strings: ["Web Development...", "Graphic Designs...", "Digital Solutions"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


    // second animation
    $(document).ready(function () {
        var words = ["Web Development...", "Graphic Designs...", "Digital Solutions"];
        var i = 0;
    
        function changeText() {
            $(".typing-2").animate({ opacity: 0, marginLeft: "-50px" }, 500, function () {
                $(this).text(words[i]).css({ marginLeft: "50px" }).animate({ opacity: 1, marginLeft: "0px" }, 800);
            });
    
            i = (i + 1) % words.length; // Loop through words
        }
    
        setInterval(changeText, 3500); // Change text every 2 seconds
    });
  



   
    $(document).ready(function(){   
        $('.carousel').owlCarousel({
            margin: 10,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 3000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                },
            }
        })
      });
    })     
   



  
  
  window.addEventListener('scroll', reveal)
  function reveal(){
    var reveals = document.querySelectorAll('.reveal')
    for(var i= 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
  
      if(revealtop < windowHeight - revealpoint){
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }


window.addEventListener("scroll", revealOne);

function revealOne() {
    var reveals = document.querySelectorAll(".reveal-1");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowHeight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}


