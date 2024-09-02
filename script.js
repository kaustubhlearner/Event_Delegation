
let nav = document.querySelector("nav")

nav.addEventListener('click', function(e){
let button= e.target;
if(button.id ==="Google"){
    console.log("https://www.google.com/maps");
    
}
else if(button.id==="Youtube"){
    console.log("https://www.youtube.com/watch?v=u__11V9byr4");
    
}
else if (button.id==="Telegram"){
    console.log("https://www.google.com/search?q=telegram&rlz=1C1CHBF_enIN1118IN1118&oq=telegram&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBwgDEAAYjwIyBwgEEAAYjwLSAQgyODQxajBqMagCALACAA&sourceid=chrome&ie=UTF-8");
    
}
else if(button.id ==="Chrome"){
    console.log("https://www.google.com/chrome/?brand=SLLM&ds_kid=43700079555899013&gad_source=1&gclid=CjwKCAjwxNW2BhAkEiwA24Cm9IRfFK2qmAqvQoQlE0mFdM8RvX1eQHYchJ84JXZvH1drjFEVJeOhahoCIE0QAvD_BwE&gclsrc=aw.ds");
    
}
else if(button.id==="Facebook"){
    console.log("https://www.facebook.com/");
    
}
else if(button.id ==="Whatsapp"){
    console.log("https://web.whatsapp.com/");
    
}
})