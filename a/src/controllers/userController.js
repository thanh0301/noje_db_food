const sequelize = require('../models/index')
const initModel= require('../models/init-models')
const model= initModel(sequelize)
const { successCode, errorCode, failCode } = require('../ulti/response');




const getlike = async (req,res) =>{
    
    const data = await model.like_res.findAll({
        include:['re','user']
    })

    successCode(res,data)


}
const getres= async (req,res) =>{
    
    const data = await model.rate_res.findAll(
        {
            include:['re','user']
        }
    )

    successCode(res,data)


}
const createRes = async (req, res) => {
    const {user_id,res_id,amount,date_rate} = req.body;

    let object = {
        user_id,res_id,amount,date_rate
  }
   
    const data = await model.rate_res.create(object);


    successCode(res, data);

}


const  createOre= async (req, res) => {
    const {user_id,food_id,amount,code,arr_sub_id} = req.body;

    let object = {
        user_id,food_id,amount,code,arr_sub_id
  }
   
    const data = await model.order.create(object);


    successCode(res, data);

}

module.exports= {
    getlike,
    getres,
    createRes,
    createOre
}

//theo b hiểu bảng rate_rés làm gì ?
//CHƯA HIỂU CÂU HỔI
//lẤY BẢN USER_ID VỚI RES_ID RỒI THÊM DỮ LIỆU CỦA AMOOUNT VỚI DATE_RARE
//Rate_res lả bảng chứa thông tin user nào đã like nhà hàng nào. 1 user sẽ like đc nhiều nhà hàng, hồi nãy lỗi là do user_id = 2, 
//res_id = 3 đã có trong bảng rate_res rồi á
//À CÓ CẦN BẮT BUỘC TRUYỀN HẾT VÀO DỮ LIỆU CỦA BẢNG Rate-res không Vd là nếu chỉ truyền vào user_id=1 res_id=1 vàdate_rate không V//
////truyền vào amount đc không anh ơi
// Về lý thuyết thì bảng rate_res chỉ cẩn truyền đủ 2 thông tin là user_id và res_id, còn 2 field kia b không truyền thì
// nó sẽ để giá trị mặc định của th table plus ( theo mình nhớ là v nhé ) hoặ
// bình thường mình làm ở mssql workbench thì đều set null, b có thể config lại để nó set default value theo ý mình cũng đc.
// nhưng cơ bản nó chỉ cần 2 field kia như mình nói thôi.Cảm ơn thankl you okk