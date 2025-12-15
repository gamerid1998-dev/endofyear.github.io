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
  'When Ajay Devgn said "Pehli bar kisi ki choo chaa choo chaa pasand ai" mujhy sirf tum hi yaad ai',
  'Jab tum "pata ha kia hua" bolti ho mera dil to wahen phigal jata ha.',
  'Tumharay sath time itni jaldi guzar jata ha. Kash mai time rok sakta aur tumharay sath ko aur enjoy kr sakta. 2hrs ki call kis tarha mins mai khatam hoti ha pata hi nahi chalta.',
  'Meri har seedhi baat pr tumhare ulta jawabo ne mujhy kis tarha tumhara addict bana diya ha k bs tumhari kahi baatein dimag se nikalti hi nahi.',
  'Tumhari creativity ka mai dewana hun, bs kuch jhalak hi dikhai hain tumne lekin it keeps making me want to see more. I hate how you keep it hidden from me.',
  'Tumhari dedication to face every issue head first, by yourself shows k tum kitni determined aur strong ho. I love it and hate it at the same time.',
  'Abhi to milay thay aur itni jaldi ek saal bhi guzar gaya. Waqt bohat jaldi guzar raha ha, kuch dair ko tham jaye aur tum mere pas ruk jao. I want this moment to last forever.',
  'Calls pr tumhari awaz mai excitement, 3hr call ka yun mins mai khatam ho jana. Aur phir mai wohi call sara din soch k muskurata rahun, you have so much power over me.',
  'Tumhare serious act k pechay ek shararat chupi ha. Usko itna na dabao k wo kahen kho jaye. I love that shararti side of you.',
  'Kese bataun k tumsa koi nahi. Jitna bhi daikhun dil bharta nahi. Aur daikhne ki talab hatti nahi. Lekin tum meri sunti bhi to nahi.',
  'Mere phone mai har chez mute pr ha except for your notification. I like seeing your name on my phone.',
  'I miss you bs ek text nahi, ye ek emotion ha. Aisi feeling jo subha uthne k sath sb se pehle ati ha, duniya ki har chez tumhari taraf point krti ha jese mere din ki book ka har chapter tumhare hi naam likha ho.',
  'If life is Biryani, you are my dahi. If life is Coke, you are my icecube.',
  'Jab tumhe daikhta hun to khud ko yaad dilana parta ha k saans bhi leni hoti ha.',
  'Aj bhi jab tumhari notification daikhta hun to dil ki dharkan tez ho jati ha, khud ko roka nahi jata k message check karun aur jawab dun. Chahay kitna hi busy kiyu na hun.',
  'Watching navigate uni, handling every situation and shitty people as best you can, tackling things head on by yourself. Watching you grow as a person makes me feel so proud.',
  'If comfort was a face, it would look like you. If belonging was an address, it would lead straight to you. If warmth was a place, its echo would be your voice. If home was a person, it would be you.',
  'You are more magical than Geet when you are yapping on our call.',
  'Tumhara baat baat pr song lyrics quote krna and dumb me jisko aksar reference samajh nahi ata tha. Phir pagal ki tarha usko google kr k song ka sunna bs tumhari waja se.',
  'Til sitara agar, chehra tumhara asmaan --- Ek nigah tum jo daalo, roshan ho jaaye jahan.',
  'December 17 - grocery list?',
  'December 18',
  'December 19 - you are just saying that',
  'December 20 - number of reels for her.',
  'December 21',
  'Aj bhi tumhari snap ki notification mujhy bechain kr deti ha. Dil mai ek umeed si hoti ha k selfie ho. Tumhe daikh k dil kahan bharta ha, jitni bar daikhun wohi excitement hoti ha jesi pehli bar daikh k hui thi.',
  'December 23',
  'December 24 - songs in my browser.',
  'December 25',
  'December 26 - why me',
  'December 27',
  'December 28 - sponge',
  'December 29',
  'Meri notes app kholun to 13 notes tumhare naam se shuru hote hain. Koi lambi tareef to koi lecture to koi aisi baat jo mujhse na kahi gai ho wahan likh deta hun.',
  'December 31 - last day of 2025',
  '2026 ka bs ek hi goal ha k mai tumhe muskurate hue hi rakhun. Tumhare saray dukh, dard, pareshaniyan mita na sakun to kuch lamho k liye unko tumse thora dur krdun aur bs tumhe chehakta hua daikhun.',
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










