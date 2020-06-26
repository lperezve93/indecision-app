class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        console.log('visibility');
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Show details' : 'Hide details'}</button>
                <p>{this.state.visibility && 'Hey. These are some details you can now see!'}</p>
            </div>
        );        
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


/*const app = {
    title: 'Visibility Toggle',
    details: 'Hey. These are some details you can now see!',
    showDetails: false
};
const getDetails = () => {
    return app.showDetails ? 'Hide' : 'Show';
};
const changeButton = () => {
    if (app.showDetails){
        app.showDetails = false;
    } else {
        app.showDetails = true;
    }
    console.log(app.showDetails);
    render();
}
const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={changeButton}>{getDetails()} details</button>
            <p>{app.showDetails && app.details}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
render();*/