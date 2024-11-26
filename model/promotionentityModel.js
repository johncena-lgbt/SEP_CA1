var db = require('./databaseConfig.js');
var Promotion = require('./furniture.js');
var promotionDB = {
    getAllDisplayPromotions: function() {
        return new Promise( (resolve, reject) => {
            var conn = db.getConnection();
            conn.connect(function (err) {
                if (err) {
                    console.log(err);
                    conn.end();
                    return reject(err);
                }
                else {
                    var sql = 'SELECT pro.id, pro.imageurl, i.sku FROM promotionentity pro,' 
                    + 'itementity i WHERE pro.item_id = i.id;';
                    conn.query(sql, function (err, result) {
                        if (err) {
                            conn.end();
                            return reject(err);
                        } else {
                            var promoList = [];
                            for(var i = 0; i < result.length; i++) {
                                var promotion = new Promotion();
                                promotion.id = result[i].id;
                                promotion.img = result[i].imageurl;
                                promotion.sku = result[i].sku;
                                
                                promoList.push(promotion);
                            }
                            conn.end();
                            return resolve(promoList);
                        }
                    })
                }
            })  
        })
    }
}

module.exports = promotionDB;