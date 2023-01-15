
const Joke = (props) => {
    if (props.data != null) {
        const {type, setup, delivery, joke} = props.data;
        if(type === 'single'){
            return(
                <div className="joke">
                    <p>{joke}</p>
                </div>
            )
        } else {
            return(
                <div className="joke">
                    <p>{setup}</p>
                    <p>{delivery}</p>
                </div>
            )
        }
    }
}

export default Joke;