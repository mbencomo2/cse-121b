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
    // set the common Aspect ratios and fill the inputs
    setCommonRatios(this.commonRatios);
    setAspectRatio(this.commonRatios);

    // create the event listeners for each element
    document.getElementById('preset').addEventListener('change', aspCalc.setAspects);
    document.getElementById('submitButton').addEventListener('click', aspCalc.updateImg);
    document.getElementById('pixelHeight').addEventListener('input', aspCalc.updateWidth);
    document.getElementById('pixelWidth').addEventListener('input', aspCalc.updateHeight);
    document.getElementById('aspectHeight').addEventListener('input', aspCalc.updateHeight);
    document.getElementById('aspectWidth').addEventListener('input', aspCalc.updateWidth);

    // set the image size
    updateImage(document.getElementById('pixelWidth').value, document.getElementById('pixelHeight').value)
  },
  setAspects: function () {
    // update the aspect ratio to the selected ratio
    setAspectRatio(aspCalc.commonRatios);
  },
  updateImg: function () {
    // get the values we need
    const h = document.getElementById('pixelHeight').value;
    const w = document.getElementById('pixelWidth').value;

    // set the image size
    updateImage(w, h);
  },
  updateHeight: function () {
    // get the values we need
    const h = document.getElementById('pixelHeight');
    const w = document.getElementById('pixelWidth');
    const ah = document.getElementById('aspectHeight');
    const aw = document.getElementById('aspectWidth');

    //set the height input value
    h.value = calcHeight(w.value, aw.value, ah.value);
  },
  updateWidth: function () {
    // get the values we need
    const h = document.getElementById('pixelHeight');
    const w = document.getElementById('pixelWidth');
    const ah = document.getElementById('aspectHeight');
    const aw = document.getElementById('aspectWidth');

    // set the width input value
    w.value = calcWidth(h.value, aw.value, ah.value);
  }
}

function setCommonRatios(array) {
  // define the document element selector
  const select = document.getElementById('preset');

  // iterate through each element in the array, and create a new option for each
  array.forEach(element => {
    const option = document.createElement('option');
    option.value = element.name;
    option.textContent = `${element.name} - ${element.value[0]}:${element.value[1]}`;
    select.appendChild(option);
  });
}

function setAspectRatio(array) {
  // define the document elements we need
  const w = document.getElementById('aspectWidth');
  const h = document.getElementById('aspectHeight');
  const selector = document.getElementById('preset');

  // iterate through the array, finding the current option and applying the values
  array.forEach(element => {
    if (selector.value == element.name) {
      w.value = element.value[0];
      h.value = element.value[1];
    }
  });

  // set default values for the inputs
  document.getElementById('pixelWidth').value = w.value * 120;
  document.getElementById('pixelHeight').value = h.value * 120;
}

function updateImage(w, h) {
  // define the document elements we need
  const fakeImg = document.getElementById('fakeImg');
  const caption = document.getElementById('fakeImgSize');
  const warning = document.getElementById('warning');
  //get the width of the 'main' element
  const mainWidth = document.querySelector('main').clientWidth;

  // if the width the user input is larger than the width of 'main', scale the image accordingly
  if (w > mainWidth) {
    const scale = mainWidth / w
    fakeImg.setAttribute("style", `width:${Math.round(w * scale)}px; height: ${Math.round(h * scale)}px;`);
    warning.textContent = 'Image has been scaled to fit appropriately';
  }
  else {
    fakeImg.setAttribute("style", `width:${w}px; height: ${h}px;`);
    warning.textContent = '';
  }
  caption.textContent = `${w} x ${h}`;
}

// simple algebra to find the height or width
function calcWidth(h, aw, ah) { return Math.round((aw * h) / ah) }
function calcHeight(w, aw, ah) { return Math.round((w * ah) / aw) }

export default aspCalc;