const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');

interactiveElements.forEach((element) => {
  
  if (!element.getAttribute('role')) {
    if (element.tagName === 'a') {
      element.setAttribute('role', 'link');
    } else if (element.tagName === 'BUTTON') {
      element.setAttribute('role', 'button');
    } else if (element.tagName === 'INPUT' && element.type === 'checkbox') {
      element.setAttribute('role', 'checkbox');
    } else if (element.tagName === 'INPUT' && element.type === 'radio') {
      element.setAttribute('role', 'radio');
    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.setAttribute('role', 'textbox');
    }
  }
});

// Main Content:
const mainContent = document.getElementById('main');
if (mainContent) {
  mainContent.setAttribute('role', 'main');
}