
window.addEventListener("scroll",function(){

    var nav = document.getElementById("navbar");

    if(window.pageYOffset > 10){
        nav.classList.add("sticky");
        this.setTimeout(function(){
            nav.classList.add("inView");
        },0);
    }else{
        nav.classList.remove("sticky");
        nav.classList.remove("inView");

    }
});


window.addEventListener("load",function(){
    setTimeout(function(){
        document.getElementById("preloader").style.visibility="hidden";
        document.getElementById("preloader").style.opacity="0";
    },1000)
})

var home = document.getElementById("displayImage");
var about = document.getElementById("profiles");
var gallery = document.getElementById("imageGallery");
var wedding = document.getElementById("weddingDetails");
var direction = document.getElementById("directions");


window.addEventListener("scroll",function(){
    var windo = window.pageYOffset;
    if(windo>=0 && about.offsetTop > windo){
        this.document.getElementById("hom").classList.add("scrollspy");
        this.document.getElementById("abo").classList.remove("scrollspy");
        this.document.getElementById("gal").classList.remove("scrollspy");
        this.document.getElementById("wed").classList.remove("scrollspy");
        this.document.getElementById("dir").classList.remove("scrollspy");
    }else if(about.offsetTop <= windo && gallery.offsetTop > windo){
        this.document.getElementById("hom").classList.remove("scrollspy");
        this.document.getElementById("abo").classList.add("scrollspy");
        this.document.getElementById("gal").classList.remove("scrollspy");
        this.document.getElementById("wed").classList.remove("scrollspy");
        this.document.getElementById("dir").classList.remove("scrollspy");
    }else if(gallery.offsetTop <= windo && wedding.offsetTop > windo){
        this.document.getElementById("hom").classList.remove("scrollspy");
        this.document.getElementById("abo").classList.remove("scrollspy");
        this.document.getElementById("gal").classList.add("scrollspy");
        this.document.getElementById("wed").classList.remove("scrollspy");
        this.document.getElementById("dir").classList.remove("scrollspy");
    }else if(wedding.offsetTop <= windo && direction.offsetTop > windo){
        this.document.getElementById("hom").classList.remove("scrollspy");
        this.document.getElementById("abo").classList.remove("scrollspy");
        this.document.getElementById("gal").classList.remove("scrollspy");
        this.document.getElementById("wed").classList.add("scrollspy");
        this.document.getElementById("dir").classList.remove("scrollspy");
    }else{
        this.document.getElementById("hom").classList.remove("scrollspy");
        this.document.getElementById("abo").classList.remove("scrollspy");
        this.document.getElementById("gal").classList.remove("scrollspy");
        this.document.getElementById("wed").classList.remove("scrollspy");
        this.document.getElementById("dir").classList.add("scrollspy");
    }
})






// var i=0;
// setInterval(function(){
//     i=i%4;
//     i=i+1;
//     document.getElementById("displayImg").setAttribute("src",`image${i}.jpeg`)
// },2000);