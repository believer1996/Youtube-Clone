import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {AppContext} from './context/contextApi'
import {Header} from './components/header'
import {Feed} from './components/feed'
import { SearchResult } from './components/searchResult';
import { VideoDetails } from './components/videosDetails';

const App = () => {
  return (
      <AppContext>
          <BrowserRouter>
              <div className="flex flex-col h-full">
                  <Header />
                  <Routes>
                      <Route path="/" exact element={<Feed />} />
                      <Route
                          path="/searchResults/:searchQuery"
                          element={<SearchResult />}
                      />
                      <Route path="/video/:id" element={<VideoDetails />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </AppContext>
  );
};

export default App;