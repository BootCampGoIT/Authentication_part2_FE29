import React, { Suspense } from 'react';
import Todo from './todo/Todo';
import { NavLink, Switch, Route } from 'react-router-dom';
import css from './App.module.css';
import AuthForm from './auth/authForm/AuthForm';
import RegistrationForm from './auth/registrationForm/RegistrationForm';
import { signOutOperation } from '../redux/operations/authOperation';
import { connect } from 'react-redux';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import routes from './routes';
import { authSelector } from '../redux/selectors/todoSelectors';

const App = (props) => {
    return (
        <>
            <div className={css.navigation}>
                <ul className={css.navigationList}>
                    <li>
                        <NavLink
                            exact
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    {props.isAuth &&
                        <>
                            <li>
                                <NavLink
                                    className={css.navigationItem}
                                    activeClassName={css.activeNavigationItem}
                                    to="/todo">
                                    Todo
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={css.navigationItem}
                                    activeClassName={css.activeNavigationItem}
                                    to="/profile">
                                    My profile
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>

                <div className="authBlock">
                    {!props.isAuth ?
                        <ul className={css.authList} >
                            <li>
                                <NavLink
                                    className={css.authItem}
                                    activeClassName={css.activeAuthItem}
                                    to="/signin">
                                    SignIn
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={css.authItem}
                                    activeClassName={css.activeAuthItem}
                                    to="/signup">
                                    SignUp
                                </NavLink>
                            </li>
                        </ul>
                        :
                        <button type="button" onClick={props.signOutOperation} className="button">SignOut</button>
                    }
                </div>
            </div>

            <div className={css.container}>
                <Switch>
                    <Suspense fallback={<h2>...loading</h2>}>
                        {/* <PublicRoute exact path="/" component={() => <h2>Home</h2>} />
                    <PublicRoute exact path="/signin" component={AuthForm} />
                    <PublicRoute exact path="/signup" component={RegistrationForm} />
                    <PrivateRoute exact path="/todo" component={Todo} /> */}
                        {routes.map(route => {
                            return route.private
                                ? (<PrivateRoute key={route.name} {...route} />)
                                : (<PublicRoute key={route.name} {...route} />)
                        })}
                    </Suspense>
                </Switch>
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        isAuth: authSelector(state)
    }
}

const mapDispatchToProps = { signOutOperation }

export default connect(mapStateToProps, mapDispatchToProps)(App);