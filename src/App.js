import { HomePage } from "./Pages/HomePage/HomePage";
import {
    BrowserRouter,
    createBrowserRouter,
    Navigate,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import { Services } from "./Pages/ServicesPage/Services";
import { Login } from "./Pages/Login/Login";

function App(){
    return(
         <div className="container">
            <BrowserRouter>
                <Routes>
                <Route path="/">
                    <Route index element={<HomePage></HomePage>} />
                    <Route path="services" element={<Services></Services>} />
                    <Route path="login" element={<Login></Login>} />
                </Route>
                </Routes>
            </BrowserRouter>
            
         </div>

         
    )
}
export default App;