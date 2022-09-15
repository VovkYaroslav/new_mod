function Simpson(props) {
    const {simpson}=props;
    return (
        <div>
            <h3>{simpson.name}</h3>
            <img src={simpson.photo} alt={simpson.name}/>
            <h3>{simpson.surname} _____ {simpson.age}</h3>
            <p>{simpson.info}</p>
        </div>
    );
}

export default Simpson;