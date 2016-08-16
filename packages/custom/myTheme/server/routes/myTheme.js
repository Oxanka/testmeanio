(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Product = mongoose.model('items');
    var Address = mongoose.model('address');
    var SaveItems = mongoose.model('saved_items');



    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(MyTheme, app, auth, database) {

        // server routes ===========================================================
        app.post('/api/insertproduct/', function (req, res) {
            var Products1 = new Product(
                {
                    name: "Sumsung",
                    price: 1572
                });
            var Products2 = new Product(
                {
                    name: "Apple",
                    price: 17895
                });

            var Products3 = new Product(
                {
                    name: "Nokia",
                    price: 3546
                });

            Product.find(function (err, info) {
                if (err) {
                    console.log(err);
                }
                console.log("done!");
                if (info.length == 0) {
                    var objarr = [Products1, Products2, Products3];
                    Product.create(objarr, function (err, info) {
                        if (err) {
                            console.log(err);
                        }
                        console.log("done!");
                        //res.send("ok");
                    });
                   /* Products1.save(function (err, info) {
                        if (err) {
                            console.log(err);
                        }
                        console.log("done!");
                        Products2.save(function (err, info) {
                            if (err) {
                                console.log(err);
                            }
                            console.log("done!");
                            Products3.save(function (err, info) {
                                if (err) {
                                    console.log(err);
                                }
                                console.log("done!");
                                //res.send("ok");
                            });

                        });
                    });*/
                }
                res.send("ok");
            });
        });

        app.get('/api/items/', function (req, res) {
            Product.find(function (err, products) {
                if (err)
                    res.send(err);
                res.send(products);
            });
        });

        app.post('/api/address/', function (req, res) {

            var Addr = new Address({
                shop_city: req.body.shop_city,
                shop_street: req.body.shop_street,
                shop_house_number: req.body.shop_house_number,
                client_city: req.body.client_city,
                client_street: req.body.client_street,
                client_house_number: req.body.client_house_number,
                price: req.body.price
            });

            Addr.save(function (err, info) {
                if (err) {
                    console.log(err);
                }
                console.log("done!");
                res.send(info);


            });

        });

        app.post('/api/saveitems/', function (req, res) {
            var Items = new SaveItems({
                address_id: req.body.address_id,
                item_id: req.body.item_id
            });

            Items.save(function (err, info) {
                if (err) {
                    console.log(err);
                }
                console.log("done!");
                res.send(info);
            });
        });

        app.get('/api/getorders/', function (req, res) {
            var svd_items_cl = [];
            var orders = [];
            SaveItems.find({}, function (err, svd_itms) {
                if (err) {
                    res.send(err);
                }
                else {
                    svd_items_cl = svd_itms;
                    var list_prod_ids = [];
                    for (var i = 0; i < svd_itms.length; i++) {
                        (function (i) {
                            svd_itms[i].fullAddr = {};
                            Address.findOne({
                                _id: svd_itms[i].address_id
                            }, function (err, fullAddr) {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    svd_itms[i].fullAddr = fullAddr;
                                    ;

                                }

                            });
                            //console.log("svd_itms[i]");
                            //console.log(svd_itms[i]);
                            list_prod_ids = svd_itms[i].item_id.split(',');
                            console.log("list_prod_ids");
                            console.log(list_prod_ids);
                            for (var j = 0; j < list_prod_ids.length; j++) {
                                //console.log(list_prod_ids[j])
                                svd_itms[i].fullProd = [];
                                (function (j) {
                                    Product.findOne({
                                        _id: list_prod_ids[j]
                                    }, function (err, fullProd) {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {
                                            console.log("fullProd");
                                            console.log(fullProd);
                                            svd_itms[i].fullProd[j] = fullProd;
                                            if (j == list_prod_ids.length - 1 && i == svd_itms.length - 1) {
                                                console.log("svd_itms[1].fullProd");
                                                console.log(svd_itms[svd_itms.length - 1]);
                                                var obj = {};
                                                obj.fullProd = svd_itms[svd_itms.length - 1].fullProd;
                                                obj.fullAddr = svd_itms[svd_itms.length - 1].fullAddr;
                                                res.send(obj);
                                            }

                                        }

                                    });
                                })(j);
                            }
                        })(i);
                    }
                }

            });
        });

    };
})();
