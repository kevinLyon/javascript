function mathOper(value_raw){
    // atualização painel...
    let old_panel = document.getElementsByClassName("resultado")[0].placeholder
    let current_char = document.getElementsByClassName("resultado")[0].placeholder=value_raw.innerText
        
    let current_panel = old_panel + current_char
    let new_panel = document.getElementsByClassName("resultado")[0].placeholder=current_panel
    // atualização painel...

    // clean all..
    if(value_raw.innerText == 'C'){  
      document.getElementsByClassName("resultado")[0].placeholder=''
    
    // send to function resolution
    }else if(value_raw.innerText == '='){

      // get all content placehold for send to resolution
      var a_content = document.getElementsByClassName("resultado")[0].placeholder

      if(a_content.includes('x') == true){
        resolution('x')
      }else if(a_content.includes('-') == true){
        resolution('-')
      }else if(a_content.includes('+') == true){
        resolution('+')
      }else{
        resolution('/')
      }
  }

  function resolution(operator){
    // prepare everything for the calculation
    let content_splited = a_content.replace(operator, ' ').split(' ')
    let first_number = content_splited[0]
    let second_number = content_splited[1].replace('=', '')
    // prepare everything for the calculation

    // little fix if operator==x
    if(operator == 'x'){
      operator = '*'
    }

    // pack everything into a strin for calculation
    let to_eval =  new String(first_number + operator + second_number);

    // real calculation
    let equal = eval(String(to_eval))

    // result put back in placehold
    document.getElementsByClassName("resultado")[0].placeholder=equal
  }


}