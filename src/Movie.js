import { Counter } from "./Counter"; // named import

// Sub-component-1: mapping applied
export function Movie({ tle, descr, pstr, srtg }) {   // named export
  return (
    <div className='container'>
      <img className="movie-pstr" src={pstr} alt="Loading" />
      <h3 className="movie-tle"> {tle} <span className="movie-srtg"> {srtg} </span></h3>
      <div className="movie-descr">{descr}</div>
      <Counter />
      {/* Here we nested Sub-component-2 inside Sub-component-1 */}
    </div>
  );
}
