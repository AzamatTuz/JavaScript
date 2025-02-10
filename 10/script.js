const div = document.getElementById('div');
const apiUrl = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.forEach(q => {
            const text = document.createElement('h1');
            const answer = document.createElement('h3');
            const options = document.createElement('p');
            text.textContent = q.question;
            answer.textContent = q.answer;
            options.textContent = q.options
            div.appendChild(text)
            div.appendChild(answer)
            div.appendChild(options)
        });
        
    } catch (error) {
        console.error('Kate' + error)
    }



}

fetchData()