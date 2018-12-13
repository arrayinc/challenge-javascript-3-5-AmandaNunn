// *** YOUR ANSWER BELOW ***
function drawBox(h, w){
  let str = "";
  for(let i = 1; i <= h; i++){

    if(i === 1 || i === h){
      for( let j = 1; j <= w; j++){
        if(j === 1 || j === w){
          str += "+";
        } else{ str += "-";}
      }
    } else{
      for(let k = 1; k <= w; k++)
      if(k === 1 || k === w){
        str += "|";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

drawBox(10, 10);
