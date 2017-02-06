$(document).ready(function() {

  // When submitting the form
  $('#submit-btn').on('click', function(e) {

  // Prevent default actions
      e.preventDefault();

      // Getting the value of the selected color
      var food = $('li.active b').text();

      // Wrapping the data to be sent
      var toSend = JSON.stringify({"vote" :food});

        // Sending the asynchronous AJAX request
        $.ajax({
            url: 'https://api.us.apiconnect.ibmcloud.com/tu-berlin-assignment/ec/vote',
            type: 'POST',
            dataType : 'json',
            data: toSend,
            headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
            success: function(data, textStatus, jqXHR){
      console.log('Successfully sent' + this.data + "to" + this.url);
      alert("You voted for : " + food);
    },
    error: function(error){
          console.log("Error:", error);
      }
        });
  });
});
