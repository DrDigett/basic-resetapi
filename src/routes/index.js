const { Router } = require('express');
const router = Router();

router.get('/test', (req,res)=>{
    const data = {
        "name": "Diego",
        "web": "diego.com"
    }
    res.json(data);
});

module.exports = router;