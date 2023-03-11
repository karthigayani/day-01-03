import { useState } from 'react'; // named import

// Applied Conditional Styling & Conditional rendering
export function Counter() {      // named export
  // camelCase - Conventional
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);

  // Conditional Styling (Using Ternary operation)
  const likeStyles = {
    // color:"green",
    color: like >= 10 ? "green" : "orangered",
    fontSize: "18px",
  };
  const disLikeStyles = {
    // color:"red",
    color: dislike >= 10 ? "red" : "orangered",
    fontSize: "18px",
  };
  // Why we put camelCase for fontSize instead of font-size ?
  // Bcs it is JS part, You are defining a variable So react allow camelCase only.
  return (
    <div className="Counter">
      {/* camelCase - Mandatory */}
      <button style={likeStyles} className="btn" onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button style={disLikeStyles} className="btn" onClick={() => setDisLike(dislike + 1)}>👎 {dislike}</button>

      {/* Conditional rendering (Using Ternary operation) */}
      {(like - dislike) >= 10 ? <h5 className="CRS"> You are awesome😍😍 </h5> : null}

      {/* Task */}
      {/* {(like - dislike) <= 10 ? <h3> Awe 😩😱😲 </h3> : null} */}

    </div>
  );
}
// {} - allows expression not statement
// If You can assign it into a variable means expression.
// var t = 5 > 4 ? "True" : "False"

// Why we put null here?
// {(like - dislike) <= 10 ? <h3> Awe 😩😱😲 </h3> : null}
// When the condition meants true it will render(display) otherwise it won't be in you DOM source code also.