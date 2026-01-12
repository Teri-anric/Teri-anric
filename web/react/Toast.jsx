const Toast = ({ x, y, onDone }) => {
    React.useEffect(() => {
        const t = setTimeout(onDone, 1500);
        return () => clearTimeout(t);
    }, [onDone]);
    return (
        <span className="copy-tooltip" style={{ top: y, left: x, position: 'absolute' }}>Copied!</span>
    );
};

export default Toast;

