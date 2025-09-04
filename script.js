function syntaxHighlight(json) {
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'json-number';

        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
                match = match.slice(0, -1) + '<span class="json-bracket">:</span>';
            } else {
                cls = 'json-string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'json-bool';
        } else if (/null/.test(match)) {
            cls = 'json-null';
        }

        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function formatJSON(obj) {
    let json = JSON.stringify(obj, null, 2);
    
    json = syntaxHighlight(json);
    
    json = json.replace(/([{}[\],])/g, '<span class="json-bracket">$1</span>');
    
    return json;
}

async function loadJSON() {
    try {
        const response = await fetch('./portfolio.json');
        const portfolioData = await response.json();
        
        document.getElementById('jsonContent').innerHTML = formatJSON(portfolioData);
        
    } catch (error) {
        document.getElementById('jsonContent').textContent = 'Error: ' + error.message;
    }
}

loadJSON();