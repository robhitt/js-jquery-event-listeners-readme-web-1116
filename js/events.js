//define functions here
function getIt() {
  // The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".
  $('p').on('click', function () {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which === 71) {
      alert('you have pressed the g key')
     }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
    return
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
