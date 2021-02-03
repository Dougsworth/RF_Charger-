const express = require("express");
const router = express.Router();
const Data = require("../models/data");

// Getting All
router.get("/", async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

// Getting One
router.get('/:id',getData, (req, res) => {
  res.json(res.data)

})


//Creating One
router.post("/", async (req, res) => {
  let current = req.body.current;
  let voltage = req.body.voltage;
  //let power = current * voltage;
  let power = req.body.power;
  console.log(res.body);
  console.log(req.body);

  const newdata = new Data({
    current: current,
    voltage: voltage,
    power: power,
   // name: req.body.name
  });

  try {
    await newdata.save();
    console.log(newdata);
    res.json(newdata);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete('/:id', getData, async (req, res) => {
  try{
    await res.data.remove()
    res.json({message: 'data deleted'})
  }catch (err){
  res.status(500).json({message: err.message})

  }

});

async function getData(req, res, next) {
  let data
  try{
    data = await Data.findById(req.params.id)
    if (data == null){
        return res.status(404).json({message:'Cannot find data'})

    }
  }catch(err){
    return res.status(500).json({message: err.message })

  }
  res.data = data
  next()
}
// Updating One
router.patch('/:id', getData, async(req, res) => {
  if (req.body.name != null){
    res.data.name = req.body.name
  }
  if (req.body.CurrentReading != null){
    res.data.CurrentReading = req.body.CurrentReading
  }
  if (req.body.VoltageReading != null){
    res.data.VoltageReading = req.body.VoltageReading
  }
  res.data.Power = req.body.VoltageReading * req.body.CurrentReading
  try{
    const updateddata = await res.data.save()
    res.json(updateddata)
  }catch(err){
   res.status(400).json({message: err.message})
  }

})
module.exports = router;