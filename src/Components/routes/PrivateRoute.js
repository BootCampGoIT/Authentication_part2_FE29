import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, isAuth, ...props }) => {
    console.log('props', props)

    return (
        <Route {...props} render={(...props) => isAuth ? <Component {...props} /> : <Redirect to="/signin" />} />
    );
}

const mapStateToProps = (state) => {
    console.log("=>", state)
    return {
        isAuth: state.auth.isAuth,
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));

