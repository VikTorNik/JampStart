document.addEventListener("DOMContentLoaded", () => {
  const ROOT = document.documentElement;
  const widthWindowApplication = 1440;
  const heightWindowApplication = 800;
  const normalRatio = 1;

  window.addEventListener('resize', (e) => {
    const ratioWidth = window.innerWidth / widthWindowApplication;
    const ratioHeight = window.innerHeight / heightWindowApplication;
    if ((ratioWidth < 1) || (ratioHeight < 1)) {
      ROOT.style.setProperty("--ratioSizeWin", Math.min(ratioWidth, ratioHeight));      
    } else {      
      ROOT.style.setProperty("--ratioSizeWin", normalRatio);      
    }
    
  });

});
