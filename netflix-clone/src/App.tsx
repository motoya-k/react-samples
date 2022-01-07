import React from "react";
import { Row, Banner , GlobalNav} from "src/components";
import { MOVIEAPI } from "src/plugins/apiConsts";
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalNav />
      <Banner fetchUrl={MOVIEAPI.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={MOVIEAPI.fetchNetflixOriginals}
        size="large"
      />
      <Row
        title="TOP RATED"
        fetchUrl={MOVIEAPI.fetchTopRated}
        size="large"
      />
      <Row
        title="TRENDING"
        fetchUrl={MOVIEAPI.fetchTrending}
        size="large"
      />
      <Row
        title="ACTION MOVIES"
        fetchUrl={MOVIEAPI.fetchActionMovies
        }
        size="large"
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={MOVIEAPI.fetchComedyMovies
        }
        size="large"
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={MOVIEAPI.fetchHorrorMovies
        }
        size="large"
      />
      <Row
        title="ROMANCE MOVIES"
        fetchUrl={MOVIEAPI.fetchRomanceMovies
        }
        size="large"
      />
      <Row
        title="DOCUMENT MOVIES"
        fetchUrl={MOVIEAPI.fetchDocumentMovies
        }
        size="large"
      />
    </div>
  );
};

export default App;
