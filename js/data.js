$(document).ready(function() {
  var $searchDistrit = $('#searchTable').DataTable();
  $('#inputBusqueda').on('keyup', function() {
    $searchDistrit.search($(this).val()).draw();
    
    $('#main-search').css({
      'height': '100vh',
      'background': 'rgba(0, 0, 0, 0.3)'
    });
    if ($('#inputBusqueda').val() === '') {
      $('#main-search').css({
        'height': 'auto',
        'background': 'none'
      }); 
      $('#search').hide();
    } else {
      $('#search').fadeIn('fast');
    }
    $('#closemap').on('click', function() {
      location.reload();
    });
  });
});