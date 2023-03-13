import millisToTimeString from "../millisToTimeString";

const LeaderboardListItem = (props) => {
    const { score, index } = props;

    return (

        <li className="flex items-start gap-4 border-b border-slate-400 odd:bg-slate-300/50 p-1 last:border-none">
            <div className="grid grid-cols-leaderboardMb sm:grid-cols-leaderboard gap-2 w-full" >
                <div className="font-semibold">{index + 1}.</div>
                <div className="text-ellipsis">{score.name}</div>
                <div className="hidden sm:flex justify-start w-full">{millisToTimeString(score.time)}</div>
                <div className="flex justify-end">{`${score.percentage}%`}</div>
            </div>
        </li >

    )

}

export default LeaderboardListItem;