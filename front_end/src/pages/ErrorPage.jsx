import '../styles/Pages/Error.css'
import { Link } from 'react-router-dom'


export default function ErrorPage() {
    return (
        <main className="bg-dark">
            <div className="ErrorContainer">
                <h1 className='ErrorH1'>404</h1>
                <p className='ErrorP'>
                   Sorry but the page you are requesting does not exists.
                </p>
                <Link className='ErrorLink' to="/">Return to home page</Link>
            </div>
        </main>
    )
}
