import { StackNavigator } from 'react-navigation';
import LoginScreen from '../containers/login/LoginScreen';
import SelectServiceScreen from '../containers/selectservice/SelectServiceScreen';
import ShowProcessScreen from '../containers/showprocessscreen/ShowProcessScreen';

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
  ShowProcessScreen: {
    screen: ShowProcessScreen,
    navigationOptions: {
      header: () => null
    }
  },
}
);
