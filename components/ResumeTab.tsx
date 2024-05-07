'use client'
import React, { useState } from "react";

const ResumeTab = () => {
    const [cardList, setCardList] = useState([{ title: "", start_date: "", end_date: "", company: "", "description": "" }])

    const handleCardAdd = () => {
        setCardList([...cardList, { title: "", start_date: "", end_date: "", company: "", "description": "" }])
    }

    const handleCardRemove = (index: number) => {
        const newCardList = [...cardList]
        newCardList.splice(index, 1)
        setCardList(newCardList)
    }

    const handleCardChange = (e, index) => {
        console.log(cardList)
        const { name, value } = e.target
        const list = [...cardList]
        list[index][name] = value
        setCardList(list)
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <div className="flex">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full px-2">
                            <div className="label">
                                <span className="label-text">Middle Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex">
                        <label className="form-control w-full pr-2">
                            <div className="label">
                                <span className="label-text">University Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Graduation Year</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex">
                        <label className="form-control w-full pr-2">
                            <div className="label">
                                <span className="label-text">Major</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Minor</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="pt-2">
                <button className="btn btn-primary w-full" onClick={handleCardAdd}>+ Add Experience</button>
            </div>
            {cardList.map((singleCard, index) => (
                <div className="card bg-base-100 shadow-xl mt-5" key={index}>
                    <div className="card-body">
                        <div className="flex">
                            <label className="form-control w-full basis-1/2">
                                <div className="label">
                                    <span className="label-text">Company</span>
                                </div>
                                <input type="text" name="company" value={singleCard.company} placeholder="Type here" className="input input-bordered w-full" onChange={(e) => handleCardChange(e, index)}/>
                            </label>
                            <label className="form-control w-full px-2 basis-1/4">
                                <div className="label">
                                    <span className="label-text">Start Date</span>
                                </div>
                                <input type="text" name="start_date" value={singleCard.start_date} placeholder="Type here" className="input input-bordered w-full" onChange={(e) => handleCardChange(e, index)}/>
                            </label>
                            <label className="form-control w-full basis-1/4">
                                <div className="label">
                                    <span className="label-text">End Date</span>
                                </div>
                                <input type="text" name="end_date" value={singleCard.end_date} placeholder="Type here" className="input input-bordered w-full" onChange={(e) => handleCardChange(e, index)}/>
                            </label>
                        </div>
                        <label className="form-control w-full basis-1/4">
                                <div className="label">
                                    <span className="label-text">Position</span>
                                </div>
                                <input type="text" name="title" value={singleCard.title} placeholder="Type here" className="input input-bordered w-full" onChange={(e) => handleCardChange(e, index)}/>
                        </label>
                        <label className="form-control w-full max-w">
                            <div className="label">
                                <span className="label-text">Text</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered h-24" placeholder='Type here' value={singleCard.description} onChange={(e) => handleCardChange(e, index)}></textarea>
                        </label>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Save</button>
                            {cardList.length > 1 ? <button className="btn btn-error" onClick={() => handleCardRemove(index)}>Delete</button> : ""}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default ResumeTab