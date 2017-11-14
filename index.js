// Write your code in this file!
function scuberGreetingForFeet(x){
  if (x <= 400)
  {return 'This one is on me!'}
  else if (x>2000 && x<=2500) {return 'I will gladly take your thirty bucks.'}
  else if (x>2500){return'No can do.'}
}

function ternaryCheckCity(x) { return x!='NYC'? 'No go.':"Ok, sounds good."}

function switchOnCharmFromTip(x) {
  switch(x) {case x>4 : return 'Thank you so much.';
    break;
    case x<4&& x>3: return  
    case x<3: return 'bye'
  x}
}