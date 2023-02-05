import React from 'react';
const GoogleButton = () => {
    return (
        <div>
        <a href="/auth/google">Sign in with Google</a>
        </div>
    );
    };
    
const SteamButton = () => {
    return (
        <div>
        <a href="/auth/steam">Sign in with Steam</a>
        </div>
    );
    }
    
const GithubButton = () => {
    return (
        <div>
        <a href="/auth/github">Sign in with Github</a>
        </div>
    );
    }

export default function SignIn() {
    return (
        <div>
            <GoogleButton />
            <SteamButton />
            <GithubButton />
        </div>
    );
    }
    



