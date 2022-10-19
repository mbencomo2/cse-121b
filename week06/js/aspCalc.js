const aspCalc = {
  commonRatios: [
    {
      name: 'Square',
      value: [1, 1]
    },
    {
      name: 'Standard Photo',
      value: [2, 3]
    },
    {
      name: 'SD Video',
      value: [4, 3]
    },
    {
      name: 'Large Photo Print',
      value: [5, 4]
    },
    {
      name: 'FHD Video',
      value: [16, 9]
    },
    {
      name: 'FHD SmartPhone',
      value: [9, 16]
    },
    {
      name: 'Cinema Screen',
      value: [21, 9]
    }],
  init: function () {
    setCommonRatios(this.commonRatios);
    setAspectRatio(this.commonRatios);

    document.getElementById('preset').addEventListener('change', aspCalc.setAspects);
    document.getElementById('submitButton').addEventListener('click', aspCalc.updateImg);
    document.getElementById('pixelHeight').addEventListener('input', aspCalc.updateWidth);
    document.getElementById('pixelWidth').addEventListener('input', aspCalc.updateHeight);
    document.getElementById('aspectHeight').addEventListener('input', aspCalc.updateHeight);
    document.getElementById('aspectWidth').addEventListener('input', aspCalc.updateWidth);

  },
  setAspects: function () {
    setAspectRatio(aspCalc.commonRatios);
  },
  updateImg: function () {
    const h = document.getElementById('pixelHeight').value;
    const w = document.getElementById('pixelWidth').value;

    updateImage(w, h);
  },
  updateHeight: function () {
    const h = document.getElementById('pixelHeight');
    const w = document.getElementById('pixelWidth');
    const ah = document.getElementById('aspectHeight');
    const aw = document.getElementById('aspectWidth');

    h.value = calcHeight(w.value, aw.value, ah.value);
  },
  updateWidth: function () {
    const h = document.getElementById('pixelHeight');
    const w = document.getElementById('pixelWidth');
    const ah = document.getElementById('aspectHeight');
    const aw = document.getElementById('aspectWidth');

    w.value = calcWidth(h.value, aw.value, ah.value);
  }
}

function setCommonRatios(array) {
  const select = document.getElementById('preset')
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const option = document.createElement('option');
    option.value = element.name;
    option.textContent = `${element.name} - ${element.value[0]}:${element.value[1]}`;
    select.appendChild(option);
  }
}

function setAspectRatio(array) {
  const w = document.getElementById('aspectWidth');
  const h = document.getElementById('aspectHeight');
  const selector = document.getElementById('preset');

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (selector.value == element.name) {
      w.value = element.value[0];
      h.value = element.value[1];
    }
  }

  document.getElementById('pixelWidth').value = w.value * 120;
  document.getElementById('pixelHeight').value = h.value * 120;

  aspCalc.updateImg(w.value, h.value);
}

function updateImage(w, h) {
  const fakeImg = document.getElementById('fakeImg');
  const caption = document.getElementById('fakeImgSize');
  const warning = document.getElementById('warning');
  const mainWidth = document.querySelector('main').clientWidth;

  if (w > mainWidth) {
    fakeImg.setAttribute("style", `width:${w*(mainWidth/w)}px; height: ${h*(mainWidth/w)}px;`);
    warning.textContent = 'Image size too big to accurately display';
  }
  else {
    fakeImg.setAttribute("style", `width:${w}px; height: ${h}px;`);
    warning.textContent = '';
  }
  caption.textContent = `${w} x ${h}`;
}

function calcWidth(h, aw, ah) { return Math.round((aw * h) / ah) }
function calcHeight(w, aw, ah) { return Math.round((w * ah) / aw) }

export default aspCalc;