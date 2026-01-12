const Projects = () => {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        fetch('_static/js/projects.json')
            .then((r) => r.json())
            .then(setProjects)
            .catch(() => setProjects([]));
    }, []);

    if (!projects.length) return null;

    return (
        <div className="container">
            <h2><img src="_static/img/icon/code.svg" className="section-icon" />Projects</h2>
            <div className="stack-items">
                {projects.map((p) => (
                    <a key={p.url} href={p.url} className="github-link" target="_blank" rel="noreferrer">
                        {p.icon ? (
                            <img src={p.icon} className="small-icon" />
                        ) : (
                            <img src="_static/img/website.png" className="small-icon" />
                        )}
                        {p.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;

