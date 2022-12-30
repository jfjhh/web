window.onload = () => _([...document.head.children].pop().textContent)
function _(s) {
  const body = document.body
  body.style = 'white-space: pre'
  body.appendChild(document.createTextNode(s))
}
