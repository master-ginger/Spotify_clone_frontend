

export default function Song1(props){
    return(
        <div className="flex justify-start pb-[10px] ">
            <div><img src={props.image} height={50} width={50} className="rounded-[5px]" alt="artists"/></div>
            <div className="ml-[10px]">
                <div className="text-[15px]">{props.name}</div>
                <div className="text-zinc-600 text-[14px]">{props.details}</div>
            </div>
        </div>
    )
}