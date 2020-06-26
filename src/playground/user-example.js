const user = {
    name: 'Lorena',
    age: 26,
    location: 'Spain'
};
function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>;
    }
}
const templateOne = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() + '!' : 'Anonymus'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);