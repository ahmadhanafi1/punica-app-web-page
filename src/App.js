import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import  "./services/locale/config"


function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
