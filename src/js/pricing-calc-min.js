// Get the necessary elements outside of setInterval
const thumbValue = $("#thumb-value");
const thumbSvg1 = $(".thumb-svg-1");
const thumbSvg2 = $(".thumb-svg-2");
const range = $("#range");
const rangeFill = $(".range-fill");
const thumbValueInner = $(".thumb-value-inner");
const rangeWidth = range.outerWidth();
const rangeLeft = range.offset().left;
const rangeRight = rangeLeft + rangeWidth;

// Create an array to store rangeWidth divided into 8 equal parts
const rangeWidthArray = Array.from(
  { length: 9 },
  (_, i) => (rangeWidth / 8) * i
);

// Set the initial width of #thumb-value to the outer width of .thumb-svg-1
thumbValue.css("width", thumbSvg1.outerWidth());

// Set pointer events none to #thumb-value
thumbValue.css("pointer-events", "none");

// Initialize the positions of .thumb-svg-1 and .thumb-svg-2
thumbSvg1.offset({ left: rangeWidth - thumbSvg1.offset().left });
thumbSvg2.offset({ left: rangeWidth - thumbSvg2.offset().left });

// Function to update elements based on .thumb-svg-1's position
function updateElements() {
  const thumb1X = thumbSvg1.position().left;
  const thumbWidth = thumbSvg1.outerWidth();
  const thumb1Center = thumb1X + thumbWidth / 2;

  thumbSvg2.css("left", thumb1X + "px");
  thumbValue.css("left", thumb1Center - thumbValue.outerWidth() / 2 + "px");
  rangeFill.css("width", thumb1X + "px");

  let thumbValueInnerValue = Math.round(
    (thumb1X / rangeWidth) * 490000 + 10000
  );

  for (let i = 0; i < rangeWidthArray.length; i++) {
    if (Math.abs(thumb1X - rangeWidthArray[i]) <= 10) {
      thumbValueInnerValue = Math.round(
        (rangeWidthArray[i] / rangeWidth) * 490000 + 10000
      );
      break;
    }
  }

  thumbValueInnerValue = thumbValueInnerValue
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  thumbValueInner.text(thumbValueInnerValue);
}

// Set interval for updating elements
const checkX = setInterval(updateElements, 1);

// Initialize draggable functionality for .thumb-svg-1
thumbSvg1.draggable({
  axis: "x",
  containment: [rangeLeft, 0, rangeRight, 0],
  drag: function () {
    const thumb1X = thumbSvg1.position().left;
    const thumbWidth = thumbSvg1.outerWidth();

    if (thumb1X + thumbWidth / 2 > rangeRight / 2) {
      thumbSvg1.css("left", rangeRight - thumb1X - thumbWidth);
    }
  }
});

// Log total range width
console.log("Total range = " + rangeWidth);
