getPanelId = () =>{
  const classList = event.target.className.split(' ');
  const panelId = event.target.innerText.replace(/ /g, "-").toLowerCase();
  console.log(classList)
  console.log(panelId)
  if(classList.includes(panelId)){
    console.log('yes')
    onHoverOverTab(panelId +'-panel');
  }
}

onHoverOverTab = (panelId) => {
  const panel = document.getElementById(panelId);
  panel.style.zIndex = '10';
  panel.style.visibility = 'visible'
}

onClosePanel = () => {
  // const classList = event.target.className.split(' ');
  // const panelId = event.target.innerText.replace(/ /g, "-").toLowerCase();
  // const panel = document.getElementById(panelId);
  // panel.style.zIndex = '-1';
  // console.log(event)

  const panel = document.getElementById();
  panel.style.zIndex = '-1';
  panel.style.visibility = 'hidden';

  console.log(event)

}

// onKeepTabOpen = () =>{
//   const panel = document.getElementById(panelId);
//   panel.style.zIndex = '10';
// }
