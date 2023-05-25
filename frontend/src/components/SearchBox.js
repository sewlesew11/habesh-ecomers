import React, { useState } from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

export default function SearchBox(props) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/name/${name}`);
    };
    return (
        <form className="search" onSubmit={submitHandler}>
            <div className="row">
                <input
                    type="text"
                    name="q"
                    id="q"
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <button className="primary" type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
    );
}