
const something = () => {
    window.addEventListener('scroll', () => {
        let content = document.querySelectorAll('.hidden');
        let windowHeight = window.innerHeight;
        console.log(content);

        for (var i = 0; i<content.length; i++){
            var element = content[i];
            let contentPosition = element.getBoundingClientRect().top + 10;
            let screenPosition = windowHeight;
            console.log(screenPosition, "screen Position");
            console.log(contentPosition, "content Position", element)
            if (contentPosition <= screenPosition){
                // console.log(element, "element in if");
                element.classList.add('animate__animated', 'animated');
                element.classList.remove('hidden');
                // setTimeout(scrolling, 1000, element);
            }
        }
    }) 
    
}

// const scrolling = () => {
//     console.log('in here');
//     console.log(element, "element in scrolling");
//     document.querySelector('.hidden').classList.add('animated')
//     console.log(document.querySelector('.heading'))
// }

something()



// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

