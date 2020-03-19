import { connect } from 'react-redux';
// Import Components
import NavMenu from '../components/NavMenu';

const mapStaeToProps = (state) => {
      return {
          username: state.username,
          password: state.password,
      }
};

export default connect(mapStateToProps)(NavMenu);