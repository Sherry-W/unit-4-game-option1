//var
	var randomNum = "";
	var wins = 0;
	var losses = 0;
	var totalScore = 0;
	var num = [1,2,3,4,5,6,7,8,9,10,11,12];
	var crystals = [];
	var blue;
	var red;
	var white;
	var yellow;
	var crystalValue;

//random number for user to match
	randomNum = Math.floor((Math.random() * 100) + 19);

//display numbers
	$('#randomNum').text(randomNum);
	$('#userScore').text(totalScore);
	$('#wins').text('Wins: '+ wins);
	$('#losses').text('Losses: ' + losses);

//random number assigned to the crystals
	function randomNumCrystals() {
    	crystals = num.sort(function(a, b){return 0.5 - Math.random()});

    	blue = crystals[0];
    	red = crystals[1];
    	white = crystals[2];
    	yellow = crystals[3];

	//assigning values to the img crystals
		$('#c1').attr('data-value', blue);
		$('#c2').attr('data-value', red);
		$('#c3').attr('data-value', white);
		$('#c4').attr('data-value', yellow);
	}

	randomNumCrystals();
	console.log(crystals, blue, red, white, yellow);

//crystal clicking
	$('.crystals').on('click', function() {
		crystalValue = $(this).attr('data-value');

		totalScore = totalScore + parseInt(crystalValue);
		$('#userScore').text(totalScore);

		if (totalScore == randomNum) {
			wins++;
			$('#wins').text('Wins: '+ wins);
			$('#msg').show();
			$('#msg').text('you won!').fadeOut(1000).fadeIn(1000).fadeOut(2000);

			reset();

		}else if (totalScore > randomNum) {
			losses++;
			$('#losses').text('Losses: ' + losses);
			$('#msg').show();
			$('#msg').text('you lost!').fadeOut(1000).fadeIn(1000).fadeOut(2000);

			reset();
		}
	});

//reset game
	function reset() {
		randomNumCrystals();
		console.log(crystals, blue, red, white, yellow);
		totalScore = 0;
		$('#userScore').text(totalScore);
		randomNum = Math.floor((Math.random() * 100) + 19);
		$('#randomNum').text(randomNum);
	}