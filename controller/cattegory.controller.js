import  Category from "../models/cattegory.js"

export const deleteCattegory = (request,response,next)=>{
    Category.deleteOne({_id: request.params.name})
    .then(result=>{
       console.log(result); 
       return response.status(200).json({message: "Category Deleted.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const getCategoryById = (request,response,next)=>{
    let id = request.params.name;
    Category.findById(id)
    .then(result=>{
        return response.status(200).json({category: result});
    }).catch(err=>{
        return response.status(500).json({message: "Internal Server Error"});
    });
}
export const getAllCattegory = (request,response,next)=>{
    Category.find()
    .then(result=>{
        return response.status(200).json({categories: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const createCattegory = (request,response,next)=>{
    Category.insertMany(request.body)
    .then(()=>{
        return response.status(201).json({message: "All category saved.."});
    }).catch(()=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}