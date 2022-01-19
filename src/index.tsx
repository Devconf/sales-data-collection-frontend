import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render( 
    <React.StrictMode>
      <App /> 
    </React.StrictMode>,  
    document.getElementById("root")
  );
  // ReactDOM이 위 태그들을 해당 root DOM에 Render한다.
  // <App/> 실제로 화면에 나타나는 컴포넌트