onHoverOverTab = () => {
  const panel = document.getElementById('news-and-risk-insight-panel');
  panel.style.zIndex = '10';
}

onClosePanel = () => {
  const panel = document.getElementById('news-and-risk-insight-panel');
  panel.style.zIndex = '-1';
}


onToggleNavigation = () => {
  let headers = document.getElementById('accordion');
  let navigation = document.getElementById('responsive-navigation');

  if( headers.classList.contains('hidden')){
     headers.classList.remove('hidden');
     headers.classList.add('show');
     navigation.classList.remove('hidden');
     navigation.classList.add('show');
  }else{
    headers.classList.remove('show');
    headers.classList.add('hidden');
    navigation.classList.remove('show');
    navigation.classList.add('hidden');
  }
}

onToggleSearch = () => {
  let search = document.getElementById('responsive-search');

  if( search.classList.contains('hidden')){
     search.classList.remove('hidden');
     search.classList.add('show');
  }else{
    search.classList.remove('show');
    search.classList.add('hidden');
  }
}
