import React, { useState } from 'react'
import "./Bmi.css"
import Img from './Img';
import { ImgTwo } from './Img';

function BmiCal() {
    const[inputOne,setInputOne] = useState();
    const[inputTwo,setInputTwo] = useState();
    const[value,setValue] =useState();
    const[status,setStatus] = useState('');
    const [flag,setFlag] = useState(false);
    const [flagTwo,setFlagTwo] = useState(false);
    

    function calculation(){

        let heightVAl = inputOne/100;
        let finalHeight = heightVAl*heightVAl;
        let result = (inputTwo *10000/finalHeight)/10000;
        setValue(result.toFixed(2));
        statFun(result);
       
    }
    function statFun(value){
        if(value <18.4){
            setStatus('UnderWeight')
            setFlag(true);
           
        }
        else if(18.5 < value && 25 > value){
            setStatus('Normal')
            setFlag(true);
        }else if(26 < value && 30 > value){
            setStatus('OverWeight')
            setFlagTwo(true);
        }else{
            setStatus('Obasity')
           
        }

    }

    const myFormSub =(e)=>{
        e.preventDefault();
       
        calculation();
        setInputOne('');
        setInputTwo('');
    }
  return (
    <>
        <div className="container">
            <form action="" onSubmit={myFormSub}>
                <label htmlFor="height">Your Height(<span className='spanBox'>cm</span>)</label><br />
                <input type="text" placeholder=' Your Height Plz..' onChange={(e)=> setInputOne(e.target.value)}/>
                <br /> <br />
                <label htmlFor="weight">Your Weight(<span className='spanBox'>Kg</span>)</label><br />
                <input type="text" placeholder='Your weight Plz.. '  onChange={(e)=> setInputTwo(e.target.value)} />
                <button type='submit' className='btn2'>BMi Calculator</button>
            </form>
            <br />
            <p className='score'>your Bmi Score : <span className='score_span'>{value}</span> </p>
            <h3 className='status'>status: <span className='score_span'>{status}</span> </h3>
            {flag ? <Img/> : null}
            {flagTwo ? <ImgTwo/> : null}
        </div>
       
    </>
  );
}

export default BmiCal