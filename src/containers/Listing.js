// Import Components
import Listing from '../components/Listing';
// Import Redux
import { connect } from 'react-redux';
import { removePlace } from '../redux/Actions';

const mapStateToProps = (state) => {
  return {
      place:state.place,
      user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
			removePlace: (index) => dispatch(removePlace(index))
	}
};


export default connect (mapStateToProps, mapDispatchToProps)(Listing);