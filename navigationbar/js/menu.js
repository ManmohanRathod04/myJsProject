
const section_hero=document.querySelector(".first");

const observer=new IntersectionObserver(
    (entries)=>{
        const ent=entries[0];
        ent.isIntersecting===false 
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
    },
    
    {
        root:null,
        rootMargin:"-80px",
        threshold:.75,
    });

    observer.observe(section_hero);
