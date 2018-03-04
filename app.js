d3.csv('data.csv').then(data => {

  data.forEach(row => {
    row.exports = parseInt(row.exports);
  });

  data.sort((a, b) => a.exports - b.exports);

  createChart(data);
});

function createChart(data) {

  const chart = new barChart({
    element: document.querySelector('body'),
    data: data,
    title: "Who made the most on medicine exports in 2016?",
    subtitle: "The top 25 are listed below."
  });

}