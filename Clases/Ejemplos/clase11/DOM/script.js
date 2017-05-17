document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('button');
  link.addEventListener('click', function(e) {
    alert("Ehh! me hiciste click!");
    e.preventDefault();
  })
});
