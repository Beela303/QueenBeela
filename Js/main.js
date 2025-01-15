$(document).ready(function(){
/*========================== NAV =============================*/
window.matchMedia("(min-width: 1024px)").matches;{
    $("#nav-menu ul li a").css("display", "block")    

    $("#close-menu-btn").click(function(){
        $("#nav-menu ul").css("display", "block")    
    })
}

    $("#open-menu-btn").click(function() {
        $("nav").css("width", "400px");	
        $("#nav-menu").css("display", "inline-block");
        $(".nav-menu-other").css("display", "inline-block");
        $("#open-menu-btn").css("display", "none");	
        $("#close-menu-btn").css("display", "block");	
        $("footer").css("display", "none");	
        $("#reading-progress").css("display", "none")
        $(".carousel").css("display", "none")
        $(".show").css("display", "none")
    })

    $("#close-menu-btn").click(function(){
        $("nav").css("display", "block");
        //$(".nav-menu-list").css("display", "block")    
        $(".nav-menu-other").css("display", "none");
        $("#open-menu-btn").css("display", "block");
        $("#close-menu-btn").css("display", "none");	
        $("footer").css("display", "block");	
        $("#reading-progress").css("display", "block")
        $(".carousel").css("display", "block")
        $(".show").css("display", "block")
        //$("#phone-header").css("display", "block")
    })

    window.matchMedia("(max-width: 1024px)").matches;{
        $("#open-menu-btn").click(function() {
            $("nav").css("height", "100%")
            $("#nav-menu ul li").css("display", "block")    
            $("#nav-menu ul li a").css("display", "block")    
            $("#phone-header").css("display", "none")
        })

        $("#close-menu-btn").click(function() {
            $("nav").css("height", "0")
            $("#nav-menu ul li a").css("display", "none")
            $("#phone-header").css("display", "flex")
        })
    }

/*========================== THEMES =============================*/
    $(".light-theme").css("display", "none");
    if ($(".dark-theme").css("display", "block")) {
        $(".dark-theme").click(function() {
            $(".dark-theme").css("display", "none")
            $(".light-theme").css("display", "block")
        })
    } else ($(".dark-theme").css("display", "none"));{
        $(".light-theme").click(function() {
            $(".light-theme").css("display", "none")
            $(".dark-theme").css("display", "block")
        })
    }

    /*if ($(".dark-theme").css("visibility", "visible")) {
        $(".dark-theme").click(function() {
            $(".dark-theme").css("visibility", "hidden")
            $(".light-theme").css("visibility", "visible")
        })
    } else ($(".dark-theme").css("visibility", "hidden"));{
        $(".light-theme").click(function() {
            $(".light-theme").css("visibility", "hidden")
            $(".dark-theme").css("display", "block")
        })
    }*/

    let themeSwitches = document.getElementsByClassName('themeswitch')
    let style = localStorage.getItem('style')

    if (style == null) {
        setTheme('dark');
    } else {
        setTheme(style);
    }

    for (let i of themeSwitches){
        i.addEventListener('click', function() {
            let theme = this.dataset.theme;
            setTheme(theme);
        })
    }

    function setTheme(theme){
        if (theme == 'dark'){
            document.getElementById('theme-style').href = './themes/light.css'
        } else if (theme == 'light'){
            document.getElementById('theme-style').href = './themes/dark.css'
        }
        localStorage.setItem('style', theme);
    }

    /*========================== PHONE HEADER =============================*/      
    $("#phone-header-menu").click(function() {
        $("#phone-header").toggle();
    })

    /*========================== NAV ICONS =============================*/      
    /*window.matchMedia("(min-width: 1024px)").matches;{
        $("#nav-menu ul li").css("display", "block")
    }

    window.matchMedia("(max-width: 1024px)").matches;{
        $("#nav-menu ul li").css("display", "none")
        
        $("#open-menu-btn").click(function() {
            $("nav").css("height", "100%")
            $("#nav-menu ul li").css("display", "block")
        })

        $("#close-menu-btn").click(function() {
            $("nav").css("height", "0")
            $("#nav-menu ul li").css("display", "none")
        })
    }*/
    
/*========================== SCROLL TO TOP =============================*/
    scrollToTopBtn = document.getElementById("scroll-to-top");
    
    window.onscroll = function(){scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
        } else {
                scrollToTopBtn.style.display = "none";
        }
    }

    var rootElement = document.documentElement;

    function scrollToTop() {
        rootElement.scrollTo({
            top:0,
            behavior: "smooth"
        });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);

/*========================== TYPING ANIMATION =============================*/
    var typed = new Typed(".typing", {
        //strings: ["a Web Developer", "an UI/UX Designer", "a Fashion Designer", "an Artist",  "a YouTuber", "a Blogger", "a Podcaster", "a Web developer"],
        strings: ["a Front-End Developer", "an Artist", "a Podcaster"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-second", {
        //strings: ["a Web Developer", "an UI/UX Designer", "a Fashion Designer", "an Artist",  "a YouTuber", "a Blogger", "a Podcaster", "a Web developer"],
        strings: ["a Front-End Developer", "an Artist", "a Podcaster"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-name", {
        strings: ["BEELA", "QUEENBEELA","@BEELA303", "NABILA",],
        typeSpeed: 200,
        backSpeed: 60,
        loop: false,
        showCursor: false
    })
  
    $("#copyright").text('©2025 Nabila Abubakar');
});

/*============================= HIDDEN SHOW =======================================*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/*================================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header-home')
    // When scroll is greater than 200 viewport height, add the scroll-header classto the header tag
    if(this.scrollY >= 100) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=================================== HOME PAGE =======================================================*/
$(document).ready(function() {
 
    $("#pictures").owlCarousel({
   
        autoPlay: 5000, //Set AutoPlay to 5 seconds
        navigation : true, // Show next and prev buttons
   
        items : 2, 
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
});

/*============================= GALLERY =======================================*/
function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("myImage");
    modal.style.display = "block";
    modalImg.src = imageSrc
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

//======================= WORK ==========================================
$(document).ready(function() {
    $(".project-img-body").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
   
        items : 2,
        itemsDesktop : false,
        itemsDesktopSmall : [false]
    });
});

var typed = new typed(".what-i-do-portfolio-art", {
    strings: ["BEELA", "NABILA", "QUEENBEELA", "BEELA"],
    typeSpeed: 200,
    backSpeed: 60,
    loop: false,
    showCursor: false
})

//PODCAST
//SEE MORE PLATFORMS BUTTON
$("#other-streaming-platforms-button").click(function() {
    $(".other-streaming-platforms").css({"height": "100%", "width" : "100%"})
    $("#other-streaming-platforms-button").text("SEE LESS")
})
if ($("#audio").css("display", "block")) {
    $("#video-title").click(function() {
        $("#audio").css("display", "none")
        $("#video").css("display", "block")
    })
} else if ($("#audio").css("display", "block")) {
    $("#audio-title").click(function() {
        $("#audio").css("display", "block")
        $("#video").css("display", "none")
    })
} else ($("#video").css("display", "block")); {
    $("#audio-title").click(function() {
        $("#audio").css("display", "block")
        $("#video").css("display", "none")
    })
} 

// carousel

const carousel = [...document.querySelectorAll('.carousel img')]

let carouselImageIndex = 0;

const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');
    if (carouselImageIndex >= carousel.length -1) {
        carouselImageIndex = 0;
    } else {
        carouselImageIndex++;
    }
    carousel[carouselImageIndex].classList.toggle('active');
}

setInterval(() => {
    changeCarousel();
}, 3000);

$("#toggle-transcription").click(function() {
    $(".podcast-episode-transcription-body").toggle();
    $(".podcast-episode-description-body").css("display", "none");
})

$("#toggle-description").click(function() {
    $(".podcast-episode-description-body").toggle();
    $(".podcast-episode-transcription-body").css("display", "none");
})