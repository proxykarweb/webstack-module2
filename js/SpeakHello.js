// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =



(function(window){
	var helloSpeaker = {};
	helloSpeaker.speak = function(name){
			document.write("hello" + name+ "<BR>"); 
		};

	window.helloSpeaker = helloSpeaker;
})(window);




//helloSpeaker.speak("Name"); 

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
