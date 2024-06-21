import  GraphLine  from './components/GraphLine.jsx';
import  GraphArea  from './components/GraphArea.jsx';
import { NavBar } from './components/NavBar';

export default function Graph() {
    return(
        <>
            <NavBar/>
            <GraphArea/>
            <GraphLine/>
        </>
    )
  }

 