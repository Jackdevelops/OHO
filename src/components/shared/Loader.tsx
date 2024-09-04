/* This component is also used throughout the website when loading pages & search results.
   It uses an svg file for this loader animation
   Attribution:
   <a href="https://www.svgbackgrounds.com/elements/animated-svg-preloaders/">Animated SVG Preloaders by SVGBackgrounds.com</a>
*/
const Loader = () => {
  return (
    <div className="flex-center w-full">
      <img src="/assets/icons/loader.svg" alt="loader" width={24} height={24} />
    </div>
  );
};

export default Loader;
