// Import Redux
import { connect } from 'react-redux';
// Import Components
import Details from '../components/Details';

const mapStateToProps = (state) => {
  return {
      place: state.place,
      detailview: state.detailview,
  };
};

export default connect (mapStateToProps)(Details);