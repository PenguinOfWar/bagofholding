import React from 'react';
import classNames from 'classnames';

import isClient from '../packages/is-client';

const IsClient = () => {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4">@bagofholding/is-client</h2>
              <p className="card-text">
                Detects if the script is being running client (browser) side.
                This one is going to be difficult to demo.
              </p>
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <h3>Are you using a browser right now?</h3>
                      <h2>
                        <span
                          className={classNames({
                            badge: true,
                            'badge-success': isClient(),
                            'badge-danger': !isClient()
                          })}
                        >
                          {isClient()
                            ? 'Yes!'
                            : 'No! Wait, how did you do that?'}
                        </span>
                      </h2>
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

export default IsClient;
