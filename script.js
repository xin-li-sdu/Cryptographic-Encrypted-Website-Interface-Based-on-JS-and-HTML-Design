
let login_opt = document.getElementsByName('login-opt');
let form_bar = document.getElementById('form-bar');


function checkRadio0(){
  if(login_opt[0].checked){
    form_bar.style.transform = 'translateX(0)';
    console.log('1')
  } else if(login_opt[1].checked){
    form_bar.style.transform = 'translateX(-348px)';
    console.log('2')
  } else{
    form_bar.style.transform = 'translateX(-692px)';
  }
}


function checkRadio(){
  for(let i =0; i < login_opt.length; i++){
    if(login_opt[i].checked){
      form_bar.style.transform = 'translateX(' + (-348*i) + 'px)';
    }
  }
}
