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
    let result = '';
    let inString = false;
    let escapeNext = false;
    let spanStack = [];

    json = syntaxHighlight(json);

    for (let i = 0; i < json.length; i++) {
        let char = json[i];
        let remaining = json.substring(i);
        
        if (remaining.startsWith('<span')) {
            let endIndex = remaining.indexOf('>');
            if (endIndex !== -1) {
                let spanTag = remaining.substring(0, endIndex + 1);
                result += spanTag;
                i += endIndex;
                spanStack.push(true);
                continue;
            }
        }
        
        if (remaining.startsWith('</span>')) {
            result += '</span>';
            i += 6;
            spanStack.pop();
            continue;
        }
        
        if (spanStack.length === 0 && /[{}[\],]/.test(char)) {
            result += '<span class="json-bracket">' + char + '</span>';
        } else {
            result += char;
        }
    }
    
    return result;
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