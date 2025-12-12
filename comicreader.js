let currentPage = 1;
let maxPage = 9; // change if you have more pages

function updatePage() {
  const img = document.getElementById("comicPage");
  img.src = `comics/amongus/page${currentPage}.jpg`;
}

function nextPage() {
  if (currentPage < maxPage) {
    currentPage++;
    updatePage();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
}

window.onload = updatePage;
