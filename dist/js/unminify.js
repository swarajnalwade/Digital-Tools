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
    const errorMsg = document.getElementById('error-msg');
    const codeTypeSelect = document.getElementById('codeType');

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

    // Unminify Button Code
    unminifyBtn.addEventListener('click', function () {
        const code = textArea.value.trim();
        const codeType = codeTypeSelect.value;

        // Check if a valid code type is selected
        if (codeType === 'Select') {
            errorMsg.style.display = 'block';
            textArea.style.borderColor = 'red'; // Change border to red
            return;
        } else {
            errorMsg.style.display = 'none';
            textArea.style.borderColor = 'black'; // Reset border to default color
        }

        if (!code) {
            alert('Please paste code into the textarea before unminifying.');
            return;
        }

        try {
            let unminifiedCode;

            if (codeType === 'js') {
                // Beautify JavaScript
                unminifiedCode = js_beautify(code, {
                    indent_size: 4,
                    space_in_empty_paren: true,
                });
            } else if (codeType === 'html') {
                // Beautify HTML
                unminifiedCode = html_beautify(code, {
                    indent_size: 4,
                    preserve_newlines: true,
                });
            } else if (codeType === 'css') {
                // Beautify CSS
                unminifiedCode = css_beautify(code, {
                    indent_size: 4,
                });
            }

            if (unminifiedCode) {
                textArea.value = unminifiedCode;
            } else {
                alert('Could not unminify the code. Please check your input.');
            }
        } catch (error) {
            alert('Error while unminifying: ' + error.message);
        }
    });
});
