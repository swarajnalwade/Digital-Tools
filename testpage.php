<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Merge PDF</title>
    <link href="dist/css/app.311f6ed.css" rel="stylesheet">
</head>
<body>
    <?php include("header.php"); ?>

    <!-- Your main content goes here -->

    
    <div class="main">
    <div class="tool tool--small">
        <div class="tool__workarea" id="workArea">
            
            <!-- Drop Area for Files -->
            <div id="dropArea"></div>
            
            <!-- Tool Header -->
            <div class="tool__header">
                <h1 class="tool__header__title">Merge PDF files </h1>
                <h2 class="tool__header__subtitle">
                    Combine PDFs in the order you want with the easiest PDF merger available.
                </h2>
            </div>
            
            <!-- Uploading Progress Bar -->
            <div class="uploading__bar uploading__bar--small">
                <span class="uploading__bar__completed"></span>
            </div>
            
            <!-- Uploader Section -->
            <div id="uploader" class="uploader">
                <a class="uploader__btn tooltip--left" id="pickfiles" href="javascript:;" title="Add more files">
                    <!-- Upload Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke-linecap="round" stroke-width="2" stroke="#fff" fill="none" stroke-linejoin="round">
                        <desc>Upload your file and transform it.</desc>
                        <path d="M10 1.833v16.333"/>
                        <path d="M1.833 10h16.333"/>
                    </svg>
                    <span>Select PDF files</span>
                </a>

                <!-- Drop Text -->
                <div class="uploader__droptxt">or drop PDFs here</div>
            </div>
        </div>
    </div>
</div>

    
    <?php include("footer.php"); ?>
</body>
</html>
