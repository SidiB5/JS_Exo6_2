function changeImg(x){
  var  y = x.getAttribute('src');
  y = y.substring(0, 17);
  x.setAttribute('src', y + '_2.jpg')
}
function returnImg(a){
  var b = a.getAttribute('src');
  b = b.substring(0, 17);
  a.setAttribute('src', b + '.jpg')
}
