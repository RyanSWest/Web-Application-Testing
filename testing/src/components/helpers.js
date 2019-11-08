





exports.striker = function(strikes){

    if(strikes>3){
        strikes =0;
    }
    else{
    return strikes +1;
}

} 


exports.score = function(hits){

 let points =0

 if(hits>= 4){
     points++
 }
 return points;



}


exports.walk = function(balls){
   if(balls >=4){
       balls = 0;
   }else{
       return balls +1;
   }



}