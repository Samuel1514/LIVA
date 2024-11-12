import React, { useEffect, useState } from 'react';

interface Plan {
    name: string;
    price: number;
}

const PurchaseDetails: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    useEffect(() => {
        const plan = localStorage.getItem('selectedPlan');
        if (plan) {
            setSelectedPlan(JSON.parse(plan));
        } else {
            // Redirect if no plan is selected
            window.location.href = 'golden-ai.html';
        }
    }, []);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert('Thank you for your purchase! A confirmation will be sent to your email.');
        localStorage.removeItem('selectedPlan');
        window.location.href = 'golden-ai.html'; // Redirect to plans page or main page
    };

    return (
        <div>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Purchase Your Plan</h1>
            </header>
            <section style={styles.purchaseSection}>
                <h2>{selectedPlan ? selectedPlan.name : 'No plan selected'}</h2>
                <p>{selectedPlan ? `Price: $${selectedPlan.price.toFixed(2)}/month` : ''}</p>

                <form onSubmit={handleFormSubmit} style={styles.form}>
                    <label htmlFor="card-name" style={styles.label}>Name on Card:</label>
                    <input type="text" id="card-name" required style={styles.input} />

                    <label htmlFor="card-number" style={styles.label}>Card Number:</label>
                    <input type="text" id="card-number" required style={styles.input} />

                    <label htmlFor="expiry-date" style={styles.label}>Expiry Date:</label>
                    <input type="text" id="expiry-date" placeholder="MM/YY" required style={styles.input} />

                    <label htmlFor="cvv" style={styles.label}>CVV:</label>
                    <input type="text" id="cvv" required style={styles.input} />

                    <button type="submit" style={styles.button}>Complete Purchase</button>
                </form>
            </section>
        </div>
    );
};

const styles = {
    header: {
        backgroundColor: '#333',
        padding: '1rem',
        textAlign: 'center' as 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: '2rem',
    },
    purchaseSection: {
        padding: '2rem',
        textAlign: 'center' as 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center' as 'center',
    },
    label: {
        marginTop: '1rem',
        fontSize: '1rem',
    },
    input: {
        padding: '0.5rem',
        marginTop: '0.5rem',
        width: '250px',
    },
    button: {
        marginTop: '1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        hover: {
            backgroundColor: '#0056b3',
        },
    },
};

export default PurchaseDetails;
