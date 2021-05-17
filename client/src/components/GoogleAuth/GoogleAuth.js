import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '35997267628-lf3vbo45ndo9j5s90ra60usaaq4sshv0.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <span>GoogleAuth</span>;
    }
}

export default GoogleAuth;
