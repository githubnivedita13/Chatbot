let apiKey="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";

document.getElementById('input_icon').addEventListener('click',()=>{
  if(document.getElementById('input').value != ''){
    document.getElementsByClassName('search')[0].style.boxShadow=`
    5px 5px 10px rgba(0,  0, 0, .5), inset 5px 5px 10px rgba(0,  0, 0, .5)`;
    document.getElementsByClassName('loading')[0].style.display='flex';
    document.getElementsByClassName('loading')[0].innerHTML=` <div class="load">
    <h6></h6> 
    <h6></h6>
    <h6></h6>
</div>`;
document.getElementById('input_icon').style.cursor='not-allowed';
runMessage(document.getElementById('input').value);
  }
  else{
    document.getElementsByClassName('search')[0].style.boxShadow=`
    5px 5px 10px rgba(0,  0, 0, .5), inset 5px 5px 10px rgba(255,  0, 0, .5)`;
  }
})

let offButton=()=>{
  Array.from(document.getElementsByClassName('button')).forEach((el)=>{
    el.classList.remove('lan');
  });
}

Array.from(document.getElementsByClassName('button')).forEach((el)=>{
  el.addEventListener('click',()=>{
    offButton();
    el.classList.add('lan');
  })
});



let runMessage=(message)=>{
  let lan=document.getElementsByClassName('lan')[0].innerText;

  fetch("https://api.openai.com/v1/completions",{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      Authorization:`Bearer ${apiKey}`
    },
    body:JSON.stringify({
      model:"babbage-002",
      prompt:message,
      temperature : 0.5,
      max_tokens:3,
    })
  }).then((Response)=>Response.json())
  .then((result)=>{
    console.log(result)
  })
  

  
}