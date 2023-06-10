import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface GraphProps {
  width: number;
  height: number;
  nodes: { id: string; x: number; y: number }[];
  links: { source: string; target: string }[];
}

const ZoomableGraph: React.FC<GraphProps> = ({ width, height, nodes, links }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const viewRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current!);

    // Define the initial zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', zoomed);

    // Create a container for the graph elements
    const graphContainer = svg.append('g');

    // Add visible grid
    const gridLines = svg.append('g').attr('class', 'grid-lines');
    // ...

    // Apply zoom behavior to the SVG container
    svg.call(zoom);

    // Define the zoom function
    function zoomed(event:any) {
      graphContainer.attr('transform', event.transform);
    }

    // Create the graph layout
    const simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-100))
      .force('link', d3.forceLink(links).distance(100).id((d:any) => d.id))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Create the graph elements
    const linkElements = graphContainer.selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link');

    const nodeElements = graphContainer.selectAll('.node')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', 10);

    // Update the graph on each tick of the simulation
    simulation.on('tick', () => {
      linkElements
        .attr('x1', (d:any) => d.source.x!)
        .attr('y1', (d:any) => d.source.y!)
        .attr('x2', (d:any) => d.target.x!)
        .attr('y2', (d:any) => d.target.y!);

      nodeElements
        .attr('cx', (d:any) => d.x!)
        .attr('cy', (d:any) => d.y!);
    });

    // Create the slide view
    const viewContainer = svg.append('g')
      .attr('class', 'slide-view')
      .attr('transform', `translate(${width - 210}, ${height - 160})`);

    const viewBackground = viewContainer.append('rect')
      .attr('class', 'view-background')
      .attr('width', 200)
      .attr('height', 150);

    const view = viewContainer.append('g')
      .attr('class', 'view')
      .attr('transform', `translate(10, 10)`);

    const viewRect = view.append('rect')
      .attr('width', 180)
      .attr('height', 130)
      .style('fill', 'transparent')
      .style('stroke', '#ccc');

    const viewContent = view.append('g')
      .attr('class', 'view-content');

    const viewNodes = viewContent.selectAll('.view-node')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('class', 'view-node')
      .attr('r', 3)
      .attr('cx', (d:any) => d.x! * 0.1)
      .attr('cy', (d:any) => d.y! * 0.1);

    const viewLinks = viewContent.selectAll('.view-link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'view-link')
      .attr('x1', (d:any) => d.source.x! * 0.1)
      .attr('y1', (d:any) => d.source.y! * 0.1)
      .attr('x2', (d:any) => d.target.x! * 0.1)
      .attr('y2', (d:any) => d.target.y! * 0.1);

    // Update the slide view on each tick of the simulation
    simulation.on('tick', () => {
      viewNodes
        .attr('cx', (d:any) => d.x! * 0.1)
        .attr('cy', (d:any) => d.y! * 0.1);

      viewLinks
        .attr('x1', (d:any) => d.source.x! * 0.1)
        .attr('y1', (d:any) => d.source.y! * 0.1)
        .attr('x2', (d:any) => d.target.x! * 0.1)
        .attr('y2', (d:any) => d.target.y! * 0.1);
    });
  }, [width, height, nodes, links]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default ZoomableGraph;
