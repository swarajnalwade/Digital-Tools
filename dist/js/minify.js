    
    function loadHTML(file, elementId) {
        fetch(file)
            .then(response => response.text())
            .then(data => document.getElementById(elementId).innerHTML = data)
            .catch(error => console.error("Error loading HTML:", error));
    }

    // Load header and footer
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');

    document.addEventListener("DOMContentLoaded", function () {
        const copyBtn = document.getElementById("copyText");
        const resetBtn = document.getElementById("reset");
        const clearBtn = document.getElementById("clear");
        const textArea = document.getElementById("textArea");
        const unminifyBtn = document.getElementById("unminify");
        
        let initialText = textArea.value; // Keep track of the initial value in the text area
    
        // Copy Button Code
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(textArea.value).then(() => {
                alert("Text copied to clipboard!");
            }).catch(err => {
                alert("Error copying text: " + err);
            });
        });
    
        // Reset Button Code
        textArea.addEventListener("input", () => {
            initialText = textArea.value; // Update initial text if the user edits the text area
        });
    
        resetBtn.addEventListener("click", () => {
            textArea.value = initialText; // Reset the text area to its initial state
        });
    
        // Clear Button Code
        clearBtn.addEventListener("click", () => {
            textArea.value = ""; // Clear the text area
        });
    

    });
    
    
    