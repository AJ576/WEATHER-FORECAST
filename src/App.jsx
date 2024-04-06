
import Display from './components/Display';
import { useRoutes } from 'react-router-dom';
import Detail from './components/Detail';
import './App.css'

function App() {

  let pages = useRoutes([
    {
      path:"/",
      element:<Display/>
    },
    {
      path:"/details/:date/:description/:wind/:visibility",
      element:<Detail />
    }
  ])
  return (
    <>
      {pages}
    </>
  );
}

export default App
