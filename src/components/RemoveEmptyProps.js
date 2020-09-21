import React, { useState } from 'react';
import AceEditor from 'react-ace';

import removeEmptyProps from '../packages/remove-empty-props';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';

const RemoveEmptyProps = () => {
  const [object, setObject] = useState(
    JSON.stringify(
      {
        foo: null,
        bar: undefined,
        baz: '',
        fab: false,
        gib: '༼ つ ◕_◕ ༽つ',
        nested: {
          one: 1,
          two: '2',
          three: Number('3'),
          four: null,
          five: undefined,
          six: {},
          seven: []
        }
      },
      null,
      2
    )
  );

  console.log(removeEmptyProps(JSON.parse(object)));

  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4">
                @bagofholding/remove-empty-props
              </h2>
              <p className="card-text">
                Enter some <kbd>JSON</kbd> below and watch the <kbd>null</kbd>{' '}
                and <kbd>undefinied</kbd> properties magically disappear...
                recursively!
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="form-group">
                      <AceEditor
                        mode="json"
                        theme="monokai"
                        className="w-100"
                        onChange={value => {
                          try {
                            const converted = JSON.stringify(
                              JSON.parse(value),
                              null,
                              2
                            );
                            setObject(converted);
                          } catch (err) {
                            console.warn(err);
                          }
                        }}
                        name="remove-empty-props"
                        defaultValue={object}
                        wrapEnabled={true}
                        editorProps={{ $blockScrolling: true }}
                      />
                    </div>
                    <div className="form-group">
                      <AceEditor
                        mode="json"
                        theme="monokai"
                        className="w-100"
                        onChange={() => {}}
                        name="remove-empty-props"
                        value={JSON.stringify(
                          removeEmptyProps(JSON.parse(String(object))),
                          null,
                          2
                        )}
                        wrapEnabled={true}
                        readOnly={true}
                        tabSize={2}
                        editorProps={{ $blockScrolling: true }}
                      />
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

export default RemoveEmptyProps;
