import React, { useState } from 'react'
import "./Fertilizerguide.css"
function Fertilizerguide() {
    const [nitrovalue,setNitrovalue]=useState("")
    const [pottasvalue,setPottasvalue]=useState("")
    const [phospvalue,setPhospvalue]=useState("")
    const [soilph,setSoilph]=useState(0)
    const[ec,setEc]=useState(0)
    const [resph,setResph]=useState(0)
    const [showres,setResultsshow]=useState(false)
    const basiccrops=[
        
        {
            "crop": "Barley",
            "ideal_pH_range": "7.0 - 8.5",
            "notes": "Highly tolerant to saline and alkaline soils; ideal for dryland farming"
        },
        {
            "crop": "Mustard",
            "ideal_pH_range": "7.0 - 8.0",
            "notes": "Performs well in slightly alkaline soils common in North India"
        },
        {
            "crop": "Guar (Cluster Bean)",
            "ideal_pH_range": "7.0 - 8.5",
            "notes": "Grows well in alkaline and sandy soils; common in Rajasthan"
        },
        {
            "crop": "Sorghum (Jowar)",
            "ideal_pH_range": "6.5 - 8.0",
            "notes": "Tolerant to both drought and alkaline conditions"
        },
        {
            "crop": "Pearl Millet (Bajra)",
            "ideal_pH_range": "6.5 - 8.5",
            "notes": "Adapted to saline-alkaline and dry soils"
        },
        {
            "crop": "Cotton",
            "ideal_pH_range": "6.5 - 8.0",
            "notes": "Tolerates mildly alkaline soils; prefers well-drained black soil"
        },
        {
            "crop": "Sugar Beet",
            "ideal_pH_range": "7.0 - 8.5",
            "notes": "Grows well in alkaline soils with proper irrigation"
        },
        {
            "crop": "Sunflower",
            "ideal_pH_range": "6.5 - 8.0",
            "notes": "Moderately tolerant to soil alkalinity"
        },
        {
            "crop": "Date Palm",
            "ideal_pH_range": "7.0 - 8.5",
            "notes": "Suited to saline and alkaline soil; thrives in desert regions"
        }
        
    ]

    const acidiccrops=[
        {
            "crop": "Tea",
            "ideal_pH_range": "4.5 - 5.5",
            "notes": "Grows best in high rainfall hilly areas like Assam and Darjeeling"
        },
        {
            "crop": "Coffee",
            "ideal_pH_range": "5.0 - 6.0",
            "notes": "Prefers well-drained acidic soils in Karnataka, Kerala"
        },
        {
            "crop": "Pineapple",
            "ideal_pH_range": "4.5 - 5.5",
            "notes": "Thrives in acidic soils, commonly grown in Northeast India"
        },
        {
            "crop": "Potato",
            "ideal_pH_range": "5.0 - 6.0",
            "notes": "Sensitive to alkaline soils, best in cooler regions"
        },
        {
            "crop": "Sweet Potato",
            "ideal_pH_range": "5.5 - 6.5",
            "notes": "Tolerates slightly acidic soil well"
        },
        {
            "crop": "Ginger",
            "ideal_pH_range": "5.5 - 6.5",
            "notes": "Prefers acidic, well-drained loamy soil"
        },
        {
            "crop": "Turmeric",
            "ideal_pH_range": "5.5 - 6.5",
            "notes": "Grows well in slightly acidic soil, widely grown in India"
        },
        {
            "crop": "Arecanut",
            "ideal_pH_range": "5.0 - 6.5",
            "notes": "Common in coastal acidic regions like Kerala, Karnataka"
        },
        {
            "crop": "Chili",
            "ideal_pH_range": "5.5 - 6.5",
            "notes": "Performs well in slightly acidic conditions"
        }
    ]
    const onChangeNitro=(eve)=>{
        setNitrovalue(eve.target.value)
    }
    const onChangePhosp=(eve)=>{
        setPhospvalue(eve.target.value)
    }
    const onChangePott=(eve)=>{
        setPottasvalue(eve.target.value)
    }
  return (
    <div className="ferti-form">
        <form onSubmit={(e)=>{
            e.preventDefault();
            setResultsshow(true)
        }}>
        <div className="heading-page-ferti">
            <h2>माती तपासा, उत्पादन वाढवा</h2>
            <h2>सेंद्रिय माती म्हणजे भरपूर पीकाची हमी!</h2>
            <h2>Healthy soil means healthy harvest!</h2>
        </div>
        <div className="input-section-crop">
            <label>Soil pH</label>
            <input
            type='number'
            required
            onChange={(e)=>{
                setSoilph(e.target.value)
                setResph(e.target.value)}
            }
            placeholder='Enter'/>

            <label>EC (Salt level)</label>
            <input
            type='number'
            required
            onChange={(e)=>setEc(e.target.value)}
            placeholder='Enter'/>

            <label htmlFor="Nitlevel">Nitrogen</label>
            <select id="Nitlevel" onChange={onChangeNitro} required> 
                <option value="select">-- Select --</option>
                <option value="low">Low (less than 280 kg/ha)</option>
                <option value="sufficient" >Sufficient (280 – 560 kg/ha)</option>
            </select>

            <label htmlFor="Phosplevel">Phosphorus</label>
            <select id="Phosplevel" onChange={onChangePhosp} required> 
                <option value="select">-- Select --</option>
                <option value="low">Low (less than 10 kg/ha)</option>
                <option value="sufficient">Sufficient (10 – 25 kg/ha)</option>
            </select>
            
            <label htmlFor="Potlevel">Potassium</label>
            <select id="Potlevel" onChange={onChangePott} required> 
                <option value="select">-- Select --</option>
                <option value="low">Low (less than 110 kg/ha)</option>
                <option value="sufficient">Sufficient (110 – 280 kg/ha)</option>
            </select>
            <button className="get-results-soiltest" type='submit'>
                Get results
            </button>
        
        </div>
        </form>

        {showres &&(
            <div className="showresults-for-soiltest">
                <h3>Your soil status:</h3>
                <p>pH level: {soilph}</p>
                <p>EC level: {ec}</p>
                <p>Nitrogen : {nitrovalue}</p>
                <p>Phosphorus level: {phospvalue}</p>
                <p>Potassium level: {pottasvalue}</p>
                <h1>Detailed Soil pH Analysis</h1>
                {resph < 6 ?(
                    <div className="showacidic-results">
                        <p>Your soil seems to be acidic with a pH value of {soilph}</p>
                        <p>🔴 For Acidic Soil (pH less than 6.0):
                            Your soil is acidic. To improve its quality, apply agricultural lime (calcium carbonate). 
                            This will help neutralize acidity and create a better environment for crops.
                            Mix lime into the soil during land preparation and retest the pH after a few weeks. 
                            Use compost or well-rotted organic manure regularly to maintain balance.</p>
                            <h4>Till then what can you do? Don't worry here are some crops perfect for you:</h4>
                            {acidiccrops.map((cr)=>(
                                <ul>
                                    <li>
                                        Crop: {cr.crop}<br></br>
                                        Ideal pH range: {cr.ideal_pH_range}<br></br>
                                        Notes: {cr.notes}<br></br>
                                    </li>
                                </ul>
                            ))}
                    </div>
                ):soilph > 7.5 ?(
                    <div className="showbasic-results">
                        <p>Your soil seems to be alkaline with a pH value of {soilph}</p>
                        <p>🔴 For Alkaline Soil (pH greater than 7.5):
                                Your soil is alkaline. To reduce alkalinity, add gypsum (calcium sulfate) to the soil. 
                                Avoid using alkaline water for irrigation. 
                                Use organic matter like green manure, compost, or biofertilizers to naturally improve soil structure and pH. 
                                Growing salt-tolerant crops like barley or sunflower is also advisable.</p>
                        <h4>Till then what can you do? Don't worry here are some crops perfect for you:</h4>
                            {basiccrops.map((crbasic,index)=>(
                                <ul>
                                    <li key="index">
                                        Crop:{crbasic.crop}<br></br>
                                        Ideal pH range:{crbasic.ideal_pH_range}<br></br>
                                        Notes:{crbasic.notes}<br></br>
                                    </li>
                                </ul>
                            ))}
                    </div>
                ):(
                    <div className="showideal-results">
                        <p>Your soil pH is ideal at {soilph}</p>
                        🟢 Your soil pH is in the ideal range, which is great for most crops. 
                        To maintain this balance, regularly add organic compost or farmyard manure, use fertilizers in recommended doses, and avoid overuse of chemicals. 
                        Good irrigation practices and crop rotation will also help preserve soil health in the long run.<p> </p>
                    </div>
                )}
                <h1>Detailed EC (Salt level) Analysis</h1>
                {ec < 0.8 ? (
                    <div className='showidealec-results'>
                    <p>🟢 Ideal EC level. You are fit to grow any crop!</p>
                    <p>	✅ All crops: Rice, Wheat, Maize, Pulses, Vegetables, Fruits, Sugarcane, Cotton</p>
                    </div>
                ) : ec >= 0.8 && ec <= 2.0 ? (
                    <div className='showslightec-levels'>
                    <p>🟡 Slightly saline but safe. Most crops will grow well. Monitor water quality.</p>
                    <p>🌱 Most crops: Rice, Wheat, Maize, Groundnut, Potato, Cabbage, Onion, Tomato</p>
                    </div>
                ) : ec > 2.0 && ec <= 4.0 ? (
                    <div className='showmoderateec-results'>
                    <p>🟠 Moderately saline soil. Avoid salt-sensitive crops like tomato and citrus. Prefer salt-tolerant crops like cotton, barley, sorghum.</p>
                    <p>	⚠️ Salt-tolerant crops: Cotton, Barley, Bajra (Pearl Millet), Sorghum (Jowar), Mustard</p>
                    </div>
                ) : (
                    <div className="showhighec-results">
                        <p>🔴 Highly saline soil. Not suitable for most crops. Only salt-tolerant crops like guar, date palm, and barley are recommended. Improve drainage and consider gypsum treatment.</p>
                        <p>🚫 Only highly salt-tolerant crops: Guar (Cluster Bean), Barley, Date Palm, Kharif Bajra, Mesquite</p>
                    </div>
                )}
                <h1>Detailed Nitrogen, Phosphorus, Potassium level Analysis</h1>
                {nitrovalue === "low" && phospvalue === "low" && pottasvalue === "low" ? (
                    <div className="chem-values-res">
                        <p>⚠️ Millets (Bajra, Jowar), Moong, Black Gram, Cluster Bean (Guar)</p>
                        <h5>Fertilizer advice:</h5>
                        <p>Add urea + SSP + MOP (all 3 nutrients needed)</p>
                    </div>
                    ) : nitrovalue === "low" && phospvalue === "low" && pottasvalue === "sufficient" ? (
                    <div className="chem-values-res">
                        <p>⚠️ Moong, Horse Gram, Green Gram</p>
                        <h5>Fertilizer advice:</h5>
                        <p>Add urea + SSP</p>
                    </div>
                    ) : nitrovalue === "low" && phospvalue === "sufficient" && pottasvalue === "low" ? (
                    <div className="chem-values-res">
                        <p>⚠️ Pulses (Toor, Urad), Sorghum</p>
                        <h5>Fertilizer advice:</h5>
                        <p>Add urea + MOP</p>
                    </div>
                    ) : nitrovalue === "low" && phospvalue === "sufficient" && pottasvalue === "sufficient" ? (
                    <div className="chem-values-res">
                        <p>🌾 Rice, Wheat, Maize</p>
                        <h5>Fertilizer advice:</h5>
                        <p>Add urea only</p>
                    </div>
                    ) : nitrovalue === "sufficient" && phospvalue === "low" && pottasvalue === "low" ? (
                    <div className="chem-values-res">
                        <p>🌾 Cotton, Sorghum, Chickpea</p>
                        <h5>Fertilizer advice:</h5>
                        <p>Add SSP + MOP</p>
                    </div>
                    ) : nitrovalue === "sufficient" && phospvalue === "low" && pottasvalue === "sufficient" ? (
                    <div className="chem-values-res">
                        <p>🌿 Mustard, Cabbage, Onion</p>
                        <h5>Fertilizer advice:</h5>
                        <p>Add SSP only</p>
                    </div>
                    ) : nitrovalue === "sufficient" && phospvalue === "sufficient" && pottasvalue === "low" ? (
                    <div className="chem-values-res">
                        <p>🌿 Potato, Groundnut, Sunflower</p>
                        <h5>Fertilizer advice:</h5>
                        <p>Add MOP only</p>
                    </div>
                    ) : nitrovalue === "sufficient" && phospvalue === "sufficient" && pottasvalue === "sufficient" ? (
                    <div className="chem-values-res">
                        <p>✅ All major crops: Rice, Wheat, Maize, Sugarcane, Vegetables, Pulses, Fruits</p>
                        <h5>Fertilizer advice:</h5>
                        <p>No urgent need. Maintain current practices and monitor yearly.</p>
                    </div>
                    ) : null}
            </div>
        )}
    </div>
  )
}

export default Fertilizerguide