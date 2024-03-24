import '../styles/output.css';
import PropTypes from 'prop-types';

export default function Output({basic, edu, exp}) {
    return (
        <div className="output">
            <header>
                <p>{basic.name}</p>

                <div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <a href={'mailto:'+basic.email} target='_blank' style={{color: 'white', textDecoration: 'none'}}>{basic.email}</a>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <a href='tel:742855304' target='_blank' style={{color: 'white', textDecoration: 'none'}}>+91 {basic.phone}</a>
                    </div>

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <span>{basic.city}</span>
                    </div>
                </div>

                <div>
                    <div>
                        <i className="fa fa-github"></i>
                        <a href={'https://github.com/' + basic.github} target='_blank' style={{color: 'white'}}>Github</a>
                    </div>
                    <div>
                        <i className="fa fa-linkedin"></i>
                        <a href={'https://linkedin.com/in/' + basic.linkedIn} target='_blank' style={{color: 'white'}}>LinkedIn</a>
                    </div>

                </div>
                
            </header>

            <section>
                <h2>Education</h2>
                {edu.map(degInfo => 
                    <div className='Edu' key = {degInfo.uniqueId}>
                        <b><u>{degInfo.college}</u> <span style={{float: 'right'}}><em>{degInfo.start} to {degInfo.end}</em></span></b>
                        <p>{degInfo.degree} - Major in {degInfo.major}</p>
                        <p>Cumulative Performance Index (CPI): {degInfo.score}/10</p>
                    </div>
                )}
            </section>

            <section>
                <h2>Professional Experience</h2>
                {exp.map(employmentInfo => (
                    <div className='Exp' key={employmentInfo.uniqueId}>
                        <div className='when'>
                            {employmentInfo.start} to {employmentInfo.end}
                            <p>{employmentInfo.location}</p>
                        </div>
                        <div className='what'>
                            <p>
                                <b>{employmentInfo.company}</b>
                                <span>[{employmentInfo.position}]</span>
                            </p>
                            <p>{employmentInfo.responsibility}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

Output.propTypes = {
    basic: PropTypes.object,
    edu: PropTypes.array,
    exp: PropTypes.array,
};