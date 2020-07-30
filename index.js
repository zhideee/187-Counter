let button = document.getElementById("bttn");
let count = 0;
let biszu = 187;

function counter(){
    count++;
    biszu--;
    document.getElementById("zähler").innerHTML = "Guthaben: " + count + "$";
    document.getElementById("biszu").innerHTML = "Bis 187: " + biszu;
    if(count >= 187) {
        document.getElementById("187").play();
        document.getElementById("zähler").innerHTML = "187$$$!!!!!";
        document.getElementById("biszu").innerHTML = "Millionär · 187 Strassenbande · Bonez MC · Gzuz";
        button.innerHTML = "187 beste";
        document.getElementById("download").innerHTML = "Download";
    }
}
function Download(){
    window.location.href = "https://drive.google.com/uc?export=download&id=1rqTWzp2ekkFvXkq0649OK3E3__j2SpOm";
}