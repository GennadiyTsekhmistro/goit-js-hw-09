export function setupCounter(element) {
  let counter = 0;
  element.innerHTML = `Count: ${counter}`;
  element.addEventListener('click', () => {
    counter++;
    element.innerHTML = `Count: ${counter}`;
  });
}
