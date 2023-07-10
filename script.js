/*
--Some other javascript animation features are inserted into HTML and CSS
*/

//opening PDF on popup window
function openPDF() {
    const pdfUrl = 'cv-heber.pdf';
    const pdfWindow = window.open('', 'PDFWindow', 'width=800,height=600');
 
    pdfWindow.document.write(`
      <html>
        <head>
          <title>PDF Preview</title>
        </head>
        <body>
          <embed width="100%" height="100%" type="application/pdf" src="${pdfUrl}" />
        </body>
      </html>
    `);
  }


 // function to fo to the top of the page
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE
  }
