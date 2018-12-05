import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

class TestContextApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemedButton onClick={this.toggleTheme}>
            Change Theme
          </ThemedButton>

        </ThemeContext.Provider>
      </div>
    ); 
  } 
}

export default TestContextApp;