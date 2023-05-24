document.addEventListener("DOMContentLoaded", () => {
  const ROOT = document.documentElement;
  const widthWindowApplication = 1440;
  const heightWindowApplication = 800;
  const normalRatio = 1;
  const introText = [
    "Професійні пускові дроти<br>українського виробництва.",
    "М'який кабель марки КГ, залишається гнучким при сильному морозі. Мідна лужена плетінка з'єднує дві половини «крокодилів», забезпечуючи рівномірне розподілення струму та велику площу контакту з клемою акумулятора. Підсилені «крокодили» забезпечують чудовий притиск.",
    "Дозвольте собі придбати якісні дроти, які будуть служити роками і які не соромно подарувати.",
    "Додатково виготовляємо дроти для зварювальних апаратів, перемички гнучкі та перемички з шини.",
  ];

  const showintroTextLandscapeWindow = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-landscape";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='left-bg-one'><div class='intro-text-landscape'>"];
    introText.forEach((paragraphIntro) => introTextHTML.push(`<p>${paragraphIntro}</p>`));
    introTextHTML.push("</div></div><div class='right-bg-one'></div>");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);
  };

  const showintroTextPortraitWindow = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-portrait";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='portrait-backgrount'><div class='intro-text-portrait'>"];
    introText.forEach((paragraphIntro) => introTextHTML.push(`<p>${paragraphIntro}</p>`));
    introTextHTML.push("</div></div>");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);
  };

  // const resizeWindowApplication = () => {
  //   let ratioWidth;
  //   let ratioHeight;
  //   if (window.innerWidth >= window.innerHeight) {
  //     showintroTextLandscapeWindow();
  //     ratioWidth = window.innerWidth / widthWindowApplication;
  //     ratioHeight = window.innerHeight / heightWindowApplication;
  //   } else {
  //     showintroTextPortraitWindow();
  //     ratioWidth = window.innerWidth / heightWindowApplication;
  //     ratioHeight = window.innerHeight / widthWindowApplication;
  //   }
  //   if ((ratioWidth < 1) || (ratioHeight < 1)) {
  //     ROOT.style.setProperty("--ratioSizeWin", Math.min(ratioWidth, ratioHeight));
  //   } else {
  //     ROOT.style.setProperty("--ratioSizeWin", normalRatio);
  //   }
  // }

  const resizeWindowApplication = () => {
    let ratioWidth;
    let ratioHeight;
    if (window.innerWidth >= window.innerHeight) {
      showintroTextLandscapeWindow();
      ratioWidth = document.documentElement.clientWidth / widthWindowApplication;
      ratioHeight = document.documentElement.clientHeight / heightWindowApplication;
    } else {
      showintroTextPortraitWindow();
      ratioWidth = document.documentElement.clientWidth / heightWindowApplication;
      ratioHeight = document.documentElement.clientHeight / widthWindowApplication;
    }
    if ((ratioWidth < 1) || (ratioHeight < 1)) {
      ROOT.style.setProperty("--ratioSizeWin", Math.min(ratioWidth, ratioHeight));
    } else {
      ROOT.style.setProperty("--ratioSizeWin", normalRatio);
    }
  }

  resizeWindowApplication();
  window.addEventListener('resize', (e) => resizeWindowApplication());

});


// const windowInnerWidth = document.documentElement.clientWidth
// const windowInnerHeight = document.documentElement.clientHeight
// const pageWidth = document.documentElement.scrollWidth
// const pageHeight = document.documentElement.scrollHeight
