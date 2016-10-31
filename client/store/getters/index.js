const getters = {
    doubleCount:state=>{
        return state.count *2
    },
    threeCount:state=>{
        return state.count *3
    },
    getData:state=>{
        return state.data
    }
}

export default getters