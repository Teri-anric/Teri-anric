const Profile = ({ onOpenBilling }) => (
    <div className="profile-container">
        <img className="profile-avatar" src="_static/img/avatar.png" alt="Teri-anric" />
        <div className="profile-info">
            <h1>
                Teri-anric
                <span className="nickname">StrawBerry</span>
                <img className="emoji" src="_static/img/emoji/cat_love_strawberry.png" />
            </h1>
            <p className="bio">
                Backend developer with 2 years of experience specializing in building applications using frameworks like
                Django/FastAPI. Experienced in creating integrations, APIs, and Telegram bots.
            </p>
            <div className="profile-links">
                <a href="https://github.com/Teri-anric" className="github-link">
                    <img src="https://github.com/teri-anric.png" className="small-icon" />
                    Teri-anric
                </a>
                <a href="https://github.com/teri-schools/" className="github-link">
                    <img src="https://github.com/teri-schools.png" className="small-icon" />
                    Teri-schools
                </a>
                <a href="resume.html" className="resume-link">
                    <img src="_static/img/icon/document.svg" />
                    Resume
                </a>
                <button onClick={onOpenBilling} className="billing-button">
                    <img src="_static/img/icon/billing.svg" />
                </button>
            </div>
        </div>
    </div>
);

export default Profile;

