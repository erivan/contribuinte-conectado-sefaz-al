import { StackNavigator } from 'react-navigation';
import LoginScreen from '../containers/login/LoginScreen';
import SelectServiceScreen from '../containers/selectservice/SelectServiceScreen';

export default StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => null
    }
  },
  SelectServiceScreen: {
    screen: SelectServiceScreen,
    navigationOptions: {
      title: 'Serviços',
      headerLeft: null,
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { color: '#0c73f0' }
    }
  },
}
);
