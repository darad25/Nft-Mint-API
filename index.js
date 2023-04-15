var express = require('express');
var app = express();

//nft data, i put them in arraya spo they can be easily gotten via their token ID
const tokenNames = ['eye1', 'eye2', 'eye3', 'eye4', 'eye5']
const imageshash = ['QmVVQfgggha37KoCmRquDTdKzL1h5TKibAkKt7bsG1zykV', 'QmWLSXTKSi4qdRtduGgzQrXFkRm54KBdddpoH4MqP3Jmyr', 
'Qmc4suPtD9ZuSjtUZNerBvfBqmU4a7xnToiy7VPUo4K4tk', 'QmaqULX1e3B982khsjcnyDV9qPVLdmCYonhGLEViUmkQXD', 'QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5']
const attributes = ['Crown, star', 'Helmet, shoe', 'Vans, sneakers', 'nike, original', 'yeezy, adidas'] // EMPTY CAUSE ITS QUITE A LOT TO THINK OF DIFFERENT ATTRIBUTES FOR DIFFERENT TOKENS, IF YOU WILL DO THIS, JUST GROUP THE ATTRIBUTES INTO DIFFERENT OBJECTS OT ARRAYS FOR EACH TOKEN INSIDE THE ATTRIBUTE ARRAY 


//Getting the uploaded file via hash code.
app.get(`/api/tokens/:tokenId`, function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send( 
        {
            name: tokenNames[req.params.tokenId],
            description: "This lootbox contains some OpenSea Creatures! It can also be traded!",
            image: `ipfs.io/ipfs/${imageshash[req.params.tokenId]}`, //you can do this or `https://ipfs.io/ipfs/QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa/${req.params.tokenId}.png` since QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa is the folfer hash of all the images. 
            // external_url: 'https://example.com/?token_id=%s' % token_id,
            attributes: attributes[req.params.tokenId],
        }
       ); 
}) 

module.exports = app;
// app.listen(3000, () => console.log('App listening on port 3000!')) 