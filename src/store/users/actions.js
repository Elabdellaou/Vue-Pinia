export default{
    async setUserInfo(id,newInfos){
        let user=await this.users.find(user => user.id==id)
        user = newInfos
    }
}