// <!-- <!DOCTYPE html>
// <html>

// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1">
// <!-- 
// 	<title>chatbot1</title>
// 	<script type="text/javascript" src="https://unpkg.com/rivescript@latest/dist/rivescript.min.js"></script>
// 	<script
// 	  src="https://code.jquery.com/jquery-3.2.1.min.js"
// 	  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
// 	  crossorigin="anonymous"></script>
//     <script type="text/javascript" src="libraries/p5.js"></script>
//     <!--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/addons/p5.dom.js"></script>
//     <script type="text/javascript" src="libraries/p5.dom.js"></script>
	
// 	<script type="text/javascript" src="libraries/p5.sound.js"></script>
// 	<script type="text/javascript" src="sketch.js"></script>
// </head>

// <body>

// 	<h1>Chatbot</h1>

// 	<p>
// 		say: <input id="user_input" />
// 		<button id="submit">submit</button>
// 	</p>

// 	<p>
// 		reply: <span id="output"></span>
// 	</p>


// </body>

// </html> --></meta>// Daniel Shiffman
// // http://codingtra.in
// // http://patreon.com/codingtrain

// // Number Guessing Chatbot
// Edited Video: https://www.youtube.com/watch?v=zGe1m_bLOFk
// function setup() {
//     noCanvas();
  
//     let bot = new RiveScript();
//     bot.loadFile('brain.rive', brainReady, brainError);
  
//     function brainReady() {
//       console.log('Chatbot ready!');
//       bot.sortReplies();
//       let num = floor(random(10)) + 1;
//       console.log(num);
//       let reply = bot.reply('local-user', 'set ' + num);
//     }
  
//     function brainError() {
//       console.log('Chatbot error!');
//     }
  
//     let button = select('#submit');
//     let user_input = select('#user_input');
//     let output = select('#output');
  
//     button.mousePressed(chat);
  
//     function chat() {
//       let input = user_input.value();
//      let reply = bot.reply('local-user', input);
//      output.html(reply);


//     }
//   }