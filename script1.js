document.addEventListener("DOMContentLoaded", function() {
    const lines = [
        { id: 'line1', text: "LET'S CHECK" },
        { id: 'line2', text: 'YOUR' },
        { id: 'line3', text: 'MENTAL HEALTH STATUS' }
    ];
    
    let currentLineIndex = 0;
    let currentCharIndex = 0;

    function typeLine() {
        const line = lines[currentLineIndex];
        const textContainer = document.getElementById(line.id);

        if (currentCharIndex < line.text.length) {
            textContainer.textContent += line.text.charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeLine, 100); 
        } else {
            currentCharIndex = 0;
            currentLineIndex++;
            if (currentLineIndex < lines.length) {
                setTimeout(typeLine, 500); 
            } else {
                document.getElementById('button-container').style.opacity = 1;
            }
        }
    }

    lines.forEach(line => document.getElementById(line.id).textContent = '');
    typeLine();
});

document.getElementById('quiz-start').addEventListener('click', ()=> {
    window.location='quizinterface.html';


});

