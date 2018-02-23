// Use the D3 library to read in our data
d3.csv('data.csv').then( data => {

  // Cycle throught the row to get your data into the right format
  // for the chart you'll be creating.
  data.forEach(row => {
    row.exports = +row.exports
  })

  data.sort((desc, ending) => desc.exports - ending.exports);

  createChart(data);

});

// This function executes all we need to create
// our simple charte
function createChart(data) {

  const chart = new Chart({
    element: document.querySelector('body'),
    data: data
  });

}

// This constructor can be modified to any type
// of chart we would like to build.
class Chart {

  constructor(opts) {

    this.element = opts.element;
    this.data = opts.data;

    // Create the chart
    this.draw();

  }

  // UNCOMMENT ONCE YOU HAVE THE DATA

  draw() {

    // Set your dimensions viewport
    this.width = 960; // this.element.offsetWidth;
    this.height = 600; // this.width / 2;
    this.margin = { top: 70, right: 20, bottom: 50, left: 225 };

    // Set the dimesions of you chart
    this.innerHeight = this.height - (this.margin.top + this.margin.bottom);
    this.innerWidth = this.width - (this.margin.right + this.margin.left);

    // Append the SVG that will contain your chart
    const svg = d3.select(this.element).append('svg');

    svg
      .attr('width', this.width)
      .attr('height', this.height);

    // Now append the an element to position your
    // chart with the SVG
    this.plot = svg.append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    // Time to create the other stuff
    this.createScales();
    this.addAxes();
    this.addChart();

  }

  createScales() {
    // Shorthand to save typing
    const m = this.margin;

    // Set the scale for you chart
    // We set the domain to zero to make sure our bars
    // always start at zero. We don't want to truncate.
    this.xScale = d3.scaleLinear()
      .range([0, this.innerWidth])
      .domain([0, d3.max(this.data, d => d.exports)]);

    // Range relates to pixels
    // Domain relates to data

    this.yBand = d3.scaleBand()
      .paddingInner(.1)
      .rangeRound([this.innerHeight, 0])
      .domain(this.data.map( d => d.exporter ));

  }

  addAxes() {

    const m = this.margin;

    // Create axises to be called later
    const xAxis = d3.axisBottom()
      .scale(this.xScale);

    const yAxis = d3.axisLeft()
      .scale(this.yBand);

    // Custom format to clean up tick formattin
    const siFormat = d3.format(".2s")
    const customTickFormat = function (d) {
        return siFormat(d).replace("G", "B");
      };

    // Call those axis generators
    this.plot.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${this.innerHeight})`)
      .call(
        xAxis
          .ticks(10)
          .tickSize(-this.innerHeight)
          .tickFormat(customTickFormat));

    // Add x-axis title
    d3.select('.x.axis').append('text')
      .attr("class", "axis title")
      .attr('x', this.innerWidth)
      .attr('y', 35)
      .text("EXPORTS (USD)");

    // Add y-axis ticks
    this.plot.append("g")
      .attr("class", "y axis")
      .attr("transform", 'translate(0, 0)')
      .call(yAxis)

    // Add chart title
    this.plot.append('text')
      .attr("class", "chart title")
      .attr('x', 0)
      .attr('y', -25)
      .text("Who made the most on medicine exports in 2016?");

    // Add chart subtitle
    this.plot.append('text')
      .attr("class", "chart subtitle")
      .attr('x', 0)
      .attr('y', -5)
      .text("The top 25 are listed below.");

  }

  addChart() {

    const m = this.margin;

    this.plot.selectAll(".bar")
      .data(this.data)
      .enter().append("rect")
      .attr('class', "bar")
      .attr("x", 0)
      .attr("y", d => this.yBand(d.exporter))
      .attr("width", d => this.xScale(d.exports))
      .attr("height", this.yBand.bandwidth())
      .style()

  }

}