import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/session_actions';
import MainNav from './nav';
import { receiveStocks } from '../../../actions/security_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    indexes: state.entities.indexes,
    stocks: state.entities.stocks
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    receiveStocks: () => dispatch(receiveStocks()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);