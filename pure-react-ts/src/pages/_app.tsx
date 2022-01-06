import Index from "./index";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </Router>
    );
}

export default App;
