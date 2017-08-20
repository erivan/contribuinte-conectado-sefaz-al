import { StackNavigator } from 'react-navigation';
import LoginScreen from '../containers/login/LoginScreen';
import SelectServiceScreen from '../containers/selectservice/SelectServiceScreen';
import TermScreen from '../containers/terms/TermScreen';
import RetainedMerchandiseScreen from '../containers/retainedmerchandise/RetainedMerchandiseScreen';


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
  TermScreen: {
    screen: TermScreen,
    navigationOptions: {
      headerTitle: 'Produtos Retidos',
    }
  },
  RetainedMerchandiseScreen: {
    screen: RetainedMerchandiseScreen,
    navigationOptions: {
      headerTitle: 'Detalhe do produto',
    }
  }
}
);
