import { SearchOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { useState } from 'react';

function FilterCars(){

    const[budgetFlag, setBudgetFlag] = useState(false);
    const[yearFlag, setYearFlag] = useState(false);
    const[ownersFlag, setOwnersFlag] = useState(false);
    const[inspectionFlag, setInspectionFlag] = useState(false);
    const[KMFlag, setKMFlag] = useState(false);
    const[fuelFlag, setFuelFlag] = useState(false);
    const[transmissionFlag, setTransmissionFlag] = useState(false);

    return (
        <div style={{textAlign: "left", padding: "2% 5%", boxSizing: "border-box"}}>
            <div style={{fontSize: "24px", fontWeight: "bold"}}>Used Cars in India</div>
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
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Maruti Suzuki</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Toyota</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Mercedes-Benz</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Jaguar</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Land Rover</div>
            </div>
            <br />
            <hr />

            <div>ALL Models</div>
            <div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Swift</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Fortuner</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />GLA</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />XL5</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Defender</div>
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
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>Below 1 Lac</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>1 Lac - 2 Lac</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>2 Lac - 3 Lac</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>3 Lac - 5 Lac</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>5 Lac and Above</div>
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

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>NO. OF OWNERS</div>
                <div style={{flexGrow: "1"}}></div>
                {!ownersFlag ? <DownOutlined onClick={()=>setOwnersFlag(!ownersFlag)} /> : <UpOutlined onClick={()=>setOwnersFlag(!ownersFlag)} />}
            </div>

            {
                ownersFlag && <div>
                <div style={{marginTop: "5px", marginBottom: "5px"}}>Choose from options below</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />First</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Second</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Third</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Fourth</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />More than Four</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>INSPECTION STATUS</div>
                <div style={{flexGrow: "1"}}></div>
                {!inspectionFlag ? <DownOutlined onClick={()=>setInspectionFlag(!inspectionFlag)} /> : <UpOutlined onClick={()=>setInspectionFlag(!inspectionFlag)} />}
            </div>

            {
                inspectionFlag && <div>
                <div style={{marginTop: "5px", marginBottom: "5px"}}>Choose from below options</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Inspected Cars Only</div>
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
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Below 25000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>25000 KM - 50000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>50000 KM - 75000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>75000 KM - 100000 KM</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>100000 KM and Above</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>FUEL</div>
                <div style={{flexGrow: "1"}}></div>
                {!fuelFlag ? <DownOutlined onClick={()=>setFuelFlag(!fuelFlag)} /> : <UpOutlined onClick={()=>setFuelFlag(!fuelFlag)} />}
            </div>

            {
                fuelFlag && <div>
                <div style={{marginTop: "5px", marginBottom: "5px"}}>Choose from below options</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Petrol</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Diesel</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />LPG</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />CNG & Hybrids</div>
                <div style={{padding: "2% 5%"}}><input style={{marginRight: "5px", color: "#002f34"}} type="checkbox" />Electric</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>TRANSMISSION</div>
                <div style={{flexGrow: "1"}}></div>
                {!transmissionFlag ? <DownOutlined onClick={()=>setTransmissionFlag(!transmissionFlag)} /> : <UpOutlined onClick={()=>setTransmissionFlag(!transmissionFlag)} />}
            </div>

            {
                transmissionFlag && <div>
                <div style={{marginTop: "5px", marginBottom: "5px"}}>Choose from options below</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Automatic</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Manual</div>
            </div>
            }
            <br />
            <hr />

        </div>
    )
}

export default FilterCars;
