"use strict"


const Member = require('../model/memberModel');
const db  = require('../config/db').getRepository(Member);
class MemberDB{

    static async createMember(member){
        return await db.save(member)
    }

    static async getAll(){
        return await db.find()
    }

    static async getMemberById(id){
        return await db.findOneBy({id:id});
    }
    
    static async getMemberByEmail(email){
        return await db.findOneBy({email:email});
    }

    static async getMemberByName(name){
        return await db.findOneBy({name:name});
    }

    static async getMemberByPhone(phone){
        return await db.findOneBy({phone:phone});
    }

    static async updateMember(member){
        return await db.save(member);
    }

}


module.exports = MemberDB;