const lists = document.querySelector('.menu ul');
const items = document.querySelector('.menu li');
const menu = document.querySelector('.menu');
const contents = document.querySelectorAll('.content')


const removeStyle = (e)=>{
   Array.from(lists.children)
    .forEach(list =>
        list.classList.remove('active')
        )
 
   e.target.classList.add('active') 
}


const displayContent = (e)=>{
    contents.forEach(content => content.classList.remove('active'))

    const target = e.target.getAttribute('data-target');
   document.querySelector(target).classList.add('active');
}

lists.addEventListener('click',e =>{
    removeStyle(e);
    displayContent(e)
})