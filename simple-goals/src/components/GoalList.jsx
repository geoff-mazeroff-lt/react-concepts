import GoalItem from "./GoalItem.jsx";

function GoalList() {
    return (
        <ul>
            <li><GoalItem
                title={"First Goal"}
                description={"Set your first goal and start your journey!"} />
            </li>
            <li><GoalItem
                title={"Second Goal"}
                description={"This is the second goal of the project."} />
            </li>
            <li><GoalItem
                title={"Third Goal"}
                description={"The last goal."} />
            </li>
        </ul>
    )
}
export default GoalList;