import os
from flask import Flask, redirect, url_for, session, request
from flask_oauthlib.client import OAuth
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Load sensitive credentials from environment variables
app.secret_key = os.getenv('FLASK_SECRET_KEY', 'efe0be18d4c3ed3dea3dd79a0b87f20cf20f746a45734f2c')  # Secret Key
google_client_id = os.getenv('FLASK_GOOGLE_CLIENT_ID', '589740251688-s9uv1h0stvvtig13hr224ug042t2lj4k.apps.googleusercontent.com')  # Google Client ID
google_client_secret = os.getenv('FLASK_GOOGLE_CLIENT_SECRET', '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')  # Google Client Secret

# Initialize OAuth
oauth = OAuth(app)

# Setup Google OAuth
google = oauth.remote_app(
    'google',
    consumer_key=google_client_id,
    consumer_secret=google_client_secret,
    request_token_params={
        'scope': 'email',
    },
    base_url='https://www.googleapis.com/oauth2/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
)

# Home route
@app.route('/')
def home():
    return 'Welcome to the home page!'

# Login route
@app.route('/login')
def login():
    return google.authorize(callback=url_for('authorized', _external=True))

# Authorized route after Google login
@app.route('/login/authorized')
def authorized():
    response = google.authorized_response()
    if response is None or response.get('access_token') is None:
        return 'Access denied: reason={} error={}'.format(
            request.args.get('error_reason'),
            request.args.get('error_description')
        )

    session['google_token'] = (response['access_token'], '')
    user_info = google.get('userinfo')
    return 'Logged in as: ' + user_info.data['email']

# OAuth token getter
@google.tokengetter
def get_google_oauth_token():
    return session.get('google_token')

if __name__ == '__main__':
    app.run(debug=True)
