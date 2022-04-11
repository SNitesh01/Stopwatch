
  sec = 0;
  min = 0;
  count = 0;
  lapNow= 0;

  timer = false;
class Stopwatch {

    constructor() {
        if(timer == true)
    {
        count = count+1;
     if(count == 100){
         sec = sec + 1
         count = 0 ;
     }

     if(sec == 60){
         min = min+1;
         sec =0;
     }
      
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;


        setTimeout("new Stopwatch()", 10);
    }
}
   
start (){
    timer= true;
    new Stopwatch();
 
}
stop (){
    timer=false
}

reset (){
    timer = false;
    min =0;
    sec=0;
    count = 0;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;
    document.getElementById("lapNow").innerHTML = lapNow;



}

lap(){
    this.lapNow = min + " : " + sec + " : " + count
    document.getElementById("lap").innerHTML = document.getElementById("lap").innerHTML + "<li>" + this.lapNow + "</li>";
}
    
}

let s = new Stopwatch();

    
 



