function CategoryCard({

    title,

    selected,

    onClick

}){

    return(

        <div

            className={
                selected
                ?
                "category-card active"
                :
                "category-card"
            }

            onClick={onClick}

        >

            <h3>{title}</h3>

        </div>

    );

}

export default CategoryCard;