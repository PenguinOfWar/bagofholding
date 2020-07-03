import React, { useState } from 'react';
import classNames from 'classnames';

import isExternal from '../packages/is-external';

const IsExternal = () => {
  const [string, setString] = useState('');
  const [advancedString, setAdvancedString] = useState('');

  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4">
                @bagofholding/is-external
              </h2>
              <p className="card-text">
                Enter a string below to find out if it is an external link.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-4 offset-lg-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="e.g https://github.com"
                        value={string}
                        onChange={event => setString(event.target.value || '')}
                      />
                    </div>
                    <div className="form-group">
                      <h2>
                        <span
                          className={classNames({
                            badge: true,
                            'badge-success': isExternal(string),
                            'badge-danger': !isExternal(string)
                          })}
                        >
                          {`${!isExternal(string) ? 'Not ' : ''}External`}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <hr className="my-4" />
            <div className="card-body">
              <h3 className="card-title">Custom Conditional</h3>
              <p className="card-text">
                An optional second parameter can be passed a function. The
                return response is then used in the is-external check.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-4 offset-lg-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="e.g. /outside-router/pdf"
                        value={advancedString}
                        onChange={event =>
                          setAdvancedString(event.target.value || '')
                        }
                      />
                    </div>
                    <div className="form-group">
                      <h2>
                        <span
                          className={classNames({
                            badge: true,
                            'badge-success': isExternal(advancedString, to => {
                              return to.toLowerCase().includes('/pdf');
                            }),
                            'badge-danger': !isExternal(advancedString, to => {
                              return to.toLowerCase().includes('/pdf');
                            })
                          })}
                        >
                          {`${!isExternal(string) ? 'Not ' : ''}External`}
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

export default IsExternal;
