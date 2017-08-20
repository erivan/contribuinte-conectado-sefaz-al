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
      header: () => null
    }
  },
}
);
