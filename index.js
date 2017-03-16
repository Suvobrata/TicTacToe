
$(document).ready(function(){
  var turn = 0;
  	$('#tictactoe').find('td').on('click', function(){
      if(turn % 2 == 0){
        if($(this).text() === ''){
          $(this).text("X");
          turn++;
          	if(turn > 4){
            	checkVictory("X");
         		 }
        } else {
          //do Nothing
        }   	
      } else {
         if($(this).text() === ''){
            $(this).text("O");
           	turn++;
          	 if(turn > 4){
            	checkVictory("O");
          	}
         } else {
           //do Nothing
         }      
      }
  	});
  
  function checkVictory(player){
    //top row  check
		if($("#1").text() == $("#2").text() && $("#2").text() == $("#3").text() && $("#1").text() == player){
			alert("WINNER IS " + player);
		}
    //left column check
    if($("#4").text() == $("#5").text() && $("#5").text() == $("#6").text() && $("#5").text() == player){
      alert("WINNER IS " + player);
    }
    
    //middle column check
    if($("#2").text() == $("#5").text() && $("#5").text() == $("#8").text() && $("#2").text() == player){
      alert("WINNER IS " + player);
    }
    
    //right column check 
    if($("#3").text() == $("#6").text() && $("#6").text() == $("#9").text() && $("#6").text() == player){
      alert("WINNER IS " + player);
    }
    
    //bottom row check
    if($("#7").text() == $("#8").text() && $("#8").text() == $("#9").text() && $("#7").text() == player){
      alert("WINNER IS " + player);
    }
    
    //left diagonal check
    if($("#1").text() == $("#5").text() && $("#5").text() == $("#9").text() && $("#1").text() == player){
      alert("WINNER IS " + player);
    }
    
    //right diagonal check
    if($("#3").text() == $("#5").text() && $("#5").text() == $("#7").text() && $("#3").text() == player){
      alert("WINNER IS " + player);
    }  
  }
  
  $("#newGame").on('click', function(){
    $('td').each(function(){
      $(this).text('');
    })
  });
});
