'use client'


const Tabs = () => {
    return (
        <div className="flex grow flex-col w-full">
            <div className="flex w-full pb-2
            ">
                <div className="px-1 basis-1/2">
                    <button className="btn btn-primary w-full">Knit Letter</button>
                </div>
                <div className="px-1 basis-1/2">
                    <button className="btn btn-primary w-full">Download Letter</button>
                </div>
            </div>
            <object className="h-full" data="/functionalSample.pdf" type="application/pdf"></object>
        </div>
    )
}



export default Tabs