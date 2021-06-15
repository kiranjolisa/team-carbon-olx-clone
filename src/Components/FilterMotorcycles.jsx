import { SearchOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { useState } from 'react';

function FilterMotorcycles(){

    const[budgetFlag, setBudgetFlag] = useState(false);
    const[yearFlag, setYearFlag] = useState(false);
    const[KMFlag, setKMFlag] = useState(false);

    return (
        <div style={{textAlign: "left", padding: "2% 5%", boxSizing: "border-box"}}>
            <div style={{fontSize: "24px", fontWeight: "bold"}}>Used Bikes in India</div>
            <div>
                <select style={{border: "none"}}>
                    <option value="0" style={{fontSize: "16px", fontWeight: "700"}}>CATEGORIES</option>
                    <option value="1">Cars</option>
                    <option value="2">Motor Cycles</option>
                    <option value="3">Mobile Phones</option>
                    <option value="4">For Sale: Houses & Apartments</option>
                    <option value="5">Scooters</option>
                    <option value="6">Commercial and Other Vehicles</option>
                    <option value="4">For Rent: Houses & Apartments</option>
                </select>
            </div>
            <br />
            <hr />
            <div>
                <select style={{border: "none"}}>
                    <option value="0" style={{fontSize: "16px", fontWeight: "700"}}>LOCATIONS</option>
                    <option value="1">India</option>
                    <option value="2">Maharashtra</option>
                    <option value="3">Tamil Nadu</option>
                    <option value="4">Uttar Pradesh</option>
                    <option value="5">Kerala</option>
                    <option value="6">Delhi</option>
                    <option value="4">Punjab</option>
                </select>
            </div>
            <br />
            <hr />

            <div style={{color: "rgba(0,47,52,.64)", marginBottom: "3%"}}>Filters</div>

            <div>
                <div style={{display: "flex", alignItems: "center", border: "1px solid black", width: "90%", padding: "5%"}}>
                    <input style={{border: "none"}} type="text" placeholder="Search brand or model" />
                    <div style={{flexGrow: "1"}}></div>
                    <SearchOutlined />
                </div>
            </div><br />

            <div>ALL BRANDS</div>
            <div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Honda</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Bajaj</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Hero Honda</div>
            </div>
            <br />
            <hr />

            <div>ALL Models</div>
            <div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />CB</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Pulsar</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Splender</div>
            </div>
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>BUDGET</div>
                <div style={{flexGrow: "1"}}></div>
                {!budgetFlag ? <DownOutlined onClick={()=>setBudgetFlag(!budgetFlag)} /> : <UpOutlined onClick={()=>setBudgetFlag(!budgetFlag)} />}
            </div>

            {
                budgetFlag && <div>
                <div style={{marginTop: "5px", marginBottom: "5px"}}>Choose from options below</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>Below 10000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>10000 - 20000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>20000 - 40000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>40000 - 70000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>70000 and Above</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>KM DRIVEN</div>
                <div style={{flexGrow: "1"}}></div>
                {!KMFlag ? <DownOutlined onClick={()=>setKMFlag(!KMFlag)} /> : <UpOutlined onClick={()=>setKMFlag(!KMFlag)} />}
            </div>

            {
                KMFlag && <div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Below 10000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>10000 KM - 20000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>20000 KM - 30000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>30000 KM - 40000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>40000 KM - 50000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>50000 KM and Above</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>YEAR</div>
                <div style={{flexGrow: "1"}}></div>
                {!yearFlag ? <DownOutlined onClick={()=>setYearFlag(!yearFlag)} /> : <UpOutlined onClick={()=>setYearFlag(!yearFlag)} />}
            </div>

            {
                yearFlag && <div>
                <div style={{marginTop: "5px", marginBottom: "5px"}}>Choose from options below</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Under 3 Years</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Under 5 Years</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Under 7 Years</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>7 Years and Above</div>
            </div>
            }
            <br />
            <hr />

        </div>
    )
}

export default FilterMotorcycles;
