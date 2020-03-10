import { connect } from 'react-redux';
import Access from '../components/Access';


const mapStateToProps = (state) => {
  return{
    username: state.username,
    password: state.password,
    loggedIn: state.loggedIn,
  };
}


export default Access;