import { StackNavigator } from 'react-navigation';
import LoginScreen from '../containers/login/LoginScreen';
import SelectServiceScreen from '../containers/selectservice/SelectServiceScreen';
import ShowProcessScreen from '../containers/showprocessscreen/ShowProcessScreen';
import TermScreen from '../containers/terms/TermScreen';
import RetainedMerchandiseScreen from '../containers/retainedmerchandise/RetainedMerchandiseScreen';
import ArrecadacoesScreen from '../containers/arrecadacoes/ArrecadacoesScreen';

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
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { color: '#0c73f0', alignSelf: 'center' }
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
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#0c73f0' },
      headerTitleStyle: { color: 'white' },
      headerTitle: 'Produtos Retidos',
    }
  },
  RetainedMerchandiseScreen: {
    screen: RetainedMerchandiseScreen,
    navigationOptions: {
      headerTintColor: 'white',
      headerTitle: 'Detalhe do produto',
      headerStyle: { backgroundColor: '#0c73f0' },
      headerTitleStyle: { color: 'white' }
    }
  },
  ArrecadacoesScreen: {
    screen: ArrecadacoesScreen,
    navigationOptions: {
      headerTitle: 'Arrecadações',
    }
  }
}
);
