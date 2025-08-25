import React, { useState } from 'react';

const Court = () => {
    const [lawyerName, setLawyerName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [courtDate, setCourtDate] = useState("");
    const [courtLocation, setCourtLocation] = useState("");
    const [sessionType, setSessionType] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleHireLawyer = (e) => {
        e.preventDefault();
        setConfirmation(`Lawyer ${lawyerName} (${specialization}) hired successfully!`);
    };

    const handleBookCourt = (e) => {
        e.preventDefault();
        setConfirmation(`Court session (${sessionType}) booked for ${courtDate} at ${courtLocation}`);
    };

    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
        setConfirmation(`Document '${e.target.files[0].name}' uploaded successfully!`);
    };

    return (
        <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', background: 'linear-gradient(135deg, #e3f0ff 0%, #f1f5f9 100%)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            
            <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, #3182ce33 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-120px', right: '-120px', width: '350px', height: '350px', background: 'radial-gradient(circle, #68d39133 0%, transparent 70%)', zIndex: 0 }} />
            <header className="fade-in glass-bg" style={{ background: 'linear-gradient(90deg, #3182ce 60%, #63b3ed 100%)', color: '#fff', padding: '2.5rem 0 2rem 0', textAlign: 'center', boxShadow: '0 4px 24px #3182ce22', margin: '2rem auto', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
                <span className="icon" role="img" aria-label="court">🏛️</span>
                <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.5rem', animation: 'fadeIn 1.5s' }}>Welcome to Land Court & Lawyer Portal</h1>
                <p style={{ fontSize: '1.2rem', fontWeight: 400, animation: 'fadeIn 2s' }}>Get help with your land, hire a lawyer, and book a court easily.</p>
            </header>


            <section className="fade-in glass-bg" style={{ maxWidth: '900px', margin: '2rem auto', borderRadius: '24px', boxShadow: '0 8px 32px #3182ce22', padding: '2.5rem 2rem', position: 'relative', zIndex: 1 }}>
                <h2 className="gradient-text" style={{ marginBottom: '1rem', fontWeight: 700, fontSize: '2rem' }}>Get Started</h2>
                <form onSubmit={handleHireLawyer} style={{ marginBottom: '2rem' }}>
                    <label htmlFor="lawyerName" style={{ fontWeight: 500 }}>Hire a Lawyer:</label><br />
                    <input type="text" id="lawyerName" value={lawyerName} onChange={e => setLawyerName(e.target.value)} placeholder="Type lawyer's name" style={{ padding: '0.7rem', width: '100%', marginBottom: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} required /><br />
                    <label htmlFor="specialization" style={{ fontWeight: 500 }}>Specialization:</label><br />
                    <select id="specialization" value={specialization} onChange={e => setSpecialization(e.target.value)} style={{ padding: '0.7rem', width: '100%', marginBottom: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} required>
                        <option value="">Choose type</option>
                        <option value="Land Dispute">Land Dispute</option>
                        <option value="Property Law">Property Law</option>
                        <option value="Title Verification">Title Verification</option>
                        <option value="General Litigation">General Litigation</option>
                    </select><br />
                    <button type="submit" className="animated-btn" style={{ padding: '0.7rem 1.5rem', background: '#3182ce', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>Hire Lawyer</button>
                </form>

                <form onSubmit={handleBookCourt} style={{ marginBottom: '2rem' }}>
                    <label htmlFor="courtDate" style={{ fontWeight: 500 }}>Book a Court Session:</label><br />
                    <input type="date" id="courtDate" value={courtDate} onChange={e => setCourtDate(e.target.value)} style={{ padding: '0.7rem', width: '100%', marginBottom: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} required /><br />
                    <label htmlFor="courtLocation" style={{ fontWeight: 500 }}>Court Location:</label><br />
                    <input type="text" id="courtLocation" value={courtLocation} onChange={e => setCourtLocation(e.target.value)} placeholder="Type location" style={{ padding: '0.7rem', width: '100%', marginBottom: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} required /><br />
                    <label htmlFor="sessionType" style={{ fontWeight: 500 }}>Session Type:</label><br />
                    <select id="sessionType" value={sessionType} onChange={e => setSessionType(e.target.value)} style={{ padding: '0.7rem', width: '100%', marginBottom: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }} required>
                        <option value="">Choose type</option>
                        <option value="Verification">Verification</option>
                        <option value="Dispute">Dispute</option>
                        <option value="Consultation">Consultation</option>
                    </select><br />
                    <button type="submit" className="animated-btn animated-btn-green" style={{ padding: '0.7rem 1.5rem', background: '#38a169', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>Book Court</button>
                </form>

                <div style={{ marginBottom: '2rem' }}>
                    <label htmlFor="documentUpload" style={{ fontWeight: 500 }}>Upload Land Document:</label><br />
                    <input type="file" id="documentUpload" onChange={handleFileUpload} style={{ marginBottom: '0.7rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', padding: '0.7rem' }} />
                    {uploadedFile && <div style={{ color: '#2d3748', fontWeight: 500 }}>Uploaded: {uploadedFile.name}</div>}
                </div>

                {confirmation && (
                    <div className="fade-in" style={{ marginTop: '1rem', color: '#2f855a', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '6px', background: '#e6fffa', padding: '0.7rem 1rem', boxShadow: '0 2px 8px #38a16922' }}>{confirmation}</div>
                )}
            </section>


            <section className="fade-in glass-bg" style={{ maxWidth: '900px', margin: '2rem auto', borderRadius: '24px', boxShadow: '0 8px 32px #3182ce22', padding: '2.5rem 2rem', position: 'relative', zIndex: 1 }}>
                <h2 className="gradient-text" style={{ marginBottom: '1rem', fontWeight: 700, fontSize: '2rem' }}>What People Say</h2>
                <blockquote style={{ borderLeft: '4px solid #3182ce', paddingLeft: '1rem', marginBottom: '1rem', fontSize: '1.1rem', color: '#4a5568', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #3182ce11' }}>
                    "The lawyer I hired was very helpful and explained everything simply!" <br />
                    <span style={{ fontWeight: 'bold', color: '#3182ce' }}>- Chinedu O.</span>
                </blockquote>
                <blockquote style={{ borderLeft: '4px solid #38a169', paddingLeft: '1rem', fontSize: '1.1rem', color: '#4a5568', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #38a16911' }}>
                    "Booking a court was easy and quick. I got all the help I needed." <br />
                    <span style={{ fontWeight: 'bold', color: '#38a169' }}>- Amina S.</span>
                </blockquote>
            </section>

            <footer className="fade-in glass-bg" style={{ textAlign: 'center', padding: '2rem 0', background: 'linear-gradient(90deg, #2d3748 60%, #3182ce 100%)', color: '#fff', marginTop: '3rem', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '1px', borderRadius: '0 0 24px 24px', boxShadow: '0 -2px 24px #3182ce22' }}>
                &copy; 2025 Land Court & Lawyer Portal. All rights reserved.
            </footer>
        </div>
    );
};

export default Court;