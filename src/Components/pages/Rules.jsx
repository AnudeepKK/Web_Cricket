const Rules = () => {
    return (
        <div>
            <h1 className="lead">Rules and regulations</h1>
            <br/>
            <br/>
            <ul class="list-group">
                <li class="list-group-item list-group-item-primary list-group-item-action">
                    The choice to bat and ball will be given to the player at the begining itself. Player can select any one of the choice without any restriction.
                </li>
                <li class="list-group-item list-group-item-primary list-group-item-action">
                    The player can keep on batting until he is out or has successfully chased the target.
                </li >
                <li class="list-group-item list-group-item-primary list-group-item-action">
                    When the number that put are same the batsmen is considered as out.
                </li>
                <li class="list-group-item list-group-item-primary list-group-item-action">
                    The number from 1-6 are only allowed rest are not allowed.
                </li>
                <li class="list-group-item list-group-item-primary list-group-item-action">
                    0 is a buffer by auto. 
                </li>
                <li class="list-group-item list-group-item-primary list-group-item-action">
                    User is Player 1 and is by default the 1st to bat. 
                </li>
            </ul>
        </div>
    );
}
 
export default Rules;