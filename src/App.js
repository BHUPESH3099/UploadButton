import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Upload from './component/Upload/Upload'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Upload />} />
        </Routes>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
