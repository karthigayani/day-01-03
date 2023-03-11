// Day-01 Nov-16

// Problem :1
/* import logo from './logo.svg';
import './App.css';

// App - Component = View + logic (Declaration)
// (App is a user defined name)
// This component app is called in index.js 
function App() {
  let userName="karthigayani";
  return (
    <div className="App">
      <h1>Hello, {userName} 🎉🎉 - {10*20} Followers✨✨✨</h1>
    </div>
  );
}
export default App; */

/* ------------------------------------------------------------------------------------------------Day-01-End------------------------------------------------------------------------------------------------*/

// Day-02 Nov-17

// Problem :2
/* import logo from './logo.svg';
import './App.css';
// Main component declaration
function App() {
  return (
    <div className="App">
      <App1 /> 
      <App1 /> 
      <App1 /> 
    </div>
  );
}
// Sub/branch - component declaration
function App1() {
  let userName="karthigayani";
  return (
    <div className="App">
      <h1>Hello, {userName} 🎉🎉 - {10*20} Followers✨✨✨</h1>
    </div>
  );
}
export default App; */

// App Component = View + logic (Declaration)
// (App is a user defined name)
// Here App is Main component which is called in index.js
// <App1 /> - Component call
// Always maintain single main component , inside main you can call "n" no.of sub components.

// If you want to display 3 times you have to create user component
// App1 Component = View + logic (Declaration)
// (App1 is a user defined name)
// App1 user component

/*------------------------------------------------------------------------------------------------------------------------------------*/

// Problem :3
// import logo from './logo.svg'; // This is react spinning logo (Not using this problem)
/* import './App.css';
function App() {
  return (
    <div className="App">
      <App1 name="karthi" />
      <App1 name="Anju" />
      <App1 name="Sangee" />
    </div>
  );
}
// How to customize a Component (function) ? 
// We need argument(props) to customize a Component (function).
// Added styling 
function App1(props) {
  console.log(props, typeof props);
  return <h1 className="h-styling">Hello {props.name} 🎉🎊✨</h1>
}
export default App; */
/*------------------------------------------------------------------------------------------------------------------------------*/

// Sample task:
/* import './App.css';
function App() {
  return (
    <div className="App">
      <App1 
        pic="https://cdn.tollywood.net/wp-content/uploads/2019/08/Samantha.jpg"
        name="Samantha"/>
      <App1
        pic="https://static.toiimg.com/photo/msid-72524018/72524018.jpg"
        name="Trisha"/>
      <App1
        pic="https://static-ai.asianetnews.com/images/c2a3cec5-640b-49ee-a502-b8a548e9a2e8/image_1200x900xt.jpg"
        name="Saipallavi"/>
    </div>
  );
}
function App1(props) {
  return <section>
  <img className="profile-pic" src={props.pic} alt="Loading" />
  <h1 className="h-styling">Hello <span className='fname'>{props.name}</span> 🎉🎊✨</h1>
  </section>
}
export default App; */

/*------------------------------------------------------------------------------------------------------------------------------*/


// Problem :4
/*import './App.css';
function App() {
  return (
    <div className="App">
      <User 
        name="Indira Priyadarshini Gandhi"
        descr="First Women Prime Minister of India - "
        pic="https://www.jatland.com/w/images/thumb/c/c0/Indiragandhi.jpg/300px-Indiragandhi.jpg"/>
      <User 
        name="Prathibha DeviSingh Patil"
        descr="First Women President Minister of India - "
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/The_President_of_India%2C_Smt._Pratibha_Patil.jpg/1200px-The_President_of_India%2C_Smt._Pratibha_Patil.jpg" />
      <User 
        name="Sarojini Naidu"
        descr="First Women Governor of a state in India - "
        pic="https://static-ai.asianetnews.com/images/01e0ygfa2hek0wvg3yanemjsyq/02-jpg.jpg" />
    </div>
  );
}

function User(props) {
  console.log(props, typeof props);
  return( 
    <>
      <img className="user-profile-pic" src={props.pic} alt="Loading" />
      <h1 className="user-descr"> {props.descr} <span className="user-name"> {props.name} </span> </h1>
      
    </>
  );
  // return returns single only
  // if you want mutiple means you can wrap the elements inside a single container tag(eg: div , section)
  // or you can wrap using <></> -> React fragment
  // React fragment Advtg- Avoiding extra element, Styling is easier from parent
}
export default App;*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Problem :5
/* import './App.css';
function App() {
  return (
    <div className="App">
      <User 
        name="Indira Priyadarshini Gandhi"
        descr="First Women Prime Minister of India - "
        pic="https://www.jatland.com/w/images/thumb/c/c0/Indiragandhi.jpg/300px-Indiragandhi.jpg"/>
      <User 
        name="Prathibha DeviSingh Patil"
        descr="First Women President Minister of India - "
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/The_President_of_India%2C_Smt._Pratibha_Patil.jpg/1200px-The_President_of_India%2C_Smt._Pratibha_Patil.jpg" />
      <User 
        name="Sarojini Naidu"
        descr="First Women Governor of a state in India - "
        pic="https://static-ai.asianetnews.com/images/01e0ygfa2hek0wvg3yanemjsyq/02-jpg.jpg" />
    </div>
  );
}

//Object destructuring (ES6)
function User({name, descr, pic}) {  // function User(props) {
  // console.log(props, typeof props);
  // here you are repeating props.pic, props.name.... to avoid this you can use object destructuring
  // const {name, descr, pic} = props; //Object destructuring (ES6)
  return( 
    <>
      <img className="user-profile-pic" src={pic} alt="Loading" />
      <h2 className="user-descr"> {descr} <span className="user-name"> {name} </span> </h2> 
    </>
  );
}
export default App; */
/**************************************************************************************************************************************************************************************************** */

// // Sample: Mapping single items in an array
// // Applying DRY concept
// // If you want to repeat the Particular piece of code means , we go for loop concept.
// // Mapping used instead of looping
// // So if you want to apply map you need an array
// // Store the data in array for applying map

// import './App.css';
// function App() {
//   // let names = ["Karthika","Soundarya","Jananyasree"];
//   let names = ["Karthika","Soundarya","Sangeetha","Amsapriya","Kaver","Jananyasree"]; // If you want to add more items means you can include in array
//   return (
//     <div className="App">
//       {/* <Welcome name="Karthika"/>
//       <Welcome name="Soundarya"/>
//       <Welcome name="Jananyasree"/> */}
//       {/* {names.map(nm => <Welcome name="Karthika"/> )} */}

//       {names.map(nm => <Welcome name={nm}/> )}

//     </div>
//   );
// }

// function Welcome({ name }) { 
//   return( 
//     <>
//       <h2 className="user-descr"> Hello <span className="user-name"> {name} </span> 🎉🎊✨ </h2> 
//     </>
//   );
// }
// export default App;

/********************************************************************************************************************************************************************************************************************* */
// Problem :6 Mapping multiple items (so we go for array of object)
/* import './App.css';
function App() {
const Users =[
        {
          name: "Indira Priyadarshini Gandhi",
          descr: "First Women Prime Minister of India - ",
          pic: "https://www.jatland.com/w/images/thumb/c/c0/Indiragandhi.jpg/300px-Indiragandhi.jpg"
        },
        {
          name:"Prathibha DeviSingh Patil",
          descr:"First Women President of India - ",
          pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/The_President_of_India%2C_Smt._Pratibha_Patil.jpg/1200px-The_President_of_India%2C_Smt._Pratibha_Patil.jpg"
        },
        { 
          name:"Sarojini Naidu",
          descr:"First Women Governor of a state in India - ",
          pic:"https://static-ai.asianetnews.com/images/01e0ygfa2hek0wvg3yanemjsyq/02-jpg.jpg"
        },
      ];
  return (
    <div className="App">
      { Users.map((usr) => 
        <User name={usr.name} descr={usr.descr} pic={usr.pic}/>
      )}
    </div>
  );
}
// DRY-Don't Repeat Yourself (Code smell)
function User({name, descr, pic}) {
  return( 
    <>
      <img className="user-profile-pic" src={pic} alt="Loading" />
      <h2 className="user-descr"> {descr} <span className="user-name"> {name} </span> </h2> 
    </>
  );
}
export default App;*/

/************************************************************************************************************************************************************************************************************************************************************* */
// // Problem :7  Make it responsive
// // ClassTask-Nov-17
// import './App.css';
// function App() {
// const Movies =[
//         {
//           tle: "Ponniyin Selvan: I",
//           descr: "Ponniyin Selvan: I ( transl. The Son of Ponni) is a 2022 Indian Tamil-language epic historical action adventure film directed by Mani Ratnam. Sensing an uprising in the capital, Crown Prince Aditha Karikalan sends his friend Vallavaraiyan Vandiyadevan on a mission that sets off a series of conspiracies against the reigning king.",
//           pstr: "https://preview.redd.it/lq72e1sl4fo91.jpg?auto=webp&s=017475c8fb78b03640ec07546bbfc869aafb0677",
//           srtg: "9.4/10 ⭐"
//         },
//         {
//           tle: "Jodhaa Akbar",
//           descr: "Jodhaa Akbar is a 2008 Indian Hindi-language epic historical romantic drama film directed by Ashutosh Gowariker. Jodhaa is a fiery Rajput princess who is obliged to marry Mughal Emperor Akbar for political reasons. Eventually, mutual respect and admiration between the duo leads to true love.",
//           pstr: "https://upload.wikimedia.org/wikipedia/en/0/0e/Jodhaa_akbar.jpg",
//           srtg: "9.0/10 ⭐"
//         },
//         {
//           tle: "Bajirao Mastani",
//           descr: "The heroic Peshwa Bajirao, married to Kashibai, falls in love with Mastani, a warrior princess in distress. They struggle to make their love triumph amid opposition from his conservative family.",
//           pstr: "https://m.media-amazon.com/images/M/MV5BZTI5OTNmOGYtMjdlNy00OTY0LThjNjEtZjMzZmEwZTAyM2VmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
//           srtg: "8.8/10 ⭐"
//         },
//         {
//           tle: "Baahubali",
//           descr: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//           pstr: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baahubali-the-beginning-part-i-et00031217-05-11-2020-06-57-14.jpg",
//           srtg: "9.2/10 ⭐"
//         },
//         {
//           tle: "Shyam Singha Roy",
//           descr: "Shyam Singha Roy is a 2021 Indian Telugu-language supernatural period romantic drama film[6] directed by Rahul Sankrityan. A director accused of plagiarism finds a transcendental connection to his past life when he digs deeper into his subconscious mind.",
//           pstr: "https://images.news18.com/ibnkhabar/uploads/2022/01/shyam.jpg",
//           srtg: "9.1/10 ⭐"
//         },
//         { 
//           tle: "Padmaavat",
//           descr: "Padmaavat is a 2018 Indian period romantic action drama film directed by Sanjay Leela Bhansali.Queen Padmavati is happily married to a Rajput ruler until a ruthless sultan, Alauddin Khalji, declares war on their kingdom due to his obsession with her. ",
//           pstr: "https://m.media-amazon.com/images/M/MV5BZjJjZWIwZDMtNGQ5OC00OWJmLWJkNGMtZTJlZjA5NTRkZDBmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpgg",
//           srtg: "7.5/10 ⭐"
//         },
//         {
//           tle: "RRR",
//           descr: "RRR is an alternate history and historical fiction movie. A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
//           pstr: "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
//           srtg: "8.7/10 ⭐"
//         },
//         { 
//           tle: "Asoka",
//           descr: "Asoka, the heir to the Maurya Empire, is sent on an exile for having fought with his half-brother, Susima. While travelling south, he meets Kaurwaki, princess of Kalinga, and falls for her.",
//           pstr: "https://i.ytimg.com/vi/Sa71MZpFS8Y/movieposter.jpg",
//           srtg: "7.6/10 ⭐"
//         }
//       ];
//   return (
//     <div className="App">
//       { Movies.map((mov) => 
//         <Movie tle={mov.tle} descr={mov.descr} pstr={mov.pstr} srtg={mov.srtg}/>
//       )}
//     </div>
//   );
// }
// // DRY-Don't Repeat Yourself
// // Use Mapping instead of loop
// function Movie({tle, descr, pstr, srtg}) {
  
//   return( 
//     <div className='container'>
//       <img className="movie-pstr" src={pstr} alt="Loading" />
//       <h2 className="movie-tle"> {tle} <span className="movie-srtg"> {srtg} </span></h2>
//       <div className="movie-descr">{descr}</div> 
//     </div>
//   );
// }
// export default App;

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// // Problem :8
// // Day-03 Nov-18

// import { useState } from 'react';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <Counter /> 
//     </div>
//   );
// }
// // Adding like botton ❌
// // function Counter() {
// //   let like=10;
// //   return (
// //     <div className="Counter">
// //       {/* <button>Like</button> */}
// //       {/* <button onClick={() => console.log("You clicked!!!")}>Like</button> */}
// //       <button onClick={() => {
// //         like++;
// //         console.log("You clicked!!!", like)}
// //     }>Like</button>
// //       <p>{like}</p>
// //     </div>
// //   );
// // }

// // Why not working in above case? React will not listen all variables. Bcs it is difficult to update when you use more variable and also react performance will reduce. 
// // So react builders introduced a special function, called hooks.

// // Adding like botton ✅ using hooks:
// function Counter() {
//   // camelCase - Conventional
//   let [like, setLike]= useState(0);
//   let [dislike, setDisLike]= useState(0);
//   return (
//     <div className="Counter">
//     {/* camelCase - Mandatory */}
//       {/* <button onClick={() => setLike(like + 1)}>Like</button>
//       <p>{like}</p>
//       <p>{like}</p>
//       <p>{like}</p> */}
//     {/* You can call "n" no.of times */}

//     {/* Why you kept like updates outside ? You can kept like updates inside the button also */}

//       {/* <button onClick={() => setLike(like + 1)}>Like {like}</button> */}
//       <button onClick={() => setLike(like + 1)}>👍 {like}</button>
//       <button onClick={() => setDisLike(dislike + 1)}>👎 {dislike}</button>

//     </div>
//   );
// }
// export default App;

/************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */

// // Problem :9 
// import { useState } from 'react';
// import './App.css';
// function App() {
// const Movies =[
//         {
//           tle: "Ponniyin Selvan: I",
//           descr: "Ponniyin Selvan: I ( transl. The Son of Ponni) is a 2022 Indian Tamil-language epic historical action adventure film directed by Mani Ratnam. Sensing an uprising in the capital, Crown Prince Aditha Karikalan sends his friend Vallavaraiyan Vandiyadevan on a mission that sets off a series of conspiracies against the reigning king.",
//           pstr: "https://preview.redd.it/lq72e1sl4fo91.jpg?auto=webp&s=017475c8fb78b03640ec07546bbfc869aafb0677",
//           srtg: "9.4/10 ⭐"
//         },
//         {
//           tle: "Jodhaa Akbar",
//           descr: "Jodhaa Akbar is a 2008 Indian Hindi-language epic historical romantic drama film directed by Ashutosh Gowariker. Jodhaa is a fiery Rajput princess who is obliged to marry Mughal Emperor Akbar for political reasons. Eventually, mutual respect and admiration between the duo leads to true love.",
//           pstr: "https://upload.wikimedia.org/wikipedia/en/0/0e/Jodhaa_akbar.jpg",
//           srtg: "9.0/10 ⭐"
//         },
//         {
//           tle: "Bajirao Mastani",
//           descr: "The heroic Peshwa Bajirao, married to Kashibai, falls in love with Mastani, a warrior princess in distress. They struggle to make their love triumph amid opposition from his conservative family.",
//           pstr: "https://m.media-amazon.com/images/M/MV5BZTI5OTNmOGYtMjdlNy00OTY0LThjNjEtZjMzZmEwZTAyM2VmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
//           srtg: "8.8/10 ⭐"
//         },
//         {
//           tle: "Baahubali",
//           descr: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//           pstr: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baahubali-the-beginning-part-i-et00031217-05-11-2020-06-57-14.jpg",
//           srtg: "9.2/10 ⭐"
//         },
//         {
//           tle: "Shyam Singha Roy",
//           descr: "Shyam Singha Roy is a 2021 Indian Telugu-language supernatural period romantic drama film[6] directed by Rahul Sankrityan. A director accused of plagiarism finds a transcendental connection to his past life when he digs deeper into his subconscious mind.",
//           pstr: "https://images.news18.com/ibnkhabar/uploads/2022/01/shyam.jpg",
//           srtg: "9.1/10 ⭐"
//         },
//         { 
//           tle: "Padmaavat",
//           descr: "Padmaavat is a 2018 Indian period romantic action drama film directed by Sanjay Leela Bhansali.Queen Padmavati is happily married to a Rajput ruler until a ruthless sultan, Alauddin Khalji, declares war on their kingdom due to his obsession with her. ",
//           pstr: "https://m.media-amazon.com/images/M/MV5BZjJjZWIwZDMtNGQ5OC00OWJmLWJkNGMtZTJlZjA5NTRkZDBmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpgg",
//           srtg: "7.5/10 ⭐"
//         },
//         {
//           tle: "RRR",
//           descr: "RRR is an alternate history and historical fiction movie. A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
//           pstr: "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
//           srtg: "8.7/10 ⭐"
//         },
//         { 
//           tle: "Asoka",
//           descr: "Asoka, the heir to the Maurya Empire, is sent on an exile for having fought with his half-brother, Susima. While travelling south, he meets Kaurwaki, princess of Kalinga, and falls for her.",
//           pstr: "https://i.ytimg.com/vi/Sa71MZpFS8Y/movieposter.jpg",
//           srtg: "7.6/10 ⭐"
//         }
//       ];
//   return (
//     <div className="App">
//       { Movies.map((mov) => 
//         <Movie tle={mov.tle} descr={mov.descr} pstr={mov.pstr} srtg={mov.srtg}/>
//       )}
//     </div>
//   );
// }

// // Sub-component-1: mapping applied
// function Movie({tle, descr, pstr, srtg}) {
//   return( 
//     <div className='container'>
//       <img className="movie-pstr" src={pstr} alt="Loading" />
//       <h3 className="movie-tle"> {tle} <span className="movie-srtg"> {srtg} </span></h3>
//       <div className="movie-descr">{descr}</div>
//       <Counter/> 
//       {/* Here we nested Sub-component-2 inside Sub-component-1 */}
//     </div>
//   );
// }

// // Sub-component-2: Adding like botton ✅ using hooks:
// function Counter() {
//   let [like, setLike]= useState(0);
//   let [dislike, setDisLike]= useState(0);
//   return (
//     <div className="Counter">
//       <button className="btn" onClick={() => setLike(like + 1)}>👍 {like}</button>
//       <button className="btn" onClick={() => setDisLike(dislike + 1)}>👎 {dislike}</button>
//     </div>
//   );
// }
// export default App;

/*********************************************************************************************************************************************************************************************************************************************************************************** */
// // Applied export & import
// // Sample:

// import './App.css';
// import { Welcome , double , addition } from './Welcome'; // named impor
// function App() {
//   let names = ["Karthika","Soundarya","Sangeetha","Amsapriya","Kaver","Jananyasree"]; // If you want to add more items means you can include in array
//   return (
//     <div className="App">
//       {names.map(nm => <Welcome name={nm}/> )}
//     </div>
//   );
// }
// console.log(double(20));    // function call
// console.log(addition(100)); // function call
// export default App; // default export

/******************************************************************************************************************************************************************************************************************************** */
// Problem :10
// Applied export & import
// Applied Conditional Styling & Conditional rendering
import './App.css'; 
import { Movie } from './Movie'; // named import
function App() {
const Movies =[
        {
          tle: "Ponniyin Selvan: I",
          descr: "Ponniyin Selvan: I ( transl. The Son of Ponni) is a 2022 Indian Tamil-language epic historical action adventure film directed by Mani Ratnam. Sensing an uprising in the capital, Crown Prince Aditha Karikalan sends his friend Vallavaraiyan Vandiyadevan on a mission that sets off a series of conspiracies against the reigning king.",
          pstr: "https://preview.redd.it/lq72e1sl4fo91.jpg?auto=webp&s=017475c8fb78b03640ec07546bbfc869aafb0677",
          srtg: "9.4/10 ⭐"
        },
        {
          tle: "Jodhaa Akbar",
          descr: "Jodhaa Akbar is a 2008 Indian Hindi-language epic historical romantic drama film directed by Ashutosh Gowariker. Jodhaa is a fiery Rajput princess who is obliged to marry Mughal Emperor Akbar for political reasons. Eventually, mutual respect and admiration between the duo leads to true love.",
          pstr: "https://upload.wikimedia.org/wikipedia/en/0/0e/Jodhaa_akbar.jpg",
          srtg: "9.0/10 ⭐"
        },
        {
          tle: "Bajirao Mastani",
          descr: "The heroic Peshwa Bajirao, married to Kashibai, falls in love with Mastani, a warrior princess in distress. They struggle to make their love triumph amid opposition from his conservative family.",
          pstr: "https://m.media-amazon.com/images/M/MV5BZTI5OTNmOGYtMjdlNy00OTY0LThjNjEtZjMzZmEwZTAyM2VmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          srtg: "8.8/10 ⭐"
        },
        {
          tle: "Baahubali",
          descr: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
          pstr: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baahubali-the-beginning-part-i-et00031217-05-11-2020-06-57-14.jpg",
          srtg: "9.2/10 ⭐"
        },
        {
          tle: "Shyam Singha Roy",
          descr: "Shyam Singha Roy is a 2021 Indian Telugu-language supernatural period romantic drama film[6] directed by Rahul Sankrityan. A director accused of plagiarism finds a transcendental connection to his past life when he digs deeper into his subconscious mind.",
          pstr: "https://images.news18.com/ibnkhabar/uploads/2022/01/shyam.jpg",
          srtg: "9.1/10 ⭐"
        },
        { 
          tle: "Padmaavat",
          descr: "Padmaavat is a 2018 Indian period romantic action drama film directed by Sanjay Leela Bhansali.Queen Padmavati is happily married to a Rajput ruler until a ruthless sultan, Alauddin Khalji, declares war on their kingdom due to his obsession with her. ",
          pstr: "https://m.media-amazon.com/images/M/MV5BZjJjZWIwZDMtNGQ5OC00OWJmLWJkNGMtZTJlZjA5NTRkZDBmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpgg",
          srtg: "7.5/10 ⭐"
        },
        {
          tle: "RRR",
          descr: "RRR is an alternate history and historical fiction movie. A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
          pstr: "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
          srtg: "8.7/10 ⭐"
        },
        { 
          tle: "Asoka",
          descr: "Asoka, the heir to the Maurya Empire, is sent on an exile for having fought with his half-brother, Susima. While travelling south, he meets Kaurwaki, princess of Kalinga, and falls for her.",
          pstr: "https://i.ytimg.com/vi/Sa71MZpFS8Y/movieposter.jpg",
          srtg: "7.6/10 ⭐"
        }
      ];
  return (
    <div className="App">
      { Movies.map((mov) => 
        <Movie tle={mov.tle} descr={mov.descr} pstr={mov.pstr} srtg={mov.srtg}/>
      )}
    </div>
  );
}
export default App; // default export



