const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);

            //enregistrer toutes les données saisies par l’utilisateur sur le stockage local
            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            //enregistrer toutes les données saisies par l’utilisateur sur le stockage local
            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        default:
            return state;
    } 
}

export default contextReducer;