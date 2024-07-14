
export default function Recently(props){
    return(
        <div className="p-1 mx-[2px] leading-4">
            <img src={props.image} height={150} width={150} alt="recent" className="rounded-lg mb-1"></img>
            <div className="font-bold text-md">{props.title}</div>
            <div className="text-zinc-400 text-sm ">{props.artist}</div>
        </div>
    )
}