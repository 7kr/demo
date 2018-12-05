import React from 'react'
import {ThemeContext} from './theme-context';
import TestContextDeepDom from './TestContextDeepDom';

class ThemedButton extends React.Component {

  componentDidMount = () => {
    console.log("content", this.context);
  }

  render() {
    let props = this.props;
    // let theme = this.context;
    const TestContext = this.context;
    return (
      <div>
        <button
          {...props}
          style={{backgroundColor: TestContext.theme.background}}
        />
        <TestContextDeepDom />
      </div>
    );
  }
}

ThemedButton.contextType = ThemeContext;
/*
可以为类上的 contextType 属性分配由 React.createContext() 创建的 Context 对象。 
这允许您使用this.context 使用该 Context 类型 的最近的当前值。 
您可以在任何生命周期方法中引用它，包括 render 函数。
*/

export default ThemedButton;