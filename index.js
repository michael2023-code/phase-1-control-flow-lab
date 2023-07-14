function scuberGreetingForFeet(ride){
  if (ride <= 400)
  return 'This one is on me!'

if (ride >2000 && ride <=2500)
  return 'I will gladly take your thirty bucks.'

  else if (ride > 2500){
  return 'No can do.'}
} 

function ternaryCheckCity(city){
if (city =="NYC")
return `Ok, sounds good.`
 if (city !=="NYC"){
 return `No go.`
}
}


function switchOnCharmFromTip(tips) {

  if (tips === "generous") {
      return `Thank you so much.`
  } else if (tips === `not as generous`) {
      return `Thank you.`
  } else {
      return `Bye.`
  }
}