import Profile from './Profile.jsx';
import Stack from './Stack.jsx';
import Socials from './Socials.jsx';
import Projects from './Projects.jsx';
import PaymentModal from './PaymentModal.jsx';
import Toast from './Toast.jsx';

const App = () => {
    const [billingOpen, setBillingOpen] = React.useState(false);
    const [toast, setToast] = React.useState(null);

    React.useEffect(() => {
        if (window.location.hash === '#payment') {
            setBillingOpen(true);
        }
    }, []);

    const handleCopy = (e) => {
        const text = e.target.textContent.replace(/\s+/g, '');
        navigator.clipboard.writeText(text);
        setToast({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
    };

    return (
        <>
            <Profile onOpenBilling={() => setBillingOpen(true)} />
            <Stack />
            <Projects />
            <Socials />
            <PaymentModal open={billingOpen} onClose={() => setBillingOpen(false)} onCopy={handleCopy} />
            {toast && <Toast x={toast.x} y={toast.y} onDone={() => setToast(null)} />}
        </>
    );
};

export default App;

