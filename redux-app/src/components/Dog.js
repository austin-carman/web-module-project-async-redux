import React, {useState} from 'react';
import { connect } from 'react-redux';
import {fetchDogs} from '../actions/actions';

const Dogs = (props) => {
    const initialState = {
        breed: ''
    }
    const [formValue, setFormValue] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValue({...formValue, [name]: value});
    }

    const handleClick = () => {
        props.fetchDogs(formValue.breed);

    }
    

    return(
        <div>
            <input 
                type='text'
                name='breed'
                value={formValue.breed}
                onChange={handleChange}
                />
            <button onClick={handleClick}>Search</button>
            {formValue.breed ? <h2>{formValue.breed}</h2>: null}
            {props.dogs.map(url => {
                return <img key={url} src={url} alt='dog' />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogs
    }
}

export default connect(mapStateToProps, {fetchDogs})(Dogs);