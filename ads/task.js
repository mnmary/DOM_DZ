arrRotators = document.querySelectorAll(".rotator");

function getGlobalIndex(rotator) {
  const arrBlock = rotator.querySelectorAll(".rotator__case");
  for (let i = 0; i < arrBlock.length; i++) {
    if (arrBlock[i].classList.contains("rotator__case_active")) {
      return i;
    }
  }
  return 0;
}

function startTimer(rotator) {
  const arrBlock = rotator.querySelectorAll(".rotator__case");

  if (!arrBlock.length) {
    return;
  }

  var globalIndex = getGlobalIndex(rotator);
  globalIndex === arrBlock.length - 1 ? (globalIndex = 0) : globalIndex++;

  for (let i = 0; i < arrBlock.length; i++) {
    arrBlock[i].classList.remove("rotator__case_active");

    if (i === globalIndex) {
      arrBlock[i].classList.add("rotator__case_active");
      if (arrBlock[i].dataset.color) {
        arrBlock[i].style.color = arrBlock[i].dataset.color;
      }
    }
  }

  let delay = arrBlock[globalIndex].dataset.speed
    ? Number(arrBlock[globalIndex].dataset.speed)
    : 1000;

  setTimeout(() => startTimer(rotator), delay);
}

for (let i = 0; i < arrRotators.length; i++) {
  startTimer(arrRotators[i]);
}
