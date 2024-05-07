'use client'

import React, { useState } from "react";

const BodyTab = () => {
    const [cardList, setCardList] = useState([{prompt:"", text:""}])

    const handleCardAdd = () => {
        setCardList([...cardList, {prompt:"", text:""}])
    }

    const handleCardRemove = (index: number) => {
        const newCardList = [...cardList]
        newCardList.splice(index, 1)
        setCardList(newCardList)
    }

    const handleCardChange = (e, index) => {
        const {name, value} = e.target
        const list = [...cardList]
        list[index][name] = value
        setCardList(list)
    }

    return (
        <div className="p-5">
            <button className="btn btn-primary w-full" onClick={handleCardAdd}>+ Add Paragraph</button>
            {cardList.map((singleCard, index) => (
                <div className="card bg-base-100 shadow-xl mt-5" key={index}>
                    <div className="card-body">
                        <h2 className="card-title">Paragraph {index + 1}</h2>
                        <label className="form-control w-full max-w">
                            <div className="label">
                                <span className="label-text">Prompt</span>
                            </div>
                            <textarea name="prompt" className="textarea textarea-bordered h-24" placeholder='Type here' value={singleCard.prompt} onChange={(e) => handleCardChange(e, index)}></textarea>
                        </label>
                        <label className="form-control w-full max-w">
                            <div className="label">
                                <span className="label-text">Text</span>
                            </div>
                            <textarea name="text" className="textarea textarea-bordered h-24" placeholder='Type here' value={singleCard.text} onChange={(e) => handleCardChange(e, index)}></textarea>
                        </label>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Generate</button>
                            {cardList.length > 1 ?  <button className="btn btn-error" onClick={() => handleCardRemove(index)}>Delete</button> : ""}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BodyTab