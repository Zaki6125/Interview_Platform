import axoisInstance from '../lib/axios'

export const sessionApi = {
    createSession: async (data)=>{
        const response = await axoisInstance.post('/session', data);
        return response.data
    },
    getActiveSession: async ()=>{
        const response = await axoisInstance.get('/session/active', );
        return response.data
    },
    getMyRecentSession : async ()=>{
        const response = await axoisInstance.get('/session/my-recent')
         return response.data   
    },
    getSessionById : async (id)=>{
        const response = await axoisInstance.get(`/session/${id}`)
        return response.data
    },
    joinSession : async (id)=>{
        const response = await axoisInstance.post(`/session/${id}/join`);
        return response.data ;
    },
    endSession: async (id)=> {
        const response =await axoisInstance.post(`/session/${id}/end`);
        return response.data
    },
    getStreamToken: async ()=>{
        const response = await axoisInstance.get(`/chat/token`)
        return response.data
    }

}