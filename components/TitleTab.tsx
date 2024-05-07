'use client'


const TitleTab = () => {
  return (
    <div className="card bg-base-100 shadow-xl mt-5">
      <div className="card-body">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Recipient Name</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Recipient Job Title</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Company Name</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Company Address</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder='Type here'></textarea>
        </label>
        <br />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  )
}

export default TitleTab