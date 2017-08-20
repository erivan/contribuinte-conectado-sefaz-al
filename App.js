import React from 'react';
import { Provider, connect } from 'react-redux';
import Realm from 'realm';
import { addNavigationHelpers } from 'react-navigation';
import store from './app/store';
import Schemas from './app/domain/local/schema';
import Navigator from './app/config/routes';


const Nav = ({ dispatch, nav }) => (
    <Navigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav
        })}
    />
);

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(Nav);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { realmLoaded: false, loogedIn: false };
  }
  componentWillMount() {
    this.realm = Realm.open({ schema: Schemas })
      .then(() => {
        this.setState({ realmLoaded: true });
    });
  }

  render() {
    if (!this.state.realmLoaded) return null;

    return (
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    );
  }
}
