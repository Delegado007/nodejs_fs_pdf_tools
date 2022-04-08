const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");

// Loading file from file system into typed array
const pdfPath = "test/prueba.pdf";

// Will be using promises to load document, pages and misc data instead of
// callback.
const loadingTask = pdfjsLib.getDocument(pdfPath);
loadingTask.promise
  .then(function (doc) {
    const numPages = doc.numPages;
    console.log("# Document Loaded");
    console.log("Number of Pages: " + numPages);

    // Loading of the first page will wait on metadata and subsequent loadings
    // will wait on the previous pages.

    return lastPromise;
  })
  .then(
    function () {
      console.log("# End of Document");
    },
    function (err) {
      console.error("Error: " + err);
    }
  );
