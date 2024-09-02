import '../styles/Components/InformationAccount.css';

const InformationAccount = ({ title, amount, description, editing }) => {
    return (
        <section className={`account ${editing ? 'editing' : ''}`}>
            <div className="account-content-wrapper">
                <h2 className="account-title">{title}</h2>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>

            <div className="account-content-wrapper cta">
                <button className="transaction-button">
                    View transactions
                </button>
            </div>
        </section>
    );
}

export default InformationAccount;
