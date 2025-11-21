/*
  ==========================================
  Custom Scripts v0.8
  ==========================================
*/

/*
  Load up the particles
  particlesJS.load(@dom-id, @path-json, @callback (optional));
*/
particlesJS.load('particles-js', 'js/particles-config.json', function(){
  console.log('callback - particles.js config loaded');
});

/*
  =============================================

  TEST THIS YOURSELF BEFORE SHOWING IT TO THEM

  Also, you'll probably have to change some stuff
  come November so remind me to help you out with
  this in case your messages will last longer
  than October.

  =============================================
*/

// Add messages in single quotation marks here
let messagesArray = [
  'Itni bhi kia jaldi ha? Come back after midnight.',
  'Tumharay sonay k baad humari chat bar bar parh k muskurata rehta hun, humari raat ki bato ko yaad krta rehta hun. Tumhari yaad sonay hi nahi deti.',
  'Tumhe compliments sunna pasand nahi and you dont know how to react and thats okay, I dont say them to get a reaction I say them cause they are all true.',
  'Tumhari sari wins, choti hon ya bari sab tumhare sath celebrate kr k tumhe hamesha hyped rakhna chahta hun.',
  'Tumhari awaz sunta hun to bs ushi ko suntay rehne ka dil karta ha. K bs tum bolti raho aur mai sunta rahun. Tumhari awaz mai ek energy ha jiska mai dewana hun.',
  'Tumhara subtle sarcasm aur dry humor. Yehi chezen tumhe sab se alag banati hain.',
  'November 27',
  'November 28',
  'Tumharay sath time itni jaldi guzar jata ha. Kash mai time rok sakta aur tumharay sath ko aur enjoy kr sakta. 2hrs ki call kis tarha mins mai khatam hoti ha pata hi nahi chalta.',
  'Meri har seedhi baat pr tumhare ulta jawabo ne mujhy kis tarha tumhara addict bana diya ha k bs tumhari kahi baatein dimag se nikalti hi nahi.',
  'When Ajay Devgn said "Pehli bar kisi ki choo chaa choo chaa pasand ai" mujhy sirf tum hi yaad ai',
  'December 02',
  'December 03 - met first time',
  'December 04',
  'December 05',
  'Kese bataun k tumsa koi nahi. Jitna bhi daikhun dil bharta nahi. Aur daikhne ki talab hatti nahi. Lekin tum meri sunti bhi to nahi.',
  'December 07',
  'December 08',
  'December 09',
  'December 10',
  'December 11',
  'December 12',
  'December 13',
  'December 14',
  'December 15',
  'December 16',
  'December 17',
  'December 18',
  'December 19',
  'December 20',
  'December 21',
  'December 22',
  'December 23',
  'December 24',
  'December 25',
  'December 26',
  'December 27',
  'December 28',
  'December 29',
  'December 30',
  'December 31',
  'January 01 - New year',
];
  


function showMessage() {
  // Uncomment the line below and comment the line after it to remove the hardcoded date
  currentDate = moment().format("DD-MM-YYYY");
  // let currentDate = "01-01-2026";
  // Since the messages will be shown on starting from 21 November, so...
  // let messageIndex = currentDate.substr(0, 2) - 21;
  let messageIndex = moment(currentDate, "DD-MM-YYYY").diff(moment("21-11-2025", "DD-MM-YYYY"), "days");
  // If the current date is after November 21 then show the daily message
  // if(currentDate >= "21-11-2025") {
  if (moment(currentDate, "DD-MM-YYYY").isSameOrAfter(moment("21-11-2025", "DD-MM-YYYY"))
  && moment(currentDate, "DD-MM-YYYY").isSameOrBefore(moment("01-01-2026", "DD-MM-YYYY"))) {
    document.getElementById("message").classList.remove("fadeInDown");
    document.getElementById("message").classList.add("fadeOutUp");
    setTimeout(function() {
      document.getElementById("message").innerHTML = messagesArray[messageIndex];
      document.getElementById("message").classList.remove("fadeOutUp");
      document.getElementById("message").classList.add("fadeInDown");
    }, 1000);
  } else {
    document.getElementById("message").innerHTML = "You'll have to wait till November 21 to see the messages.";
  }
}
