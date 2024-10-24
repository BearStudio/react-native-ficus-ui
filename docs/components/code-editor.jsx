import React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import * as ReactNative from 'react-native';
import * as FicusUI from 'react-native-ficus-ui';

const scope = { React, ...ReactNative, ReactNative, ...FicusUI };

export function CodeEditor({ code, ...rest }) {
  return (
    <div className="mt-8">
      <LiveProvider code={code} scope={scope} {...rest}>
        <div className="grid grid-cols-2 gap-4">
          <LivePreview />
          <div style={{ backgroundColor: 'rgb(1, 22, 39)', borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem', marginBottom: '-1rem', display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.7em', color: '#CBD5E0', padding: '0.1rem' }}>EDITABLE EXAMPLE</div>
          <LiveEditor style={{ borderBottomLeftRadius: '0.75rem', borderBottomRightRadius: '0.75rem', overflow: 'hidden', fontSize: '0.9em', fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace' }} />
          <LiveError className="text-red-800 bg-red-100 mt-2" />
        </div>
      </LiveProvider>
    </div>
  );
}
