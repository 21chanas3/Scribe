'use client'

const ConclusionTab = () => {
    return (
                <div className="card bg-base-100 shadow-xl mt-5">
                    <div className="card-body">
                        <label className="form-control w-full max-w">
                            <div className="label">
                                <span className="label-text">Prompt</span>
                            </div>
                            <textarea name="prompt" className="textarea textarea-bordered h-24" placeholder='Type here'></textarea>
                        </label>
                        <label className="form-control w-full max-w">
                            <div className="label">
                                <span className="label-text">Text</span>
                            </div>
                            <textarea name="text" className="textarea textarea-bordered h-24" placeholder='Type here'></textarea>
                        </label>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Generate</button>
                        </div>
                    </div>
                </div>
    )
}

export default ConclusionTab