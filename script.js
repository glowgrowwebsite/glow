$(document).ready(function () {
  $('#loginBtn').click(function () {
    $.get('../html/modal-login.html', function (data) {
      $('#modalContainer').html(data);
      var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    });
  });

  $('#registerBtn').click(function () {
    $.get('../html/modal-register.html', function (data) {
      $('#modalContainer').html(data);
      var registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
      registerModal.show();
    });
  });
});