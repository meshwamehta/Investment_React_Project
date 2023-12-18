
import { formatter } from "../util/investment";
export default function Result({dataResulted}){
const initialInvestment=(dataResulted[0].valueEndOfYear)-(dataResulted[0].interest)-(dataResulted[0].annualInvestment);
  
    
    return(
        <table id="result">
            <thead>
            <tr >
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {/*dataResulted is return array of investmet.js calcualtions */}
                {(dataResulted &&
                    dataResulted.map((item,i)=>{
                       const totalInterest=item.valueEndOfYear-item.annualInvestment*item.year-initialInvestment; 
                       const totalAmountInvested=item.valueEndOfYear-totalInterest;
                      return(  
                        <tr key={i}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                      );
                        //console.log("value: ",value);
                    })

                )}
            
            </tbody>
                {/* <tr>
                    <td>{annualData[i].year}</td>
                    <td>{annualData[i].interest}</td>
                    <td>{annualData[i].valueEndOfYear}</td>
                    <td>{annualData[i].annualInvestment}</td>
                </tr>
             */}

        </table>
    );
}