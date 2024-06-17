// function onClickModal() {
//     const section = document.querySelector(".main__header__modal")
//     overlay = document.querySelector(".main__header__modal__overlay")
//     section.classList.add("active")
//     overlay.addEventListener("click", () => section.classList.remove("active"))
// }

// function closeModal() {
//     const section = document.querySelector(".main__header__modal")
//     section.classList.remove("active")
// }

const keyCodes = {
  tab: 9,
  enter: 13,
  escape: 27,
};
const doc = document.querySelector('#main');
  const focusableElementsArray = [
  '[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  ];

function modalClick() {
const triggers = document.querySelectorAll('button[aria-haspopup="dialog"]');
triggers.forEach((trigger) => {
  const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
  const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

  // open dialog
  trigger.addEventListener('click', (event) => {
    event.preventDefault();

    open(dialog);
  });

  trigger.addEventListener('keydown', (event) => {
    
    if (event.which === keyCodes.enter) {
      event.preventDefault();

      open(dialog);
    }  
  });

  // close dialog
  dialog.addEventListener('keyup', (event) => {
    console.log("1",event.target.id)
    console.log("2",event.wich)
    if (event.target.id === "close-dialog" && event.which === keyCodes.enter) {
      close(dialog, trigger);
    }
    if (event.which === keyCodes.escape) {
      close(dialog, trigger);
    }      
  });
  document.getElementById("close-dialog").addEventListener('keydown', (event) => {

       
  });

  dismissTriggers.forEach((dismissTrigger) => {
    const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

    dismissTrigger.addEventListener('click', (event) => {
      event.preventDefault();

      close(dismissDialog, trigger);
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === dialog) {
      close(dialog, trigger);
    }
  }); 
});
}

const open = function (dialog) {
  const focusableElements = dialog.querySelectorAll(focusableElementsArray);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];
  
  dialog.setAttribute('aria-hidden', false);
  doc.setAttribute('aria-hidden', true);

  // return if no focusable element
  if (!firstFocusableElement) {
    return;
  }

  window.setTimeout(() => {
    firstFocusableElement.focus();

    // trapping focus inside the dialog
    focusableElements.forEach((focusableElement) => {
      if (focusableElement.addEventListener) {
        focusableElement.addEventListener('keydown', (event) => {
          const tab = event.which === keyCodes.tab;

          if (!tab) {
            return;
          }

          if (event.shiftKey) {
            if (event.target === firstFocusableElement) { // shift + tab
              event.preventDefault();

              lastFocusableElement.focus();
            }
          } else if (event.target === lastFocusableElement) { // tab
            event.preventDefault();

            firstFocusableElement.focus();
          }
        });
      }
    });
  }, 100);
};

const close = function (dialog, trigger) {
  dialog.setAttribute('aria-hidden', true);
  doc.setAttribute('aria-hidden', false);

  
  // restoring focus
   trigger.focus();
};