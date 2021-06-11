import styles from "./CardDetails.module.css";

function CardDetails(){
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div>{"{image}"}</div>
                <div style={{textAlign: "left"}}>
                    <div style={{fontWeight: "700", fontSize: "20px"}}>Details</div>
                    <div className={styles.spanCont}>
                        <span style={{color: "rgba(0,47,52,.64)"}}>Brand</span><span>{"{brand}"}</span><span style={{color: "rgba(0,47,52,.64)"}}>Model</span><span>{"{model}"}</span>
                        <span style={{color: "rgba(0,47,52,.64)"}}>Year</span><span>{"{year}"}</span><span style={{color: "rgba(0,47,52,.64)"}}>KM driven</span><span>{"{distance}"}</span>
                    </div>
                    <hr />
                    <div style={{fontWeight: "700", fontSize: "20px"}}>Description</div>
                    <div>{"{description}"}</div>
                </div>
            </div>
            <div className={styles.subContainer}>
                <div>price pic - pic</div>
                <div className={styles.bold}>
                    Seller Description
                    <button>Chat with seller</button>
                    <button>Make an offer</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;
