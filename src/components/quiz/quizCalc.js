const matchMultipleFunc = (userAnswer, options) => {
    // how many of the users answers are in the options listed
    const numMatches = options.filter(option => userAnswer.includes(option));
    return numMatches;
  }
  const sliderFunc = (userAnswer, options) => {
    const userAnswerRange = [userAnswer - 1, userAnswer, userAnswer + 1]
    const userNum = userAnswer.reduce(((x, y) => x + y), 0) 
    const optionsRange = options 
    const optionsNum = optionsRange.reduce(((x, y) => x + y), 0)
    // closer the numbers are, the higher the score
    const score = optionsNum - userNum;
    const maxPoints = 10;
    return Math.round(maxPoints / score);
  }

  const calculationTypeMap = {
    matchMultiple: matchMultipleFunc,
    slider: sliderFunc
  }
  
  const determineTopDestinations = () => {
    data.questions.forEach((question) => {
      // get users answer for that question & save to a variable
      const userAnswer = data.userAnswers.find(ua = ua.question === question);



document.getElementById("form1").onsubmit=function() {
    //displays the response DOM element
 document.getElementById("response").style.display = "block";
 
 //resets the DOM element on submit
 document.getElementById("answer").innerHTML = "";
 
   activities = document.querySelector('input[name = "activities"]:checked').value;
   accomodations = document.querySelector('input[name = "accomodations"]:checked').value;   
   mood = document.querySelector('input[name = "moods"]:checked').value;
   food = document.querySelector('input[name = "foods"]:checked').value;
     
   // initialize score variables 
   adventure = 0;
   beach = 0;
   cultural = 0;
   mountain = 0;
   pampered = 0;
   party = 0;

   //function to calculate score for each question
   function eachscore(x){
   if(x == "adventure") { adventure = adventure + 1}
   if(x == "beach") { beach = beach + 1}
   if(x == "cultural") { cultural = cultural + 1}
   if(x == "mountain") { mountain = mountain + 1}
   if(x == "pampered") { pampered = pampered + 1}
   if(x == "party") { party = party + 1}
   }
   // for the above function, you could also change the 1 to a variable so you could give more points for certain questions
   
   //call function for each question
   eachscore(eval("activities"));
   eachscore(eval("accomodations"));
   eachscore(eval("moods"));
   eachscore(eval("foods"));
   
   
   all = [adventure, beach, cultural, mountain, pampered, party];
   
 //get the max score  in the array
 maxscore = Math.max.apply(Math,all);
 
 // object holding scores and feedback	
 scores = [{index:0, feedback: "Adventure"},
 {index:1, feedback: "beach"},
 {index:2, feedback: "cultural"},
 {index:3, feedback: "mountain"},
 {index:4, feedback: "pampered"},
 {index:5, feedback: "party"}];
 
 //figure out which index # holds the max score 
 for(i=0; i<all.length; i++) {
 if(all[i]==maxscore) {
 //this gets one answer, the last one it encounters with a match
 document.getElementById("answer").innerHTML = scores[i].feedback;
 
 //this version would allow for appending multiple answers; replace statement above
 //document.getElementById("answer").innerHTML += scores[i].feedback + "; ";
 }
 }
        
return false; // required to not refresh the page; just leave this here
    }// end the submit function
