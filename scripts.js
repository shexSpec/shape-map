window.onload = function () {
};

function updateExample(doc, content) {
  // perform transformations to make it render an
  content = content.replace(/<!--/, '');
  content = content.replace(/-->/, '');
  return content ;
}
