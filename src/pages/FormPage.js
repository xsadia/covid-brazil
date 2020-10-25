import React, { useState } from 'react';
import '../styles/pages/Form-page.css'

function FormPage(){
    return (
        <div id="form-page" >
            <header className='form-header' >
                <a href='https://covid19-brazil-api.now.sh/'>Powered by Covid-19 Brazil API</a>
                <h1>Covid-<span>Brazil</span></h1>
            </header>

            <main className='form-wrapper' >
                <form>
                <label for="cars">Mês: </label>
                <select id="cars" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                </form>
            </main>

            
        </div>
    )
}

export default FormPage;