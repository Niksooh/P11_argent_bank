import { useState } from 'react';
import InformationAccount from '../components/InformationAccount';
// import Editfrom '???';

export default function User() {

    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe'
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    if (isLoading) return <h1>Chargement...</h1>;
    if (error) return <h1>Une erreur est survenue...</h1>;

    return (
        <main className="bg-dark">
            <h1 className='UserH1'>
                Welcome back
                <br />
                {`${user.firstName} ${user.lastName}!`}
            </h1>

            {/* <Edit firstName={user.firstName} lastName={user.lastName} /> */}

            <p className="sr-only">Accounts</p>
            <InformationAccount
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />
            <InformationAccount
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <InformationAccount
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />
        </main>
    );
}
