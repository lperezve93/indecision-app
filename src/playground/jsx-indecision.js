console.log('App.js is running');

const app = {
    title: 'Indecision App!',
    subtitle: 'Make your choice easier.',
    options: ['Work', 'Sleep']
};

const onFormSubmit = (e) => {//e: contains information about the event
    e.preventDefault(); //prevenir que la pagina se refresque

    const option = e.target.elements.option.value;
    console.log('form submitted!', option);

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; //poner de nuevo el formulario vacío
        renderOptionsApp();
    }
};

const onRemoveAll = () =>{
    app.options = [];
    renderOptionsApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
    console.log(option);
    alert(option);
};

const appRoot = document.getElementById('app');

const renderOptionsApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options.'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do? </button>
            <button onClick={onRemoveAll}> Remove All</button>
            <ol>
            {
                /*app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })*/ 
                /* la funcion anterior se puede simplifar así:*/
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderOptionsApp();