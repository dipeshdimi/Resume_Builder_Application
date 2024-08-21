import '../styles/input.css';
import {v4 as uuid} from 'uuid';
import PropTypes from 'prop-types';

export default function Input({editBasic, edu, editEdu, exp, editExp}) {

    const handleSubmitBasic = (e) => {
        e.preventDefault();
        
        editBasic({
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value,
            city: e.target[3].value,
            linkedIn: e.target[4].value,
            github: e.target[5].value
        });
    }

    const handleSubmitEdu = (e) => {
        e.preventDefault();
        
        editEdu([
            ...edu, 
            {
                college: e.target[0].value,
                degree: e.target[1].value,
                major: e.target[2].value,
                start: e.target[3].value,
                end: e.target[4].value,
                score: e.target[5].value,
                uniqueId: uuid()
            }
        ]);
    }

    const handleSubmitExp = (e) => {
        e.preventDefault();
        console.log(exp);
        editExp([
            ...exp, 
            {
                company: e.target[0].value,
                position: e.target[1].value,
                start: e.target[2].value,
                end: e.target[3].value,
                location: e.target[4].value,
                responsibility: e.target[5].value,
                uniqueId: uuid()
            }
        ]);
    }

    return (
        <div className="input">
            <div>
                <h2>Basic Information</h2>
                
                <form onSubmit={handleSubmitBasic}>
                    <input name='name' type='text' placeholder='Name' required autoComplete="gyvu"/>
                    <input name='email' type='email' placeholder='Email' required/>
                    <input name='phone' type='number' placeholder='Phone' required/>
                    <input name='city' type='text' placeholder='City' required/>
                    <input name='linkedin' type='text' placeholder='LinkedIn Username'/>
                    <input name='github' type='text' placeholder='Github Username'/>

                    <button>Submit</button>
                </form>
            </div>

            <div>
                <h2>Education</h2>
                <form onSubmit={handleSubmitEdu}>
                    <input name='college' type='text' placeholder='College' required/>
                    <input name='degree' type='text' placeholder='Degree' required/>
                    <input name='major' type='text' placeholder='Major' required/>
                    <input name='eduStart' type='date' placeholder='Start Date' required/>
                    <input name='eduEnd' type='date' placeholder='End Date' required/>
                    <input name='score' type='number' placeholder='Score' step='0.01' required/>

                    <button>Submit</button>
                </form>
            </div>

            <div>
                <h2>Professional Experience</h2>
                <form onSubmit={handleSubmitExp}>
                    <input name='company' type='text' placeholder='Company' required/>
                    <input name='position' type='text' placeholder='Position' required/>
                    <input name='expStart' type='month' placeholder='Start Date' required/>
                    <input name='expEnd' type='month' placeholder='End Date' required/>
                    <input name='location' type='text' placeholder='Location' required/>
                    <input name='responsibilities' type='text' placeholder='Responsibilities' required/>

                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

Input.propTypes = {
    editBasic: PropTypes.func,
    editEdu: PropTypes.func,
    editExp: PropTypes.func,
    edu: PropTypes.array,
    exp: PropTypes.array,
};