import React, { useState } from 'react';

import stripCharsUrlSafe from '../packages/strip-chars-url-safe';

const StripChars = () => {
  const [string, setString] = useState(
    'This is an Iñtërnâtiônàlizætiøn place! For Internationalization people!'
  );

  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4">
                @bagofholding/strip-chars-url-safe
              </h2>
              <p className="card-text">
                Converts a string to a URL safe string for filenames or slugs.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-4 offset-lg-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        value={string}
                        onChange={event => setString(event.target.value || '')}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h2>
                    <span className="badge badge-dark text-wrap">
                      {stripCharsUrlSafe(string)}
                    </span>
                  </h2>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripChars;
