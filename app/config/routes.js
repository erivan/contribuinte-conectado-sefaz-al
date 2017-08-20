import { StackNavigator } from 'react-navigation';
import LoginScreen from '../containers/login/LoginScreen';
import SelectServiceScreen from '../containers/selectservice/SelectServiceScreen';
import ShowProcessScreen from '../containers/showprocessscreen/ShowProcessScreen';
import TermScreen from '../containers/terms/TermScreen';
import RetainedMerchandiseScreen from '../containers/retainedmerchandise/RetainedMerchandiseScreen';
import FacAnswer from '../containers/fac/FacAnswer';
import FacScreen from '../containers/fac/FacPanels';

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
  ShowProcessScreen: {
    screen: ShowProcessScreen,
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
  },
  FacAnswer: {
    screen: FacAnswer,
    navigationOptions: {
      headerTitle: 'Respostas',
    }
  },
  FacScreen: {
    screen: FacScreen,
    navigationOptions: {
      headerTitle: 'FAC',
    }
  }
}
);
