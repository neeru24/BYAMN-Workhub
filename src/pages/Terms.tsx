
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Terms = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-4xl font-display font-bold mb-6">Terms and Conditions</h1>

                <div className="space-y-6 text-muted-foreground text-lg">
                    <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using BYAMN WorkHub, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">2. User Conduct</h2>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Users must provide accurate information during registration.</li>
                            <li>Creating multiple accounts to exploit the system is strictly prohibited and will result in a permanent ban.</li>
                            <li>Spamming or submitting fake proofs for campaigns is a violation of these terms.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">3. Campaigns & Work</h2>
                        <p>
                            Campaign creators are responsible for the content of their campaigns. We strictly prohibit:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Adult/NSFW content.</li>
                            <li>Scams, phishing, or malware.</li>
                            <li>Hate speech or illegal activities.</li>
                        </ul>
                        <p className="mt-2">
                            Violating campaigns will be removed, and creating users may be blocked without refund.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">4. Payments & Withdrawals</h2>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Withdrawals are processed manually to ensure security.</li>
                            <li>The minimum withdrawal amount is subject to change.</li>
                            <li>admin decision regarding proof approval or rejection is final.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">5. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
