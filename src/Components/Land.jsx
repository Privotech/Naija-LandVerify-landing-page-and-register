import { StrictMode } from 'react'
import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Land = () => {
    const [seller, setSeller] = useState('');
    const [address, setAddress] = useState('');
    const [buyer, setBuyer] = useState('');
    const [message, setMessage] = useState('');

    // Helper to get lands from localStorage
    const getRegisteredLands = () => {
        const lands = localStorage.getItem('registeredLands');
        return lands ? JSON.parse(lands) : [];
    };

    // Handle form submission
    const handleRegister = (e) => {
        e.preventDefault();
        if (!seller.trim()) {
            setMessage('Please enter the name of the land seller.');
            return;
        }
        if (!address.trim()) {
            setMessage('Please enter the land address.');
            return;
        }
        if (!buyer.trim()) {
            setMessage('Please enter the name of the land buyer.');
            return;
        }
        const lands = getRegisteredLands();
        if (lands.some(l => l.address === address.trim())) {
            setMessage('Land already exists!');
        } else {
            lands.push({ seller: seller.trim(), address: address.trim(), buyer: buyer.trim() });
            localStorage.setItem('registeredLands', JSON.stringify(lands));
            setMessage('Land registered successfully!');
        }
        setSeller('');
        setAddress('');
        setBuyer('');
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#eaf6fb'
        }}>
            <div style={{
                width: '500px',
                padding: '48px',
                border: '2px solid #4caf50',
                borderRadius: '16px',
                background: '#fff',
                boxShadow: '0 8px 32px rgba(14, 110, 17, 0.15)',
                textAlign: 'center'
            }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#4caf50',marginRight: '800px',fontSize: '1.5rem' }}>←</Link>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '32px', color: '#4caf50' }}>NaijaLand Verification Registration</h1>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name of Land Seller"
                        value={seller}
                        onChange={e => setSeller(e.target.value)}
                        style={{ width: '100%', fontSize: '1.25rem', padding: '16px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #aaa' }}
                    />
                    <input
                        type="text"
                        placeholder="Land Address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        style={{ width: '100%', fontSize: '1.25rem', padding: '16px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #aaa' }}
                    />
                    <input
                        type="text"
                        placeholder="Name of Land Buyer"
                        value={buyer}
                        onChange={e => setBuyer(e.target.value)}
                        style={{ width: '100%', fontSize: '1.25rem', padding: '16px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #aaa' }}
                    />
                    <button type="submit" style={{ width: '100%', padding: '16px', fontSize: '1.25rem', background: '#4caf50', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Register Land
                    </button>
                </form>
                {message && (
                    <div style={{ marginTop: '24px', fontSize: '1.2rem', color: message.includes('successfully') ? 'green' : 'red', fontWeight: 'bold' }}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Land;