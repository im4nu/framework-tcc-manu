import "./style.css";
import panzoom from "panzoom";
import { createIcons, ZoomIn, ZoomOut, RotateCcw } from "lucide";

document.querySelector("#app").innerHTML = `
  <div class="controls">
    <button id="zoom-in" title="Zoom In (ou use scroll do mouse)">
      <i data-lucide="zoom-in"></i>
    </button>
    <button id="zoom-out" title="Zoom Out (ou use scroll do mouse)">
      <i data-lucide="zoom-out"></i>
    </button>
    <button id="reset" title="Resetar Visualização">
      <i data-lucide="rotate-ccw"></i>
    </button>
    <div class="info">Use o scroll do mouse ou arraste para navegar</div>
  </div>
  <div class="image-container">
    <img src="/framework.png" alt="Framework" class="framework-image" />
  </div>
`;

// Inicializa os ícones Lucide
createIcons({
  icons: {
    ZoomIn,
    ZoomOut,
    RotateCcw,
  },
  attrs: {
    width: 20,
    height: 20,
    "stroke-width": 2.5,
  },
});

// Referências aos botões
const zoomInBtn = document.getElementById("zoom-in");
const zoomOutBtn = document.getElementById("zoom-out");
const resetBtn = document.getElementById("reset");

// Aguarda a imagem carregar
const img = document.querySelector(".framework-image");
img.onload = () => {
  // Inicializa o panzoom na imagem
  const instance = panzoom(img, {
    maxZoom: 10,
    minZoom: 0.5,
    bounds: true,
    boundsPadding: 0.1,
    zoomSpeed: 0.065,
    smoothScroll: true,
  });

  // Botões de controle
  zoomInBtn.addEventListener("click", () => {
    instance.zoomTo(0, 0, 1.2);
  });

  zoomOutBtn.addEventListener("click", () => {
    instance.zoomTo(0, 0, 0.8);
  });

  resetBtn.addEventListener("click", () => {
    instance.moveTo(0, 0);
    instance.zoomAbs(0, 0, 1);
  });
};
