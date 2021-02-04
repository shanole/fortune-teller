function countUnlucky(arr) {
  let numOfUnlucky = 0
  const unluckyItems = ["scissors", "phone","grief","crying","zoom","politics","travel","drunk","politic","thing"]

  for (i=0; i < arr.length; i+=1) {
    let userInput = arr[i];
    if (unluckyItems.includes(userInput)) {
      numOfUnlucky += 1;
    }
    else {
      continue;
    }
  }
  return numOfUnlucky;
}

$(document).ready(function() {
  $("form#fortune").submit(function(event) {
    event.preventDefault();

    let userItems = [];
    let userQuarantine = [];
    let userGoals = [];

    $("input:checkbox[name=items]:checked").each(function(){
      const roomItem = $(this).val();
      userItems.push(roomItem);
    });

    $("input:checkbox[name=quarantine]:checked").each(function(){
      const quarantine= $(this).val();
      userQuarantine.push(quarantine);
    });

    $("input:checkbox[name=goals]:checked").each(function(){
      const goals = $(this).val();
      userGoals.push(goals);
    });
    console.log(userItems);
    console.log(userQuarantine);
    console.log(userGoals);
  });
});