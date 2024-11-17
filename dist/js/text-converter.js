document.addEventListener("DOMContentLoaded", function () {
    function loadHTML(file, elementId) {
        fetch(file)
            .then(response => response.text())
            .then(data => document.getElementById(elementId).innerHTML = data)
            .catch(error => console.error("Error loading HTML:", error));
    }

    // Load header and footer
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');

    // Disable text selection
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    // Text Converter Logic
    const textArea = document.getElementById("textArea");
    const toUppercaseBtn = document.getElementById("toUppercase");
    const toLowercaseBtn = document.getElementById("toLowercase");
    const toTitlecaseBtn = document.getElementById("toTitlecase");
    const toSentencecaseBtn = document.getElementById("tosentensecase");
    const toInversecaseBtn = document.getElementById("toinversecase");
    const toAlternatingcaseBtn = document.getElementById("toalternatingcase");
    const toCapitalizedcaseBtn = document.getElementById("tocapitalizedcase");
    const copyBtn = document.getElementById("copyText");
    const saveAsPdfBtn = document.getElementById("saveAsPdf");
    const resetBtn = document.getElementById("reset");


    // Helper Functions
    const toTitleCase = str => str.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());

    const toSentenceCase = str => str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());

    const toInverseCase = str => str.replace(/[a-zA-Z]/g, char =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    );

    const toAlternatingCase = str => str.split('').map((char, index) =>
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    ).join('');

    const toCapitalizedCase = str => str.replace(/\b\w/g, char => char.toUpperCase());

    // Button Event Listeners
    toUppercaseBtn.addEventListener("click", () => {
        textArea.value = textArea.value.toUpperCase();
    });

    toLowercaseBtn.addEventListener("click", () => {
        textArea.value = textArea.value.toLowerCase();
    });

    toTitlecaseBtn.addEventListener("click", () => {
        textArea.value = toTitleCase(textArea.value);
    });

    toSentencecaseBtn.addEventListener("click", () => {
        textArea.value = toSentenceCase(textArea.value);
    });

    toInversecaseBtn.addEventListener("click", () => {
        textArea.value = toInverseCase(textArea.value);
    });

    toAlternatingcaseBtn.addEventListener("click", () => {
        textArea.value = toAlternatingCase(textArea.value);
    });

    toCapitalizedcaseBtn.addEventListener("click", () => {
        textArea.value = toCapitalizedCase(textArea.value);
    });

    //Copy Button Code
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(textArea.value).then(() => {
            alert("Text copied to clipboard!");
        });
    });

    // Clear textarea logic
    document.getElementById("clear").addEventListener("click", () => {
        // Clear the content of the textarea
        document.getElementById("textArea").value = "";
    });

    //Reset Button Code
    let initialText = ""; // Empty initially

    // Update initialText whenever the user changes input
    textArea.addEventListener("input", () => {
        initialText = textArea.value;
    });

    resetBtn.addEventListener("click", () => {
        textArea.value = initialText; // Resets the text area to its initial state
    });
        
    // Save as file logic
    document.getElementById("saveAsTxt").addEventListener("click", () => {
        const blob = new Blob([textArea.value], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "text-file.txt";
        a.click();
    });

    document.getElementById("saveAsPdf").addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
    
        // Get text from the textarea
        const text = document.getElementById("textArea").value;
    
        // Define a max width for the text (e.g., 180 units)
        const maxWidth = 180;
    
        // Split the text into multiple lines if necessary
        const splitText = doc.splitTextToSize(text, maxWidth);
    
        // Add wrapped text to PDF document
        doc.text(splitText, 10, 10); // You can adjust the x, y position for text placement
    
        // Save the PDF as a file
        doc.save("text-file.pdf");
    });
    
        


});
