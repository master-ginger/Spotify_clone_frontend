export default function Artist(props    ){
    return(
        <div>
            <div className="p-1 mx-[10px] leading-5">
            <img src={props.image} height={150} width={150} alt="artist" className="rounded-full mb-1"></img>
            <div className="font-semibold text-md ml-">{props.title}</div>
            <div className="text-zinc-400 text-sm ">{props.artist}</div>
        </div>
        </div>
    )
}