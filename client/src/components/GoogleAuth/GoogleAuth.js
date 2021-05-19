import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '35997267628-lf3vbo45ndo9j5s90ra60usaaq4sshv0.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange();
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    };
    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
    };
    renderAuthInfo() {
        if (this.state.isSignedIn === null) {
            return <span>&nbsp;</span>;
        } else if (this.state.isSignedIn) {
            let currentUser = this.auth.currentUser.get().getBasicProfile().getGivenName();
            return (
                <>
                    <div className="flex-auto">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        Signed in as {currentUser}
                    </div>
                    <button onClick={this.onSignOutClick}>
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                        Sign out
                    </button>
                </>
            );
        }
        return (
            <button onClick={this.onSignInClick}>
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign in with Google
            </button>
        );
    }
    render() {
        return this.renderAuthInfo();
    }
}

export default GoogleAuth;
