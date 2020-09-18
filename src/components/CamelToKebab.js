import React, { useState } from 'react';
import classNames from 'classnames';

import camelToKebab from '../packages/camel-to-kebab';

const CamelToKebab = () => {
  const [string, setString] = useState(camelToKebab('deliciousCamelKebab'));

  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4">
                @bagofholding/camel-to-kebab
              </h2>
              <p className="card-text">
                Enter a <kbd>camelCase</kbd> string to get{' '}
                <kbd>camel-kebabs</kbd>
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-4 offset-lg-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="e.g deliciousCamelKebab"
                        onChange={event =>
                          setString(camelToKebab(event?.target?.value ?? ''))
                        }
                        defaultValue="deliciousCamelKebab"
                      />
                    </div>
                    <div className="form-group">
                      <h2>
                        <span
                          className={classNames({
                            badge: true,
                            'badge-success': string && string !== '',
                            'badge-danger': !string || string === ''
                          })}
                        >
                          {string && string !== '' ? string : '...'}
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

export default CamelToKebab;
