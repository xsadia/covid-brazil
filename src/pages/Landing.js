import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Landing.css'
import coroninha from '../images/coronavirus.svg';

function Landing(){
    return (
        <div id="landing-page" >
            <div className='content-wrapper' >
                <header className='landing-header' >
                    <a href='https://covid19-brazil-api.now.sh/'>Powered by COVID-19 Brazil API</a>
                    <h1>Covid-<span>Brazil</span></h1>
                </header>

                <main>
                    <h1>COVID-19 <span>Brazil</span> API</h1>
                    <p>Confira dados sobre o novo <span>coronavírus</span>.</p>
                    <Link to='/data' className='enter-app' >
                        Confira os Dados
                    </Link>
                </main>
                <img src={coroninha} />
            </div>
            

            
        </div>
    )
}

export default Landing;