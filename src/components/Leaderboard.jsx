import getUserBest from "../getUserBest";
import { useQuizzes } from "../redux/quizzes";
import LeaderboardListItem from "./LeaderboardListItem";

const Leaderboard = () => {

    const quizzes = useQuizzes();
    const highscores = quizzes.users.map((user) => {

        return getUserBest(user);
    });

    highscores.sort((a, b) => {

        if (a.percentage > b.percentage) {

            return -1;
        }

        if (a.percentage < b.percentage) {
            return 1;
        }

        return 0;

    })

    if (highscores.length > 20) highscores.length = 20;

    return (
        <div className="flex justify-center items-center h-full">
            <div className="grid grid-rows-6 border border-slate-400 bg-slate-200 rounded-lg p-2 md:p-4 lg:p-8 h-5/6 w-5/6 md:h-4/5 md:w-4/5 lg:h-3/4 lg:w-3/4">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold ml-4 border-b border-slate-400 py-2 w-full h-fit self-start">Leaderboard</h2>
                <ul className="row-span-4 flex flex-col overflow-y-auto px-4 py-0 text-lg text-slate-700 w-full h-fit">
                    {highscores.map((score, index) => {

                        return <LeaderboardListItem key={`highscoreListItem${index}`} score={score} index={index} />

                    })}
                </ul>

            </div>
        </div>
    )
}

export default Leaderboard;