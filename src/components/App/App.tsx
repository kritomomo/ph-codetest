import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Login from '../../pages/Login/Login';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />}/>
        <Route path="topics/react" element={<h2>React</h2>}/>
        <Route path="topics/vue" element={<h2>Vue</h2>}/>
        <Route path="topics/angular" element={<h2>Angular</h2>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
