import Menu from './Menu';
import Rules from './pages/Rules';

import { Routes, Route } from 'react-router-dom';
import Head from './pages/Head';
import Abt from './pages/Abt';
import Pics from './pages/Button.tsx';

const App = () => {
    return (
        <div>
            <Menu />

            <div class="container my-8">
                <Routes>
                    <Route path="/" element={<Head />} />
                    <Route path="/Rules" element={<Rules />} />
                    <Route path='/Abt' element={<Abt/>}/>
                    <Route path='/game' element={<Pics/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;