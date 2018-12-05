import React from 'react';
import { ThemeContext } from './theme-context';

class TestContextDeepDom extends React.Component {
  render() {
    // const TestContext = this.context;
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <div>
            <span>更深一层的组件：</span>
            <span style={{color: theme.background}}>点击改变主题按钮，这里更深一级也能响应到context（改变颜色，不通过props传递）</span>
            <button style={{backgroundColor: theme.background}} onClick={toggleTheme}>Toggle Theme</button>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

TestContextDeepDom.contextType = ThemeContext;
export default TestContextDeepDom