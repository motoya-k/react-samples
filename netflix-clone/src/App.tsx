import React from "react";
import { Row, Banner , GlobalNav} from "src/components";

import { MOVIEAPI } from "src/plugins/apiConsts";

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
    </div>
  );
};

export default App;
