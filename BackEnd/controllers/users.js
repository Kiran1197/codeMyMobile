const connection=require('../common/connection');

exports.users_get_all = (req, res, next) => {
    let pageNumber=req.body.pageNumber;
    pageNumber=(pageNumber*10)-10;
    if(!pageNumber)
        pageNumber=0;
    
    let query="SELECT * from codeMyMobile.Users LIMIT "+pageNumber+",10";
    console.log(query)
    connection.query(query, async (error, rows) => {
        
        if(error)
        {
            return res.status(500).json({
                error: err,
              });
        }
        else
        {
            return res.status(200).json(rows);
        }
           
    })
}

exports.user_friends= (req, res, next) => {
    let userId=req.body.id;
    let pageNumber=req.body.pageNumber;
    pageNumber=(pageNumber*10)-10;
    if(!pageNumber)
        pageNumber=0;
    let query="Select * from Users where UserId in (select FID from Friends_mapping where UserId="+userId+") LIMIT "+pageNumber+",10";
    console.log(query)
    connection.query(query, async (error, rows) => {
        if(error)
        {
            return res.status(500).json({
                error: err,
              });
        }
        else
        {
            return res.status(200).json(rows);
        }
           
    })
}