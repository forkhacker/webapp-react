import  React, {PropTypes} from 'react';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
// import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header
                    loading={false}
                />
                {this.props.children}
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
