import { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Props } from "../types/TGlobal";
import { State } from "../types/THome";

class Home2 extends PureComponent<Props, State> {
    _isMounted: boolean = false;

    constructor(props: Props) {
        super(props);
        this.state = {
            colSize: "",
            device: ""
        } as State;
    }

    componentDidMount(): void {
        this._isMounted = true;
    }

    componentWillUnmount(): void {
        this._isMounted = false;
    }

    render(): JSX.Element {
        return <div className={`container container-${this.state.device}`}>
            <div className="row">
                <h1 className={`col${this.state.colSize}-12 page-title-h1-${this.state.device} center-text`}>
                    Info About This App
                </h1>
            </div>

            <div className="row">
                <div className={`col${this.state.colSize}-11`}>
                    <Link to="/dashboard/landing-page">Enter Webapp</Link>
                </div>

                <div className={`col${this.state.colSize}-11 card custom-card middle-align`}>
                    <h4>Frontend Technologies</h4>
                    <ul>
                        <li>TypeScript</li>
                        <li>ReactJS</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className={`col${this.state.colSize}-11 card custom-card middle-align`}>
                    <h4>Backend Technologies</h4>
                    <ul>
                        <li>Node.js</li>
                        <li>Git</li>
                        <li>NoSQL (MongoDb)</li>
                        <li>SQL (PostgreSQL; not used in app)</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className={`col${this.state.colSize}-11 card custom-card middle-align`}>
                    <h4>Deployment</h4>
                    <ul>
                        <li>Heroku</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Home2;