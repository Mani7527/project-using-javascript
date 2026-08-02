const body=document.querySelector('body');
body.addEventListener('click',(e)=>{
  console.log(e.clientX,e.clientY);


  const circleELement=document.createElement('div');
  circleELement.classList.add('circle');
  circleELement.textContent='MANI';
  const color=['red','blue','green','pink','orange','purple','violet','indigo','yellow']
  circleELement.style.backgroundColor=color[Math.floor(Math.random()*6)];
  circleELement.style.top=`${e.clientY-25}px`;
  circleELement.style.left=`${e.clientX-25}px`;
  body.append(circleELement);
  
  setTimeout(()=>{
    circleELement.remove();
  },5000);
  
})