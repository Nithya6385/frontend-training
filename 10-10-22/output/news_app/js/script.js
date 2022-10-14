let news_app ={
    category:[]
};
 
function addDetails(key,value,index=null) {
    if(index==null) {
         news_app[key]=value;
     }else{
         news_app[key][index]=value;
     }   
 }
 function display(){
    document.getElementById("show_all").innerHTML=JSON.stringify(news_app);
    if(!localStorage.getItem("newspaper")){
        localStorage.setItem("newspaper",JSON.stringify([]));
    }

    let list_1=JSON.parse(localStorage.getItem("newspaper"));
    list_1.push(news_app);

    localStorage.setItem("newspaper",JSON.stringify(list_1));
 }
 namedisplay();

function namedisplay() {
    let ele=" ";
    let local_list= JSON.parse(localStorage.getItem("newspaper"));
    for (let i = 0; i < local_list.length; i++) {
        ele=ele+"<h2> <a href='home.html?title="+local_list[i].title +"'target='_blank'>"+local_list[i].title+"</a></h2>";  
    }
    document.getElementById("idlist").innerHTML=ele;
}