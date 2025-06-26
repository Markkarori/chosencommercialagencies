function openMobileNav(){
    const mobileNav=document.getElementById('links-container');
    mobileNav.classList.toggle("show")
}

function scrollToSection(id){
    const section=document.getElementById(id);

    console.log(section)

    if(section){
        section.scrollIntoView({behavior:"smooth"});

        document.querySelectorAll("header a").forEach((link)=>{
            link.classList.remove("active")
        })

        document.querySelectorAll(`a[data-id="${id}"]`).forEach((link)=>{
                link.classList.add("active")
        })

        

    }
}