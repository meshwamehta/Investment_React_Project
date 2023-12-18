import {useState} from 'react';
import { calculateInvestmentResults } from '../util/investment';
export default function Input({onChangeInput,dataValue}){
    //usestste is lifted up to app file as we needed to use this state value in result component
    // const inputFields={
    //     initialInvestment: "",
    //     annualInvestment: "",
    //     expectedReturn: "",
    //     duration:""
    // }
    // const [inputData,setInputData]=useState(inputFields);
    // function handleInput(e){

    //     setInputData({...inputData,[e.target.name]:e.target.value})
    // }
    // if(inputData.initialInvestment >0 && inputData.annualInvestment >0 && inputData.expectedReturn>0 && inputData.duration>0 )
    // {
    //     calculateInvestmentResults(inputData);
    //     //calculateInvestmentResults(10,20,30,40);
    // //console.log("inputed: ",inputData.initialInvestment);
    // }
    return(
        <>
            <section id="user-input" >
                <div className="input-group">
                    <p>
                        <label>INITIAL INVESTMENT</label>
                        <input type="number" name="initialInvestment" onChange={onChangeInput} value={dataValue.initialInvestment}></input>
                    </p>
                    <p>
                        <label>ANNUAL INVESTMENT</label>
                        <input type="number" name="annualInvestment" onChange={onChangeInput} value={dataValue.annualInvestment} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label>EXPEXTED RETURN</label>
                        <input type="decimal" name="expectedReturn" onChange={onChangeInput} value={dataValue.expectedReturn} />
                    </p>
                    <p>
                        <label>DURATION</label>
                        <input type="number" name="duration" onChange={onChangeInput} value={dataValue.duration} />
                    </p>
                </div>
            </section>
            
              
         
        
            
        
        </>
    );
}