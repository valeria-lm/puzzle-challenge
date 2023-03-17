let drag = null;

// permite que una imagen se arrastre y se pueda soltar en una box
function handleDragStart(e) {
  drag = this;
  e.dataTransfer.effectAllowed = "move";
}

// mueve la imagen arrastrada a la caja correspondiente
function handleDrop(e) {
  if (this.classList.contains("puzzle-pieces__box")) {
    this.appendChild(drag);
  }
  e.preventDefault();
}

// permite que una box reciba imágenes arrastradas
function handleDragOver(e) {
  e.preventDefault();
}

// permite que se pueda interactuar con las imágenes a través del drag and drop
let images = document.querySelectorAll("img");
images.forEach(function (img) {
  img.addEventListener("dragstart", handleDragStart);
});

// permite habilitar la funcionalidad de drag and drop para todas las boxes "puzzle-pieces__box"
let boxes = document.querySelectorAll(".puzzle-pieces__box");
boxes.forEach(function (box) {
  box.addEventListener("drop", handleDrop);
  box.addEventListener("dragover", handleDragOver);
});
