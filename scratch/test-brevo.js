import fetch from 'node-fetch';
import fs from 'fs';

// Manually parse .env file
let apiKey = '';
try {
    const envFile = fs.readFileSync('.env', 'utf8');
    const match = envFile.match(/BREVO_API_KEY=(.*)/);
    if (match) apiKey = match[1].trim();
} catch (err) {
    console.error('❌ Could not read .env file');
}

if (!apiKey) {
    console.error('❌ BREVO_API_KEY not found in .env');
    process.exit(1);
}

console.log(`Testing Brevo API with key: ${apiKey.substring(0, 10)}...`);

async function testBrevo() {
    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            body: JSON.stringify({
                sender: { email: 'jeevan.patil_comp23@pccoer.in', name: 'Test' },
                to: [{ email: 'jeevan.patil_comp23@pccoer.in' }],
                subject: 'Test Email',
                textContent: 'If you see this, your API key is working!',
            }),
        });

        const data = await response.json();
        
        if (response.ok) {
            console.log('✅ Success! Brevo accepted the request.');
            console.log('Response:', data);
        } else {
            console.error(`❌ Failed with status ${response.status}`);
            console.error('Error Details:', JSON.stringify(data, null, 2));
            
            if (response.status === 401) {
                console.error('\n💡 HINT: 401 Unauthorized means your API key is invalid or IP-restricted.');
                console.error('Check if your account is new and needs IP verification (check your email).');
            }
        }
    } catch (err) {
        console.error('❌ Network Error:', err.message);
    }
}

testBrevo();

