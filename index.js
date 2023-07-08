
var totBtns=document.querySelectorAll(".btn").length;
for(var i=0;i<totBtns;i++){
    document.querySelectorAll(".btn")[i].addEventListener(
        "click", function(){
            var input=document.querySelector("#screen>p");

            var output=this.value;
            
            if (output==="C"){
                input.innerHTML="00";
            }else if(output==="B"){
                var len=input.innerHTML.length;
                if (len===1 || input.innerHTML==="00"){
                    input.innerHTML="00";
                }else{
                    input.innerHTML=(input.innerHTML).substring(0,len-1);
                }
                
            }else if(output==="="){
                input.innerHTML=eval(input.innerHTML);
            }else{
                if (input.innerHTML==="00"){
                    input.innerHTML=output;
                } else {
                    (input.innerHTML)+=output;
                }
            }
            
        }
    );
}
