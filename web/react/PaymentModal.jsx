const PaymentModal = ({ open, onClose, onCopy }) => {
    if (!open) return null;
    return (
        <div className="modal" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Payment Details</h2>
                <div className="payment-methods">
                    <div className="payment-method">
                        <img src="_static/img/payment/pumb.ico" alt="PUMB" />
                        <div className="payment-details">
                            <h4>PUMB Bank</h4>
                            <p>
                                <span className="payment-label">
                                    <img src="_static/img/payment/uah.png" className="emoji" />
                                    UAH
                                </span>
                                <span className="card-number copyable" onClick={onCopy}>5355 2800 3192 9548</span>
                            </p>
                            <p>
                                <span className="payment-label">
                                    <img src="_static/img/payment/eur.png" className="emoji" />
                                    EUR
                                </span>
                                <span className="card-number copyable" onClick={onCopy}>5355 2800 2772 8946</span>
                            </p>
                            <p>
                                <span className="payment-label">
                                    <img src="_static/img/payment/usd.png" className="emoji" />
                                    USD
                                </span>
                                <span className="card-number copyable" onClick={onCopy}>5355 2800 3375 0271</span>
                            </p>
                        </div>
                    </div>

                    <div className="payment-method">
                        <img src="_static/img/payment/mono.svg" alt="Monobank" />
                        <div className="payment-details">
                            <h4>Monobank</h4>
                            <p>
                                <span className="payment-label">
                                    <img src="_static/img/payment/uah.png" className="emoji" />
                                    UAH
                                </span>
                                <span className="card-number copyable" onClick={onCopy}>4441 1111 4852 1176</span>
                            </p>
                        </div>
                    </div>

                    <div className="payment-method">
                        <img src="_static/img/payment/crypto.svg" alt="Crypto" />
                        <div className="payment-details">
                            <h4>Cryptocurrency</h4>
                            <p>
                                <span className="payment-label">
                                    <img src="_static/img/payment/ton.svg" className="emoji" />
                                    TON
                                </span>
                                <span className="crypto-address copyable" onClick={onCopy}>UQCXRKz0852ztLfyLHZe3bgTdaPaKLIgqXFq2DdcDsVJBWgq</span>
                            </p>
                            <p>
                                <span className="payment-label">
                                    <img src="_static/img/payment/strk.svg" className="emoji" />
                                    STRK
                                </span>
                                <span className="crypto-address copyable" onClick={onCopy}>0x069DE8104EB7abeBb3f93c8245ef83545336feD4055FE45F55C2cDDB9931C5f1</span>
                            </p>
                        </div>
                    </div>

                    <a href="https://www.buymeacoffee.com/teri_anric" className="payment-method" target="_blank" rel="noreferrer">
                        <img src="_static/img/payment/buymeacoffee.ico" alt="Buy Me a Coffee" />
                        <div className="payment-details">
                            <h4>Buy Me a Coffee</h4>
                            <p>Support my work with a coffee</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;

