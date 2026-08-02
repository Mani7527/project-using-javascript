const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const income=document.getElementById('income')
  const amount=parseInt(income.value)

  const result=document.querySelector('h2')
  let totaltax=0;
  if(amount<=1200000){
    totaltax=0;
  }
  else if(amount<=1600000){
    totaltax=(amount-1200000)*0.15;//15 percent tax
  }
  else if(amount<=2000000){
    totaltax=(amount-1600000)*0.20+60000;//20per tax
  }
  else if(amount<=2400000){
    totaltax=(amount-2000000)*0.25+60000+80000;//25 per tax
  }
  else{
    totaltax=(amount-2400000)*0.30+60000+80000+100000;
  }


  result.textContent=`TOTAL TAX:${totaltax}`
  form.reset();



})