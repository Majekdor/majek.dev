import Link from 'next/link';

export default function Custom404() {
    return (
        <div style={{
            position: 'fixed',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h1 style={{
                'fontSize': '5.0rem',
            }}>404 | Not Found</h1>
            <div style={{
                'fontSize': '4.0rem',
                'textAlign': 'center'
            }}>
                <Link href="/" >Go Home</Link>
            </div >
        </div>
    )
}
