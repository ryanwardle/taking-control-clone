onHoverOverTab = () => {
  // const classList = event.target.className.split(' ');
  // console.log(event.target)
  // const panelClass = event.target.innerText.replace(/ /g, "-").toLowerCase() + '-panel' ;
  //
  // console.log(classList);
  // console.log(panelClass)
  // const panel = document.getElementById(panelClass);
  //
  // if(classList.includes(panelClass)){
  //   console.log(panelClass)
  //   panel.style.zIndex = '10';


  const panel = document.getElementById('news-and-insight-panel');
  panel.style.zIndex = '10';
}

onClosePanel = () => {
  const panel = document.getElementById('news-and-insight-panel');
  panel.style.zIndex = '-1';
}
