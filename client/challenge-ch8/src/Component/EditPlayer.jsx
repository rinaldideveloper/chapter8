const EditPlayer = () => {

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div>
    <h1 className='text-center'>Edit Player</h1>
    <form onSubmit={handleSubmit} style={{ textAlign: "center"}}>
            <div className="form-group" >
                <label>
                    Username: <input type="text" className='form-control'/>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Exp: <input type="text" className='form-control'/>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Level: <input type="text" className='form-control'/>
                </label>
            </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
</div>
    )
}

export default EditPlayer;