
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-4xl font-display font-bold mb-6">Privacy Policy</h1>

                <div className="space-y-6 text-muted-foreground text-lg">
                    <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
                        <p>
                            We collect minimal information necessary to provide our services:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Basic profile information (Name, Email, Profile Picture via Google Auth).</li>
                            <li>Payment details (UPI ID) for processing withdrawals.</li>
                            <li>Work submission data (Screenshots, proofs).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">2. How We Use Your Data</h2>
                        <p>
                            Your data is used solely for:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Verifying your identity and work.</li>
                            <li>Processing payments and refunds.</li>
                            <li>Improving platform security and preventing fraud.</li>
                        </ul>
                        <p className="mt-2 font-semibold text-foreground">
                            We do NOT sell your personal data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">3. Data Storage & Security</h2>
                        <p>
                            We use Google Firebase to securely store your data. All sensitive interactions are encrypted. Our database rules ensure that only authorized users (you and our admins) can access your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">4. Cookies</h2>
                        <p>
                            We use local storage and cookies to maintain your login session and preferences. These are essential for the operation of the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">5. Admin Access</h2>
                        <p>
                            Authorized administrators have access to user data for the purpose of verification, support, and platform management. All admin actions are logged.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@byamn.com" className="text-primary hover:underline">privacy@byamn.com</a>.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
