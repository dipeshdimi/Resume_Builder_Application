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
                    <input type='text' placeholder='Name' required/>
                    <input type='email' placeholder='Email' required/>
                    <input type='number' placeholder='Phone' required/>
                    <input type='text' placeholder='City' required/>
                    <input type='text' placeholder='LinkedIn Username'/>
                    <input type='text' placeholder='Github Username'/>

                    <button>Submit</button>
                </form>
            </div>

            <div>
                <h2>Education</h2>
                <form onSubmit={handleSubmitEdu}>
                    <input type='text' placeholder='College' required/>
                    <input type='text' placeholder='Degree' required/>
                    <input type='text' placeholder='Major' required/>
                    <input type='date' placeholder='Start Date' required/>
                    <input type='date' placeholder='End Date' required/>
                    <input type='number' placeholder='Score' step='0.01' required/>

                    <button>Submit</button>
                </form>
            </div>

            <div>
                <h2>Professional Experience</h2>
                <form onSubmit={handleSubmitExp}>
                    <input type='text' placeholder='Company' required/>
                    <input type='text' placeholder='Position' required/>
                    <input type='month' placeholder='Start Date' required/>
                    <input type='month' placeholder='End Date' required/>
                    <input type='text' placeholder='Location' required/>
                    <input type='text' placeholder='Responsibilities' required/>

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