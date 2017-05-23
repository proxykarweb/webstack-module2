
(function(window){
				var speakWord = "Good Bye";
				var byeSpeaker = {}; 

				byeSpeaker.speak = (function(name){
						document.write(speakWord + " " + name + "<BR>"); 
					})

				window.byeSpeaker = byeSpeaker;
})(window)
