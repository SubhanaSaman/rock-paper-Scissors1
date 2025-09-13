function rockPaper(){
    let result = document.getElementById('result');
    let option = Math.floor(Math.random()*3);
    let choice =["👊 Rock", "📄 Paper", "✂️ Scissors"];
    result.innerHTML = choice[option]
}