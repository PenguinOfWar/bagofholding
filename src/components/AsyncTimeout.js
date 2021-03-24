import React, { useState, useEffect } from 'react';
import Progress from 'rsup-progress';
import AceEditor from 'react-ace';

import timeout from '../packages/async-timeout';
import isClient from '../packages/is-client';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

export const snippet = `
import timeout from '../packages/async-timeout';

const ms = 500;

window.progress.start();
await timeout(ms);
window.progress.end();

alert(\`Finished in \${ms}ms\`);
`.trim();

const AsyncTimeout = () => {
  const [ms, setMs] = useState(500);

  useEffect(() => {
    if (isClient()) {
      window.progress = new Progress({
        height: 25,
        color: 'green'
      });
    }
    return;
  }, []);

  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4">
                @bagofholding/async-timeout
              </h2>
              <p className="card-text">
                A small <code>Promise</code> wrapper so you can{' '}
                <code>await</code> timeouts
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="form-group">
                      <AceEditor
                        mode="javascript"
                        theme="monokai"
                        className="w-100"
                        onChange={() => {}}
                        name="remove-empty-props"
                        value={String(snippet)}
                        wrapEnabled={true}
                        readOnly={true}
                        tabSize={2}
                        editorProps={{ $blockScrolling: true }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 offset-lg-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="e.g 500"
                        value={ms}
                        onChange={event => setMs(event?.target?.value ?? 500)}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={async () => {
                          window.progress.start();
                          await timeout(ms);
                          window.progress.end();
                          alert(`Finished in ${ms}ms`);
                        }}
                      >
                        Hurry up and <code>await</code>
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

export default AsyncTimeout;
