// import React, { useEffect, useRef } from 'react';
// import { select } from 'd3-selection';
// import { arc, Arc, DefaultArcObject } from 'd3-shape';
// import { HierarchyNode, HierarchyRectangularNode } from 'd3-hierarchy';
// import { Partition } from '@visx/hierarchy';
// import NakshatraData from './NakshatraData';

// const NakshatraChart: React.FC = () => {
//   const containerRef = useRef<any>(null);

//   useEffect(() => {
//     if (containerRef.current) {
//       const width = containerRef.current.offsetWidth;
//       const height = containerRef.current.offsetHeight;

//       const root = HierarchyNode<NakshatraData>(NakshatraData)
//         .sum((d) => d.size || 0)
//         .sort((a, b) => b.value! - a.value!);

//       const partition = Partition<NakshatraData>()
//         .size([2 * Math.PI, Math.min(width, height)])
//         .padding(1)
//         .round(true);

//       partition(root);

//       const svg = select(containerRef.current as SVGSVGElement)
//         .attr('width', width)
//         .attr('height', height)
//         .style('font', '10px sans-serif');

//       svg.selectAll('path').remove();

//       const node = svg
//         .selectAll<SVGPathElement, HierarchyRectangularNode<NakshatraData>>('path')
//         .data(root.descendants())
//         .join('path')
//         .attr('fill', (d) => {
//           // Customize the fill color based on Nakshatra properties
//           return 'steelblue';
//         })
//         .attr('d', (d: HierarchyRectangularNode<NakshatraData>) =>
//           arc<NakshatraData, DefaultArcObject>()
//             .startAngle((d) => d.x0!)
//             .endAngle((d) => d.x1!)
//             .padAngle((d) => Math.min((d.x1! - d.x0!) / 2, 0.005))
//             .padRadius(height / 2)
//             .innerRadius((d) => d.y0!)
//             .outerRadius((d) => d.y1! - 1)(d)
//         );

//       return () => {
//         svg.selectAll('path').remove();
//       };
//     }
//   }, []);

//   return <svg ref={containerRef} />;
// };

// export default NakshatraChart;
export {}

export const sunsign=[ "aries","cancer","gemini","leo","libre","capricorn","gold","pisces","sagittarius","scorpio","tarius","virgo"]



// Found 7 entries
// Your results for parallal:
// अवनति	f.	avanati	parallax	
// दृग्लम्बन	n.	dRglambana	verticalparallax	
// नति	f.	nati	parallaxinlatitude	
// हरिज	n.	harija	longitudinalparallax	
// लम्बन	n.	lambana	moon'sparallaxinlongitude	
// नति	f.	nati	inclinationorparallaxinlatitude	
// लम्बनविधि	m.	lambanavidhi	ruleforcalculatingthemoon'sparallaxinlongitude	
