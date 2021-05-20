import React from 'react';
import { connect } from 'react-redux';
import { initGoogleAuth, signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        this.props.initGoogleAuth();
    }

    onSignInClick = () => {
        this.props.signIn();
    };

    onSignOutClick = () => {
        this.props.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"></i>
                    Sign In with Google
                </button>
            );
            return <div>I am not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { initGoogleAuth, signIn, signOut })(GoogleAuth);
