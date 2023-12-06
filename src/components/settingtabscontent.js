/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Labelinputforsetting from './labelinputforsetting';


export default function settingtabscontent() {
    const initialState = {
        fullname: '',
        email: '',
        password: '',
        id: '',
        country: '',
        profession: '',
        expert: '',
        info: '',
        pin: '',
      };

    const [fullname, setFullname] = useState(initialState.fullname);
    const [email, setEmail] = useState(initialState.email);
    const [password, setPassword] = useState(initialState.password);
    const [id, setId] = useState(initialState.id);
    const [country, setCountry] = useState(initialState.country);
    const [profession, setProfession] = useState(initialState.profession);
    const [expert, setExpert] = useState(initialState.expert);
    const [info, setInfo] = useState(initialState.info);
    const [pin, setPin] = useState(initialState.pin);

      useEffect(() => {
        setFullname(JSON.parse(localStorage.getItem('fullname')) || '');
        setEmail(JSON.parse(localStorage.getItem('email')) || '');
        setPassword(JSON.parse(localStorage.getItem('password')) || '');
        setId(JSON.parse(localStorage.getItem('id')) || '');
        setCountry(JSON.parse(localStorage.getItem('country')) || '');
        setProfession(JSON.parse(localStorage.getItem('profession')) || '');
        setExpert(JSON.parse(localStorage.getItem('expert')) || '');
        setInfo(JSON.parse(localStorage.getItem('info')) || '');
        setPin(JSON.parse(localStorage.getItem('pin')) || '');
      }, []);

    const settingdetail = [
        {
            classname: "info-input setting-label-input",
            forid: "id",
            text: "ID",
            type: "text",
            value: id,
            setvalue: (e) => {
                setId(e.target.value);
            },
        },
        {
            classname: "info-input setting-label-input",
            forid: "country",
            text: "Country",
            type: "text",
            value: country,
            setvalue: (e) => {
                setCountry(e.target.value);
            },
        },
        {
            classname: "info-input setting-label-input",
            forid: "profession",
            text: "Profession",
            type: "text",
            value: profession,
            setvalue: (e) => {
                setProfession(e.target.value);
            },
        },
        {
            classname: "info-input setting-label-input",
            forid: "expert",
            text: "Expert",
            type: "text",
            value: expert,
            setvalue: (e) => {
                setExpert(e.target.value);
            },
        },
        {
            classname: "info-input setting-label-input",
            forid: "info",
            text: "Info",
            type: "text",
            value: info,
            setvalue: (e) => {
                setInfo(e.target.value);
            },
        },
        {
            classname: "info-input setting-label-input",
            forid: "pin",
            text: "Pin",
            type: "password",
            value: pin,
            setvalue: (e) => {
                setPin(e.target.value);
            },

        },
    ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleSubmit1 = (e) => {
        e.preventDefault();
        if (fullname === '') {
            alert("Enter fullname.");
        } else {
            localStorage.setItem('fullname', JSON.stringify(fullname));
        }
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        if (email === '') {
            alert('Add email');
        } else if (password === '') {
            alert('Add password');
        } else {
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('password', JSON.stringify(password));
        }
    }

    const handleSubmit3 = (e) => {
        e.preventDefault();
        if (id === '') {
            alert('Add id.')
        } else if (country === '') {
            alert('Add country.')
        } else if (profession === '') {
            alert('Add profession.')
        } else if (expert === '') {
            alert('Add expert.')
        } else if (info === '') {
            alert('Add info.')
        } else if (pin === '') {
            alert('Add pin.')
        } else {
            localStorage.setItem('id', JSON.stringify(id));
            localStorage.setItem('country', JSON.stringify(country));
            localStorage.setItem('profession', JSON.stringify(profession));
            localStorage.setItem('expert', JSON.stringify(expert));
            localStorage.setItem('info', JSON.stringify(info));
            localStorage.setItem('pin', JSON.stringify(pin));
            alert('Information added to localstorage');
        }

    }


    return (
        <>
            <div className="setting-section3">
                <div className="setting-sec3-divs">
                    <h2 className='bold'>User Profile</h2>
                    <div className="setting-sec3-inner-divs">
                        <form action="">
                            <Labelinputforsetting type='text' forid='fullname' text='Full Name' classname='full-name-input setting-label-input' value={fullname} onchange={e => setFullname(e.target.value)} />
                            <div className="setting-profile">
                                <div>
                                    <span className="material-symbols-sharp"> person </span>
                                </div>
                                <div>
                                    <h3 className='bold'>{fullname || "Jhon Smith"}</h3>
                                    <p>Welcome Setting Page</p>
                                </div>
                            </div>
                            <button className='button save' onClick={handleSubmit1}>Save</button>
                        </form>
                    </div>
                </div>
                <div className="setting-sec3-divs">
                    <h2 className='bold'>User Profile</h2>
                    <div className="setting-sec3-inner-divs">
                        <form action="">
                            <Labelinputforsetting type='email' forid='email' text='Email' classname='email-input setting-label-input' value={email} onchange={e => setEmail(e.target.value)} />
                            <Labelinputforsetting type='password' forid='password' text='Password' classname='password-input setting-label-input' value={password} onchange={e => setPassword(e.target.value)} />
                            <button className='button save' onClick={handleSubmit2}>Save</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="setting-section4">
                <h2 className='bold'>Personal Information</h2>
                <form action="">
                    <div className="setting-sec4-divs">
                        {settingdetail.map((detail, index) => (
                            <Labelinputforsetting key={index} type={detail.type} classname={detail.classname} text={detail.text} forid={detail.forid} value={detail.value} onchange={detail.setvalue} />
                        ))}
                        <button className='button save' onClick={handleSubmit3}>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}
