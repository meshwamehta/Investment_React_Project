import { Header } from "./Components/Header";
import { useState } from "react";
import Input from "./Components/Input";
import { calculateInvestmentResults, formatter } from "./util/investment";
import Result from "./Components/Result";
function App() {
  /*Object that stores default input values with key name */
  const inputFields={
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration:12
}
const [inputData,setInputData]=useState(inputFields);
/*this function is executes evrytime there is change made in any of the input fields */
function handleInput(e){
    /*This data is to save change made on different input fields */
    setInputData(prevInput=>{
        return {...prevInput,[e.target.name]:  +e.target.value};
        /**here the '+' symbolis to make sure vlue passed as int or float but not as string */
    }
      )
}
var isValidInput=false;
if(inputData.initialInvestment >0 && inputData.annualInvestment >0 && inputData.expectedReturn>0 && inputData.duration>0 )
{
  isValidInput=true;
  /*To execute investment.js file's function by passing object as parameter */
   var outputData= calculateInvestmentResults(inputData);
    //calculateInvestmentResults(10,20,30,40);
//console.log("inputed: ",inputData.initialInvestment);
//console.log("outputdata",outputData);
}
  return (
    <>
      <Header />
      {/*To pass handle input fuction as well as inputData object */}
      <Input onChangeInput={handleInput} dataValue={inputData} />
      {!isValidInput && <p className="center">Please Enter Values greater than Zero.</p>}
      {isValidInput && <Result dataResulted={outputData} />}
    </>
  );
}

export default App
