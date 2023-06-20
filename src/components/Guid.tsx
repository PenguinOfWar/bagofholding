import React, { useState } from 'react';

import guid from '../packages/guid';

const Guid = () => {
  const [string, setString] = useState(guid());

  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4">@bagofholding/guid</h2>
              <p className="card-text">
                Quickly generate a GUID string for short term ops, e.g. queued{' '}
                job IDs
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-4 offset-lg-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="e.g https://github.com"
                        value={string}
                        disabled
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => setString(guid())}>
                        New GUID
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guid;
