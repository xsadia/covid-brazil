import React, { useState } from 'react';
import '../styles/pages/Form-page.css';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { FiArrowLeft } from 'react-icons/fi';

function FormPage(){

    const [selected, setSelected] = useState("AC");
    const [data, setData] = useState({});
    const [submited, setSubmited] = useState(false);

    function handleChange(evt){
        setSelected(evt.target.value)
    }

    async function handleSubmit(evt){
        evt.preventDefault();

        await api.get(`${selected}`)
        .then( res =>{
            setData(res.data);
            setSubmited(true);
        });

    }

    let content = '';

    if ( submited === false ) {
        content = (
            <main className='form-wrapper' >
                <form onSubmit={handleSubmit} >
                <label htmlFor="estados">Estado: </label>
                <select id="estados" name="cars" value={selected} onChange={handleChange} >
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                </select>
                <button>Submit</button>
                </form>
            </main>
        )
    } else {
        content = (
            <main className='content-wrapper' >
                <h3>Estado: <span>{data.state}</span>.</h3>
                <h3>Casos: <span>{data.cases}</span>.</h3>
                <h3>Mortes: <span>{data.deaths}</span>.</h3>
                <h3>Suspeitas: <span>{data.suspects}</span>.</h3>
                <h3>Ultima atualização: <span>{data.datetime}</span>.</h3>
                <button onClick={() => {setSubmited(false)}} >Outra Pesquisa</button>
            </main>
        )
    }

    return (
        <div id="form-page" >
            <header className='form-header' >
                <a href='https://covid19-brazil-api.now.sh/'>Powered by COVID-19 Brazil API</a>
                <h1>COVID-<span>Brazil</span></h1>
            </header>

            {content}

            <Link to='/' className="backBtn" >
                    <FiArrowLeft size={24} color="#19191D" />
                </Link>
            
        </div>
    )
}

export default FormPage;