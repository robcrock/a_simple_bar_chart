d3.csv('data.csv', function (error, data) {

  if (error) throw error;

  initializeChart(data);

});

function initializeChart(data) {

  const chart = new Chart({
    element: document.querySelector('body'),
    data: data
  });

}

class Chart {

  constructor(opts) {

    this.element = opts.element;
    this.data = opts.data;

    console.log(this.data);

    // Create the chart
    // this.draw();

  }

  // UNCOMMENT ONCE YOU HAVE THE DATA

  // draw() {

  //   // Set your dimensions viewport
  //   this.width = 960; // this.element.offsetWidth;
  //   this.height = 500; // this.width / 2;
  //   this.margin = { top: 20, right: 20, bottom: 50, left: 50 };

  //   // Set the dimesions of you chart
  //   this.innerHeight = this.height - (this.margin.top + this.margin.bottom);
  //   this.innerWidth = this.width - (this.margin.right + this.margin.left);

  //   // Append the SVG that will contain your chart
  //   const svg = d3.select(this.element).append('svg');

  //   svg
  //     .attr('width', this.width)
  //     .attr('height', this.height);

  //   // Now append the an element to position your
  //   // chart with the SVG
  //   this.plot = svg.append('g')
  //     .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

  //   // Time to create the other stuff
  //   this.createScales();
  //   this.addAxes();
  //   this.addChart();

  // }

  // createScales() {
  //   // Shorthand to save typing
  //   const m = this.margin;

  //   // Calculate max and min for data
  //   const xExtent = d3.extent(this.data, d => /* X VARIABLE */ );
  //   const yExtent = d3.extent(this.data, d => /* Y VARIABLE */ );

  //   // Set the scale for you chart
  //   this.xScale = d3.scaleLinear()
  //     .range([0, this.innerWidth - (m.right + m.left)])
  //     .domain(xExtent);

  //   // Range relates to pixels
  //   // Domain relates to data

  //   this.yScale = d3.scaleLinear()
  //     .range([this.innerHeight - (m.top + m.bottom), 0])
  //     .domain(yExtent);

  //   // Maybe you would like to create a customer color scale?
  //   this.areaColorScale = d3.scaleOrdinal([]);

  // }

  // addAxes() {

  //   const m = this.margin;

  //   // Create axises to be called later
  //   const xAxis = d3.axisBottom()
  //     .scale(this.xScale);;

  //   const yAxis = d3.axisLeft()
  //     .scale(this.yScale);

  //   // Call those axis generators
  //   this.plot.append("g")
  //     .attr("class", "x axis")
  //     .attr("transform", `translate(0, ${this.innerHeight - m.top})`)
  //     .call(xAxis);

  //   // Add x-axis title
  //   d3.select('.x.axis').append('text')
  //     .attr('x', this.innerWidth)
  //     .attr('y', /* SOME OFFSET */)
  //     .text(/* SOME TITLE */)

  //   // Add y-axis ticks
  //   this.plot.append("g")
  //     .attr("class", "y axis")
  //     .attr("transform", 'translate(5, 0)')
  //     .call(yAxis)

  //   // Add y-axis title
  //   d3.select('.y.axis').append('text')
  //     .attr('x', -25)
  //     .attr('y', /* SOME OFFSET */)
  //     .attr('transform', `rotate(-90 0 0)`)
  //     .text(/* SOME TITLE */);

  // }

  // addChart() {

  //   this.plot.selectAll(/* .shapeClass */)
  //     .data(data)
  //     .enter().append(/* .shape */)
  //     .attr('class', /* .shapeClass */)
  //   // SVG attributes
  //   // .attr()
  //   // SVG styles
  //   // .style()

  // }

}