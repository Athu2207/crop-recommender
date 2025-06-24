import React, { useState } from 'react'

function Fertilizerguide() {
    const [croptosearch,setcroptosearch]=useState("")
    const fertinfo=[
    {
    "Wheat": {
        "fertilizers": [
        {
            "name": "Urea",
            "stage": "Vegetative",
            "dosage": "100 kg/acre",
            "method": "Broadcasting"
        },
        {
            "name": "DAP",
            "stage": "Sowing",
            "dosage": "50 kg/acre",
            "method": "Basal application"
        },
        {
            "name": "MOP",
            "stage": "Tillering",
            "dosage": "25 kg/acre",
            "method": "Broadcasting"
        }
        ],
        "pesticides": [
        {
            "name": "Chlorpyrifos",
            "used_for": "Termites",
            "dosage": "2.5 ml/litre",
            "method": "Soil drench"
        },
        {
            "name": "Imidacloprid",
            "used_for": "Aphids",
            "dosage": "0.5 ml/litre",
            "method": "Foliar spray"
        }
        ]
    },
    "Rice": {
        "fertilizers": [
        {
            "name": "Urea",
            "stage": "Tillering",
            "dosage": "50 kg/acre",
            "method": "Broadcasting"
        },
        {
            "name": "SSP",
            "stage": "Transplanting",
            "dosage": "60 kg/acre",
            "method": "Basal application"
        },
        {
            "name": "Zinc Sulphate",
            "stage": "Early Growth",
            "dosage": "10 kg/acre",
            "method": "Soil application"
        }
        ],
        "pesticides": [
        {
            "name": "Buprofezin",
            "used_for": "Brown Plant Hopper",
            "dosage": "2 ml/litre",
            "method": "Foliar spray"
        },
        {
            "name": "Cartap Hydrochloride",
            "used_for": "Stem Borer",
            "dosage": "1 g/litre",
            "method": "Foliar spray"
        }
        ]
    },
    "Maize": {
        "fertilizers": [
        {
            "name": "Urea",
            "stage": "Vegetative",
            "dosage": "90 kg/acre",
            "method": "Broadcasting"
        },
        {
            "name": "DAP",
            "stage": "Sowing",
            "dosage": "40 kg/acre",
            "method": "Basal application"
        }
        ],
        "pesticides": [
        {
            "name": "Spinosad",
            "used_for": "Fall Armyworm",
            "dosage": "1 ml/litre",
            "method": "Foliar spray"
        }
        ]
  }
}
    ]
  return (
    <div className="ferti-form">
        <div className="heading-page-ferti">
            <h2>🌱 खताचा वापर व काळजी </h2>
            <h2>Fertilizer Usage & Care</h2>
        </div>
        <div className="input-section-crop">
            <input
            type='text'
            placeholder='Crop...'
            onChange={(e)=>setcroptosearch(e)}/>
        </div>
    </div>
  )
}

export default Fertilizerguide