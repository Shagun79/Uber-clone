 function loginpage(){
    if(document.getElementById('b').style.display === "none")
    {

        document.getElementById('b').style.display="block"; 
        document.getElementById('head').style.display="none"; 
       

       

    }
      else{
       
          document.getElementById('b').style.display= "none"
          
    }
}
  
function closeloginpage(){
    if(document.getElementById('b').style.display=== "block")
    {

        document.getElementById('b').style.display="none"; 
        document.getElementById('head').style.display="block"; 

    }
      else{
       
          document.getElementById('b').style.display= "block"; 

    }

}
