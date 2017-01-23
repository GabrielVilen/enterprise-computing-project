/* Create the context for applying the chart to the HTML canvas */
var ctx = $("#graph").get(0).getContext("2d");

/* Set the options for our chart */
var options = { segmentShowStroke : false,
			    animateScale: true,
			    percentageInnerCutout : 50,
                showToolTips: true,
                tooltipEvents: ["mousemove", "touchstart", "touchmove"],
                tooltipFontColor: "#fff",
				animationEasing : 'easeOutCirc'
              }

/* Set the initial data */
var init = [
  {
      value: 1,
      color: "#e74c3c",
      highlight: "#c0392b",
      label: "Red"
  },
  {
      value: 1,
      color: "#2ecc71",
      highlight: "#27ae60",
      label: "Green"
  },
  {
      value: 1,
      color: "#3498db",
      highlight: "#2980b9",
      label: "Blue"
  }
];

graph = new Chart(ctx).Doughnut(init, options);

/* Makes a scan of the Cloudant database to retrieve the votes and update the chart */
function getData() {
	
	var results;
	$.ajax({
	  url: "https://2668c395-f5fb-4839-94f7-5a448e2cb674-bluemix.cloudant.com/voteapp-aggregates/ec-voteapp-aggregates",
	  type: 'GET',
	  dataType: 'json',
	  contentType: 'text/plain',
	  error: function(status) {
	    console.log("Error in accessing Cloudant database");
	    console.log(status);
	  },
	  success: function(data) {
	  	/* Retrieving the number of votes for each color */
	    results = data["results"];
	    var redCount = results["RED"];
	    var greenCount = results["GREEN"];
	    var blueCount = results["BLUE"];
	
	    var data = [
	      {
	          value: redCount,
	          color:"#e74c3c",
	          highlight: "#c0392b",
	          label: "Red"
	      },
	      {
	          value: greenCount,
	          color: "#2ecc71",
	          highlight: "#27ae60",
	          label: "Green"
	      },
	      {
	          value: blueCount,
	          color: "#3498db",
	          highlight: "#2980b9",
	          label: "Blue"
	      }
	    ];
		
		if (graph.segments[0].value != data[0].value ||
            graph.segments[1].value != data[1].value ||
            graph.segments[2].value != data[2].value) {
            	// Only update if we have new value(s) 
			    graph.segments[0].value = data[0].value;
			    graph.segments[1].value = data[1].value;
			    graph.segments[2].value = data[2].value;
			    graph.update();
            }
	  },
	});
}

/* This functions calls getData() function every 3 seconds */
$(function() {
  getData();
  $.ajaxSetup({ cache: false });
  /* Get the data every 3 seconds */
  setInterval(getData, 3000);
});
