function Simpson(props) {
    const {simpson}=props;
    return (
        <div>
            <h2>{simpson.name}</h2>
            <p>{simpson.surname} _________ {simpson.age}</p>
            <img src={simpson.photo}
                 alt={simpson.name}/>
            <p>{simpson.info}</p>
        </div>
    );
}

export default Simpson;