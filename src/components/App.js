import  React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import ChallengePageFilter from './ChallengePageFilter';
import ChallengeCardList from './ChallengeCardList';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          loading={false}
        />
          <ChallengePageFilter />
          <ChallengeCardList />
        {/*{this.props.children}*/}
        <Footer/>
      </div>
    );
  }
}

// function mapStateToProps(state, ownProps) {
//   return {
//     // loading: state.numAjaxCallInProgress > 0
//   };
// }
//
// App.propTypes = {
//   // children: PropTypes.object.isRequired
// };

// export default connect(mapStateToProps)(App);
export default App;
