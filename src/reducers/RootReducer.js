
const initState={
    posts:[
        {id:1, title:'Hello World', body: 'Just typed Hello World'},
        {id:2, title:'Santosh Balaaji', body: 'Just typed Santosh Balaaji'},
        {id:3, title:'Ada poya yov', body: 'Just typed Ada poya yov'}
        
    ]

}


const rootReducer=(state=initState, action)=>{
    return state;
}

export default rootReducer;