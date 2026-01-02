
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-4xl font-display font-bold mb-6">About BYAMN WorkHub</h1>

                <div className="space-y-6 text-muted-foreground text-lg">
                    <p>
                        Welcome to <span className="font-bold text-foreground">BYAMN WorkHub</span>, India's premier micro-task platform designed to bridge the gap between businesses needing quick tasks completed and individuals looking to earn extra income.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">Our Mission</h2>
                        <p>
                            We aim to empower every Indian with a smartphone to earn money by completing simple digital tasks. Whether you are a student, homemaker, or working professional, BYAMN WorkHub provides a legitimate way to monetize your free time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">How It Works</h2>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="p-4 bg-muted/30 rounded-lg border border-border">
                                <h3 className="font-semibold text-foreground mb-2">For Workers</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Browse available campaigns.</li>
                                    <li>Complete simple tasks like app installs, surveys, or social media engagement.</li>
                                    <li>Submit proofs (screenshots) for verification.</li>
                                    <li>Get paid directly to your wallet once approved.</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg border border-border">
                                <h3 className="font-semibold text-foreground mb-2">For Advertisers</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Create campaigns to promote your apps or content.</li>
                                    <li>Set your budget and target audience.</li>
                                    <li>Verify work submissions (or let our admins do it).</li>
                                    <li>Get genuine engagement from real users.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-3">Trust & Safety</h2>
                        <p>
                            We take integrity seriously. Every campaign is vetted by our admins to ensure it meets our quality standards. Similarly, all work submissions are reviewed to prevent fraud. Our admins act as a neutral third party to resolve disputes and ensure fair payments.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
