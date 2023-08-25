const programmingJokes = ["Why did the developer go broke? Because he lost his domain in a bet.",
    "Why do programmers prefer using the stairs? Because elevators are full of bugs.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "Why do programmers hate nature? It has too many branches."];


const funnyJokes = ["Why don't skeletons fight each other? They don't have the guts.",
    "How does a snowman get around? By riding an icicle!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    " Why did the bicycle fall over? Because it was two-tired!",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised."];

const miscellaneousJokes = ["What kind of car does Yoda drive around in? A Toyoda.",
    "Which automobile is best for a family road trip across the ocean? A Honda Sea-RV.",
    "I don’t want to take my dog on road trips! He can be such a bark seat driver.",
    "The food on the small aircraft wasn’t good…It was a little plane.",
    "Who invented the first airplane that couldn’t take off? The Wrong Brothers."];

    const categorySelect = document.getElementById("category");
    const generateBtn=document.getElementById("generateBtn");
    const jokeDisplay=document.getElementById("jokeDisplay");

    generateBtn.addEventListener("click" ,() => {
const selectedCategory = categorySelect.value;
let joke;

if (selectedCategory==="programming") {
joke= programmingJokes[Math.floor(Math.random()*programmingJokes.length)];
}
else if(selectedCategory==="funny"){
joke=funnyJokes[Math.floor(Math.random()*funnyJokes.length)];
}
else if(selectedCategory==="miscellaneous"){
    joke=miscellaneousJokes[Math.floor(Math.random()*miscellaneousJokes.length)]

}
jokeDisplay.textContent=joke;
    });
  