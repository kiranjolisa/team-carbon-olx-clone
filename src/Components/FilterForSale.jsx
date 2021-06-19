import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useState } from 'react';

function FilterForSale(){

    const[budgetFlag, setBudgetFlag] = useState(false);
    const[typeFlag, setTypeFlag] = useState(false);
    const[bedroomsFlag, setBedroomsFlag] = useState(false);
    const[bathroomsFlag, setBathroomsFlag] = useState(false);
    const[furnishingFlag, setFurnishingFlag] = useState(false);
    const[constructionFlag, setConstructionFlag] = useState(false);
    const[listedFlag, setListedFlag] = useState(false);

    return (
        <div style={{textAlign: "left", padding: "2% 5%", boxSizing: "border-box"}}>
            <div style={{fontSize: "24px", fontWeight: "bold"}}>Houses & Apartments For Sale</div>
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

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>BUDGET</div>
                <div style={{flexGrow: "1"}}></div>
                {!budgetFlag ? <DownOutlined onClick={()=>setBudgetFlag(!budgetFlag)} /> : <UpOutlined onClick={()=>setBudgetFlag(!budgetFlag)} />}
            </div>

            {
                budgetFlag && <div>
                <div style={{marginTop: "5px", marginBottom: "5px"}}>Choose from options below</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>Below 1000000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>100000 - 200000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>200000 - 500000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>500000 - 1000000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>1000000 - 3000000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>3000000 - 5000000</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", paddingLeft: "2px", color: "#002f34", padding: "2% 5%"}}>5000000 and Above</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>TYPE</div>
                <div style={{flexGrow: "1"}}></div>
                {!typeFlag ? <DownOutlined onClick={()=>setTypeFlag(!typeFlag)} /> : <UpOutlined onClick={()=>setTypeFlag(!typeFlag)} />}
            </div>

            {
                typeFlag && <div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Houses & Villas</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Apartments</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Builder Floors</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Farm Houses</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>BEDROOMS</div>
                <div style={{flexGrow: "1"}}></div>
                {!bedroomsFlag ? <DownOutlined onClick={()=>setBedroomsFlag(!bedroomsFlag)} /> : <UpOutlined onClick={()=>setBedroomsFlag(!bedroomsFlag)} />}
            </div>

            {
                bedroomsFlag && <div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>1+ bedroom</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>2+ bedroom</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>3+ bedroom</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>4+ bedroom</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>BATHROOMS</div>
                <div style={{flexGrow: "1"}}></div>
                {!bathroomsFlag ? <DownOutlined onClick={()=>setBathroomsFlag(!bathroomsFlag)} /> : <UpOutlined onClick={()=>setBathroomsFlag(!bathroomsFlag)} />}
            </div>

            {
                bathroomsFlag && <div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>1+ bathroom</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>2+ bathroom</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>3+ bathroom</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>4+ bathroom</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>FURNISHING</div>
                <div style={{flexGrow: "1"}}></div>
                {!furnishingFlag ? <DownOutlined onClick={()=>setFurnishingFlag(!furnishingFlag)} /> : <UpOutlined onClick={()=>setFurnishingFlag(!furnishingFlag)} />}
            </div>

            {
                furnishingFlag && <div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Furnished</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Unfurnished</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Semi-Furnished</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>CONSTRUCTION STATUS</div>
                <div style={{flexGrow: "1"}}></div>
                {!constructionFlag ? <DownOutlined onClick={()=>setConstructionFlag(!constructionFlag)} /> : <UpOutlined onClick={()=>setConstructionFlag(!constructionFlag)} />}
            </div>

            {
                constructionFlag && <div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Under Construction</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Ready to Move</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>New Launch</div>
            </div>
            }
            <br />
            <hr />

            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{marginRight: "10px"}}>LISTED BY</div>
                <div style={{flexGrow: "1"}}></div>
                {!listedFlag ? <DownOutlined onClick={()=>setListedFlag(!listedFlag)} /> : <UpOutlined onClick={()=>setListedFlag(!listedFlag)} />}
            </div>

            {
                listedFlag && <div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Owner</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Dealer</div>
                <div style={{border: "1px solid black", width: "90%", marginTop: "5px", padding: "2% 5%", color: "#002f34"}}>Builder</div>
            </div>
            }
            <br />
            <hr />

        </div>
    )
}

export default FilterForSale;
