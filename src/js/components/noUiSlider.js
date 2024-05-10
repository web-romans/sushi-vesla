import noUiSlider from "noUiSlider";
import wNumb from "wNumb";



var stepsSlider = document.getElementById('steps-slider1');
if (stepsSlider) {
  var input0 = document.getElementById('input-steps-slider1-1');
  var input1 = document.getElementById('input-steps-slider1-2');
  var inputs = [input0, input1];

  noUiSlider.create(stepsSlider, {
    start: [1, 8],
    connect: true,
    tooltips: true,
    format: wNumb({
      decimals: 0
    }),
    range: {
      'min': [1, 1],
      'max': 8
    }
  });

  stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });

  // Listen to keydown events on the input field.
  inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
      stepsSlider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

      var values = stepsSlider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = stepsSlider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {

        case 13:
          stepsSlider.noUiSlider.setHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if (position === false) {
            position = 1;
          }

          // null = edge of slider
          if (position !== null) {
            stepsSlider.noUiSlider.setHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            stepsSlider.noUiSlider.setHandle(handle, value - position);
          }

          break;
      }
    });
  });
}



var stepsSlider2 = document.getElementById('steps-slider2');

if (stepsSlider2) {

  var input3 = document.getElementById('input-steps-slider2-1');
  var input4 = document.getElementById('input-steps-slider2-2');
  var inputs2 = [input3, input4];

  noUiSlider.create(stepsSlider2, {
    start: [1.65, 3.00],
    connect: true,
    tooltips: true,

    range: {
      'min': 1.65,
      'max': 3
    }
  });

  stepsSlider2.noUiSlider.on('update', function (values, handle) {
    inputs2[handle].value = values[handle];
  });

  // Listen to keydown events on the input field.
  inputs2.forEach(function (input, handle) {

    input.addEventListener('change', function () {
      stepsSlider2.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

      var values = stepsSlider2.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = stepsSlider2.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {

        case 13:
          stepsSlider2.noUiSlider.setHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if (position === false) {
            position = 1;
          }

          // null = edge of slider
          if (position !== null) {
            stepsSlider.noUiSlider.setHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            stepsSlider2.noUiSlider.setHandle(handle, value - position);
          }

          break;
      }
    });
  });

}
