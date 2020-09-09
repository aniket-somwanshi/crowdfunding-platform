const stripe = require("stripe")("sk_test_YFN5WClz2bGCVdcFi7K3QMlh00RFo5jpbA")
const { v4: uuid } = require("uuid")

// exports.makepayment = async (req, res) => {
//     const { title, amount, image, camp_id, funds_id } = req.body
//     const session = await stripe.checkout.sessions.create({
//         shipping_address_collection: {
//             allowed_countries: ['IN'],
//         },
//         payment_method_types: ["card"],
//         line_items: [
//             {
//                 price_data: {
//                     currency: "inr",
//                     product_data: {
//                         name: title,

//                     },
//                     unit_amount: amount * 100,
//                 },
//                 quantity: 1,
//             },
//         ],
//         mode: "payment",
//         success_url: "http://localhost:4200/success/" + funds_id,
//         cancel_url: "http://localhost:4200/pledge/" + camp_id,
//     });

//     res.json({ id: session.id, status: session.payment_status, shipping_address: session.shipping_address_collection });
// }
exports.makepayment = (req, res) => {
    const { token, amount } = req.body
    console.log("Amount", amount)

    const idempotencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: amount * 100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased the product`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip,
                }
            }
        }, { idempotencyKey })
            .then(result => res.send({ message: 'successfull' }))
            .catch(err => console.log(err))
    })
}