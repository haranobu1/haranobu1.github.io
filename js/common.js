fetch('components/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav').innerHTML = data;
  });

fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });