document.getElementById('ourstory').addEventListener('click', ()=> {
    window.location='about.html#OurStory';


});
document.getElementById('mission').addEventListener('click', ()=> {
    window.location='about.html#MissionAndVision';


});
document.getElementById('philosophy').addEventListener('click', ()=> {
    window.location='about.html#Philosophy';


});

document.getElementById('chatgroup').addEventListener('click', ()=> {
    window.location='chat.html';


});
document.getElementById('quiz').addEventListener('click', ()=> {
    window.location='quiz.html';


});

    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'http://localhost:5001';
    });
    document.getElementById('contact').addEventListener('click', ()=> {
        window.location='contact.html';
    
    
    });
    
    

