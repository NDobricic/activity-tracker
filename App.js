import { Title, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Surface style={{width: '100%', height: '100%'}}>
        <Title>Hello, World!</Title>
      </Surface>
    </SafeAreaView>
  );
};

export default App;