function DifficultyCard({

    level,

    selected,

    onClick

}){

    return(

        <div

            className={
                selected
                ?
                "difficulty-card active"
                :
                "difficulty-card"
            }

            onClick={onClick}

        >

            <h3>{level}</h3>

        </div>

    );

}

export default DifficultyCard;