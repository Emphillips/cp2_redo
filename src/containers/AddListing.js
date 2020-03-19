// Import Components
import AddListing from '../components/AddListing';
//Import Redux
import { connect } from 'react-redux';
import { updatePlace } from '../redux/Actions';

const mapDispatchToProps = (dispatch) => {
	return {
			updatePlace: (place) => dispatch(updatePlace(place))
	}
};

export default connect(null, mapDispatchToProps)(AddListing);