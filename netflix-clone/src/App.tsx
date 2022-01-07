import React from "react";
import { Row, Banner } from "src/components";

import { MOVIEAPI } from "src/plugins/apiConsts";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner fetchUrl={MOVIEAPI.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={MOVIEAPI.fetchNetflixOriginals}
        size="large"
      />
    </div>
  );
};

export default App;
