import "./style.css";
import panzoom from "panzoom";

document.querySelector("#app").innerHTML = `
  <div class="controls">
    <button id="zoom-in" title="Zoom In (ou use scroll do mouse)">🔍+</button>
    <button id="zoom-out" title="Zoom Out (ou use scroll do mouse)">🔍−</button>
    <button id="reset" title="Resetar Visualização">↻</button>
    <div class="info">Use o scroll do mouse ou arraste para navegar</div>
  </div>
  <div class="image-container">
    <img src="/assets/framework.png" alt="Framework" class="framework-image" />
  </div>
`;

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
  document.getElementById("zoom-in").addEventListener("click", () => {
    instance.zoomTo(0, 0, 1.2);
  });

  document.getElementById("zoom-out").addEventListener("click", () => {
    instance.zoomTo(0, 0, 0.8);
  });

  document.getElementById("reset").addEventListener("click", () => {
    instance.moveTo(0, 0);
    instance.zoomAbs(0, 0, 1);
  });
};
