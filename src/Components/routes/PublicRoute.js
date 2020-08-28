import React from 'react';
import { Route, Redirect, withRouter, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ component: Component, isAuth, ...props }) => {
    return (
        <Route {...props} render={(...props) => isAuth ? <Redirect to="/" /> : <Component {...props} />} />
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isAuth: state.auth.isAuth,
    }
}

export default withRouter(connect(mapStateToProps)(PublicRoute));

