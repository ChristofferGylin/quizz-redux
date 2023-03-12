


const LeaderboardListItem = (props) => {
    const { score, index } = props;

    return (

        <li className="flex items-start gap-4 border-b border-slate-400 odd:bg-slate-300/50 p-1 last:border-none">
            <div className="flex items-start gap-4 w-full" >
                <div className="font-semibold">{index + 1}.</div><div className="w-full">{score.name}</div><div>{`${score.percentage}%`}</div>
            </div>
        </li >

    )

}

export default LeaderboardListItem;