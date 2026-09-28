function Info() {
    return (
        <>
            <div className="info">
            <img src='public/Images/Profile.png' alt='Profile' className="profile"/>
            <h1 className="name"> Laura Smith </h1>
            <p className="designation"> Full Stack Developer </p>
            <small> <h6 className="website"> laurasmith.website </h6> </small>
            <div className="buttons">
            <button className="logo"> 
                <img src='public/Images/Email_Button.png' alt='Email logo' />
            </button>
            <button className="logo"> 
                <img src='public/Images/Linkedin_Button.png' alt='Linkedin logo' />
            </button></div>
            </div>
        </>
    )
}

export default Info