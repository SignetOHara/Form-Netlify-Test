// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";

// const getImages = graphql`
//   {
//     allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
//       edges {
//         node {
//           id
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 300, maxHeight: 300, quality: 90, webpQuality: 90) {
//                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const nodeURL = "https://www.instagram.com/p";

// const Instagram = () => {
//   const {
//     allInstaNode: { edges: images },
//   } = useStaticQuery(getImages);

//   return (
//     <section className="sectionContainer">
//       <h3 className="instaTitle">Instagram</h3>
//       <p className="hashtag">
//         <a
//           href="https://www.instagram.com/beatsandstepsartsacademy/?hl=en"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           #beatsandstepsartsacademy
//         </a>
//       </p>
//       <div className="container">
//         {images.map(image => (
//           <article className="article" key={image.node.id}>
//             <a
//               href={`${nodeURL}/${image.node.id}`}
//               rel="noopener noreferrer"
//               target="_blank"
//             >
//               <Image
//                 className="image"
//                 fluid={image.node.localFile.childImageSharp.fluid}
//                 alt={
//                   image.node.caption ||
//                   "Image from the Beats and Steps Arts Academy Instagram page"
//                 }
//               />
//             </a>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Instagram;
