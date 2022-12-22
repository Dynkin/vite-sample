export function setupCounter(element) {
  const a = 1;
  if (a === 1) {
    a = 2;
  }
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
