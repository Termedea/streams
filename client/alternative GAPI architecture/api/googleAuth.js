export default class GoogleAuth {
    constructor(client_id = 'YOUR_CLIENT_ID', scope = 'email') {
        this.client_id = client_id;
        this.scope = scope;
        this.auth2 = null;
    }

    init() {
        return new Promise((resolve, reject) => {
            window.gapi.load('auth2', () => {
                window.gapi.auth2
                    .init({
                        client_id: this.client_id,
                        scope: this.scope
                    })
                    .then((auth2) => {
                        this.auth2 = auth2;
                        resolve(this, auth2);
                    })
                    .catch(reject);
            });
        });
    }

    signIn() {
        return this.auth2.signIn();
    }

    signOut() {
        return this.auth2.signOut();
    }

    isSignedIn() {
        return this.auth2.isSignedIn.get();
    }

    userId() {
        return this.auth2.currentUser.get().getId();
    }

    signInListen(callback) {
        return this.auth2.isSignedIn.listen(callback);
    }
}
