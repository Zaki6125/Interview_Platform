  export const getDifficultyBadgeClass = (difficulty) =>{
    switch(difficulty.toLowerCase())
    {
        case 'easy':
        return 'badge-success text-green';
        case 'medium':
            return "badge-warning text-yellow";
            case 'hard':
                return 'badge-error text-red';
                default:
                    return 'badge -ghost text-grey'
    }
  }
