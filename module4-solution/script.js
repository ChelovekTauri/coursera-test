( function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name in names) {

    var firstLetter = names[name].charAt(0).toLowerCase();

      if (firstLetter == 'j') {
        // byeSpeaker.xxxx
        byeSpeaker.speak(names[name]);
      } 
      else {
        // helloSpeaker.xxxx
        helloSpeaker.speak(names[name]);
      }
  }

})();
