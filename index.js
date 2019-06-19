onHoverOverTab = () => {
  const panel = document.getElementById('news-panel');
  panel.style.zIndex = '10';
}

onClosePanel = () => {
  const panel = document.getElementById('news-panel');
  panel.style.zIndex = '-1';
}
