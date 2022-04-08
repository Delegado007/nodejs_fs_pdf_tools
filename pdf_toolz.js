const fs = require("mz/fs");
const { pdfToImage } = require("pdf-toolz/PDF2Image");

async function exportPageImages() {
  const pdf = await fs.readFile("test/prueba.pdf");
  const pageImages = await pdfToImage(pdf, "png", 400 /* dpi */);
  // Export the page images
  await fs.writeFile("page-1.png", pageImages[0]);
  await fs.writeFile("page-2.png", pageImages[1]);
  await fs.writeFile("page-3.png", pageImages[2]);
}

exportPageImages();
