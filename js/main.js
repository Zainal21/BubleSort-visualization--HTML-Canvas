var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [' 1', ' 2', ' 3', ' 4', ' 5', 
    ' 6', ' 7', ' 8', ' 9', ' 10'
    ],
    datasets: [{
      data: array,
      backgroundColor: "rgba(111, 99, 236, 1)",
      borderWidth: 2
    }]
  },
  options: {
    legend: {
      display: false
    }
  }
});

function bubbleSortArray() {
  bubbleSort();
  myChart.data.datasets[0].data = sortedArray;
  myChart.update();
  console.log("Array sorted using Bubble Sort");
  console.log(sortedArray);
}


function resetArray() {
  generateArray();
  myChart.data.datasets[0].data = array;
  myChart.update();
}