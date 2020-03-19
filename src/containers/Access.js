import { connect } from 'react-redux';
// Import Components
import Access from '../components/Access';
// Import Redux
import { user } from '../redux/Actions';


const mapStateToProps = (state) => {
  return{
    username: state.username,
    password: state.password,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      user: (username) => dispatch (user(username))
  }
};


export default connect (mapStateToProps, mapDispatchToProps) (Access);