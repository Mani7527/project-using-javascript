const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Great things are built one line of code at a time.",
  "Every expert was once a beginner.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Success is the sum of small efforts repeated daily.",
  "Debugging is just detective work for programmers.",
  "Dream it. Build it. Ship it.",
  "Make it work, make it right, make it fast.",
  "The best way to learn coding is to code.",
  "Errors are proof that you are trying.",
  "A bug is just an undocumented feature.",
  "Keep coding, keep learning, keep growing.",
  "Your future is created by what you do today.",
  "Small progress is still progress.",
  "Think twice, code once.",
  "Don’t fear errors. Learn from them.",
  "Consistency beats motivation.",
  "Good code is simple code.",
  "Code. Test. Debug. Repeat.",
  "Every problem has a solution.",
  "The more you practice, the better you become.",
  "Turn your ideas into reality with code.",
  "Learning to code is learning to think.",
  "Be curious. Keep experimenting.",
  "Challenges make you a better programmer.",
  "Stay patient. Great code takes time.",
  "One bug at a time.",
  "Build something today that you’ll be proud of tomorrow.",
  "Never stop learning."
];

const button=document.querySelector('button');
const quote=document.querySelector('h1')
button.addEventListener('click',()=>{
  const index=Math.floor(Math.random()*30);
  quote.textContent=quotes[index]

})