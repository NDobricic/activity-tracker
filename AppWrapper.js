// CORE FUNCTIONALITY
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';

// CONTEXTS
import { PreferencesContext } from './src/context/PreferencesContext';

// UTILITIES
import { lightTheme, darkTheme } from './src/utils/themes';

const AppWrapper = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? darkTheme : lightTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

export default AppWrapper;