/* --- Question Functions ---
   -------------------------------------------------- */

function next_q()
{
	if ( $('#end').hasClass('hide') == true && $('#failed').hasClass('hide') == true && !interviewFailed )
	{
		var question = q.shift();
		
		if (question != 'done')
		{
			// Animate question change
			$('#question-container').css('opacity', 0).css('transform', 'translateY(20px)');
			
			setTimeout(function() {
				$('#question').html(question);
				$('#question-container').css('opacity', 1).css('transform', 'translateY(0)');
			}, 200);
			
			answeredQuestions++;
			updateProgress();
			
			// Set timer based on question number
			if (isFirstQuestion) {
				currentQuestionTime = 30;
				isFirstQuestion = false;
			} else {
				currentQuestionTime = 20;
			}
			
			timer_restart();
			display_tip();
		} else
		{
			// All questions answered - interview complete!
			end_interview(true);
		}
	}
}



/* --- Timer Functions ---
   -------------------------------------------------- */

function timer_tick()
{
	if (interviewFailed) return;
	
	$('#timer-container').removeClass('timer-warning');
	$('#timer-container').removeClass('timer-fail');
	
	timer = timer - 1;
	
	$('#timer').html(timer);
	
	// Update circular progress based on current question time
	var circumference = 283; // 2 * PI * 45
	var offset = circumference - (timer / currentQuestionTime) * circumference;
	$('.timer-progress').css('stroke-dashoffset', offset);
	
	// Warning thresholds
	var warningThreshold = currentQuestionTime * 0.5; // 50% of time
	var failThreshold = currentQuestionTime * 0.25; // 25% of time
	
	if (timer < warningThreshold && timer >= failThreshold)
	{
		$('#timer-container').addClass('timer-warning');
	}
	if (timer < failThreshold)
	{
		$('#timer-container').removeClass('timer-warning');
		$('#timer-container').addClass('timer-fail');
	}
	if (timer <= 0)
	{
		// FAILED - ran out of time on this question
		var attempt = {
			timestamp: interviewStartTime,
			questionsAnswered: answeredQuestions - 1, // Don't count the one they failed
			totalTime: 600 - masterTimer,
			passed: false,
			failReason: 'timeout'
		};
		
		interviewFailed = true;
		saveAttempt(attempt);
		show_failure_screen(attempt);
	}
	
	if (!interviewFailed) {
		setTimeout('timer_tick();', 1000);
	}
}

function timer_restart()
{
	$('#timer-container').removeClass('timer-warning');
	$('#timer-container').removeClass('timer-fail');
	$('.pg').addClass('hide');
	$('#timer-container').removeClass('hide');
	
	timer = currentQuestionTime;
	
	$('#timer').html(currentQuestionTime);
	$('.timer-progress').css('stroke-dashoffset', 0);
}



/* --- Tip Functions ---
   -------------------------------------------------- */

function display_tip()
{
	var tip = tips.shift();
	
	// Animate tip change
	$('.tip').css('opacity', 0).css('transform', 'translateY(10px)');
	
	setTimeout(function() {
		$('#tip').html(tip);
		$('.tip').css('opacity', 1).css('transform', 'translateY(0)');
	}, 300);
	
	tips.push(tip);
}
