var user = prompt("Who are you?").toLowerCase();

switch(user){
    case("i don't know"):
        console.log("Does anybody really know what time it is? Does anybody really care?");
        if(prompt("...is this an adequate response?") === "yes"){
            console.log("Wisdom can be attained by the curious.");
        } else {
            console.log(" I must rest now.");
        }
        break;
    case("the king"):
        console.log("If wishes were pennies and daydreams made of silver...");
        if ((prompt("...is this an adequate response?") === "yes")&& (prompt("... are you certain?") === "yes")){
            console.log("Wisdom can be attained by the curious.");
        } else {
            console.log(" I must rest now.");
        }
        break;
    case("words"):
        console.log("Wisdom comes from knowing that you know the words to every song by the Wyld Stallyns.");
        break;
        if((prompt("...is this an adequate response?") === "yes") || (prompt("will you accompany me to the barracks?") === "yes")){
            console.log("Wisdom can be attained by the curious.");
        } else {
            console.log(" I must rest now.");
        }
    default:
        console.log("your mind dissipates into the void.");
        break;
}
    
