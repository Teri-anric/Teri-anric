const StackGroup = ({ icon, title, items }) => (
    <div className="stack-group">
        <h3><img src={icon} className="section-icon" />{title}</h3>
        <div className="stack-items">
            {items.map(({ src, title }) => (
                <img key={src} className="stack-logo" src={src} title={title} />
            ))}
        </div>
    </div>
);

const Stack = () => {
    const sections = React.useMemo(() => ([
        {
            icon: "_static/img/icon/os.svg",
            title: "Operating Systems",
            items: [
                { src: "_static/img/logo/linux.svg", title: "Linux" },
                { src: "_static/img/logo/windows11.svg", title: "Windows" },
                { src: "_static/img/logo/android.svg", title: "Android" },
            ]
        },
        {
            icon: "_static/img/icon/code.svg",
            title: "Programming Languages",
            items: [
                { src: "_static/img/logo/python.svg", title: "Python" },
                { src: "_static/img/logo/javascript.svg", title: "JavaScript" },
                { src: "_static/img/logo/kotlin.svg", title: "Kotlin" },
                { src: "_static/img/logo/csharp.svg", title: "C#" },
            ]
        },
        {
            icon: "_static/img/icon/framework.svg",
            title: "Frameworks & Libraries",
            items: [
                { src: "_static/img/logo/aiogram.png", title: "Aiogram/tg bots" },
                { src: "_static/img/logo/django.png", title: "Django" },
                { src: "_static/img/logo/sqlalchemy.png", title: "SQLAlchemy" },
                { src: "_static/img/logo/flask.png", title: "Flask" },
                { src: "_static/img/logo/fastapi.png", title: "FastApi" },
                { src: "_static/img/logo/qt.svg", title: "Qt" },
            ]
        },
        {
            icon: "_static/img/icon/database.svg",
            title: "Databases",
            items: [
                { src: "_static/img/logo/postgresql.svg", title: "PostgreSQL" },
                { src: "_static/img/logo/redis.svg", title: "Redis" },
                { src: "_static/img/logo/sqlite.svg", title: "SQLite" },
                { src: "_static/img/logo/elasticsearch.svg", title: "ElasticSearch" },
            ]
        },
        {
            icon: "_static/img/icon/tools.svg",
            title: "Tools",
            items: [
                { src: "_static/img/logo/docker.svg", title: "Docker" },
                { src: "_static/img/logo/nginx.svg", title: "Nginx" },
            ]
        },
        {
            icon: "_static/img/icon/vcs.svg",
            title: "VCS",
            items: [
                { src: "_static/img/logo/git.svg", title: "Git" },
                { src: "_static/img/logo/gitlab.svg", title: "GitLab" },
                { src: "_static/img/logo/github.svg", title: "GitHub" },
            ]
        },
        {
            icon: "_static/img/icon/ide.svg",
            title: "IDE",
            items: [
                { src: "_static/img/logo/vscode.svg", title: "VSCode" },
                { src: "_static/img/logo/pycharm.svg", title: "PyCharm" },
                { src: "_static/img/logo/cursor.svg", title: "Cursor" },
            ]
        },
        {
            icon: "_static/img/icon/frontend.svg",
            title: "Frontend",
            items: [
                { src: "_static/img/logo/react.svg", title: "React" },
                { src: "_static/img/logo/html5.svg", title: "HTML5" },
                { src: "_static/img/logo/css3.svg", title: "CSS3" },
                { src: "_static/img/logo/jinja.png", title: "Jinja" },
                { src: "_static/img/logo/jquery.svg", title: "jQuery" },
            ]
        },
        {
            icon: "_static/img/icon/ai.svg",
            title: "AI",
            items: [
                { src: "_static/img/logo/anthropic.ico", title: "Claude" },
                { src: "_static/img/logo/openai.png", title: "OpenAI" },
            ]
        }
    ]), []);

    return (
        <div className="container">
            <h2><img src="_static/img/icon/stack.svg" className="section-icon" />Technical Stack</h2>
            {sections.map((s) => (
                <StackGroup key={s.title} icon={s.icon} title={s.title} items={s.items} />
            ))}
        </div>
    );
};

export default Stack;

