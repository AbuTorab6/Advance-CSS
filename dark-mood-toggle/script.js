var jubo = ()=>
{
   var input = document.querySelector('.check');

   if(input.checked==true)
   {
    document.querySelector('.ami').classList.add("dark")
   }
   else
   {
    document.querySelector('.ami').classList.remove("dark")
   }
}