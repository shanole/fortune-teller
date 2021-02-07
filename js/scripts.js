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

function fortune(totalUnlucky) {
  if (totalUnlucky < 5) {
    $("#lucky").show();
  }
  else if (totalUnlucky === 5) {
    $("#neutral").show();
  }
  else {
    $("#unlucky").show();
  }
}

$(document).ready(function() {
  $("form#fortune").submit(function(event) {
    event.preventDefault();

    let userResponses=[];

    $("input:checkbox[name=items]:checked").each(function(){
      const roomItem = $(this).val();
      userResponses.push(roomItem);
    });

    $("input:checkbox[name=quarantine]:checked").each(function(){
      const quarantine= $(this).val();
      userResponses.push(quarantine);
    });

    $("input:checkbox[name=goals]:checked").each(function(){
      const goals = $(this).val();
      userResponses.push(goals);
    });
    
    const userName = $("input#name").val();
    $(".userName").text(userName);
    $("form#fortune").hide();
    fortune(countUnlucky(userResponses));
    $("#refresh").show();
  });
  
  $('#goBack').click(function() {
    window.location.href='index.html';
  });
});