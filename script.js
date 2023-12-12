var quotes = [
    {
        quoate : "“Be yourself; everyone else is already taken.”" ,
        author : "― Oscar Wilde"
    },
    {
        quoate : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,
        author : "― Albert Einstein"
    },
    {
        quoate : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" ,
        author : "― Dr. Seuss"
    },
    {
        quoate : "“Be the change that you wish to see in the world.”" ,
        author : "― Mahatma Gandhi"
    },
    {
        quoate : "“If you tell the truth, you don't have to remember anything.”" ,
        author : "― Mark Twain"
    },
    {
        quoate : "“A friend is someone who knows all about you and still loves you.”" ,
        author : "― Elbert Hubbard"
    },
];


    var quoateOldNumber = Math.floor(Math.random()*quotes.length);
function showQuote(){
    var quoateNewNumber = Math.floor(Math.random()*quotes.length);
    while(quoateNewNumber == quoateOldNumber){
        quoateNewNumber = Math.floor(Math.random()*quotes.length);
    }
    if(quoateNewNumber != quoateOldNumber){
        quoateOldNumber = quoateNewNumber
    }
    document.getElementById('quote').innerHTML = quotes[quoateNewNumber].quoate;
    document.getElementById('author').innerHTML = quotes[quoateNewNumber].author;
}

