import { on } from "../functions/on";


on('.page__body', 'click', '[data-copy-promo]', function (e) {
  const code = e.target.querySelector("[data-copy-code]");
  const msg = e.target.querySelector("[data-copy-msg]");
  e.preventDefault();
  copyToClipboard(code);
  msg.classList.remove('hide');
  setTimeout(() => {
    msg.classList.add('hide');
  }, 1000);
});

/*document.querySelector('.bookmakers__catalog-link').addEventListener('click', () => {
  const bookmakers = document.querySelector(".bookmakers");
  const items = bookmakers.querySelector(".bookmakers__items");
  bookmakers.appendChild(items.cloneNode(true));
});*/

function copyToClipboard(elem) {
  // create hidden text element, if it doesn't already exist
  if (elem) {
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
      // can just use the original source element for the selection and copy
      target = elem;
      origSelectionStart = elem.selectionStart;
      origSelectionEnd = elem.selectionEnd;
    } else {
      // must use a temporary form element for the selection and copy
      target = document.getElementById(targetId);
      if (!target) {
        var target = document.createElement("textarea");
        target.style.position = "fixed";
        target.style.left = "-9999px";
        target.style.top = "0";
        target.id = targetId;
        document.body.appendChild(target);
      }
      target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
      succeed = document.execCommand("copy");
    } catch (e) {
      succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
      currentFocus.focus();
    }

    if (isInput) {
      // restore prior selection
      elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
      // clear temporary content
      target.textContent = "";
    }
    return succeed;
  }

}
