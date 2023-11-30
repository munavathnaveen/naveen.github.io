let buttons=document.querySelectorAll("#btn");
let input=document.getElementById("screen");
let string="";
for(let btn of buttons)
{
    btn.addEventListener("click",(e)=>{
        let current_value=e.target.value;
        if(string=="Infinity")
        {
            string="";
            input.value=string;
        }
        if(string==="Invalid Expression")
        {
            string="";
        }
        if(current_value==='=')
        {
            try{
                string = eval(string);
                input.value=string;
            }
            catch(error){
                string="Invalid Expression";
                input.value=string;
            }
        }
        else if(current_value==='C')
        {
            string="";
            input.value=string;
        }
        else if(current_value==="DEL")
        {
            try{
                string=string.slice(0,-1);
                input.value=string;
            }
            catch(error){
                string=string.toString();
                string=string.slice(0,-1);
                input.value=string;
            }
            
        }
        else 
        {
            string += current_value;
            input.value=string;
        }
    })
}
