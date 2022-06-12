import React from 'react'
import './internships.css'
import {BiCheck} from 'react-icons/bi'

const Internships = () => {
  return (
    <section id='internships'>
        <h5>What I Did</h5>
        <h2>My Internships</h2>

        <div className="container services__container">
            <article className='service'>
                <div className='service__head'>
                    <h3>Data/Software Engineering</h3>
                    <h4>Gigacover</h4>
                </div>

                <ul className='service__list'>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Cleaned up and restructured database using Python and PostgreSQL, improving readability and analytics.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Created data visualisation charts using Google Data Studio for reporting, providing signals for country managers to understand how products are performing.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Automated user updates to customer database on Mailchimp using Python scripts and PostgreSQL, relieving workload on business team.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Created communications module using gRPC to faciliate email communications with clients, reducing repeated code in codebase.</p>
                    </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service__head'>
                    <h3>AI Engineer/Engagement Management</h3>
                    <h4>GovTech</h4>
                </div>

                <ul className='service__list'>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Created data visualisation charts in Excel and Tableau for business analytics use, allowing the team to better target potential clients.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon' />
                        <p>Trained object detection models and presented findings to help better understand and facilitate for clients' use cases.</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Internships