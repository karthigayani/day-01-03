function Welcome({ name }) {
    return (
      <>
        <h2 className="user-descr"> Hello <span className="user-name"> {name} </span> 🎉🎊✨ </h2>
      </>
    );
  }
  
  const double = (n) => n * 2; 
  
  const addition = (a) => a + 5;
  
  
  
  export { Welcome , double , addition}; // named export (multiple function)
  