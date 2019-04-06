function getModal(inp) {
  let title = document.querySelector(`.css-gallery-${inp} span`).innerHTML;
  let element = document.querySelector(`.css-gallery-${inp}`)
  let style = getComputedStyle(element);
  let url = style['background-image'];
  url = url.slice(5, url.length - 2);
  document.querySelector('#modalCenterTitle').innerHTML = title;
  document.querySelector('#modalCenter img').src = url;
}