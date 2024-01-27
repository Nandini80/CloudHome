//getAllchats
//create , edit ,delete
//getAll messages with a particular person
const prisma = require('../config/prismaConfig');

exports.createMessage = async(req , res)=>{
    try{

        const {content , recieverId} = req.body;
        const senderId = req.user.id;

        if(!senderId || !recieverId || !content){
            return res.status(400).json({
                success: false,
                message: "Missing fields",
            });
        }

        const msg = await prisma.message.create({
            data: {
                sender: {
                    connect: { id: senderId },
                  },
                  receiver: {
                    connect: { id: recieverId },
                  },
                content,
            }
        });

        return res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while sending the message",
            error: error.message,
        });
    }
}

exports.fetchMessages = async(req , res)=>{
    try{

        const {receiverId} = req.body;
        const senderId = req.user.id;

        if(!senderId || !receiverId){
            return res.status(400).json({
                success: false,
                message: "Sender or reciever id is missing",
            });
        }

        const messages = await prisma.message.findMany({
            where:{
                OR:[
                    {senderId: senderId , receiverId: receiverId},
                    {senderId: receiverId , receiverId: senderId},
                ]
            },
            include:{
                sender: true,
                receiver: true,
            },
            orderBy:{
                createdAt: "asc",
            }
        });

        if(messages == []){
            return res.status(404).json({
                success: false,
                message: "No messages found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Messages fetched successfully for a chat",
            data: messages,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while sending the message",
            error: error.message,
        });
    }
}

exports.getAllChats = async(req, res)=>{
    try{

        allChats = await prisma.message.findMany({
            distinct: ['senderId' , 'receiverId'],
            select:{
                receiverId: true,
                receiver: true
            },
        });

        if(allChats == []){
            return res.status(404).json({
                success: false,
                message: "No chats found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "All chats fetched successfully",
            data: allChats,
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while get all chats",
            error: error.message,
        });
    }
}

exports.deleteMessage = async(req, res)=>{
    try{

        const {messageId} = req.body;

        if(!messageId){
            return res.status(400).json({
                success: false,
                message: "messageId is missing",
            });
        }

        await prisma.message.delete({
            where:{
                id: messageId,
            }
        });

        return res.status(200).json({
            success: true , 
            message: "Message deleted successfully",
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting message",
            error: error.message,
        });
    }
}

exports.editMessage = async(req, res)=>{
    try{

        const {messageId , content} = req.body;

        if(!messageId){
            return res.status(400).json({
                success: false,
                message: "Message id is missing",
            });
        }

        if(!content){
            return res.status(400).json({
                success: false,
                message: "content is missing",
            });
        }

        const updatedDetails = await prisma.message.update({
            where:{
                id: messageId,
            },
            data:{
                content,
            }
        });

        if(!updatedDetails){
            return res.status(404).json({
                success: false,
                message: `message not found for id ${messageId}`,
            });
        }

        return res.status(200).json({
            success: true , 
            message: "Message updated successfully",
        });

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while editing the message",
            error: error.message
        })
    }
}