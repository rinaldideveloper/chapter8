import React from 'react';

const AddPlayer = () => {
const [username, setUsername] = React.useState('');
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [experience, setExperience] = React.useState('');
const [lvl, setLvl] = React.useState('');

const handleSubmit = event => {
event.preventDefault();
const formData = {username, email, password, experience, lvl};
console.log(formData);
}
return (
<div>
    <h1 className='text-center'>Add Player</h1>
    <form onSubmit={handleSubmit} style={{ textAlign: "center"}}>
            <div className="form-group" >
                <label>
                    Username: <input type="text" className='form-control' value={username} onChange={(e)=>
                    setUsername(e.target.value)}/>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Email: <input type="text" className='form-control' value={email} onChange={(e)=>
                    setEmail(e.target.value)}/>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Password: <input type="password" className='form-control' value={password} onChange={(e)=>
                    setPassword(e.target.value)}/>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Exp: <input type="text" className='form-control' value={experience} onChange={(e)=>
                    setExperience(e.target.value)}/>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Level: <input type="text" className='form-control' value={lvl} onChange={(e)=>
                    setLvl(e.target.value)}/>
                </label>
            </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
</div>
)
}

export default AddPlayer;