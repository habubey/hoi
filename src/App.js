import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import background from "./Images/pexels-karolina-grabowska-4590785.jpg"



function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})` 
    }}>
      <Navbar/>
      <Header/>
       
      


    </div>
  );
}

export default App;
