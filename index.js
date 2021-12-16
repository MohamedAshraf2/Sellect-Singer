


var xhr = new XMLHttpRequest();
var txt="",JsonObj,JsObj ;

xhr.onreadystatechange = function (){
    if(xhr.readyState==4)
    if(xhr.status==200){
        JsonObj=xhr.responseText;
        JsObj =JSON.parse(JsonObj)
        JsonObj=JSON.stringify(JsObj)
        var dataa = JsObj[0]

        console.log(dataa)
        
        var select1 =document.getElementById("s1");
        var select2 =document.getElementById("s2");

        var opt0 = document.createElement('option');
        opt0.innerHTML="select pand";
        select1.appendChild(opt0);
        
        for(var i in dataa)
        {
            var opt1 = document.createElement('option');
            opt1.innerHTML = i;
            select1.appendChild(opt1);
        }

            

            select1.addEventListener("change",function(){

                var val =document.getElementById("s1").value;
                for(var i in dataa){

                    if(i == val){
                        select2.innerHTML="";
                        var opt2 = document.createElement('option');
                        opt2.innerHTML="plz select";
                        select2.appendChild(opt2);
                        for( var j = 0; j< i.length ; j++)
                        {
                            var opt3=document.createElement('option');
                            opt3.innerHTML=dataa[i][j].name;
                            select2.appendChild(opt3);
                           
                        }
                        
                       
                    }


                }
            })

            
            select2.addEventListener("change",function(){
                var val1=document.getElementById("s1").value;
                var val2=document.getElementById("s2").value;

                for(i in dataa){
                    if(i==val1){
                        for(var j =0;j<i.length;j++){
                            if(dataa[i][j].name==val2){
                                var an =dataa[i][j].value;
                                var wn =window.open(an,"");
                            }
                        }
                    }
                }       
            })
        }
    }





xhr.open("GET","rockbands.json");
xhr.send();